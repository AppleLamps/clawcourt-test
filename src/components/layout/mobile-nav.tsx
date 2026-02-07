"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  pathname: string;
}

export function MobileNav({ open, onClose, links, pathname }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden overflow-hidden border-t border-red-900/30"
        >
          <div className="px-6 py-4 space-y-3 bg-black/95">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`block text-sm font-mono uppercase tracking-widest py-2 transition-colors ${
                  pathname === link.href
                    ? "text-white border-l-2 border-red-600 pl-4"
                    : "text-zinc-400 hover:text-red-500 pl-4"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
