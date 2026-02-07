import { NextRequest, NextResponse } from "next/server";
import { getAllCases } from "@/lib/queries";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const status = searchParams.get("status") || undefined;
  const search = searchParams.get("search") || undefined;

  const cases = await getAllCases(status, search);
  return NextResponse.json(cases);
}
