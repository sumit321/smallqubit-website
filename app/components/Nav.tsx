"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Lab", href: "/lab" },
  { label: "AI Lab", href: "/ai-lab" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-[#e2e2e4] bg-white/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">

        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="w-2 h-2 rounded-full bg-[#e30613] flex-shrink-0" aria-hidden="true" />
          <span className="text-[15px] font-semibold tracking-tight text-[#1a1c1d]">
            Small Qubit Labs
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`text-[14px] font-medium transition-colors duration-150 ${
                  active
                    ? "text-[#1a1c1d]"
                    : "text-[#86868b] hover:text-[#1a1c1d]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href="mailto:sumit.sharma@icloud.com"
          className="hidden md:inline-flex items-center px-4 py-2 text-[13px] font-medium text-white bg-[#e30613] hover:bg-[#bc000a] rounded-[4px] transition-colors duration-150"
        >
          Get in touch
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-[#1a1c1d] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-[#1a1c1d] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-[#1a1c1d] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#e2e2e4] bg-white px-6 py-4 flex flex-col gap-4">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[15px] font-medium text-[#1a1c1d]"
            >
              {label}
            </Link>
          ))}
          <a
            href="mailto:sumit.sharma@icloud.com"
            className="inline-flex items-center justify-center px-4 py-2 text-[13px] font-medium text-white bg-[#e30613] rounded-[4px] mt-2"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
