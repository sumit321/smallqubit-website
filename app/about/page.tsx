import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "I'm Sumit Sharma — a Senior Solutions Architect building Small Qubit Labs at the intersection of quantum computing and AI.",
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
            By day, I work as a Senior Solutions Architect at Nintex — helping
            enterprise organisations design and implement intelligent automation
            systems. Over the years I've seen firsthand how the right
            architecture can transform how a business operates, and equally,
            how the wrong one can quietly calcify it.
          </p>
          <p>
            Small Qubit Labs is where I explore the edges. The name is
            deliberate: a qubit is the fundamental unit of quantum
            information — probabilistic, entangled, capable of existing in
            multiple states simultaneously. It's a fitting metaphor for the
            kind of thinking I find most interesting: ideas that resist
            simple categorisation, problems that require you to hold multiple
            realities at once before collapsing into an answer.
          </p>
          <p>
            The lab sits at the intersection of quantum computing, artificial
            intelligence, and precision software design. Not because those
            fields are fashionable — they are — but because together they
            represent the most significant shift in computation since the
            transistor. I want to understand that shift deeply, build things
            that test those ideas, and write honestly about what I find.
          </p>
        </div>
      </div>

      <hr className="divider mb-20" />

      {/* Vision */}
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
            I'm inspired by the way Apple approached product design — the
            belief that the details are not the details, they make the design.
            That philosophy applies as much to a quantum algorithm as to a
            button radius. Precision isn't perfectionism. It's respect for
            the person on the other end.
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
