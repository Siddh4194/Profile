import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "AI Agent — Load Balancer Monitor & Diagnostician",
    desc: "An intelligent agent that continuously monitors a load balancer and its nodes. When a node turns unhealthy, the agent autonomously SSHes into the server, diagnoses the root cause (CPU spike, memory exhaustion, disk full, crashed process), and reports findings — reducing MTTR without human intervention.",
    stack: ["Go", "LLM", "Infrastructure Automation", "Distributed Systems"],
    url: "https://github.com/Siddh4194",
    status: "In Progress",
  },
  {
    title: "3rd Step Verification",
    desc: "Blockchain-based verification mechanism using cryptographic hash keys to solve multi-step authentication issues in social media workflows.",
    stack: ["Blockchain", "Cryptography", "Authentication"],
    url: "https://github.com/Siddh4194/3rdStepVerification",
    status: "Completed",
  },
  {
    title: "Speak to Doc",
    desc: "Voice-command website for note-making and letter writing — emphasizing accessibility for users with disabilities. Built with Web Speech API for real-time voice-to-text conversion.",
    stack: ["Web Speech API", "JavaScript", "Accessibility"],
    url: "https://github.com/Siddh4194/Speec-To-Doc",
    status: "Completed",
  },
  {
    title: "NMCOE AI Chatbot",
    desc: "LLM-based chatbot system using few-shot prompt engineering and contextual awareness to streamline the college admission process and automate responses to student queries.",
    stack: ["LLM", "Few-shot Prompting", "AI", "Contextual AI"],
    url: "https://aptous-nmce.vercel.app/",
    status: "Completed",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="w-full max-w-4xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-2">
          Projects<span className="text-gray-300 dark:text-gray-600">.</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 max-w-2xl">
          Side projects and systems I&apos;ve built — from blockchain auth to AI
          agents and accessibility tools.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="group border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-[#111] hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md dark:hover:shadow-black/20 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold text-black dark:text-white">{project.title}</h3>
              <span
                className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                  project.status === "In Progress"
                    ? "text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-600 bg-yellow-50 dark:bg-yellow-900/20"
                    : "text-green-700 dark:text-green-400 border-green-300 dark:border-green-600 bg-green-50 dark:bg-green-900/20"
                }`}
              >
                {project.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.stack.map((tech, j) => (
                <span
                  key={j}
                  className="text-[11px] font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.url}
              target="_blank"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <FiGithub size={15} />
              View on GitHub
              <FiExternalLink size={13} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
