import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Articles and ideas from Small Qubit Labs — on quantum computing, AI systems, and the craft of building precision software.",
};

const articles = [
  {
    slug: "why-quantum-matters-for-ai",
    tag: "Quantum · AI",
    date: "May 2026",
    title: "Why Quantum Matters for AI",
    summary:
      "The convergence of quantum computing and artificial intelligence isn't a distant prospect — it's already reshaping how we think about computation, optimisation, and the limits of machine learning. Here's why it matters, and what to watch.",
    readTime: "8 min read",
  },
];

export default function Writing() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20">

      {/* Header */}
      <div className="max-w-2xl mb-20">
        <p className="label-mono text-[#e30613] mb-8">Writing</p>
        <h1 className="display-xl text-[#1a1c1d] mb-6">
          Ideas, made precise.
        </h1>
        <p className="body-lg text-[#5d5e5f]">
          Writing from the lab on quantum computing, AI systems, and the
          principles behind building software that lasts. Rigorous, but
          readable. Published when ready — not on a schedule.
        </p>
      </div>

      <hr className="divider mb-20" />

      {/* Article list */}
      <div className="space-y-4">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/writing/${article.slug}`}
            className="block group"
          >
            <div className="card hover:border-[#c0c0c0] transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="badge">{article.tag}</span>
                    <span className="label-mono text-[#86868b]">{article.date}</span>
                    <span className="label-mono text-[#c0c0c0]">{article.readTime}</span>
                  </div>
                  <h2 className="headline-md text-[#1a1c1d] mb-3 group-hover:text-[#e30613] transition-colors duration-150">
                    {article.title}
                  </h2>
                  <p className="text-[15px] text-[#5d5e5f] leading-relaxed max-w-2xl">
                    {article.summary}
                  </p>
                </div>
                <span className="hidden md:block text-[24px] text-[#e2e2e4] group-hover:text-[#e30613] transition-colors duration-150 flex-shrink-0 mt-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
