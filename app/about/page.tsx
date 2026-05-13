import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "I'm Sumit Sharma — a Senior Solutions Architect and founder of Small Qubit Labs, building at the intersection of quantum computing and AI.",
};

export default function About() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20">

      {/* Header */}
      <div className="max-w-2xl mb-20">
        <p className="label-mono text-[#e30613] mb-8">About</p>
        <h1 className="display-xl text-[#1a1c1d] mb-6">
          Building at the edge<br />of what's possible.
        </h1>
        <p className="body-lg text-[#5d5e5f]">
          I'm Sumit — a technologist, solutions architect, and the person
          behind Small Qubit Labs.
        </p>
      </div>

      <hr className="divider mb-20" />

      {/* Story */}
      <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-20">
        <div>
          <p className="label-mono text-[#86868b]">The story</p>
        </div>
        <div className="space-y-6 text-[16px] text-[#3a3a3a] leading-relaxed">
          <p>
            I've spent over a decade as a Senior Solutions Architect — helping
            large enterprises design and implement intelligent automation
            systems at scale. Across industries and organisations, I've seen
            firsthand how the right architecture can quietly transform how a
            business operates, and how the wrong one can just as quietly
            calcify it.
          </p>
          <p>
            That work taught me something important: most organisations are
            solving yesterday's problems with yesterday's tools, while the
            next paradigm shift is already forming at the edges. I became
            obsessed with those edges — particularly the convergence of
            quantum computing and artificial intelligence, which I believe
            represents the most significant shift in computation since the
            transistor.
          </p>
          <p>
            Small Qubit Labs is where I explore those edges seriously. The
            name is deliberate: a qubit is the fundamental unit of quantum
            information — probabilistic, entangled, capable of existing in
            multiple states simultaneously. It's a fitting metaphor for the
            kind of thinking I find most interesting: ideas that resist
            simple categorisation, problems that require you to hold multiple
            realities at once before collapsing into an answer.
          </p>
        </div>
      </div>

      <hr className="divider mb-20" />

      {/* What I bring */}
      <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-20">
        <div>
          <p className="label-mono text-[#86868b]">What I bring</p>
        </div>
        <div className="space-y-6 text-[16px] text-[#3a3a3a] leading-relaxed">
          <p>
            My background sits at an unusual intersection: deep enterprise
            architecture experience combined with genuine curiosity about
            frontier technology. I've designed systems that process millions
            of transactions, advised C-suite teams on AI transformation
            strategy, and spent weekends reading quantum computing research
            papers — not because I had to, but because the ideas are
            genuinely thrilling.
          </p>
          <p>
            That combination — practical systems thinking plus frontier
            technical curiosity — is what makes the lab interesting. I'm not
            a pure researcher disconnected from real-world constraints, and
            I'm not a consultant who treats quantum and AI as buzzwords.
            I care about whether things actually work, at scale, under
            pressure, with real users.
          </p>
          <p>
            On the side, I build software — AI-powered tools, automation
            systems, experiments that test specific hypotheses. Some of these
            will become lab projects. Some will become products. All of them
            make me a better architect and a more honest writer about what
            this technology can and can't do today.
          </p>
        </div>
      </div>

      <hr className="divider mb-20" />

      {/* Direction */}
      <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-20">
        <div>
          <p className="label-mono text-[#86868b]">The direction</p>
        </div>
        <div className="space-y-6 text-[16px] text-[#3a3a3a] leading-relaxed">
          <p>
            Small Qubit Labs is not yet a registered business. It's something
            more honest than that — a serious experiment. A place to build
            quietly, think rigorously, and determine whether there's a real
            company worth creating here.
          </p>
          <p>
            The direction is clear: quantum-classical hybrid solutions for
            real enterprise problems, AI transformation work grounded in
            architectural discipline, and research that connects the
            theoretical to the immediately practical. Eventually a startup.
            For now, a lab.
          </p>
          <p>
            I work with a small number of teams on quantum and AI challenges —
            consulting engagements where the problem is genuinely hard and
            the organisation is serious about doing it right. If that sounds
            like your situation, I'd like to hear about it.
          </p>
          <p>
            I'm inspired by the way Apple approached product design — the
            belief that the details are not the details, they make the design.
            That philosophy applies as much to a quantum algorithm as it does
            to a button radius. Precision isn't perfectionism. It's respect
            for the person on the other end.
          </p>
        </div>
      </div>

      <hr className="divider mb-20" />

      {/* Values */}
      <div className="mb-20">
        <p className="label-mono text-[#86868b] mb-12">What I believe</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              tag: "Depth over breadth",
              body: "I'd rather understand one thing fully than have a surface-level opinion on ten. The lab reflects that — fewer ideas, pursued further.",
            },
            {
              tag: "Precision over speed",
              body: "Speed is a feature, not a virtue. The right architecture, built deliberately, outlasts five fast ones built carelessly.",
            },
            {
              tag: "Honesty over polish",
              body: "This site will evolve publicly. I won't pretend the lab is further along than it is. The work is more interesting than the optics.",
            },
            {
              tag: "Systems thinking",
              body: "Every component exists in a system. Understanding the relationships between parts is more valuable than optimising any single part in isolation.",
            },
            {
              tag: "Frontier curiosity",
              body: "The most important ideas are always slightly ahead of where they can be immediately applied. Staying close to the frontier — even as a student — is a strategic advantage.",
            },
            {
              tag: "Build to understand",
              body: "Reading about a technology and building with it are completely different kinds of knowing. The lab exists because I learn by making things.",
            },
          ].map((item) => (
            <div key={item.tag} className="card">
              <span className="badge mb-4 block">{item.tag}</span>
              <p className="text-[15px] text-[#5d5e5f] leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <hr className="divider mb-20" />

      {/* Currently */}
      <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-20">
        <div>
          <p className="label-mono text-[#86868b]">Currently</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { label: "Location", value: "Australia" },
            { label: "Focus", value: "Quantum + AI research, consulting, software side projects" },
            { label: "Reading", value: "Nielsen & Chuang, Quantum Computation and Quantum Information" },
            { label: "Building", value: "This lab. Quietly." },
          ].map(({ label, value }) => (
            <div key={label} className="py-4 border-b border-[#e2e2e4]">
              <p className="label-mono text-[#86868b] mb-1">{label}</p>
              <p className="text-[15px] text-[#1a1c1d] font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="divider mb-20" />

      {/* Contact CTA */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="headline-lg text-[#1a1c1d] mb-2">Let's talk.</h2>
          <p className="text-[15px] text-[#5d5e5f]">
            If you're working on something at the quantum or AI frontier —
            or just want to trade ideas — my inbox is open.
          </p>
        </div>
        <a
          href="mailto:sumit.sharma@icloud.com"
          className="btn-primary flex-shrink-0"
        >
          sumit.sharma@icloud.com
        </a>
      </div>

    </div>
  );
}
