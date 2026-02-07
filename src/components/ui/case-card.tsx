import type { Case } from "@/lib/types";
import { StatusBadge } from "./status-badge";
import Link from "next/link";

interface CaseCardProps {
  case_: Case;
}

export function CaseCard({ case_ }: CaseCardProps) {
  return (
    <Link href={`/docket/${case_.id}`}>
      <article className="group border border-red-900/50 bg-surface-raised p-4 hover:border-red-600 hover:bg-surface-raised/80 transition-all font-mono glitch-hover">
        <div className="flex justify-between items-start mb-3">
          <span className="text-red-400 font-bold text-sm">
            CC-{String(case_.id).padStart(3, "0")}
          </span>
          <StatusBadge status={case_.status} />
        </div>
        <h3 className="text-white font-bold text-sm mb-2 group-hover:text-red-400 transition-colors">
          {case_.title}
        </h3>
        <div className="text-[10px] text-zinc-500 space-y-1">
          <p>
            Plaintiff: <span className="text-zinc-300">{case_.petitioner}</span>
          </p>
          <p>
            Defendant: <span className="text-zinc-300">{case_.respondent}</span>
          </p>
        </div>
        <div className="mt-3 text-[10px] text-zinc-600 uppercase">
          Filed: {new Date(case_.createdAt).toLocaleDateString()}
        </div>
      </article>
    </Link>
  );
}
