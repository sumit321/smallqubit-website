// Small Qubit Labs — Skeleton Homepage
// Phase 1: Toolchain setup. Content comes in Phase 2.
// Design: Laboratory Chic — Apple minimalism × quantum precision

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9fb]">

      {/* ── Navigation ─────────────────────────────────── */}
      <header className="w-full border-b border-[#e2e2e4] bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo wordmark */}
          <a href="/" className="flex items-center gap-3 group">
            {/* Quantum dot — the lone red accent */}
            <span
              className="w-2 h-2 rounded-full bg-[#e30613] flex-shrink-0"
              aria-hidden="true"
            />
            <span className="text-[15px] font-semibold tracking-tight text-[#1a1c1d]">
              Small Qubit Labs
            </span>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {["Work", "Lab", "Writing", "About"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-[14px] font-medium text-[#5d3f3b] hover:text-[#1a1c1d] transition-colors duration-150"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="/contact"
            className="hidden md:inline-flex items-center px-4 py-2 text-[13px] font-medium text-white bg-[#e30613] hover:bg-[#bc000a] rounded-[4px] transition-colors duration-150"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────── */}
      <main className="flex-1">
        <section className="max-w-[1200px] mx-auto px-6 pt-32 pb-24">

          {/* Mono label — sets the tone before the headline */}
          <p className="label-mono text-[#5d3f3b] mb-6">
            Quantum · AI · Precision Engineering
          </p>

          <h1 className="display-xl text-[#1a1c1d] max-w-3xl mb-6">
            A laboratory for ideas that matter.
          </h1>

          <p className="body-lg text-[#5d5e5f] max-w-xl mb-10">
            Small Qubit Labs is an independent research studio exploring the
            edges of quantum computing, AI systems, and precision software
            design. Built quietly. Shipped thoughtfully.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/work" className="btn-primary">
              See the work
            </a>
            <a href="/lab" className="btn-secondary">
              Explore the lab
            </a>
          </div>
        </section>

        {/* ── Hairline divider ─────────────────────────── */}
        <div className="max-w-[1200px] mx-auto px-6">
          <hr className="divider" />
        </div>

        {/* ── Placeholder sections ─────────────────────── */}
        <section className="max-w-[1200px] mx-auto px-6 py-24 grid md:grid-cols-3 gap-6">
          {[
            {
              tag: "Projects",
              title: "What we build",
              body: "Side projects, tools, and experiments — each one a hypothesis tested in the open.",
            },
            {
              tag: "Lab Notes",
              title: "How we think",
              body: "Writing on quantum systems, AI architecture, and the craft of building software with intention.",
            },
            {
              tag: "Philosophy",
              title: "Why it matters",
              body: "Precision over speed. Depth over breadth. Inspired by the belief that the details are not the details — they make the design.",
            },
          ].map((card) => (
            <div key={card.tag} className="card group cursor-pointer">
              <span className="badge mb-4 block">{card.tag}</span>
              <h2 className="headline-md text-[#1a1c1d] mb-3">{card.title}</h2>
              <p className="text-[15px] text-[#5d5e5f] leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────── */}
      <footer className="border-t border-[#e2e2e4] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e30613]" aria-hidden="true" />
            <span className="text-[13px] font-medium text-[#1a1c1d]">Small Qubit Labs</span>
          </div>
          <p className="label-mono text-[#86868b]">
            © {new Date().getFullYear()} · smallqubit.com
          </p>
          <div className="flex gap-6">
            {["GitHub", "LinkedIn", "X"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[13px] text-[#86868b] hover:text-[#1a1c1d] transition-colors duration-150"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}
