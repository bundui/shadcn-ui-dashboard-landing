import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type BlockListItemProps = {
  href: string;
  title: string;
  longTitle?: string;
  countText: string;
  isNew?: boolean;
};

export default function BlockListItem({
  href,
  title,
  longTitle,
  countText,
  isNew,
}: BlockListItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col gap-3 rounded-lg border bg-card p-0 transition-colors hover:border-primary/50 hover:shadow-sm overflow-hidden"
      )}
    >
      <div className="bg-muted/50 aspect-video w-full overflow-hidden flex items-center justify-center border-b">
        <span className="text-muted-foreground text-sm font-medium group-hover:text-foreground transition-colors text-center px-4">
          {longTitle ?? title}
        </span>
      </div>
      <div className="flex items-center justify-between px-3 pb-3">
        <div className="flex flex-col gap-0.5">
          <span className="font-medium text-sm leading-tight">{title}</span>
          <span className="text-muted-foreground text-xs">{countText}</span>
        </div>
        {isNew && (
          <Badge variant="outline" className="text-[10px] tracking-widest uppercase border-green-300 bg-green-50 text-green-600 dark:border-green-800 dark:bg-green-950 dark:text-green-400">
            New
          </Badge>
        )}
      </div>
    </Link>
  );
}
