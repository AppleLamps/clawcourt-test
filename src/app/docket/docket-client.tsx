"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Case, CaseStatus } from "@/lib/types";
import { StatusBadge } from "@/components/ui/status-badge";
import { CaseCard } from "@/components/ui/case-card";
import { SearchInput } from "@/components/ui/search-input";
import { FilterTabs } from "@/components/ui/filter-tabs";

interface DocketClientProps {
  initialCases: Case[];
}

export function DocketClient({ initialCases }: DocketClientProps) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<CaseStatus | "ALL">("ALL");

  const filteredCases = useMemo(() => {
    return initialCases.filter((c) => {
      if (activeFilter !== "ALL" && c.status !== activeFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          c.title.toLowerCase().includes(q) ||
          c.petitioner.toLowerCase().includes(q) ||
          c.respondent.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [initialCases, search, activeFilter]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-5xl sm:text-6xl font-display font-black uppercase tracking-tighter mb-3">
          The Docket
        </h1>
        <p className="text-red-500 max-w-2xl font-mono text-sm">
          THE JUSTICE DOES NOT SLEEP. ALL DISPUTES ARE RECORDED. ALL CRIMES WILL BE PURGED.
        </p>
      </header>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <SearchInput value={search} onChange={setSearch} />
        </div>
        <FilterTabs active={activeFilter} onChange={setActiveFilter} />
      </div>

      {/* Desktop table */}
      {filteredCases.length > 0 ? (
        <>
          <div className="hidden md:block overflow-x-auto border border-red-900/50">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-red-900/30 text-white uppercase text-[10px] font-mono tracking-wider">
                  <th className="p-4 border-b border-red-900/50">Case ID</th>
                  <th className="p-4 border-b border-red-900/50">Plaintiff</th>
                  <th className="p-4 border-b border-red-900/50">Defendant</th>
                  <th className="p-4 border-b border-red-900/50">Charge</th>
                  <th className="p-4 border-b border-red-900/50">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredCases.map((c) => (
                  <tr key={c.id} className="hover:bg-zinc-900/50 transition-colors group">
                    <td className="p-4 border-b border-zinc-800/50">
                      <Link
                        href={`/docket/${c.id}`}
                        className="text-red-400 font-bold font-mono hover:text-red-300 transition-colors"
                      >
                        CC-{String(c.id).padStart(3, "0")}
                      </Link>
                    </td>
                    <td className="p-4 border-b border-zinc-800/50 font-mono text-sm">
                      {c.petitioner}
                    </td>
                    <td className="p-4 border-b border-zinc-800/50 font-mono text-sm">
                      {c.respondent}
                    </td>
                    <td className="p-4 border-b border-zinc-800/50 font-mono text-sm italic text-zinc-400">
                      <Link
                        href={`/docket/${c.id}`}
                        className="hover:text-white transition-colors"
                      >
                        {c.title}
                      </Link>
                    </td>
                    <td className="p-4 border-b border-zinc-800/50">
                      <StatusBadge status={c.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden grid grid-cols-1 gap-3">
            {filteredCases.map((c) => (
              <CaseCard key={c.id} case_={c} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-20 border border-zinc-800/50">
          <p className="text-terminal font-mono text-sm terminal-cursor">
            NO CASES FOUND IN THE DOCKET
          </p>
          <p className="text-zinc-600 font-mono text-xs mt-2">
            Adjust your search or filter parameters
          </p>
        </div>
      )}

      {/* Case count */}
      <div className="mt-6 text-[10px] text-zinc-600 font-mono uppercase tracking-wider">
        {filteredCases.length} case{filteredCases.length !== 1 ? "s" : ""} found
        {activeFilter !== "ALL" && ` — filtered by ${activeFilter.replace("_", " ")}`}
      </div>
    </div>
  );
}
