"use client";

import { useEffect } from "react";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  retry: () => void;
};

export default function GlobalError({ error, retry }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div style={{ padding: "4rem 2rem", fontFamily: "sans-serif" }}>
          <h1>Something went wrong</h1>
          <button type="button" onClick={retry}>
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
