import type { ReactNode } from "react";

import type { Availability, ProjectStatus } from "@/types/content";
import { cn } from "@/lib/utils";

type BadgeTone = "neutral" | "available" | "reserved" | "accent";

const toneStyles: Record<BadgeTone, string> = {
  neutral: "text-muted border border-line bg-transparent",
  available: "text-[#3f6212] border border-[#c9d9a8] bg-[#f4f8ea]",
  reserved: "text-[#92400e] border border-[#ecdab6] bg-[#faf4e8]",
  accent: "text-accent border border-current/30 bg-transparent",
};

type BadgeProps = {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
};

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 font-body text-[0.6875rem] font-semibold uppercase tracking-[0.12em]",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

const projectStatusLabel: Record<ProjectStatus, string> = {
  completed: "Completed",
  "under-construction": "Under construction",
  "coming-soon": "Coming soon",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return <Badge tone="neutral">{projectStatusLabel[status]}</Badge>;
}

const availabilityTone: Record<Availability, BadgeTone> = {
  available: "available",
  reserved: "reserved",
  sold: "neutral",
};

const availabilityLabel: Record<Availability, string> = {
  available: "Available",
  reserved: "Reserved",
  sold: "Sold",
};

export function AvailabilityBadge({ availability }: { availability: Availability }) {
  return (
    <Badge tone={availabilityTone[availability]}>{availabilityLabel[availability]}</Badge>
  );
}