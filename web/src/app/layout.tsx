import type { Metadata } from "next";
import { Bowlby_One_SC, DM_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { AppProvider } from "@/providers/app-provider";
import "./globals.css";

const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bowlby-sc",
  weight: "400",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-mono",
  weight: "500",
});

export const metadata: Metadata = {
  title: "Suburbia Skateboard",
  description: "The skateboard brand she tells you not to worry about",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(bowlby.variable, dmMono.variable, "scroll-smooth antialiased")}
    >
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
