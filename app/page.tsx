import { Metadata } from "next";
import { HeroSection } from "@/components/layout/landing/sections/hero";
import Testimonials from "@/app/components/testimonials";
import Features from "@/app/components/features";
import CTA from "@/app/components/cta";

export const metadata: Metadata = {
  title: `The Ultimate Shadcn UI Admin Dashboard Template`,
  description:
    "Admin dashboard template built with Shadcn UI, Tailwind CSS and Next.js (React) to quickly start your project. Contains Typescript files.",
  openGraph: {
    images: [
      {
        url: "/og-image.png"
      }
    ]
  }
};

export default function Page() {
  return (
    <main className="divide-y">
      <HeroSection />
      <Features />
      <Testimonials />
      <CTA />
    </main>
  );
}
