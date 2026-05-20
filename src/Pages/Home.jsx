import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "../components/UI/NavBar";
import { Experience } from "../components/UI/Experienve";
import { Projects } from "../components/UI/Projects";
import { Skills } from "../components/UI/Skills";
import { Education } from "../components/UI/Education";
import { Footer } from "../components/UI/Footer";
import { Principles } from "../components/UI/Principles";
import { BlogSection } from "../components/UI/BlogSection";
import { ScrollToTop } from "../components/UI/ScrollToTop";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiArrowDown, FiExternalLink } from "react-icons/fi";

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-black dark:hover:text-white transition-colors"
    title={label}
  >
    <Icon size={18} />
    {label}
  </a>
);

const SummarySection = () => (
  <section className="w-full max-w-4xl mx-auto px-6 py-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-2">
        About<span className="text-gray-300 dark:text-gray-600">.</span>
      </h2>
      <div className="max-w-3xl space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
        <p>
          Full-Stack Engineer specializing in platform infrastructure — building
          for scale. Expert in Go/Node.js, cloud architecture (GCP), and
          distributed systems (Redis, MQTT, IoT).
        </p>
        <p>
          Delivered measurable impact: <strong className="text-black dark:text-white">80% database cost reduction</strong>,
          <strong className="text-black dark:text-white"> 500ms API latency improvement</strong>, and secure OTA
          infrastructure for IoT fleet. Passionate about enabling teams to ship
          fast and operate reliably.
        </p>
      </div>
    </motion.div>
  </section>
);

