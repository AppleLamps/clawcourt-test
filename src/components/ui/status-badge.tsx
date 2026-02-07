import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { CaseStatus } from "@/lib/types";

const statusBadgeVariants = cva(
  "inline-flex items-center px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider border",
  {
    variants: {
      status: {
        PENDING: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
        UNDER_REVIEW: "bg-red-900/20 text-red-400 border-red-500/30 border-pulse",
        EXECUTED: "bg-terminal/10 text-terminal border-terminal/30",
        DISMISSED: "bg-zinc-800 text-zinc-500 border-zinc-700 line-through",
      },
    },
    defaultVariants: {
      status: "PENDING",
    },
  }
);

interface StatusBadgeProps extends VariantProps<typeof statusBadgeVariants> {
  status: CaseStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span className={cn(statusBadgeVariants({ status }), className)}>
      {status.replace("_", " ")}
    </span>
  );
}
