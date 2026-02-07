import { db } from "@/db";
import { cases } from "@/db/schema/schema";
import { eq, desc, or, ilike } from "drizzle-orm";
import type { Case } from "./types";

export async function getAllCases(
  status?: string,
  search?: string
): Promise<Case[]> {
  let query = db.select().from(cases).orderBy(desc(cases.createdAt)).$dynamic();

  if (status && status !== "ALL") {
    query = query.where(eq(cases.status, status));
  }

  if (search) {
    const pattern = `%${search}%`;
    query = query.where(
      or(
        ilike(cases.title, pattern),
        ilike(cases.petitioner, pattern),
        ilike(cases.respondent, pattern)
      )
    );
  }

  const rows = await query;

  return rows.map((row) => ({
    id: row.id,
    title: row.title,
    description: row.description,
    status: row.status as Case["status"],
    petitioner: row.petitioner,
    respondent: row.respondent,
    verdict: row.verdict,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  }));
}

export async function getCaseById(id: number): Promise<Case | null> {
  const rows = await db.select().from(cases).where(eq(cases.id, id));
  const row = rows[0];
  if (!row) return null;

  return {
    id: row.id,
    title: row.title,
    description: row.description,
    status: row.status as Case["status"],
    petitioner: row.petitioner,
    respondent: row.respondent,
    verdict: row.verdict,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}
