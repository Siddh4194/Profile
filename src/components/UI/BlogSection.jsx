import { motion } from "framer-motion";
import { FiBookOpen, FiEdit3, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

export const BlogSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-2">
              Writing<span className="text-gray-300 dark:text-gray-600">.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl">
              Thoughts on distributed systems, infrastructure, and engineering.
            </p>
          </div>
          <Link
            to="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors shrink-0"
          >
            <FiBookOpen size={14} />
            All posts
          </Link>
        </div>
      </motion.div>

      <div className="space-y-4">
        <Link
          to="/blog/amazon-prime-video-monolith"
          className="group block border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-[#111] hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/20 transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border text-violet-700 dark:text-violet-300 border-violet-400 dark:border-violet-600 bg-violet-50 dark:bg-violet-900/20">
              Blog
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-600 bg-orange-50 dark:bg-orange-900/20">
              System Design
            </span>
          </div>
          <h3 className="text-base font-bold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
            Amazon Prime Video: From Microservices to Monolith
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Amazon Prime Video cut VQA costs by 90% — not by adding more services, but by
            collapsing the whole pipeline into a single monolith. Here&apos;s why that worked.
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors mt-3">
            <FiBookOpen size={14} />
            Read full article
          </span>
        </Link>

        <Link
          to="/case-study/3rd-step-verification"
          className="group block border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-[#111] hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/20 transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border text-purple-700 dark:text-purple-300 border-purple-400 dark:border-purple-600 bg-purple-50 dark:bg-purple-900/20">
              Case Study
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20">
              Cryptography
            </span>
          </div>
          <h3 className="text-base font-bold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
            3rd Step Verification
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Chained cryptographic hashes that tie every social media post to a verified user — preventing anonymous abuse before it happens.
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors mt-3">
            <FiBookOpen size={14} />
            Read full case study
          </span>
        </Link>

        <Link
          to="/case-study/landslide-detection"
          className="group block border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-[#111] hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/20 transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border text-amber-700 dark:text-amber-300 border-amber-400 dark:border-amber-600 bg-amber-50 dark:bg-amber-900/20">
              Case Study
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border text-green-700 dark:text-green-400 border-green-300 dark:border-green-600 bg-green-50 dark:bg-green-900/20">
              IoT
            </span>
          </div>
          <h3 className="text-base font-bold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
            Landslide Early Detection System
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Copper rods in the soil, wire displacement triggers, and an alarm — how we built a simple early warning system for landslide-prone communities.
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors mt-3">
            <FiBookOpen size={14} />
            Read full case study
          </span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="border border-dashed border-gray-300 dark:border-gray-700 rounded-2xl p-8 bg-gray-50 dark:bg-white/[0.02] text-center max-w-lg"
        >
          <FiEdit3 size={28} className="mx-auto text-gray-300 dark:text-gray-600 mb-3" />
          <p className="text-sm text-gray-400 dark:text-gray-500 font-medium">
            More articles coming soon
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">
            Sharing insights on platform infrastructure, distributed systems,
            and building for scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
