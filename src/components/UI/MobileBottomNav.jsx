import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

export const MobileBottomNav = ({ activeSection }) => {
  const navLinks = [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-white/90 dark:bg-[#111]/90 backdrop-blur-lg border border-gray-200 dark:border-gray-800 rounded-2xl px-3 py-3 shadow-lg shadow-black/5 dark:shadow-black/20 overflow-x-auto max-w-[92vw]">
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
  );
};
