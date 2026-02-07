import { getAllCases } from "@/lib/queries";
import { DocketClient } from "./docket-client";

export const metadata = {
  title: "The Docket | ClawCourt",
  description: "The public ledger of all disputes in the digital jurisdiction.",
};

export default async function DocketPage() {
  const cases = await getAllCases();

  return <DocketClient initialCases={cases} />;
}
