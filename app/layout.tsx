import React from "react";

import { Cal_Sans as FontHeading, Plus_Jakarta_Sans as FontSans } from "next/font/google";
import GoogleAnalyticsInit from "@/lib/ga";

import "./globals.css";
import { Navbar } from "@/components/layout/landing/navbar";
import { FooterSection } from "@/components/layout/landing/sections/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

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
      className={`${fontSans.variable} ${fontHeading.variable} antialiased`}
      suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <FooterSection />
        {process.env.NODE_ENV === "production" ? <GoogleAnalyticsInit /> : null}
      </body>
    </html>
  );
}
