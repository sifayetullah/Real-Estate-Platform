import type { InputHTMLAttributes, Ref } from "react";

import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
  ref?: Ref<HTMLInputElement>;
};

export function Input({ className, invalid, ref, ...rest }: InputProps) {
  return (
    <input
      ref={ref}
      className={cn(
        "h-13 w-full border border-line bg-transparent px-4 font-body text-base text-foreground placeholder:text-faint transition-colors focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-accent disabled:opacity-50",
        invalid ? "border-red-400" : "border-line",
        className,
      )}
      aria-invalid={invalid || undefined}
      {...rest}
    />
  );
}