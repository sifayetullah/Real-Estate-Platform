"use client";

import { useId, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type AccordionProps = {
  items: { title: string; content: ReactNode }[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item) => (
        <AccordionPanel key={item.title} title={item.title}>
          {item.content}
        </AccordionPanel>
      ))}
    </div>
  );
}

function AccordionPanel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonId = useId();

  return (
    <div>
      <h3 className="font-body">
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((prev) => !prev)}
          className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left font-body text-base font-semibold text-foreground hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span>{title}</span>
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center border border-line text-lg leading-none text-muted transition-transform motion-safe:duration-200"
            style={open ? { transform: "rotate(45deg)" } : undefined}
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className={cn(
          "pb-5 font-body text-base leading-relaxed text-muted",
          open && "-mt-1 block",
        )}
      >
        {children}
      </div>
    </div>
  );
}
