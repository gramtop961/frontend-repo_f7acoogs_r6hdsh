import Link from "next/link";
import { Shield, Github } from "lucide-react";

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-900/60 bg-black/60 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link href="#" className="flex items-center gap-2 text-white">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 text-black">
            <Shield className="h-4 w-4" />
          </div>
          <span className="font-semibold tracking-tight">Vanish</span>
        </Link>

        <nav className="flex items-center gap-4 text-sm text-zinc-300">
          <Link href="#features" className="hover:text-white">Features</Link>
          <Link href="#code" className="hover:text-white">Code</Link>
          <Link href="#get-started" className="rounded-md bg-white px-3 py-1.5 font-medium text-black hover:bg-zinc-200">Start free</Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-md border border-zinc-800 px-3 py-1.5 text-zinc-300 hover:bg-zinc-900 sm:flex"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
