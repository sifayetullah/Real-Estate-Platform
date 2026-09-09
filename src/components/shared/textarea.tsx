import type { Ref, TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
  ref?: Ref<HTMLTextAreaElement>;
};

export function Textarea({ className, invalid, ref, ...rest }: TextareaProps) {
  return (
    <textarea
      ref={ref}
      className={cn(
        "min-h-32 w-full border border-line bg-transparent px-4 py-3.5 font-body text-base text-foreground placeholder:text-faint transition-colors focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-accent disabled:opacity-50",
        invalid ? "border-red-400" : "border-line",
        className,
      )}
      aria-invalid={invalid || undefined}
      {...rest}
    />
  );
}