import React from "react";

import { Cal_Sans as FontHeading, Plus_Jakarta_Sans as FontSans, Geist } from "next/font/google";
import GoogleAnalyticsInit from "@/lib/ga";

import "./globals.css";
import { Navbar } from "@/components/layout/landing/navbar";
import { FooterSection } from "@/components/layout/landing/sections/footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const fontHeading = FontHeading({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", fontHeading.variable, "font-sans", geist.variable)}
      suppressHydrationWarning>
      <body suppressHydrationWarning>
        <TooltipProvider>
        <Navbar />
        {children}
        <FooterSection />
        </TooltipProvider>
        {process.env.NODE_ENV === "production" ? <GoogleAnalyticsInit /> : null}
      </body>
    </html>
  );
}
