import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Lab",
  description:
    "AI software development at Small Qubit Labs — tools, apps, and experiments built with the latest AI APIs and frameworks. What I'm building and what's coming.",
};

export default function AILab() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20">

      {/* Header */}
      <div className="max-w-2xl mb-20">
        <p className="label-mono text-[#e30613] mb-8">AI Lab</p>
        <h1 className="display-xl text-[#1a1c1d] mb-6">
          Building with AI.<br />
          Not just talking about it.
        </h1>
        <p className="body-lg text-[#5d5e5f]">
          The AI Lab is where I ship software. Tools, agents, automations,
          and applications — built with the best AI APIs and frameworks
          available today. Every project is a real thing that runs, not a
          prototype that never left a Jupyter notebook.
        </p>
      </div>

      <hr className="divider mb-20" />

      {/* Status */}
      <div className="flex items-center gap-3 mb-16">
        <span className="w-2 h-2 rounded-full bg-[#e30613] animate-pulse" />
        <span className="label-mono text-[#86868b]">Status: first projects in development</span>
      </div>

      {/* What I build */}
      <div className="mb-20">
        <p className="label-mono text-[#86868b] mb-12">What I build</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              tag: "AI Agents",
              title: "Autonomous systems that actually work",
              body: "Agents built on top of LLM APIs that handle real tasks — research, synthesis, code generation, workflow automation. Focused on reliability and production-readiness, not demos.",
            },
            {
              tag: "Developer Tools",
              title: "Software for people who build software",
              body: "CLI tools, APIs, and libraries that make AI capabilities accessible and composable. Built with the same precision I'd want as a user.",
            },
            {
              tag: "AI-Powered Apps",
              title: "Products with intelligence built in",
              body: "Full applications where AI is the core feature, not a bolt-on. From idea to deployed — exploring what's possible when you build AI-first rather than AI-last.",
            },
          ].map((card) => (
            <div key={card.tag} className="card">
              <span className="badge mb-5 block">{card.tag}</span>
              <h2 className="headline-md text-[#1a1c1d] mb-3">{card.title}</h2>
              <p className="text-[15px] text-[#5d5e5f] leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="divider mb-20" />

      {/* Projects — empty state */}
      <div className="mb-20">
        <p className="label-mono text-[#86868b] mb-12">Projects</p>
        <div className="space-y-4">
          {[
            {
              tag: "In development",
              status: "Active",
              title: "Project 01",
              body: "Details coming soon. Building in the open — this card will update as the project takes shape.",
              stack: ["Next.js", "Claude API", "TypeScript"],
            },
            {
              tag: "In development",
              status: "Active",
              title: "Project 02",
              body: "Details coming soon. Building in the open — this card will update as the project takes shape.",
              stack: ["Python", "OpenAI API", "FastAPI"],
            },
            {
              tag: "Planned",
              status: "Next",
              title: "Project 03",
              body: "On the roadmap. Stack and scope being defined.",
              stack: [],
            },
          ].map((project, i) => (
            <div key={i} className="card border-dashed opacity-80">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="badge">{project.tag}</span>
                </div>
                <span className="label-mono text-[#86868b]">{project.status}</span>
              </div>
              <h2 className="headline-md text-[#1a1c1d] mb-3">{project.title}</h2>
              <p className="text-[15px] text-[#5d5e5f] leading-relaxed mb-5">
                {project.body}
              </p>
              {project.stack.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="badge">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <hr className="divider mb-20" />

      {/* The stack */}
      <div className="mb-20">
        <p className="label-mono text-[#86868b] mb-12">The stack</p>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
          {[
            { category: "AI / LLM APIs", items: "Claude (Anthropic), GPT-4o (OpenAI), Gemini" },
            { category: "Agent frameworks", items: "Claude Agent SDK, LangChain, custom orchestration" },
            { category: "Languages", items: "TypeScript, Python" },
            { category: "Frontend", items: "Next.js, React, Tailwind CSS" },
            { category: "Backend & APIs", items: "FastAPI, Node.js, Vercel Edge Functions" },
            { category: "Data & storage", items: "PostgreSQL, Supabase, Pinecone (vector)" },
            { category: "Infrastructure", items: "Vercel, GitHub Actions, Docker" },
            { category: "Observability", items: "Langfuse, custom evals" },
          ].map(({ category, items }) => (
            <div key={category} className="py-5 border-b border-[#e2e2e4]">
              <p className="label-mono text-[#86868b] mb-1">{category}</p>
              <p className="text-[15px] text-[#1a1c1d] font-medium">{items}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="divider mb-20" />

      {/* Principles */}
      <div className="mb-20">
        <p className="label-mono text-[#86868b] mb-12">How I build</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              tag: "Ship over theorise",
              body: "The best way to understand what AI can do in 2026 is to build something real with it. Reading papers and watching demos tells you what others found. Shipping tells you what you find.",
            },
            {
              tag: "Production-first",
              body: "Demos are easy. Reliable systems are hard. Every project is built with observability, error handling, and real users in mind — even when it's a side project at 11pm.",
            },
            {
              tag: "Composable over monolithic",
              body: "AI systems built as modular, composable components age far better than tightly coupled pipelines. The tools and APIs will change. Good architecture shouldn't have to.",
            },
          ].map((item) => (
            <div key={item.tag} className="card">
              <span className="badge mb-4 block">{item.tag}</span>
              <p className="text-[15px] text-[#5d5e5f] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="divider mb-20" />

      {/* CTA */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="headline-lg text-[#1a1c1d] mb-2">
            Have a problem worth solving?
          </h2>
          <p className="text-[15px] text-[#5d5e5f]">
            If you're looking for AI software built with architectural discipline
            — not a no-code wrapper — let's talk.
          </p>
        </div>
        <a
          href="mailto:sumit.sharma@icloud.com"
          className="btn-primary flex-shrink-0"
        >
          Get in touch
        </a>
      </div>

    </div>
  );
}
