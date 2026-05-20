import { motion } from "framer-motion";
import { FiEdit3 } from "react-icons/fi";

export const BlogSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-2">
          Writing<span className="text-gray-300 dark:text-gray-600">.</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 max-w-2xl">
          Thoughts on distributed systems, infrastructure, and engineering.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="border border-dashed border-gray-300 dark:border-gray-700 rounded-2xl p-10 bg-gray-50 dark:bg-white/[0.02] text-center max-w-lg"
      >
        <FiEdit3 size={32} className="mx-auto text-gray-300 dark:text-gray-600 mb-3" />
        <p className="text-sm text-gray-400 dark:text-gray-500 font-medium">
          Articles coming soon
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">
          Sharing insights on platform infrastructure, distributed systems,
          and building for scale.
        </p>
      </motion.div>
    </section>
  );
};
