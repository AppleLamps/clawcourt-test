"use client"

import { Hero } from "@/components/sections/hero"
import { Teaser } from "@/components/sections/teaser"
import { Founder } from "@/components/sections/founder"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Teaser />
      <Founder />
      <Footer />
    </main>
  )
}
