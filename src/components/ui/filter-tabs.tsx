"use client";

import { cn } from "@/lib/utils";
import type { CaseStatus } from "@/lib/types";

const filters: { label: string; value: CaseStatus | "ALL" }[] = [
  { label: "ALL", value: "ALL" },
  { label: "PENDING", value: "PENDING" },
  { label: "UNDER REVIEW", value: "UNDER_REVIEW" },
  { label: "EXECUTED", value: "EXECUTED" },
  { label: "DISMISSED", value: "DISMISSED" },
];

interface FilterTabsProps {
  active: CaseStatus | "ALL";
  onChange: (value: CaseStatus | "ALL") => void;
}

export function FilterTabs({ active, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value)}
          className={cn(
            "px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider border transition-all",
            active === filter.value
              ? "border-red-600 bg-red-900/20 text-white"
              : "border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
