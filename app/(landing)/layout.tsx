import React from "react";
import { Navbar } from "@/components/layout/landing/navbar";
import { FooterSection } from "@/components/layout/landing/sections/footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import GoogleAnalyticsInit from "@/lib/ga";

export default function LandingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <Navbar />
      {children}
      <FooterSection />
      {process.env.NODE_ENV === "production" ? <GoogleAnalyticsInit /> : null}
    </TooltipProvider>
  );
}
