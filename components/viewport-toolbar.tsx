"use client";

import { MonitorIcon, SmartphoneIcon, TabletIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  type ViewportDevice,
  useComponentDevicePreviewStore,
} from "@/store/component-device-preview";

const devices: { key: ViewportDevice; icon: React.ReactNode; label: string }[] = [
  { key: "mobile", icon: <SmartphoneIcon className="size-4" />, label: "Mobile" },
  { key: "tablet", icon: <TabletIcon className="size-4" />, label: "Tablet" },
  { key: "desktop", icon: <MonitorIcon className="size-4" />, label: "Desktop" },
];

export default function ViewportToolbar({ componentId }: { componentId: string }) {
  const getDevice = useComponentDevicePreviewStore((s) => s.getDevice);
  const setDevice = useComponentDevicePreviewStore((s) => s.setDevice);
  const current = getDevice(componentId);

  return (
    <div className="flex items-center gap-1">
      {devices.map(({ key, icon, label }) => (
        <Tooltip key={key}>
          <TooltipTrigger asChild>
            <Button
              variant={current === key ? "default" : "outline"}
              size="icon"
              className="size-9"
              onClick={() => setDevice(componentId, key)}
            >
              {icon}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
