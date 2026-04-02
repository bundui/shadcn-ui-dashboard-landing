import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl border-x px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading mb-4 text-3xl lg:text-4xl">
          Ready to Build Your Next Project?
        </h2>
        <p className="text-muted-foreground mb-8 text-xl">
          Join thousands of developers who trust Shadcn Dashboard for their dashboard needs.
        </p>
        <div className="flex flex-col justify-center gap-2 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/pricing">Get Shadcn Dashboard</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
