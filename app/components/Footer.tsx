export default function Footer() {
  return (
    <footer className="border-t border-[#e2e2e4] bg-white mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e30613]" aria-hidden="true" />
          <span className="text-[13px] font-medium text-[#1a1c1d]">Small Qubit Labs</span>
        </div>

        <p className="label-mono text-[#86868b]">
          © {new Date().getFullYear()} · smallqubit.com
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/sumit321"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#86868b] hover:text-[#1a1c1d] transition-colors duration-150"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sumitsharma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#86868b] hover:text-[#1a1c1d] transition-colors duration-150"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sumit.sharma@icloud.com"
            className="text-[13px] text-[#86868b] hover:text-[#1a1c1d] transition-colors duration-150"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}
