import { motion } from "framer-motion";
import { HiOutlineShieldCheck, HiOutlineLightningBolt, HiOutlineCube } from "react-icons/hi";

const principles = [
  {
    icon: HiOutlineLightningBolt,
    title: "Optimize First",
    description:
      "Redis caching layers, InfluxDB migration for telemetry, tiered multilingual storage. Performance is the architecture, not a retrofit.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Secure by Default",
    description:
      "Cloud Armor DDoS protection, Secret Manager credential rotation, IAM policies, GPG-signed commits across every repository.",
  },
  {
    icon: HiOutlineCube,
    title: "Own It End-to-End",
    description:
      "React frontend to Go backend to deployment scripts. CI/CD, monitoring, team standards, production reliability — I own the whole path.",
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
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {p.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
