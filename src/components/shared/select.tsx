import type { Ref, SelectHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  invalid?: boolean;
  ref?: Ref<HTMLSelectElement>;
};

export function Select({ className, invalid, ref, children, ...rest }: SelectProps) {
  return (
    <select
      ref={ref}
      className={cn(
        "h-13 w-full border border-line bg-transparent px-4 font-body text-base text-foreground transition-colors focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-accent disabled:opacity-50",
        invalid ? "border-red-400" : "border-line",
        className,
      )}
      aria-invalid={invalid || undefined}
      {...rest}
    >
      {children}
    </select>
  );
}