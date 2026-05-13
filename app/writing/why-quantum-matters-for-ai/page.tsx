import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Quantum Matters for AI",
  description:
    "The convergence of quantum computing and AI is reshaping how we think about computation and the limits of machine learning. Here's why it matters.",
};

export default function WhyQuantumMatters() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20">

      {/* Back link */}
      <Link
        href="/writing"
        className="label-mono text-[#86868b] hover:text-[#1a1c1d] transition-colors duration-150 mb-16 inline-block"
      >
        ← Writing
      </Link>

      {/* Article header */}
      <div className="max-w-2xl mb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="badge">Quantum · AI</span>
          <span className="label-mono text-[#86868b]">May 2026</span>
          <span className="label-mono text-[#c0c0c0]">8 min read</span>
        </div>
        <h1 className="display-xl text-[#1a1c1d] mb-6">
          Why Quantum Matters for AI
        </h1>
        <p className="body-lg text-[#5d5e5f]">
          The convergence of quantum computing and artificial intelligence
          isn't a distant prospect. It's already reshaping how we think
          about computation, optimisation, and the limits of machine
          learning.
        </p>
      </div>

      <hr className="divider mb-16" />

      {/* Article body */}
      <article className="max-w-2xl space-y-8 text-[17px] text-[#3a3a3a] leading-[1.8]">

        <p>
          There's a version of the quantum-AI story that gets told a lot —
          usually in conference keynotes and venture capital decks. It goes
          something like this: quantum computers will soon be so powerful
          that they'll train neural networks in seconds, cracking problems
          that would take classical machines the lifetime of the universe.
          This version is mostly fiction. But the true story is more
          interesting.
        </p>

        <h2 className="headline-md text-[#1a1c1d] pt-4">
          The honest state of play
        </h2>

        <p>
          Quantum computers today are noisy, error-prone, and limited in
          qubit count. We are firmly in what researchers call the NISQ era —
          Noisy Intermediate-Scale Quantum — and the honest assessment is
          that general-purpose quantum advantage over classical hardware for
          most AI workloads is years, possibly decades, away.
        </p>

        <p>
          That's the caveat. Here's why none of it diminishes the importance
          of paying close attention right now.
        </p>

        <h2 className="headline-md text-[#1a1c1d] pt-4">
          The optimisation problem at the heart of AI
        </h2>

        <p>
          Almost every meaningful AI task reduces to an optimisation problem.
          Training a neural network is minimising a loss function over a
          landscape of billions of parameters. Designing a drug molecule is
          finding a configuration in a chemical space so vast it dwarfs the
          number of atoms in the observable universe. Scheduling a logistics
          network is navigating a combinatorial explosion that grows faster
          than any classical algorithm can chase.
        </p>

        <p>
          Classical computers handle these problems through approximation,
          heuristics, and brute computational force. They are remarkably good
          at it. But they are not solving the underlying problem — they are
          finding good-enough answers within tractable time constraints.
          Quantum computers, by exploiting superposition and entanglement,
          can explore solution spaces in a fundamentally different way.
          Not always faster. But differently — and for certain problem
          structures, decisively better.
        </p>

        <h2 className="headline-md text-[#1a1c1d] pt-4">
          Where the intersection is already real
        </h2>

        <p>
          Three areas are worth watching closely today — not because they
          are solved, but because the research is producing results that
          weren't possible two years ago.
        </p>

        <p>
          <strong className="font-semibold text-[#1a1c1d]">Quantum kernel methods.</strong>{" "}
          Classical support vector machines use kernel functions to map data
          into high-dimensional spaces where it becomes linearly separable.
          Quantum kernels use quantum circuits to compute these inner
          products — potentially accessing feature spaces that no classical
          kernel can efficiently represent. For certain datasets, early
          experiments show measurable advantage. The challenge is identifying
          which datasets and why.
        </p>

        <p>
          <strong className="font-semibold text-[#1a1c1d]">Variational quantum algorithms.</strong>{" "}
          VQE and QAOA are hybrid approaches — quantum circuits parameterised
          by classical optimisers. They're imperfect on today's hardware but
          represent the most credible path to near-term quantum advantage for
          optimisation tasks. The implication for AI: hyperparameter
          optimisation, neural architecture search, and reinforcement learning
          reward landscapes are all candidates.
        </p>

        <p>
          <strong className="font-semibold text-[#1a1c1d]">Quantum simulation for scientific AI.</strong>{" "}
          The most near-term advantage is arguably here — using quantum
          computers to simulate quantum systems (molecules, materials,
          chemical reactions) that are intractable for classical hardware.
          The AI connection: models trained on quantum-simulated data will
          be categorically more accurate for drug discovery, materials
          science, and climate modelling than anything trained on classical
          approximations.
        </p>

        <h2 className="headline-md text-[#1a1c1d] pt-4">
          What this means for builders
        </h2>

        <p>
          If you're building AI systems today, quantum computing is not yet
          something you need to integrate. But it is something you should
          understand architecturally — because the systems being designed now
          will still be running when quantum-classical hybrid approaches
          become standard. The question is whether your architecture is ready
          to absorb that transition gracefully, or whether it will require
          a painful rewrite.
        </p>

        <p>
          The pattern I see repeatedly in enterprise architecture: teams
          optimise for the immediate problem and ignore the known-unknown
          transitions on the horizon. Quantum computing is a known-unknown
          transition. The timeline is uncertain. The direction is not.
        </p>

        <h2 className="headline-md text-[#1a1c1d] pt-4">
          The lab's position
        </h2>

        <p>
          Small Qubit Labs takes a specific stance: quantum computing's
          importance to AI is real but routinely overstated in the short
          term and understated in the long term. The right posture is neither
          dismissal nor hype — it's rigorous, patient attention to where
          genuine advantage emerges, combined with architectural thinking
          that prepares for integration before it becomes urgent.
        </p>

        <p>
          That's what the lab is for. Not to predict the future, but to
          test it — one experiment at a time.
        </p>

        {/* Byline */}
        <div className="pt-8 border-t border-[#e2e2e4]">
          <p className="label-mono text-[#86868b]">
            Sumit Sharma · Small Qubit Labs · May 2026
          </p>
        </div>

      </article>

      {/* Back link bottom */}
      <div className="mt-16">
        <Link
          href="/writing"
          className="label-mono text-[#86868b] hover:text-[#1a1c1d] transition-colors duration-150"
        >
          ← All articles
        </Link>
      </div>

    </div>
  );
}
