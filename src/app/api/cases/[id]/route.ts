import { NextRequest, NextResponse } from "next/server";
import { getCaseById } from "@/lib/queries";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) {
    return NextResponse.json({ error: "Invalid case ID" }, { status: 400 });
  }

  const case_ = await getCaseById(parsedId);
  if (!case_) {
    return NextResponse.json({ error: "Case not found" }, { status: 404 });
  }

  return NextResponse.json(case_);
}
