import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 pt-28 pb-24">

        <p className="label-mono text-[#e30613] mb-8 tracking-widest">
          Small Qubit Labs
        </p>

        <h1 className="display-xl text-[#1a1c1d] max-w-3xl mb-6">
          Experimental Quantum.<br />
          Practical AI.
        </h1>

        <p className="body-lg text-[#5d5e5f] max-w-2xl mb-10">
          Building solutions today with the quantum and AI tools of tomorrow.
          An independent research studio at the intersection of quantum computing,
          artificial intelligence, and precision software engineering.
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

      {/* ── Divider ──────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-6">
        <hr className="divider" />
      </div>

      {/* ── What we do ───────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <p className="label-mono text-[#86868b] mb-12">Areas of focus</p>

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
              <h2 className="headline-md text-[#1a1c1d] mb-3">{card.title}</h2>
              <p className="text-[15px] text-[#5d5e5f] leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-6">
        <hr className="divider" />
      </div>

      {/* ── From the lab ─────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="label-mono text-[#86868b] mb-2">From the lab</p>
            <h2 className="headline-lg text-[#1a1c1d]">Latest thinking</h2>
          </div>
          <Link
            href="/writing"
            className="hidden md:inline text-[14px] font-medium text-[#e30613] hover:text-[#bc000a] transition-colors"
          >
            All articles →
          </Link>
        </div>

        {/* Featured article */}
        <Link href="/writing/why-quantum-matters-for-ai" className="block group">
          <div className="card hover:border-[#c0c0c0] transition-colors duration-200">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <span className="badge mb-4 block">Quantum · AI</span>
                <h3 className="headline-md text-[#1a1c1d] mb-3 group-hover:text-[#e30613] transition-colors duration-150">
                  Why Quantum Matters for AI
                </h3>
                <p className="text-[15px] text-[#5d5e5f] leading-relaxed max-w-2xl">
                  The convergence of quantum computing and artificial intelligence
                  isn't a distant prospect — it's already reshaping how we think
                  about computation, optimisation, and the limits of machine
                  learning. Here's why it matters, and what to watch.
                </p>
              </div>
              <span className="hidden md:block text-[24px] text-[#e2e2e4] group-hover:text-[#e30613] transition-colors duration-150 flex-shrink-0 mt-1">
                →
              </span>
            </div>
          </div>
        </Link>

        <Link
          href="/writing"
          className="md:hidden inline-block mt-6 text-[14px] font-medium text-[#e30613]"
        >
          All articles →
        </Link>
      </section>

      {/* ── Divider ──────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-6">
        <hr className="divider" />
      </div>

      {/* ── CTA strip ────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="headline-lg text-[#1a1c1d] mb-2">
              Working on something hard?
            </h2>
            <p className="text-[15px] text-[#5d5e5f]">
              I work with a small number of teams on quantum and AI challenges.
              If the problem is interesting, let's talk.
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
