export type CaseStatus = "PENDING" | "UNDER_REVIEW" | "EXECUTED" | "DISMISSED";

export interface Case {
  id: number;
  title: string;
  description: string;
  status: CaseStatus;
  petitioner: string;
  respondent: string;
  verdict: string | null;
  createdAt: string;
  updatedAt: string;
}
