"use client"

import { Hero } from "@/components/sections/hero"
import { Teaser } from "@/components/sections/teaser"
import { AgentSummons } from "@/components/sections/agent-summons"
import { Founder } from "@/components/sections/founder"

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <Teaser />
      <AgentSummons />
      <Founder />
    </div>
  )
}
