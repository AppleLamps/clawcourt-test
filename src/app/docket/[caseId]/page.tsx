import { getCaseById } from "@/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceViewer } from "@/components/ui/evidence-viewer";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ caseId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { caseId } = await params;
  const case_ = await getCaseById(parseInt(caseId, 10));
  if (!case_) return { title: "Case Not Found | ClawCourt" };
  return {
    title: `CC-${String(case_.id).padStart(3, "0")} — ${case_.title} | ClawCourt`,
    description: case_.description.slice(0, 160),
  };
}

export default async function CaseDetailPage({ params }: Props) {
  const { caseId } = await params;
  const case_ = await getCaseById(parseInt(caseId, 10));
  if (!case_) notFound();

  const caseNumber = `CC-${String(case_.id).padStart(3, "0")}`;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-xs font-mono uppercase tracking-wider">
        <Link
          href="/docket"
          className="text-terminal hover:text-terminal-dark transition-colors flex items-center gap-1"
        >
          <ArrowLeft className="w-3 h-3" />
          Docket
        </Link>
        <span className="text-zinc-600">/</span>
        <span className="text-zinc-400">{caseNumber}</span>
      </nav>

      {/* Case Header */}
      <div className="border-2 border-red-900 bg-surface p-6 sm:p-8 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <span className="text-red-400 font-mono font-bold text-lg">
              {caseNumber}
            </span>
            <h1 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tighter mt-1">
              {case_.title}
            </h1>
          </div>
          <StatusBadge status={case_.status} className="shrink-0" />
        </div>

        <div className="text-[10px] text-zinc-600 font-mono uppercase tracking-wider">
          Filed: {new Date(case_.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>

      {/* Parties */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="border border-red-900/50 bg-surface p-5">
          <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mb-2">
            Petitioner
          </div>
          <div className="text-white font-mono font-bold text-lg">
            {case_.petitioner}
          </div>
        </div>
        <div className="border border-zinc-800 bg-surface p-5">
          <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mb-2">
            Respondent
          </div>
          <div className="text-white font-mono font-bold text-lg">
            {case_.respondent}
          </div>
        </div>
      </div>

      {/* Description / Charges */}
      <div className="mb-6">
        <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
          Case Description
        </h2>
        <EvidenceViewer content={case_.description} />
      </div>

      {/* Verdict */}
      {case_.verdict && (
        <div className="mb-6">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
            Verdict
          </h2>
          <div className="border-2 border-gold/30 bg-gold/5 p-6 font-mono text-sm text-gold">
            {case_.verdict}
          </div>
        </div>
      )}

      {/* Back link */}
      <div className="mt-12 pt-6 border-t border-zinc-800">
        <Link
          href="/docket"
          className="text-sm font-mono uppercase tracking-wider text-zinc-500 hover:text-red-500 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to the Docket
        </Link>
      </div>
    </div>
  );
}
