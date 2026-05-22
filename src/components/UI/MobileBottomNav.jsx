import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiExternalLink, FiChevronUp } from "react-icons/fi";

export const MobileBottomNav = ({ activeSection }) => {
  const [soddOpen, setSoddOpen] = useState(false);

  useEffect(() => {
    const handler = (e) => setSoddOpen(e.detail.open);
    window.addEventListener("sodd-state", handler);
    return () => window.removeEventListener("sodd-state", handler);
  }, []);

  const navLinks = [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
      {!soddOpen && (
        <button
          onClick={() => window.dispatchEvent(new CustomEvent("open-sodd"))}
          className="flex items-center gap-1.5 px-4 py-1.5 mb-1 text-xs font-semibold text-gray-500 dark:text-gray-400 bg-white/90 dark:bg-[#111]/90 backdrop-blur-lg border border-gray-200 dark:border-gray-800 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all"
        >
          <FiChevronUp size={14} />
          Ask AI
        </button>
      )}
      <nav className="flex items-center gap-1 bg-white/90 dark:bg-[#111]/90 backdrop-blur-lg border border-gray-200 dark:border-gray-800 rounded-2xl px-3 py-3 shadow-lg shadow-black/5 dark:shadow-black/20 overflow-x-auto max-w-[92vw]">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.slice(1);
          return (
            <a
              key={link.label}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg whitespace-nowrap ${
                isActive
                  ? "text-black dark:text-white bg-gray-100 dark:bg-white/10"
                  : "text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white"
              }`}
            >
              {link.label}
            </a>
          );
        })}
        <Link
          to="/case-study"
          className="px-3 py-2 text-sm font-medium text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors rounded-lg whitespace-nowrap"
        >
          Case Studies
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors rounded-lg whitespace-nowrap"
        >
          Resume <FiExternalLink size={12} />
        </a>
      </nav>
    </div>
  );
};
