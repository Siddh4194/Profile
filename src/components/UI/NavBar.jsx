import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiExternalLink, FiBookOpen } from "react-icons/fi";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Navbar = ({ isDark, toggleDark, activeSection }) => {
  const navLinks = [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex justify-between items-center text-black dark:text-white px-2">
      <a href="#" className="text-2xl font-bold tracking-tight">
        Siddhant<span className="text-gray-400">Kadam</span>
      </a>

      <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
          const isActive = activeSection === link.href.slice(1);
          return (
            <a
              key={link.label}
              href={link.href}
              className={`relative px-3 py-1.5 text-sm font-medium transition-colors rounded-lg ${
                isActive
                  ? "text-black dark:text-white bg-gray-100 dark:bg-white/10"
                  : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5"
              }`}
            >
              {link.label}
              {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-black dark:bg-white rounded-full" />
              )}
            </a>
          );
        })}
        <Link
          to="/case-study"
          className="relative px-3 py-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors rounded-lg flex items-center gap-1.5"
        >
          <FiBookOpen size={13} />
          Case Studies
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          className="flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          Resume <FiExternalLink size={14} />
        </a>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleDark}
          className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors p-1"
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
        </button>
        <a href="mailto:siddh4194@gmail.com" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" title="Email">
          <HiOutlineMail size={20} />
        </a>
        <a href="https://github.com/Siddh4194" target="_blank" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" title="GitHub">
          <FaGithub size={19} />
        </a>
        <a href="https://www.linkedin.com/in/siddhant-kadam/" target="_blank" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" title="LinkedIn">
          <FaLinkedin size={19} />
        </a>
      </div>
    </nav>
  );
};
