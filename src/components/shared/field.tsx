import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type FieldProps = {
  label: string;
  htmlFor: string;
  children: ReactNode;
  hint?: string;
  error?: string;
  required?: boolean;
  className?: string;
};

export function Field({
  label,
  htmlFor,
  children,
  hint,
  error,
  required = false,
  className,
}: FieldProps) {
  const descriptionId = hint || error ? `${htmlFor}-description` : undefined;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={htmlFor}
        className="font-body text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-foreground"
      >
        {label}
        {required ? (
          <span aria-hidden="true" className="text-accent">
            {" *"}
          </span>
        ) : null}
      </label>
      {children}
      {descriptionId ? (
        <p
          id={descriptionId}
          className={cn(
            "font-body text-sm leading-relaxed",
            error ? "text-red-600" : "text-muted",
          )}
        >
          {error ?? hint}
        </p>
      ) : null}
    </div>
  );
}