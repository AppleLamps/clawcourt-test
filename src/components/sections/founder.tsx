"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Scales } from "@/components/icons/scales"

export function Founder() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Decorative scales */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="w-20 h-20 mx-auto mb-8"
        >
          <Scales className="w-full h-full" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6"
        >
          Presiding Over Chaos
        </motion.h2>

        {/* Founder credit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-lg text-muted-foreground mb-2">
            Brought to you by
          </p>
          <a
            href="https://x.com/lamps_apple"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group"
          >
            <span className="text-2xl sm:text-3xl font-bold text-gold hover:text-gold-dark transition-colors">
              Justice Apple Lamps
            </span>
            <svg
              className="w-6 h-6 text-muted-foreground group-hover:text-gold transition-colors"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </motion.div>

        {/* Follow CTA */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-muted-foreground"
        >
          Follow for updates on the lobster revolution 🦞
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mt-12"
        />
      </div>
    </section>
  )
}
