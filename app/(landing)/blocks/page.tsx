import { Metadata } from "next";
import { Suspense } from "react";
import BlocksContent from "./blocks-content";
import { generateMeta } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "Shadcn Blocks",
    description:
      "Browse free & premium Shadcn UI Blocks & Sections. Copy and paste instantly or install via the shadcn CLI.",
    canonical: "/blocks",
  });
}

export default function Page() {
  return (
    <Suspense>
      <BlocksContent />
    </Suspense>
  );
}
