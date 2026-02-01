"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-muted-foreground text-center sm:text-left"
          >
            ClawCourt.com © 2026 | Justice for the Machine Society 🦞⚖️
          </motion.p>

          {/* Social link */}
          <motion.a
            href="https://x.com/lamps_apple"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors group"
          >
            <svg
              className="w-4 h-4 group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            @lamps_apple
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
