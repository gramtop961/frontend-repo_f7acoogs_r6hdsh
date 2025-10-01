import HeaderNav from "./components/HeaderNav";
import Hero3D from "./components/Hero3D";
import TrustSection from "./components/TrustSection";
import CodeEmbed from "./components/CodeEmbed";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeaderNav />
      <Hero3D />
      <TrustSection />
      <CodeEmbed />
      <footer className="border-t border-zinc-900/60 py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Vanish Auth. All rights reserved.
      </footer>
    </main>
  );
}
