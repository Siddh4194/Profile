import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiBookOpen } from "react-icons/fi";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "AI Agent — Load Balancer Monitor & Diagnostician",
    desc: "An intelligent agent that continuously monitors a load balancer and its nodes. When a node turns unhealthy, the agent autonomously SSHes into the server, diagnoses the root cause, and reports findings — reducing MTTR without human intervention.",
    stack: ["Go", "LLM", "Infrastructure Automation", "Distributed Systems"],
    url: "https://github.com/Siddh4194",
    status: "In Progress",
    result: "Reducing MTTR from hours to minutes",
  },
  {
    title: "3rd Step Verification",
    desc: "Inspired by social media posts escalating into real-world harm (Satara incident, 2023), built a cryptographic hash-chain verification system. Every post requires a unique hash emailed to the user — eliminating anonymous abuse.",
    stack: ["Cryptography", "Hash Chaining", "Authentication"],
    url: "https://github.com/Siddh4194/3rdStepVerification",
    caseStudyLink: "/case-study/3rd-step-verification",
    articleUrl: "https://www.thehindu.com/news/cities/mumbai/at-least-one-dead-10-injured-internet-suspended-in-maharashtras-satara-over-social-media-post/article67295790.ece",
    status: "Completed",
    period: "Oct 2023 – May 2024",
    result: "Eliminates anonymous posting via cryptographic identity",
  },
  {
    title: "Speak to Doc",
    desc: "Voice-command website for note-making and letter writing — emphasizing accessibility for users with disabilities. Content is generated entirely by AI from voice input. Built with Web Speech API for real-time voice-to-text conversion.",
    stack: ["Web Speech API", "Google Gen AI API", "LLM", "Accessibility"],
    url: "https://github.com/Siddh4194/Speec-To-Doc",
    status: "Completed",
    period: "Aug 2023 – Sep 2023",
    result: "Voice-driven accessibility for note-making",
  },
  {
    title: "NMCOE AI Chatbot",
    desc: "LLM-based chatbot system using few-shot prompt engineering and contextual awareness to streamline the college admission process and automate responses to student queries.",
    stack: ["LLM", "Few-shot Prompting", "AI", "Contextual AI"],
    url: "https://aptous-nmce.vercel.app/",
    status: "Completed",
    result: "Automated admissions query handling",
  },
  {
    title: "Landslide Early Detection System",
    desc: 'Inspired by the Taliye landslide tragedy in Maharashtra (covered by Hindustan Times), built an early detection system using copper rods embedded in soil. When the ground shifts, the rod position changes, triggering an alarm. Simple, mechanical, effective.',
    stack: ["Sensor Prototyping", "Hardware", "Mechanical Trigger", "Embedded Systems"],
    articleUrl: "https://www.hindustantimes.com/india-news/hopes-of-finding-survivors-in-landslide-hit-maharashtra-villages-fade-101627111873712.html",
    caseStudyLink: "/case-study/landslide-detection",
    url: null,
    status: "1st Prize",
    result: "1st Prize — proven mechanical detection system",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="w-full max-w-4xl mx-auto px-6 py-16 scroll-mt-[72px]">
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
                    : project.status === "1st Prize"
                    ? "text-amber-700 dark:text-amber-300 border-amber-400 dark:border-amber-600 bg-amber-50 dark:bg-amber-900/20"
                    : "text-green-700 dark:text-green-400 border-green-300 dark:border-green-600 bg-green-50 dark:bg-green-900/20"
                }`}
              >
                {project.status}
              </span>
            </div>
            {project.period && (
              <p className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-2">
                {project.period}
              </p>
            )}
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              {project.desc}
            </p>
            {project.result && (
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500" />
                {project.result}
              </p>
            )}
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
            <div className="flex items-center gap-4 flex-wrap">
              {project.caseStudyLink && (
                <Link
                  to={project.caseStudyLink}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-black dark:text-white bg-gray-100 dark:bg-white/10 px-3 py-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
                >
                  <FiBookOpen size={15} />
                  Full Case Study
                </Link>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <FiGithub size={15} />
                  View on GitHub
                  <FiExternalLink size={13} />
                </a>
              )}
              {project.articleUrl && (
                <a
                  href={project.articleUrl}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <FiExternalLink size={15} />
                  Inspired by
                  <FiExternalLink size={13} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
