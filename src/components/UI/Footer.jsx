import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export const Footer = () => {
  const links = [
    {
      label: "Email",
      href: "mailto:siddh4194@gmail.com",
      icon: FiMail,
    },
    {
      label: "GitHub",
      href: "https://github.com/siddh4194",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/siddhant-kadam/",
      icon: FaLinkedin,
    },
  ];

  return (
    <footer className="w-full border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Siddhant Kadam
        </p>
        <div className="flex items-center gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              className="text-sm text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5"
              title={link.label}
            >
              <link.icon size={16} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
