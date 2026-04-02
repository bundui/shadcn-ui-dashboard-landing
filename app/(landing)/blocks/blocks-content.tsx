"use client";

import { categories } from "./categories";
import { Badge } from "@/components/ui/badge";
import { blocksCount } from "@/lib/content-count";
import BlockListItem from "@/components/block-list-item";

export default function BlocksContent() {
  return (
    <section>
      <div className="relative container space-y-8 border-x py-6 lg:space-y-14 lg:px-10 lg:py-10">
        <header className="space-y-3 text-balance lg:max-w-4xl">
          <h1 className="font-heading text-3xl lg:text-4xl">
            {blocksCount.rounded}+ Free & Premium Blocks for Shadcn UI
          </h1>
          <p className="text-muted-foreground leading-relaxed text-balance">
            Explore our carefully crafted collection of {blocksCount.total} shadcn block sets.
            Built with Tailwind CSS, shadcn/ui, and React. Copy and paste the code instantly or
            download it via the CLI.
          </p>
        </header>

        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <Badge
              key={cat.href}
              variant="outline"
              className="rounded-full px-3 py-1 text-sm font-normal"
            >
              {cat.sidebarTitle}
              <span className="ml-1.5 text-muted-foreground text-xs">
                {cat.components.length}
              </span>
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {categories.map((cat) => (
            <BlockListItem
              key={cat.href}
              href={cat.href}
              title={cat.sidebarTitle}
              longTitle={cat.title}
              isNew={(cat as any).isNew ?? false}
              countText={
                cat.components.length > 1
                  ? `${cat.components.length} blocks`
                  : `${cat.components.length} block`
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
