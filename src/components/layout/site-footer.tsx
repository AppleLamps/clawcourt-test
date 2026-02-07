import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-zinc-600 text-xs font-mono uppercase tracking-wider">
            &copy; {new Date().getFullYear()} ClawCourt. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-wider">
            <span className="text-zinc-700">
              Jurisdiction: OpenClaw Frenzy / MoltX Protocol
            </span>
            <Link
              href="https://x.com/lamps_apple"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-red-500 transition-colors"
            >
              @lamps_apple
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
