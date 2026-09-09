import { PageHero } from "@/components/shared/page-hero";

export function AboutHero() {
  return (
    <PageHero
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      eyebrow="About Aurora Estates"
      title="Built deliberately, and to be lived in for decades."
      lede="Aurora Estates is a residential developer with an in-house design team. We take each building from first sketch to final fitting ourselves — favouring clear plans, honest materials and buildings that make few demands and give much in return."
    />
  );
}