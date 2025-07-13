import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const Projects = () => {
  const scrollContainerRef = useRef(null);

  // Horizontal scroll with vertical wheel
  useEffect(() => {
    const el = scrollContainerRef.current;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollBy({
          left: -e.deltaY,
          behavior: "smooth",
        });
      }
    };

    if (el) el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el?.removeEventListener("wheel", handleWheel);
  }, []);

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  const projects = [
    {
      title: "AI Agent for Backend Generation",
      desc: `Built an agent that auto-generates restaurant backend systems using structured input. Connected Redis vector DB for intelligent memory and async processing.`,
      stack: "Go, Node.js, Redis, Async, CI/CD",
      url: "https://github.com/your-ai-agent-project",
    },
    {
      title: "Secure Multi-Role Backend",
      desc: `Implemented a backend using factory methods and repository pattern with role-based auth, sharding, and Redis caching.`,
      stack: "Go, PostgreSQL, Redis, JWT",
      url: "https://github.com/your-secure-backend",
    },
    // ... Add more projects as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="h-full w-full flex flex-col justify-center"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-black pb-10 w-fit">
        Projects<span className="text-gray-500">.</span>
      </h1>

      <div
        className="flex gap-6 h-[50%] w-[90%] overflow-x-scroll scroll-smooth"
        ref={scrollContainerRef}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="border border-gray-300 rounded-2xl p-6 shadow-sm bg-white hover:shadow-md transition h-full min-w-[30rem]"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <h2 className="text-2xl font-bold text-black mb-2">
              {project.title}
            </h2>
            <p className="text-gray-700 text-lg">{project.desc}</p>
            <p className="mt-2 text-sm text-gray-600 italic">{project.stack}</p>
            <div className="mt-3">
              <a
                href={project.url}
                target="_blank"
                className="text-blue-600 underline text-sm"
              >
                View Code →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
