"use client"

import { motion } from "framer-motion"

interface GavelProps {
  className?: string
  animate?: boolean
}

export function Gavel({ className = "", animate = true }: GavelProps) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      initial={animate ? { rotate: -30, y: -20 } : undefined}
      animate={animate ? { rotate: 0, y: 0 } : undefined}
      transition={animate ? {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.5
      } : undefined}
    >
      {/* Gavel head */}
      <motion.g
        initial={animate ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* Main head */}
        <rect
          x="15"
          y="20"
          width="40"
          height="18"
          rx="4"
          fill="url(#gavelGradient)"
          stroke="#fbbf24"
          strokeWidth="1"
        />
        {/* Decorative bands */}
        <rect x="20" y="20" width="3" height="18" fill="#fbbf24" opacity="0.5" />
        <rect x="47" y="20" width="3" height="18" fill="#fbbf24" opacity="0.5" />
      </motion.g>

      {/* Handle */}
      <motion.rect
        x="32"
        y="38"
        width="6"
        height="45"
        rx="2"
        fill="url(#handleGradient)"
        stroke="#991b1b"
        strokeWidth="0.5"
        initial={animate ? { scaleY: 0 } : { scaleY: 1 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.4 }}
        style={{ transformOrigin: "center top" }}
      />

      {/* Sound block */}
      <motion.ellipse
        cx="70"
        cy="80"
        rx="20"
        ry="8"
        fill="url(#blockGradient)"
        stroke="#fbbf24"
        strokeWidth="1"
        initial={animate ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      />

      {/* Gradients */}
      <defs>
        <linearGradient id="gavelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#991b1b" />
          <stop offset="50%" stopColor="#7f1d1d" />
          <stop offset="100%" stopColor="#450a0a" />
        </linearGradient>
        <linearGradient id="handleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="50%" stopColor="#92400e" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <radialGradient id="blockGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#451a03" />
        </radialGradient>
      </defs>
    </motion.svg>
  )
}
