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
    <header className="w-full border-b border-[var(--color-outline-hairline)] bg-white/90 backdrop-blur-[4px] sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">

        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="dot" aria-hidden="true" />
          <span className="text-[15px] font-semibold tracking-tight text-[var(--color-on-surface)]">
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
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-secondary-text)] hover:text-[var(--color-on-surface)]"
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
          className="hidden md:inline-flex btn-primary !py-2 !px-4 !text-[13px]"
        >
          Get in touch
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-[var(--color-on-surface)] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-[var(--color-on-surface)] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-[var(--color-on-surface)] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--color-outline-hairline)] bg-white px-6 py-4 flex flex-col gap-4">
          {links.map(({ label, href }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-[15px] font-medium ${
                  active ? "text-[var(--color-primary)]" : "text-[var(--color-on-surface)]"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="mailto:sumit.sharma@icloud.com"
            className="btn-primary !justify-center mt-2"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
