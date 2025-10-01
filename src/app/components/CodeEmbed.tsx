"use client";

import { Code2 } from "lucide-react";
import { useState } from "react";

const codeSnippets: Record<string, string> = {
  React: `import { useEffect } from 'react'
import { Auth } from '@flames/auth'

export default function App(){
  useEffect(() => {
    Auth.init({ projectId: process.env.NEXT_PUBLIC_PROJECT_ID })
  }, [])

  return (
    <button onClick={() => Auth.signIn()}>Sign in with Face/Touch</button>
  )
}`,
  Node: `import express from 'express'
import { auth } from '@flames/auth/server'

const app = express()

app.post('/session', auth.callback())

app.listen(3000)` ,
  Curl: `curl -X POST https://api.flames.dev/v1/session \
 -H "Authorization: Bearer <YOUR_API_KEY>" \
 -d 'redirect=http://localhost:3000/callback'`
};

export default function CodeEmbed(){
  const [active, setActive] = useState<keyof typeof codeSnippets>('React');

  return (
    <section id="code" className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-4 flex items-center gap-2 text-zinc-300">
        <Code2 className="h-5 w-5" />
        <h2 className="text-lg font-medium">One line to go passwordless</h2>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-4">
        <div className="mb-3 flex gap-2">
          {Object.keys(codeSnippets).map((k) => (
            <button
              key={k}
              onClick={() => setActive(k as keyof typeof codeSnippets)}
              className={`rounded-md px-3 py-1.5 text-sm transition ${active === k ? 'bg-cyan-500 text-black' : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800'}`}
            >
              {k}
            </button>
          ))}
        </div>

        <pre className="relative overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm leading-relaxed text-zinc-100">
{codeSnippets[active]}
        </pre>
        <p className="mt-3 text-xs text-zinc-400">Drop-in SDKs for React, Node, and more. WebAuthn + Passkeys, secure by default.</p>
      </div>
    </section>
  );
}