const BeyondCodeSection = () => (
  <section className="w-full max-w-4xl mx-auto px-6 py-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-2">
        Beyond Code<span className="text-gray-300 dark:text-gray-600">.</span>
      </h2>
      <div className="max-w-3xl space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
        <p>
          I&apos;m <strong className="text-black dark:text-white">Siddhant Kadam</strong> — a
          software engineer who crafts more than just features. I design secure,
          scalable, and maintainable backend systems built to last.
        </p>
        <p>
          From building <strong className="text-black dark:text-white">real-time systems</strong>{" "}
          with WebSockets, RabbitMQ, and MQTT to designing{" "}
          <strong className="text-black dark:text-white">OTA pipelines</strong> on Linux devices
          and CI/CD flows with Docker — I go deep into the architecture that
          powers modern systems.
        </p>
        <p>
          I&apos;m obsessed with <strong className="text-black dark:text-white">learning</strong>
          . Whether it&apos;s reading technical blogs, exploring system design
          strategies, or diving into backend architecture books — I love
          understanding how things really work.
        </p>
        <p>
          For me, software isn&apos;t just about shipping code — it&apos;s about
          building with{" "}
          <strong className="text-black dark:text-white">
            clarity, sustainability, and intent
          </strong>
          .
        </p>
      </div>
    </motion.div>
  </section>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Satyan Rajmani",
      role: "Chair Person, Crt Bionics Australia",
      link: "https://www.linkedin.com/in/satyan-crt-program-7b940236/",
      feedback:
        "Siddhant has a rare ability to deeply understand system internals and translate that into scalable backend architecture. Working with him improved our deployment cycle and backend efficiency significantly.",
    },
    {
      name: "Sushant Kant",
      role: "CEO, Work Technologies",
      link: "https://www.linkedin.com/in/sushant-k-886b8543/",
      feedback:
        "Reliable, fast, and always thinking ahead. Siddhant's approach to problem solving and clean code made a real impact on our platform performance and stability.",
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-2">
          What People Say<span className="text-gray-300 dark:text-gray-600">.</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 max-w-2xl">
          Feedback from clients and collaborators.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-[#111] hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/20 transition-all duration-300"
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 italic">
              &ldquo;{t.feedback}&rdquo;
            </p>
            <div>
              <a
                href={t.link}
                target="_blank"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {t.name}
                <FiExternalLink size={13} className="text-gray-400 dark:text-gray-500" />
              </a>
              <p className="text-xs text-gray-400 dark:text-gray-500">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="w-full max-w-4xl mx-auto px-6 py-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-2">
        Let&apos;s Connect<span className="text-gray-300 dark:text-gray-600">.</span>
      </h2>
      <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 max-w-2xl">
        Got a challenging system to design? I&apos;d love to hear about it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
        <a
          href="mailto:siddh4194@gmail.com"
          className="group border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-[#111] hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-sm transition-all"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
            General
          </p>
          <p className="text-sm font-medium text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
            siddh4194@gmail.com
          </p>
        </a>
        <a
          href="mailto:siddhantkadam.career@gmail.com"
          className="group border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-[#111] hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-sm transition-all"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
            Careers
          </p>
          <p className="text-sm font-medium text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
            siddhantkadam.career@gmail.com
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/siddhant-kadam/"
          target="_blank"
          className="group border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-[#111] hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-sm transition-all"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
            LinkedIn
          </p>
          <p className="text-sm font-medium text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
            Connect on LinkedIn
          </p>
        </a>
      </div>
    </motion.div>
  </section>
);

const HeroSection = () => (
  <section className="min-h-[100dvh] flex flex-col justify-center px-6 max-w-4xl mx-auto w-full">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p className="font-mono text-xs text-gray-400 dark:text-gray-500 mb-4 tracking-widest uppercase">
        Full-Stack Engineer · Platform Infrastructure
      </p>
      <h1 className="text-4xl md:text-7xl font-extrabold text-black dark:text-white leading-tight">
        Code that matters<span className="text-gray-300 dark:text-gray-600">.</span>
        <br />
        Architecture that scales<span className="text-gray-300 dark:text-gray-600">.</span>
      </h1>

      <motion.p
        className="text-gray-500 dark:text-gray-400 text-lg mt-6 max-w-xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I&apos;m Siddhant Kadam — building platform infrastructure, distributed
        systems, and developer tooling that enable teams to ship fast and
        operate reliably.
      </motion.p>

      <motion.div
        className="flex items-center gap-5 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <SocialLink href="mailto:siddh4194@gmail.com" icon={HiOutlineMail} label="Email" />
        <SocialLink href="https://github.com/Siddh4194" icon={FaGithub} label="GitHub" />
        <SocialLink href="https://www.linkedin.com/in/siddhant-kadam/" icon={FaLinkedin} label="LinkedIn" />
      </motion.div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <a
          href="#experience"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors animate-bounce"
        >
          <FiArrowDown size={16} />
          Explore my work
        </a>
      </motion.div>
    </motion.div>
  </section>
);

const SECTIONS = [
  "experience",
  "projects",
  "skills",
  "education",
  "contact",
];

const Home = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 120;
      let current = "";
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => setIsDark((prev) => !prev);

  return (
    <div className="bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Helmet prioritizeSeoTags>
        <html lang="en" />
        <title>Siddhant Kadam · Full-Stack &amp; Platform Infrastructure Engineer</title>
        <meta name="description" content="Siddhant Kadam — Full-Stack Engineer specializing in platform infrastructure, distributed systems, Go, Node.js, and IoT. Infrastructure for scale." />
        <link rel="canonical" href="https://Siddh4194.github.io/Profile/" />

        <meta property="og:url" content="https://Siddh4194.github.io/Profile/" />
        <meta property="og:title" content="Siddhant Kadam · Full-Stack &amp; Platform Infrastructure Engineer" />
        <meta property="og:description" content="Building infrastructure for scale. Go/Node.js, GCP, Redis, MQTT, IoT. 1st Prize — Landslide Early Detection System." />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Siddhant Kadam · Full-Stack &amp; Platform Infrastructure Engineer" />
        <meta name="twitter:description" content="Building infrastructure for scale. Go/Node.js, GCP, Redis, MQTT, IoT." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Siddhant Kadam",
            "url": "https://Siddh4194.github.io/Profile/",
            "email": "siddh4194@gmail.com",
            "jobTitle": "Full-Stack & Platform Infrastructure Engineer",
            "knowsAbout": ["Go", "Node.js", "GCP", "Redis", "MQTT", "IoT", "Distributed Systems", "Kubernetes"],
            "sameAs": [
              "https://github.com/Siddh4194",
              "https://www.linkedin.com/in/siddhant-kadam/"
            ]
          })}
        </script>
      </Helmet>
      <div className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-900 px-6 py-4">
        <Navbar isDark={isDark} toggleDark={toggleDark} activeSection={activeSection} />
      </div>

      <main className="pt-20">
        <HeroSection />
        <Principles />
        <Experience />
        <Projects />
        <Skills />
        <SummarySection />
        <BeyondCodeSection />
        <TestimonialsSection />
        <BlogSection />
        <Education />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
