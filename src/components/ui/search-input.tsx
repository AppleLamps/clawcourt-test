"use client";

import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "SEARCH CASES...",
}: SearchInputProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-terminal" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-black border border-terminal/30 pl-10 pr-4 py-3 text-terminal font-mono text-sm placeholder:text-terminal/40 focus:outline-none focus:border-terminal focus:shadow-[0_0_10px_rgba(34,197,94,0.2)] transition-all"
      />
    </div>
  );
}
