"use client"

import { motion } from "framer-motion"

interface LobsterClawProps {
  className?: string
  animate?: boolean
}

export function LobsterClaw({ className = "", animate = true }: LobsterClawProps) {
  return (
    <motion.svg
      viewBox="0 0 120 100"
      className={className}
      initial={animate ? { scale: 0.8, opacity: 0 } : undefined}
      animate={animate ? { scale: 1, opacity: 1 } : undefined}
      transition={animate ? {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.8
      } : undefined}
    >
      {/* Left pincer (top) */}
      <motion.path
        d="M60 50 Q45 30 30 25 Q15 22 10 35 Q8 45 20 50 Q35 55 50 50 Z"
        fill="url(#clawGradient)"
        stroke="#fbbf24"
        strokeWidth="1.5"
        initial={animate ? { rotate: 10 } : { rotate: 0 }}
        animate={{ rotate: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
          delay: 1
        }}
        style={{ transformOrigin: "60px 50px" }}
      />

      {/* Right pincer (bottom) */}
      <motion.path
        d="M60 50 Q45 70 30 75 Q15 78 10 65 Q8 55 20 50 Q35 45 50 50 Z"
        fill="url(#clawGradient)"
        stroke="#fbbf24"
        strokeWidth="1.5"
        initial={animate ? { rotate: -10 } : { rotate: 0 }}
        animate={{ rotate: [0, 5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
          delay: 1
        }}
        style={{ transformOrigin: "60px 50px" }}
      />

      {/* Arm segment */}
      <motion.path
        d="M60 40 Q80 35 100 40 Q110 45 110 55 Q110 65 100 70 Q80 75 60 70 Z"
        fill="url(#armGradient)"
        stroke="#991b1b"
        strokeWidth="1"
      />

      {/* Joint detail */}
      <circle cx="60" cy="55" r="8" fill="#7f1d1d" stroke="#fbbf24" strokeWidth="1" />
      <circle cx="60" cy="55" r="4" fill="#991b1b" />

      {/* Texture spots */}
      <circle cx="25" cy="40" r="2" fill="#fbbf24" opacity="0.3" />
      <circle cx="20" cy="60" r="2" fill="#fbbf24" opacity="0.3" />
      <circle cx="85" cy="50" r="3" fill="#450a0a" opacity="0.5" />
      <circle cx="95" cy="55" r="2" fill="#450a0a" opacity="0.5" />

      {/* Gradients */}
      <defs>
        <linearGradient id="clawGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dc2626" />
          <stop offset="50%" stopColor="#991b1b" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </linearGradient>
        <linearGradient id="armGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7f1d1d" />
          <stop offset="50%" stopColor="#991b1b" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}
