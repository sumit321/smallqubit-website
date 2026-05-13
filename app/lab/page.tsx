import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "The Small Qubit Labs research agenda — quantum computing, AI systems, and precision software. Active explorations and upcoming experiments.",
};

export default function Lab() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20">

      {/* Header */}
      <div className="max-w-2xl mb-20">
        <p className="label-mono text-[#e30613] mb-8">The Lab</p>
        <h1 className="display-xl text-[#1a1c1d] mb-6">
          Where ideas get tested.
        </h1>
        <p className="body-lg text-[#5d5e5f]">
          The lab is the engine of Small Qubit Labs. Not a portfolio of
          finished work — a live record of what's being explored, built, and
          questioned. Everything here is in motion.
        </p>
      </div>

      <hr className="divider mb-20" />

      {/* Status indicator */}
      <div className="flex items-center gap-3 mb-16">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#e30613] animate-pulse" />
          <span className="label-mono text-[#86868b]">Lab status: active</span>
        </span>
      </div>

      {/* Areas of exploration */}
      <div className="mb-20">
        <p className="label-mono text-[#86868b] mb-12">Areas of exploration</p>
        <div className="space-y-4">
          {[
            {
              tag: "Quantum Algorithms",
              status: "Ongoing research",
              title: "Hybrid quantum-classical optimisation",
              body: "Investigating QAOA and VQE approaches for combinatorial optimisation problems that are relevant to enterprise scheduling, logistics, and financial modelling. The goal: identify where near-term quantum hardware can outperform classical solvers on real-world problem sizes.",
            },
            {
              tag: "AI Transformation",
              status: "Active practice",
              title: "Architectural patterns for enterprise AI",
              body: "Drawing on solutions architecture experience to define robust patterns for integrating LLMs, agents, and AI pipelines into existing enterprise systems — without the chaos. Focused on observability, reliability, and the kind of AI that actually stays in production.",
            },
            {
              tag: "Quantum + AI",
              status: "Early exploration",
              title: "Quantum-enhanced machine learning",
              body: "Exploring where quantum feature maps and quantum kernels might provide measurable advantages over classical approaches in high-dimensional classification problems. Honest assessment: most claims in this space are premature. The lab's job is to find the exceptions.",
            },
            {
              tag: "Software Design",
              status: "Continuous",
              title: "Precision interfaces for complex systems",
              body: "Building and documenting the design principles that make technically complex software feel inevitable and simple. Inspired by the discipline of quantum circuit notation — every gate placed deliberately, nothing wasted.",
            },
          ].map((item) => (
            <div key={item.tag} className="card group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="badge">{item.tag}</span>
                </div>
                <span className="label-mono text-[#86868b]">{item.status}</span>
              </div>
              <h2 className="headline-md text-[#1a1c1d] mb-3">{item.title}</h2>
              <p className="text-[15px] text-[#5d5e5f] leading-relaxed max-w-3xl">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <hr className="divider mb-20" />

      {/* What's coming */}
      <div className="mb-20">
        <p className="label-mono text-[#86868b] mb-12">On the workbench</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              tag: "Coming soon",
              title: "Quantum circuit simulator",
              body: "A minimal, browser-based tool for visualising and running small quantum circuits. Built for intuition, not production.",
            },
            {
              tag: "Coming soon",
              title: "AI transformation playbook",
              body: "A structured framework for taking enterprise AI from proof-of-concept to production — drawing on real architecture patterns and honest failure modes.",
            },
            {
              tag: "Coming soon",
              title: "Open-source experiments",
              body: "Small, well-documented repositories exploring specific ideas. Each one a hypothesis. Each one public.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="card border-dashed opacity-70"
            >
              <span className="badge mb-4 block">{item.tag}</span>
              <h3 className="headline-md text-[#1a1c1d] mb-3">{item.title}</h3>
              <p className="text-[15px] text-[#5d5e5f] leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <hr className="divider mb-20" />

      {/* CTA */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="headline-lg text-[#1a1c1d] mb-2">
            Interested in collaborating?
          </h2>
          <p className="text-[15px] text-[#5d5e5f]">
            If you're working on something in this space — or have a problem
            that might benefit from a quantum or AI lens — I'd like to hear
            about it.
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
