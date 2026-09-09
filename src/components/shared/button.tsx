import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse" | "inverse-outline";
type ButtonSize = "sm" | "md" | "lg";

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-body font-semibold leading-none transition-colors motion-safe:duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-background hover:bg-accent active:bg-accent-hover",
  secondary:
    "border border-foreground/25 bg-transparent text-foreground hover:border-accent hover:bg-accent-soft hover:text-accent-hover",
  ghost: "text-foreground hover:text-accent",
  inverse:
    "bg-background text-foreground hover:bg-accent-soft hover:text-accent-hover",
  "inverse-outline":
    "border border-inverse-fg/50 text-inverse-fg hover:border-inverse-fg hover:bg-inverse-fg/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-5 text-[0.8125rem] tracking-wide",
  md: "h-12 px-6 text-sm tracking-wide",
  lg: "h-14 px-8 text-[0.9375rem] tracking-wide",
};

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    variant = "primary",
    size = "md",
    href,
    ...rest
  } = props;

  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}