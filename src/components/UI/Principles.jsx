import { motion } from "framer-motion";
import { HiOutlineShieldCheck, HiOutlineLightningBolt, HiOutlineCube } from "react-icons/hi";

const principles = [
  {
    icon: HiOutlineLightningBolt,
    title: "Optimize First",
    description:
      "Redis caching that cut Firebase read costs by 80%. InfluxDB migration that dropped API latency by ~500ms. Multiplayer server optimizations that reduced CPU by 35% while increasing concurrency by 48%. Performance isn't a retrofit — it's the architecture.",
    examples: [
      "Redis layer → 80% lower Firebase costs",
      "InfluxDB logging → 500ms faster API responses",
      "Concurrency fix → 35% less CPU, 48% more throughput",
      "IndexedDB caching → 1.4s faster loads, 80% less egress",
    ],
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Secure by Default",
    description:
      "GPG-signed commits required org-wide. Cloud Armor DDoS protection, Secret Manager credential rotation, and IAM policies deployed after identifying code injection incidents. Branch protection, review gates, and CI checks on every repo. Security gates are in the pipeline before the first PR merges.",
    examples: [
      "GPG-signed commits across all repos",
      "Cloud Armor + Secret Manager + IAM",
      "Branch protection + review gates + CI checks",
    ],
  },
  {
    icon: HiOutlineCube,
    title: "Own It End-to-End",
    description:
      "OTA update system for Raspberry Pi fleets: React frontend, Go backend, deployment scripts — all delivered end-to-end. Landslide detection system: from identifying the problem and building the prototype to testing and winning 1st Prize. Client websites from the first call to production deploy. I don't hand off — I close the loop.",
    examples: [
      "OTA system: React → Go → deployment → fleet",
      "Landslide detection: problem → prototype → 1st Prize",
      "SaaS dashboard: TypeScript + Next.js, ahead of schedule",
      "3 client websites delivered end-to-end in 3 months",
    ],
  },
];

export const Principles = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-2">
          How I Build<span className="text-gray-300 dark:text-gray-600">.</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 max-w-2xl">
          Patterns that show up in every system I design and ship.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {principles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-[#111]"
          >
            <p.icon className="text-gray-400 dark:text-gray-500 mb-3" size={24} />
            <h3 className="text-base font-bold text-black dark:text-white mb-1.5">
              {p.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
              {p.description}
            </p>
            <ul className="space-y-1">
              {p.examples.map((ex, j) => (
                <li key={j} className="text-xs text-gray-400 dark:text-gray-500 flex items-start gap-1.5">
                  <span className="mt-1 w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 shrink-0" />
                  {ex}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
