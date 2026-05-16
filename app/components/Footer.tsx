export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-outline-hairline)] bg-white mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-2">
          <span className="dot dot--sm" aria-hidden="true" />
          <span className="text-[13px] font-medium text-[var(--color-on-surface)]">Small Qubit Labs</span>
        </div>

        <p className="label-mono" style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} &middot; smallqubit.com
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/sumit321"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[var(--color-secondary-text)] hover:text-[var(--color-on-surface)] transition-colors duration-150"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sumitsharma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[var(--color-secondary-text)] hover:text-[var(--color-on-surface)] transition-colors duration-150"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sumit.sharma@icloud.com"
            className="text-[13px] text-[var(--color-secondary-text)] hover:text-[var(--color-on-surface)] transition-colors duration-150"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}
