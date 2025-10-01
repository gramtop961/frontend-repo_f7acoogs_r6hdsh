import { CheckCircle2, Lock, ShieldCheck, Globe } from "lucide-react";

const bullets = [
  {
    icon: Lock,
    title: "Bank-grade security",
    desc: "WebAuthn + device biometrics. No passwords to steal, phish, or leak.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy first",
    desc: "Keys never leave the device. We never see your biometrics.",
  },
  {
    icon: Globe,
    title: "Global scale",
    desc: "Edge-backed infra with 99.99% SLA and sub-100ms auth handshakes.",
  },
];

export default function TrustSection() {
  return (
    <section id="features" className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white">Built for trust</h2>
        <p className="mt-2 max-w-2xl text-zinc-400">
          Transparent, compliant, and audited. Everything you need to ship secure, passwordless auth with confidence.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {bullets.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">
            <Icon className="h-5 w-5 text-cyan-400" />
            <h3 className="mt-3 font-medium text-white">{title}</h3>
            <p className="mt-1 text-sm text-zinc-400">{desc}</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" /> SOC 2, ISO 27001, GDPR-ready
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
