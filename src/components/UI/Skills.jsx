import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "Languages",
    skills: ["Go", "TypeScript", "JavaScript", "Python", "Java", "SQL"],
  },
  {
    label: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Redux",
      "TailwindCSS",
      "Material UI",
      "Shadcn",
      "React Query",
    ],
  },
  {
    label: "Backend",
    skills: ["Go", "Node.js", "REST APIs", "WebSockets", "Server-Sent Events"],
  },
  {
    label: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "InfluxDB"],
  },
  {
    label: "DevOps & Cloud",
    skills: [
      "Google Cloud Platform",
      "Compute Engine",
      "Cloud Armor",
      "IAM",
      "Secret Manager",
      "Docker",
      "CI/CD",
      "Linux",
      "Git",
    ],
  },
  {
    label: "Distributed Systems & IoT",
    skills: [
      "Redis Caching",
      "MQTT (ACL-based)",
      "Real-time Messaging",
      "Event-Driven Architecture",
      "Multi-tenant Auth",
      "Raspberry Pi",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export const Skills = () => {
  return (
    <section id="skills" className="w-full max-w-4xl mx-auto px-6 py-16 scroll-mt-[72px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-2">
          Skills<span className="text-gray-300 dark:text-gray-600">.</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 max-w-2xl">
          Technologies and tools I work with — from the language layer to
          production infrastructure.
        </p>
      </motion.div>

      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((cat, i) => (
          <motion.div key={i} variants={itemVariants}>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <span
                  key={j}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
