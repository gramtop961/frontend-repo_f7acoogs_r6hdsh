"use client";

import Spline from "@splinetool/react-spline";
import { Rocket, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Hero3D() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      <div className="relative h-[70vh] w-full">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

        <div className="absolute inset-0 z-10 mx-auto flex max-w-7xl items-center px-6">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm tracking-widest text-cyan-300/80">PASSWORDLESS • BIOMETRICS • PASSKEYS</p>
            <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Auth that disappears.
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base text-zinc-300 sm:text-lg">
              Ship passwordless authentication with biometrics in one line of code. Delight users, boost conversion, and never store a password again.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#get-started"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500/90 px-4 py-2.5 text-sm font-medium text-black transition hover:bg-cyan-400"
              >
                <Rocket className="h-4 w-4" /> Start free
              </Link>
              <Link
                href="#code"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700/80 bg-zinc-900/60 px-4 py-2.5 text-sm font-medium text-white/90 backdrop-blur transition hover:border-zinc-600"
              >
                <BookOpen className="h-4 w-4" /> View docs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
