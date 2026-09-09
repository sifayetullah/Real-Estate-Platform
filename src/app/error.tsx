"use client";

import { useEffect } from "react";

import { Button } from "@/components/shared/button";
import { Container } from "@/components/shared/container";

type ErrorBoundaryProps = {
  error: Error & { digest?: string };
  retry: () => void;
};

export default function Error({ error, retry }: ErrorBoundaryProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="py-24 md:py-36">
      <Container className="flex flex-col items-start gap-8">
        <p className="eyebrow">Error</p>
        <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.015em] md:text-7xl">
          Something went wrong
        </h1>
        <p className="max-w-prose font-body text-base leading-relaxed text-muted md:text-lg">
          An unexpected error occurred. Please try again.
        </p>
        <div className="mt-2">
          <Button onClick={retry} variant="secondary">
            Try again
          </Button>
        </div>
      </Container>
    </section>
  );
}