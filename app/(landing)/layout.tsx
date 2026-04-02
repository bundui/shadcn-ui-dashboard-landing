import React from "react";
import { Navbar } from "@/components/layout/landing/navbar";
import { FooterSection } from "@/components/layout/landing/sections/footer";
import GoogleAnalyticsInit from "@/lib/ga";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <FooterSection />
      {process.env.NODE_ENV === "production" ? <GoogleAnalyticsInit /> : null}
    </>
  );
}
