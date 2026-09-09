import { cn } from "@/lib/utils";

type DividerProps = {
  className?: string;
};

export function Divider({ className }: DividerProps) {
  return <hr className={cn("border-0 border-t border-line", className)} />;
}