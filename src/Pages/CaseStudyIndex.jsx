import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FiArrowLeft, FiBookOpen, FiAward, FiCpu, FiBarChart2, FiShield } from "react-icons/fi";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    slug: "landslide-detection",
    title: "Landslide Early Detection System",
    subtitle: "IoT-based early warning system for landslide-prone communities",
    tags: ["IoT", "Embedded Systems", "Hardware"],
    icon: FiCpu,
    prize: "1st Prize",
    desc: "A simple yet effective early warning system using copper rods in the soil that detect ground movement through wire displacement — triggering alarms when the earth shifts. Inspired by the 2021 Taliye tragedy.",
    highlights: ["Copper rod soil sensing", "Wire displacement detection", "Mechanical trigger mechanism", "1st Prize project competition"],
  },
  {
    slug: "3rd-step-verification",
    title: "3rd Step Verification",
    subtitle: "Cryptographic hash-chain authentication for social media accountability",
    tags: ["Cryptography", "Authentication", "Blockchain"],
    icon: FiShield,
    desc: "A 3-step verification system using chained cryptographic hashes to eliminate anonymous posting. Every post is tied to a verified hash emailed to the user — making harmful posts traceable and accountable.",
    highlights: ["Cryptographic hash chaining", "Email-based post verification", "Prevents anonymous abuse", "Tamper-evident post history"],
  },
];

const CaseStudyIndex = () => {
  const siteUrl = "https://siddh4194.github.io";
  return (
    <div className="bg-white dark:bg-[#0a0a0a] min-h-screen transition-colors duration-300">
      <Helmet>
        <title>Case Studies — Siddhant Kadam</title>
        <meta name="description" content="Deep dives into projects I've built — from problem to solution. Landslide detection, cryptographic verification, and more." />
        <link rel="canonical" href={`${siteUrl}/case-study`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Case Studies — Siddhant Kadam" />
        <meta property="og:description" content="Deep dives into projects I've built — from problem to solution." />
        <meta property="og:url" content={`${siteUrl}/case-study`} />
        <meta property="og:image" content={`${siteUrl}/og-image.svg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies — Siddhant Kadam" />
        <meta name="twitter:description" content="Deep dives into projects I've built — from problem to solution." />
        <meta name="twitter:image" content={`${siteUrl}/og-image.svg`} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Case Studies — Siddhant Kadam",
            "description": "Deep dives into projects I've built — from problem to solution.",
            "url": `${siteUrl}/case-study`,
            "author": {
              "@type": "Person",
              "name": "Siddhant Kadam"
            }
          })}
        </script>
      </Helmet>
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-900 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <FiArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-gray-400 dark:text-gray-500 mb-3 tracking-widest uppercase">
            Browse
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white leading-tight">
            Case Studies<span className="text-gray-300 dark:text-gray-600">.</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base mt-3 max-w-xl">
            Deep dives into projects I&apos;ve built — from problem to solution.
          </p>
        </motion.div>

        <div className="space-y-5">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Link
                to={`/case-study/${cs.slug}`}
                className="group block border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-[#111] hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md dark:hover:shadow-black/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex w-12 h-12 shrink-0 rounded-xl bg-gray-100 dark:bg-white/5 items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                    <cs.icon size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                      {cs.prize && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border text-amber-700 dark:text-amber-300 border-amber-400 dark:border-amber-600 bg-amber-50 dark:bg-amber-900/20 flex items-center gap-0.5">
                          <FiAward size={10} /> {cs.prize}
                        </span>
                      )}
                    </div>
                    <h2 className="text-lg font-bold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                      {cs.title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {cs.subtitle}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                      {cs.desc}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                      {cs.highlights.map((h, j) => (
                        <span key={j} className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                          <FiBarChart2 size={11} />
                          {h}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors mt-4">
                      <FiBookOpen size={14} />
                      Read case study
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CaseStudyIndex;
