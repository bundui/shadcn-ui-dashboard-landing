import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "50+", label: "Components" },
  { value: "20+", label: "Page Templates" },
  { value: "1k+", label: "Happy Customers" },
  { value: "99%", label: "Satisfaction Rate" }
];

export const HeroSection = () => {
  return (
    <section className="relative z-0 -mt-20 w-full px-4">
      <div className="relative mx-auto grid place-items-center border-x pt-28 md:pt-40 lg:max-w-(--breakpoint-xl)">
        <div className="space-y-10 pb-20 text-center lg:max-w-(--breakpoint-md)">
          <div className="space-y-4">
            <h1 className="font-heading text-4xl md:text-5xl lg:leading-14">
              Multipurpose Tailwind CSS Admin Dashboard Template
            </h1>
            <p className="text-muted-foreground mx-auto text-xl text-balance">
              Admin dashboard template built with <b>Shadcn UI</b>, <b>Tailwind CSS</b> and{" "}
              <b>Next.js</b> (React) to quickly start your project. Contains Typescript files.
            </p>
          </div>

          <div className="space-x-3">
            <Button size="lg" asChild>
              <Link href="/ecommerce">Live Preview</Link>
            </Button>
            <Button size="lg" asChild variant="secondary">
              <Link href="/pricing">Get Shadcn Dashboard</Link>
            </Button>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-2 gap-8 rounded-xl border p-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <figure className="relative aspect-video w-full border-y lg:-mb-32">
          <img
            className="relative mx-auto flex w-full items-center mask-b-from-50% mask-b-to-90% object-cover leading-none dark:hidden"
            src="/hero.png"
            alt="Shadcn Dashboard dashboard landing page"
          />
        </figure>
      </div>
    </section>
  );
};
