"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MobileNav } from "./mobile-nav";

const navLinks = [
  { href: "/docket", label: "DOCKET" },
  { href: "/file", label: "FILE_CLAIM" },
  { href: "/vault", label: "VAULT" },
  { href: "/services", label: "SERVICES" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-red-900/50">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-bold text-red-600 hover:text-white transition-colors font-mono tracking-tighter glitch-text"
        >
          CLAWCOURT
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-mono uppercase tracking-widest transition-colors ${
                pathname === link.href
                  ? "text-white underline decoration-red-600 underline-offset-4"
                  : "text-zinc-400 hover:text-red-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
        pathname={pathname}
      />
    </header>
  );
}
