import { Container } from "@/components/shared/container";

export default function Loading() {
  return (
    <Container className="flex flex-col gap-8 py-16">
      <div className="h-8 w-52 bg-subtle" />
      <div className="h-[420px] w-full bg-subtle" />
      <div className="h-4 w-full max-w-2xl bg-subtle" />
      <div className="h-4 w-full max-w-lg bg-subtle" />
    </Container>
  );
}