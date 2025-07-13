import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.div
      className="w-full h-screen flex flex-col lg:flex-row justify-between items-center px-6 md:px-16 bg-white dark:bg-[#0f0f0f] text-black dark:text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1 className="flex-1 text-center text-6xl md:text-8xl font-extrabold">
        About
      </h1>

      <div className="flex-1 mt-10 lg:mt-0 lg:pl-16 max-w-2xl">
        <h3 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-semibold leading-relaxed">
          I'm Siddhant Kadam — a system-focused software engineer who believes
          in building clean, scalable, and long-lasting backend systems.
          Passionate about learning from real-world architectures and solving
          problems beyond the UI.
        </h3>
      </div>
    </motion.div>
  );
};
