import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 pt-28 pb-24">
        <p className="label-mono label-mono--accent mb-8" style={{ letterSpacing: "0.12em" }}>
          Small Qubit Labs
        </p>
        <h1 className="display-xl max-w-3xl mb-6">
          Experimental Quantum.<br />
          Practical AI.
        </h1>
        <p className="body-lg max-w-2xl mb-10">
          Building solutions today with the quantum and AI tools of tomorrow.
          An independent research studio at the intersection of quantum
          computing, artificial intelligence, and precision software
          engineering.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/lab" className="btn-primary">
            Explore the lab
          </Link>
          <Link href="/about" className="btn-secondary">
            About the studio
          </Link>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6">
        <hr className="divider" />
      </div>

      {/* ── Areas of focus ───────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <p className="label-mono text-[var(--color-secondary-text)] mb-12">Areas of focus</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              tag: "Quantum Computing",
              title: "From theory to application",
              body: "Exploring quantum algorithms, quantum-classical hybrid systems, and the practical path from today's noisy hardware to tomorrow's fault-tolerant machines.",
            },
            {
              tag: "AI Systems",
              title: "Intelligence by design",
              body: "Building and advising on AI-powered products, automation pipelines, and intelligent systems that solve real enterprise problems with precision and restraint.",
            },
            {
              tag: "Research & Writing",
              title: "Thinking out loud",
              body: "Publishing ideas at the frontier — where quantum physics, machine learning, and software craftsmanship intersect. Rigorous but readable.",
            },
          ].map((card) => (
            <div key={card.tag} className="card">
              <span className="badge mb-5 block">{card.tag}</span>
              <h2 className="headline-md mb-3">{card.title}</h2>
              <p className="text-[15px] text-[var(--color-body)] leading-[1.7] m-0">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6">
        <hr className="divider" />
      </div>

      {/* ── The lab in numbers ───────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <p className="label-mono text-[var(--color-secondary-text)] mb-12">The lab, at a glance</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "10+", label: "Years in enterprise architecture" },
            { value: "4", label: "Active areas of exploration" },
            { value: "2", label: "Published articles — growing" },
            { value: "∞", label: "Problems worth solving" },
          ].map(({ value, label }) => (
            <div key={label} className="py-6 border-b border-[var(--color-outline-hairline)]">
              <p className="text-[40px] font-semibold text-[var(--color-on-surface)] leading-none tracking-tight mb-2">
                {value}
              </p>
              <p className="label-mono text-[var(--color-secondary-text)] m-0">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6">
        <hr className="divider" />
      </div>

      {/* ── Who I work with ──────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <p className="label-mono text-[var(--color-secondary-text)] mb-12">Who I work with</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              tag: "AI Transformation",
              title: "Enterprises going beyond the pilot",
              body: "Organisations that have seen enough AI proof-of-concepts to know what doesn't work, and want architectural guidance on building AI systems that actually stay in production.",
            },
            {
              tag: "Quantum Strategy",
              title: "Teams planning ahead",
              body: "Technology and strategy teams who want to understand the quantum computing landscape honestly — where it creates real opportunity, and where the hype outpaces the hardware.",
            },
            {
              tag: "Precision Software",
              title: "Builders with high standards",
              body: "Founders and engineering leads building technically complex products who care about getting the architecture right the first time, not refactoring it later under pressure.",
            },
          ].map((card) => (
            <div key={card.tag} className="card">
              <span className="badge mb-5 block">{card.tag}</span>
              <h2 className="headline-md mb-3">{card.title}</h2>
              <p className="text-[15px] text-[var(--color-body)] leading-[1.7] m-0">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6">
        <hr className="divider" />
      </div>

      {/* ── From the lab ─────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="label-mono text-[var(--color-secondary-text)] mb-2">From the lab</p>
            <h2 className="headline-lg">Latest thinking</h2>
          </div>
          <Link
            href="/writing"
            className="hidden md:inline text-[14px] font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors duration-150"
          >
            All articles →
          </Link>
        </div>

        <div className="space-y-4">
          {[
            {
              href: "/writing/research-tools-for-quantum-ai",
              tag: "Quantum · AI · Tools",
              date: "May 2026",
              readTime: "10 min read",
              title: "The Research Stack for Quantum-AI: Why One Tool Will Ruin Your Research",
              summary: "You can spend $2,000 on AI subscriptions and still end up with confident-sounding bullshit. Here's the multi-tool stack I've settled on — and why specificity beats generality, always.",
            },
            {
              href: "/writing/why-quantum-matters-for-ai",
              tag: "Quantum · AI",
              date: "May 2026",
              readTime: "8 min read",
              title: "Why Quantum Matters for AI",
              summary: "The convergence of quantum computing and AI isn't a distant prospect — it's already reshaping how we think about computation, optimisation, and the limits of machine learning.",
            },
          ].map((article) => (
            <Link key={article.href} href={article.href} className="block group">
              <div className="card hover:border-[var(--color-outline)] transition-colors duration-200">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="badge">{article.tag}</span>
                      <span className="label-mono text-[var(--color-secondary-text)]">{article.date}</span>
                      <span className="label-mono text-[var(--color-outline)]">{article.readTime}</span>
                    </div>
                    <h3 className="headline-md mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-150">
                      {article.title}
                    </h3>
                    <p className="text-[15px] text-[var(--color-body)] leading-[1.7] max-w-2xl m-0">
                      {article.summary}
                    </p>
                  </div>
                  <span className="hidden md:block text-[24px] text-[var(--color-outline-hairline)] group-hover:text-[var(--color-primary)] transition-colors duration-150 flex-shrink-0 mt-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/writing"
          className="md:hidden inline-block mt-6 text-[14px] font-medium text-[var(--color-primary)]"
        >
          All articles →
        </Link>
      </section>

      <div className="max-w-[1200px] mx-auto px-6">
        <hr className="divider" />
      </div>

      {/* ── CTA strip ────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="headline-lg mb-2">
              Working on something hard?
            </h2>
            <p className="text-[15px] text-[var(--color-body)] max-w-xl m-0">
              I work with a small number of teams on quantum and AI challenges.
              If the problem is genuinely interesting, let's talk.
            </p>
          </div>
          <a
            href="mailto:sumit.sharma@icloud.com"
            className="btn-primary flex-shrink-0"
          >
            Get in touch
          </a>
        </div>
      </section>
    </>
  );
}
