import Link from "next/link";

export function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-foreground focus:px-4 focus:py-2 focus:font-body focus:text-sm focus:text-background focus:outline-2 focus:outline-offset-2 focus:outline-accent"
    >
      Skip to main content
    </Link>
  );
}