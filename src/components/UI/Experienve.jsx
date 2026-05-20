import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiExternalLink } from "react-icons/fi";
import {
  HiOutlineLightningBolt,
  HiOutlineDesktopComputer,
  HiOutlineShieldCheck,
  HiOutlineCube,
} from "react-icons/hi";
import { BsHddNetwork } from "react-icons/bs";

const experienceData = [
  {
    company: "Krishworks Technology and Research Labs Pvt. Ltd",
    role: "Software Developer",
    period: "June 2024 – Present",
    website: "https://krishworkstech.com/",
    icon: HiOutlineLightningBolt,
    categories: [
      {
        label: "Infrastructure & Performance",
        Icon: HiOutlineLightningBolt,
        items: [
          "Reduced Firebase read costs by 80% via Redis caching layer + optimized access patterns, cutting database costs and enabling game server scalability.",
          "Migrated high-volume logging to InfluxDB time-series architecture, improving API response latency by ~500ms and enabling real-time telemetry monitoring.",
          "Led multiplayer game infra team — delivered 1-month project in 1.5 weeks (25% faster), resolving Redis concurrency bottlenecks. Reduced CPU by 35%, increased concurrency by 48%.",
        ],
      },
      {
        label: "IoT & Device Management",
        Icon: BsHddNetwork,
        items: [
          "Built end-to-end OTA update system for Raspberry Pi fleet: React frontend + Golang backend + deployment scripts. Zero-downtime firmware updates across production devices.",
          "Architected multi-tenant MQTT communication with user-level ACL rules + API-key authentication, reducing auth latency via caching and enabling secure device connections.",
        ],
      },
      {
        label: "Security & Platform Reliability",
        Icon: HiOutlineShieldCheck,
        items: [
          "Identified malicious code injection incidents and led security hardening: deployed Google Cloud Armor DDoS protection, Secret Manager credential rotation, and IAM policies. Established Git security standard (GPG-signed commits) across all repositories.",
          "Owned GitHub org governance — branch protection, review gates, required CI checks — improving release reliability and reducing unsafe production merges.",
        ],
      },
      {
        label: "Frontend & Developer Experience",
        Icon: HiOutlineDesktopComputer,
        items: [
          "Built SaaS admin dashboard ahead of schedule using TypeScript + Next.js 19, leveraging React 19 async UI patterns (Server Components, Suspense). Established frontend architecture best practices adopted across team.",
          "Implemented multilingual frontend caching (IndexedDB), reducing page load times by 1.4 seconds for international users and cutting Firebase egress costs by 80%.",
        ],
      },
    ],
  },
  {
    company: "Work Technologies",
    role: "Full Stack Developer (Freelance)",
    period: "January 2024 – March 2024",
    website: "https://worktechnologies.co.in/",
    icon: HiOutlineCube,
    categories: [
      {
        label: "Client Projects",
        Icon: HiOutlineCube,
        items: [
          "Architected and delivered 2+ production-ready client applications using React and Node.js.",
          "CRT Bionics — admin dashboard + payment integration, boosting performance and UX.",
          "Work Technologies — responsive UI using TailwindCSS and React.",
        ],
      },
    ],
  },
];

const ExpandableCard = ({ entry }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border border-gray-200 dark:border-gray-800 rounded-2xl bg-white dark:bg-[#111] shadow-sm"
    >
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <a
              href={entry.website}
              target="_blank"
              className="text-xl font-bold text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors flex items-center gap-1.5"
            >
              {entry.company} <FiExternalLink size={16} className="text-gray-400" />
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">
              {entry.role} · {entry.period}
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 pb-2 space-y-2">
        {entry.categories.map((cat, i) => (
          <div key={i} className="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                <cat.Icon size={16} />
                {cat.label}
              </span>
              <motion.div
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiChevronDown size={16} className="text-gray-400" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 space-y-2">
                    {cat.items.map((item, j) => (
                      <p key={j} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-6 border-l-2 border-gray-200 dark:border-gray-700">
                        {item}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="w-full max-w-4xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-2">
          Experience<span className="text-gray-300 dark:text-gray-600">.</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 max-w-2xl">
          Building platform infrastructure, distributed systems, and developer
          tooling — from multiplayer game servers to IoT fleets.
        </p>
      </motion.div>

      <div className="space-y-8">
        {experienceData.map((entry, i) => (
          <ExpandableCard key={i} entry={entry} />
        ))}
      </div>
    </section>
  );
};
