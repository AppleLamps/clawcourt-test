"use client"

import { Hero } from "@/components/sections/hero"
import { Teaser } from "@/components/sections/teaser"
import { AgentSummons } from "@/components/sections/agent-summons"
import { Founder } from "@/components/sections/founder"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Teaser />
      <AgentSummons />
      <Founder />
      <Footer />
    </main>
  )
}
