"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import type { PropertyFilterOptionsShape } from "@/data/properties";
import { cn } from "@/lib/utils";

const FILTER_KEYS = [
  "project",
  "type",
  "bedrooms",
  "availability",
  "location",
] as const;

const selectClasses =
  "h-12 w-full border border-line bg-transparent px-3.5 font-body text-sm text-foreground transition-colors focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-accent";

type PropertyFiltersProps = {
  options: PropertyFilterOptionsShape;
};

export function PropertyFilters({ options }: PropertyFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function updateFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    const query = params.toString();
    router.push(query ? `/properties?${query}` : "/properties");
  }

  function current(key: string) {
    return searchParams.get(key) ?? "";
  }

  const hasActiveFilters = FILTER_KEYS.some((key) => searchParams.has(key));

  return (
    <form
      aria-label="Filter properties"
      className="flex flex-col gap-3"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid grid-cols-2 gap-3 lg:flex lg:flex-wrap lg:items-end">
        <label className="flex flex-col gap-2">
          <span className="font-body text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-faint">
            Project
          </span>
          <select
            className={selectClasses}
            value={current("project")}
            onChange={(event) => updateFilter("project", event.target.value)}
          >
            <option value="">All projects</option>
            {options.projects.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-body text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-faint">
            Type
          </span>
          <select
            className={selectClasses}
            value={current("type")}
            onChange={(event) => updateFilter("type", event.target.value)}
          >
            <option value="">All types</option>
            {options.types.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-body text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-faint">
            Bedrooms
          </span>
          <select
            className={selectClasses}
            value={current("bedrooms")}
            onChange={(event) => updateFilter("bedrooms", event.target.value)}
          >
            <option value="">Any</option>
            {options.bedrooms.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-body text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-faint">
            Availability
          </span>
          <select
            className={selectClasses}
            value={current("availability")}
            onChange={(event) => updateFilter("availability", event.target.value)}
          >
            <option value="">Any</option>
            {options.availability.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-body text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-faint">
            Location
          </span>
          <select
            className={selectClasses}
            value={current("location")}
            onChange={(event) => updateFilter("location", event.target.value)}
          >
            <option value="">All areas</option>
            {options.locations.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <Link
          href="/properties"
          aria-disabled={!hasActiveFilters}
          className={cn(
            "inline-flex h-11 items-center font-body text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
            hasActiveFilters
              ? "text-foreground"
              : "pointer-events-none text-muted/50",
          )}
        >
          Clear all
        </Link>
      </div>
    </form>
  );
}