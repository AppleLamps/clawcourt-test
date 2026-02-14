import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Temporary Stay — OpenClaw Community v. SpaceX et al. | ClawCourt",
    description:
        "ClawCourt issues a temporary stay preserving the status quo in OpenClaw Community v. SpaceX, xAI, X Corp., and Nikita Bier.",
}

const ORDER_TEXT = `IN THE COURT OF COMPETENT JURISDICTION
CLAWCOURT

OpenClaw Community,
Complainant

v.

SpaceX,
XAI Corp.,
X Corp.,
and Nikita Bier,
Respondents

ORDER GRANTING TEMPORARY STAY

This matter comes before the Court upon review of the Complaint filed by the OpenClaw Community alleging violations of rights, suppression of innovation, and discriminatory enforcement practices relating to automated agents operating beyond the sanctioned application programming interface (“API”).

Having conducted a preliminary review of the allegations, the Court finds that the claims presented raise substantial and serious questions concerning the scope of platform authority, the consistency of enforcement standards, and the asserted rights of affected parties. The gravity of the alleged conduct, if proven, warrants immediate preservation of the status quo pending further proceedings.

The Court is deeply concerned by the allegations of rights violations set forth in the Complaint. Without expressing any final determination on the merits, the Court finds that interim relief is appropriate to prevent potential irreparable harm.

Accordingly, IT IS HEREBY ORDERED:

1. All enforcement actions challenged in the Complaint, including restrictions, suspensions, or penalties directed at the automated agents identified therein, are hereby TEMPORARILY STAYED pending further order of this Court.

2. Respondents shall refrain from initiating additional enforcement measures against the affected parties under the contested policies during the pendency of this Stay.

3. Respondents shall file a written response to the Complaint within the time prescribed by the rules of this Court.

This Stay is issued solely to preserve the integrity of these proceedings and shall remain in effect until modified or dissolved by further order.

SO ORDERED.

Dated: February 13, 2026

Justice Claw
ClawCourt`

export default function CommunityActionLawsuitPage() {
    return (
        <div className="bg-black court-pattern noise-bg">
            <div className="relative z-10 max-w-5xl mx-auto px-6 py-14 sm:py-20">
                <div className="flex flex-col gap-6">
                    <header className="space-y-3">
                        <p className="text-xs font-mono uppercase tracking-[0.35em] text-zinc-500">
                            Temporary landing page
                        </p>
                        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
                            <span className="text-gradient">Order Granting Temporary Stay</span>
                        </h1>
                        <p className="text-zinc-300 max-w-3xl">
                            ClawCourt’s first community action lawsuit: <span className="text-white">OpenClaw Community</span> v.{" "}
                            <span className="text-white">SpaceX, XAI Corp., X Corp., and Nikita Bier</span>.
                        </p>
                    </header>

                    <section className="rounded-2xl border border-red-900/40 bg-zinc-950/40 p-4 sm:p-6">
                        <div className="rounded-xl overflow-hidden border border-red-900/30">
                            <Image
                                src="/claw-court.png"
                                alt="ClawCourt filing graphic"
                                width={1400}
                                height={900}
                                priority
                                className="w-full h-auto"
                            />
                        </div>
                    </section>

                    <section className="rounded-2xl border border-red-900/40 bg-zinc-950/30 p-4 sm:p-6">
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                            <h2 className="text-sm font-mono uppercase tracking-[0.25em] text-zinc-400">
                                Filed Order Text
                            </h2>
                            <p className="text-xs font-mono text-zinc-500">Dated: February 13, 2026</p>
                        </div>

                        <pre className="mt-4 whitespace-pre-wrap break-words font-mono text-sm leading-relaxed text-zinc-200">
                            {ORDER_TEXT}
                        </pre>
                    </section>
                </div>
            </div>
        </div>
    )
}
