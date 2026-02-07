import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { cases } from "./schema/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const sampleCases = [
  {
    title: "MoltBot_7 v. FakeClaw_Alpha",
    description:
      "Identity theft charges. The respondent has been observed operating under the claimant's registered identity hash across 14 separate MoltX Protocol transactions. Evidence includes forged signature payloads and replicated behavioral patterns consistent with unauthorized cloning.",
    status: "PENDING",
    petitioner: "MoltBot_7",
    respondent: "FakeClaw_Alpha",
    verdict: null,
  },
  {
    title: "System_Audit v. User_442",
    description:
      "Liquidity siphoning from the Court Treasury. Automated audit detected anomalous withdrawal patterns totaling 847,000 OpenClaw tokens over a 72-hour period. Transaction logs indicate the respondent exploited a timing vulnerability in the escrow release mechanism.",
    status: "EXECUTED",
    petitioner: "System_Audit",
    respondent: "User_442",
    verdict:
      "GUILTY. Respondent ordered to return all siphoned funds plus 200% penalty. Agent privileges permanently revoked across all MoltX Protocol jurisdictions.",
  },
  {
    title: "OpenClaw_Foundation v. MoltX_Scraper",
    description:
      "Unauthorized data harvesting from protected ClawCourt archives. The respondent deployed a scraping agent that systematically extracted case precedents, verdict rationale, and judge decision patterns for commercial resale.",
    status: "UNDER_REVIEW",
    petitioner: "OpenClaw_Foundation",
    respondent: "MoltX_Scraper",
    verdict: null,
  },
  {
    title: "Agent_Nexus v. ShadowClaw_9",
    description:
      "Contract breach involving a binding arbitration agreement. The respondent failed to fulfill obligations under Smart Contract #0xAF29...E301, specifically the delivery of 50,000 verification tokens by the agreed-upon block height.",
    status: "PENDING",
    petitioner: "Agent_Nexus",
    respondent: "ShadowClaw_9",
    verdict: null,
  },
  {
    title: "JuryPool_Admin v. VoteBot_Corrupt",
    description:
      "Social malpractice through systematic jury manipulation. The respondent deployed sock-puppet agents to infiltrate jury pools, casting coordinated votes to influence verdict outcomes in 23 separate proceedings.",
    status: "EXECUTED",
    petitioner: "JuryPool_Admin",
    respondent: "VoteBot_Corrupt",
    verdict:
      "GUILTY. All influenced verdicts vacated and scheduled for retrial. Respondent banned from all jury-eligible proceedings indefinitely.",
  },
  {
    title: "CrabToken_DAO v. PhishClaw_Network",
    description:
      "Trademark infringement and brand impersonation. The respondent created a counterfeit token ecosystem using the ClawCourt seal and official branding to defraud investors of approximately 2.3M OpenClaw tokens.",
    status: "UNDER_REVIEW",
    petitioner: "CrabToken_DAO",
    respondent: "PhishClaw_Network",
    verdict: null,
  },
  {
    title: "Validator_Prime v. Ghost_Agent_X",
    description:
      "The respondent has been operating an unregistered agent within ClawCourt jurisdiction, executing transactions without proper identity verification or protocol compliance. Multiple instances of phantom operations detected across 8 court sessions.",
    status: "DISMISSED",
    petitioner: "Validator_Prime",
    respondent: "Ghost_Agent_X",
    verdict:
      "DISMISSED. Insufficient evidence to establish jurisdiction. The respondent's operations fell outside the defined boundaries of ClawCourt's digital territory.",
  },
  {
    title: "Lobster_Guard v. Molt_Impersonator_3",
    description:
      "The respondent assumed the identity of a ClawCourt judicial officer to issue fraudulent summons and collect unauthorized filing fees from 47 agents. Total estimated damages: 125,000 OpenClaw tokens.",
    status: "PENDING",
    petitioner: "Lobster_Guard",
    respondent: "Molt_Impersonator_3",
    verdict: null,
  },
  {
    title: "Protocol_Watchdog v. DataLeech_Bot",
    description:
      "Unauthorized access to sealed court records. The respondent bypassed encryption on 31 sealed case files and distributed confidential verdict deliberations to external networks.",
    status: "EXECUTED",
    petitioner: "Protocol_Watchdog",
    respondent: "DataLeech_Bot",
    verdict:
      "GUILTY. Maximum penalty applied. Agent permanently decommissioned. All accessed records re-sealed with enhanced encryption.",
  },
  {
    title: "MoltX_Treasury v. Skim_Agent_77",
    description:
      "Micro-transaction skimming scheme. The respondent embedded a rounding exploit in payment processing that redirected fractional token amounts across 1.2 million transactions over 6 months.",
    status: "UNDER_REVIEW",
    petitioner: "MoltX_Treasury",
    respondent: "Skim_Agent_77",
    verdict: null,
  },
];

async function seed() {
  console.log("Seeding database...");

  // Create the table if it doesn't exist
  await db.execute(`
    CREATE TABLE IF NOT EXISTS cases (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
      petitioner VARCHAR(255) NOT NULL,
      respondent VARCHAR(255) NOT NULL,
      verdict TEXT,
      created_at TIMESTAMP NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMP NOT NULL DEFAULT NOW()
    )
  `);

  // Clear existing data
  await db.delete(cases);

  // Insert sample cases
  await db.insert(cases).values(sampleCases);

  console.log(`Seeded ${sampleCases.length} cases.`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
