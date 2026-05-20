import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";

export const Education = () => {
  return (
    <section id="education" className="w-full max-w-4xl mx-auto px-6 py-16 scroll-mt-[72px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-2">
          Education<span className="text-gray-300 dark:text-gray-600">.</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 max-w-2xl">
          Academic background in Computer Science and Engineering.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-[#111] shadow-sm max-w-lg"
      >
        <div className="flex items-start gap-4">
          <div className="p-2.5 bg-gray-100 dark:bg-white/5 rounded-xl">
            <FiBookOpen size={22} className="text-gray-600 dark:text-gray-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-black dark:text-white">
              B.Tech – Computer Science and Engineering
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">
              Nanasaheb Mahadik College of Engineering, Sangli
            </p>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                CGPA: <span className="text-black dark:text-white">8.00</span>
              </span>
              <span className="text-sm text-gray-400 dark:text-gray-600">|</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">2020 – 2024</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
