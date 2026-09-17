"use client";

import { Suspense, useEffect, useRef } from "react";
import { CameraControls, Environment, Preload, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { publicAssets } from "@/assets";
import { Skateboard } from "@/components/skateboard";
import {
  useCustomizerControls,
  wheelOptions,
  deckOptions,
  truckOptions,
  boltOptions,
} from "./context";

const DEFAULT_WHEEL_TEXTURE = publicAssets.wheel.wheelYellow;
const DEFAULT_DECK_TEXTURE = publicAssets.deck.deckYellowBlack;
const DEFAULT_TRUCK_COLOR = "#6F6E6A";
const DEFAULT_BOLT_COLOR = "#6F6E6A";
const ENVIRONMENT_COLOR = "#3B3A3A";

// Preload all textures for instant switching
const allWheelTextures = wheelOptions.map((w) => w.url);
const allDeckTextures = deckOptions.map((d) => d.url);

export function Preview() {
  const cameraControls = useRef<CameraControls>(null);
  const floorRef = useRef<THREE.Mesh>(null);

  const { config } = useCustomizerControls();

  const wheelTextureURL =
    wheelOptions.find((w) => w.name === config.wheel)?.url ?? DEFAULT_WHEEL_TEXTURE;
  const deckTextureURL =
    deckOptions.find((d) => d.name === config.deck)?.url ?? DEFAULT_DECK_TEXTURE;

  const truckColor =
    truckOptions.find((t) => t.name === config.truck)?.color ?? DEFAULT_TRUCK_COLOR;
  const boltColor =
    boltOptions.find((b) => b.name === config.bolt)?.color ?? DEFAULT_BOLT_COLOR;

  function setCameraControls(target: THREE.Vector3, pos: THREE.Vector3) {
    if (!cameraControls.current) return;
    cameraControls.current.setTarget(target.x, target.y, target.z, true);
    cameraControls.current.setPosition(pos.x, pos.y, pos.z, true);
  }

  // Change camera angle when updating controls: Deck, Wheels, Trucks, Bolts
  useEffect(() => {
    setCameraControls(new THREE.Vector3(0, 0.3, 0), new THREE.Vector3(1.5, 0.8, 0));
  }, [config.deck]);

  useEffect(() => {
    setCameraControls(
      new THREE.Vector3(-0.08, 0.55, 0.65),
      new THREE.Vector3(0.09, 1, 0.9)
    );
  }, [config.wheel]);

  useEffect(() => {
    setCameraControls(
      new THREE.Vector3(-0.12, 0.3, 0.6),
      new THREE.Vector3(0.1, 0.25, 1.2)
    );
  }, [config.truck]);

  useEffect(() => {
    setCameraControls(
      new THREE.Vector3(-0.25, 0.3, 0.6),
      new THREE.Vector3(-0.5, 0.35, 1)
    );
  }, [config.bolt]);

  function onCameraControlStart() {
    if (
      !cameraControls.current ||
      !floorRef.current ||
      cameraControls.current.colliderMeshes.length > 0
    )
      return;

    cameraControls.current.colliderMeshes = [floorRef.current];
  }

  return (
    <Canvas camera={{ position: [2.5, 1, 0], fov: 50 }} shadows>
      <Suspense fallback={null}>
        <Environment files={publicAssets.hdr.warehouse512} environmentIntensity={0.6} />
        <directionalLight
          castShadow
          lookAt={[0, 0, 0]}
          position={[1, 1, 1]}
          intensity={1.6}
        />
        <fog attach="fog" args={[ENVIRONMENT_COLOR, 3, 10]} />
        <color attach="background" args={[ENVIRONMENT_COLOR]} />
        <StageFloor />
        <mesh rotation={[-Math.PI / 2, 0, 0]} ref={floorRef}>
          <planeGeometry args={[6, 6]} />
          <meshBasicMaterial visible={false} />
        </mesh>

        {/*
          Wrap the specific component that loads the texture
          in its own Suspense boundary, rather than relying on the global canvas suspense.
          This allows the rest of the scene to remain visible while the texture loads.
          In this case, deck and wheel textures update frequently,
          so we need to wrap Skateboard in its own Suspense boundary.
        */}
        <Suspense fallback={null}>
          <Skateboard
            wheelTextureURLs={[wheelTextureURL]}
            wheelTextureURL={wheelTextureURL}
            deckTextureURLs={[deckTextureURL]}
            deckTextureURL={deckTextureURL}
            truckColor={truckColor}
            boltColor={boltColor}
            pose="side"
          />
        </Suspense>

        <CameraControls
          ref={cameraControls}
          minDistance={0.2}
          maxDistance={4}
          onStart={onCameraControlStart}
        />

        <Preload all />
        <TexturePreloader textures={[...allWheelTextures, ...allDeckTextures]} />
      </Suspense>
    </Canvas>
  );
}

// Component to preload all textures
function TexturePreloader({ textures }: { textures: string[] }) {
  useTexture(textures);
  return null;
}

function StageFloor() {
  /* eslint-disable react-hooks/immutability */
  const normalMap = useTexture(publicAssets.concreteNormal);
  normalMap.wrapS = THREE.RepeatWrapping;
  normalMap.wrapT = THREE.RepeatWrapping;
  normalMap.repeat.set(30, 30);
  normalMap.anisotropy = 8;

  const material = new THREE.MeshStandardMaterial({
    roughness: 0.75,
    color: ENVIRONMENT_COLOR,
    normalMap: normalMap,
  });

  return (
    <mesh
      castShadow
      receiveShadow
      position={[0, -0.005, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      material={material}
    >
      <circleGeometry args={[20, 32]} />
    </mesh>
  );
}
