"use client"

import { motion } from "framer-motion"

interface ScalesProps {
  className?: string
  animate?: boolean
}

export function Scales({ className = "", animate = true }: ScalesProps) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      initial={animate ? { opacity: 0, y: 20 } : undefined}
      animate={animate ? { opacity: 1, y: 0 } : undefined}
      transition={animate ? { duration: 0.8, delay: 0.3 } : undefined}
    >
      {/* Center pole */}
      <rect x="48" y="15" width="4" height="70" fill="url(#poleGradient)" />

      {/* Base */}
      <motion.path
        d="M30 85 Q50 80 70 85 L75 95 Q50 90 25 95 Z"
        fill="url(#baseGradient)"
        stroke="#fbbf24"
        strokeWidth="1"
      />

      {/* Top ornament */}
      <circle cx="50" cy="12" r="6" fill="#991b1b" stroke="#fbbf24" strokeWidth="1.5" />
      <circle cx="50" cy="12" r="3" fill="#fbbf24" />

      {/* Balance beam */}
      <motion.g
        animate={animate ? { rotate: [-2, 2, -2] } : undefined}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut"
        }}
        style={{ transformOrigin: "50px 20px" }}
      >
        <rect x="10" y="18" width="80" height="4" rx="2" fill="url(#beamGradient)" stroke="#fbbf24" strokeWidth="0.5" />

        {/* Left chain */}
        <line x1="15" y1="22" x2="15" y2="45" stroke="#fbbf24" strokeWidth="1.5" />

        {/* Right chain */}
        <line x1="85" y1="22" x2="85" y2="45" stroke="#fbbf24" strokeWidth="1.5" />

        {/* Left pan */}
        <motion.g>
          <ellipse cx="15" cy="50" rx="12" ry="5" fill="url(#panGradient)" stroke="#fbbf24" strokeWidth="1" />
          <path d="M3 50 Q15 55 27 50 Q15 60 3 50" fill="#7f1d1d" opacity="0.5" />
        </motion.g>

        {/* Right pan */}
        <motion.g>
          <ellipse cx="85" cy="50" rx="12" ry="5" fill="url(#panGradient)" stroke="#fbbf24" strokeWidth="1" />
          <path d="M73 50 Q85 55 97 50 Q85 60 73 50" fill="#7f1d1d" opacity="0.5" />
        </motion.g>
      </motion.g>

      {/* Gradients */}
      <defs>
        <linearGradient id="poleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <linearGradient id="baseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#991b1b" />
          <stop offset="100%" stopColor="#450a0a" />
        </linearGradient>
        <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <radialGradient id="panGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#991b1b" />
          <stop offset="100%" stopColor="#450a0a" />
        </radialGradient>
      </defs>
    </motion.svg>
  )
}
