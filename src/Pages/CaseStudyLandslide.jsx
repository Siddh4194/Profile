import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FiArrowLeft, FiExternalLink, FiAward, FiTarget } from "react-icons/fi";
import { Link } from "react-router-dom";

const imageFiles = [
  {
    file: "WhatsApp Image 2026-05-21 at 12.45.28 AM.jpeg",
    label: "Landslide detection model",
  },
  {
    file: "WhatsApp Image 2026-05-21 at 12.45.28 AM (1).jpeg",
    label: "Model - alternate view",
  },
  {
    file: "WhatsApp Image 2026-05-21 at 12.45.28 AM (2).jpeg",
    label: "Model - Poster",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const CaseStudyLandslide = () => {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] min-h-screen transition-colors duration-300">
      <Helmet>
        <title>Landslide Early Detection System — Case Study</title>
        <meta name="description" content="How we built a simple copper-rod-based early warning system for landslide-prone communities. 1st Prize project." />
        <link rel="canonical" href="https://Siddh4194.github.io/Profile/case-study/landslide-detection" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Landslide Early Detection System — Case Study" />
        <meta property="og:description" content="Copper rods, wire displacement, and an alarm — a simple early warning system for landslide-prone communities." />
        <meta property="og:url" content="https://Siddh4194.github.io/Profile/case-study/landslide-detection" />
        <meta property="og:image" content="https://Siddh4194.github.io/Profile/og-image.svg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Landslide Early Detection System — Case Study" />
        <meta name="twitter:description" content="Copper rods, wire displacement, and an alarm — a simple early warning system for landslide-prone communities." />
        <meta name="twitter:image" content="https://Siddh4194.github.io/Profile/og-image.svg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Landslide Early Detection System",
            "description": "A simple copper-rod-based early warning system for detecting ground movement in landslide-prone areas.",
            "author": {
              "@type": "Person",
              "name": "Siddhant Kadam"
            },
            "award": "1st Prize — Project Competition"
          })}
        </script>
      </Helmet>
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-900 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            to="/case-study"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <FiArrowLeft size={16} />
            All Case Studies
          </Link>
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border text-amber-700 dark:text-amber-300 border-amber-400 dark:border-amber-600 bg-amber-50 dark:bg-amber-900/20 flex items-center gap-1">
            <FiAward size={12} /> 1st Prize
          </span>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-14">
        {/* Title */}
        <motion.div {...fadeUp}>
          <p className="font-mono text-xs text-gray-400 dark:text-gray-500 mb-3 tracking-widest uppercase">
            Case Study
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black dark:text-white leading-tight">
            Landslide Early
            <br />
            Detection System
          </h1>
        </motion.div>

        {/* The Spark — HT article */}
        <motion.section {...fadeUp} transition={{ delay: 0.05, duration: 0.5 }}>
          <h2 className="text-xl font-bold text-black dark:text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black dark:bg-white" />
            The Spark
          </h2>
          <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-[#111]">
            <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-4 py-1">
              <p className="text-base italic text-gray-700 dark:text-gray-300 leading-relaxed">
                &ldquo;Hopes of finding survivors in landslide-hit Maharashtra
                villages fade&rdquo;
              </p>
              <a
                href="https://www.hindustantimes.com/india-news/hopes-of-finding-survivors-in-landslide-hit-maharashtra-villages-fade-101627111873712.html"
                target="_blank"
                className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors mt-2"
              >
                — Hindustan Times <FiExternalLink size={11} />
              </a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
              This headline is what started everything. Reading about entire
              villages buried with zero warning — it wasn&apos;t a theoretical
              problem. It was a failure of detection infrastructure that cost
              lives. That gap became the question: could a simple, low-cost
              system detect ground movement early enough to make a difference?
            </p>
          </div>
        </motion.section>

        {/* Problem */}
        <motion.section {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }}>
          <h2 className="text-xl font-bold text-black dark:text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black dark:bg-white" />
            The Problem
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            <p>
              In July 2021, the Taliye landslide in Maharashtra&apos;s Satara
              district claimed over 100 lives. Entire villages were buried
              within minutes — no warning, no time to evacuate. The disaster
              wasn&apos;t an anomaly; it was a pattern. Heavy rainfall, unstable
              soil, and zero early detection infrastructure.
            </p>
            <p>
              The community had no system in place to detect ground movement
              before it was too late. By the time anyone realized what was
              happening, there was nothing they could do.
            </p>
            <p>
              This project was born from that gap. The goal: build a low-cost,
              hardware-based early detection system that could give communities
              even a few minutes of warning before a landslide.
            </p>
          </div>
        </motion.section>

        {/* Approach - Phase 1 */}
        <motion.section {...fadeUp} transition={{ delay: 0.15, duration: 0.5 }}>
          <h2 className="text-xl font-bold text-black dark:text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black dark:bg-white" />
            Phase 1 — The Approach
          </h2>
          <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-[#111] space-y-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            <p>
              We started with a simple mechanical principle: if the ground
              moves, anything embedded in it moves too. We embedded copper rods
              directly into the soil at key points on a slope. These rods were
              connected to copper wires running to a central alarm system.
            </p>
            <p>
              As the ground shifts — even slightly — the position of the copper
              wires changes. That physical displacement is what triggers the
              alarm. No microcontrollers, no signal processing, no complex
              electronics. Just a direct mechanical-to-electrical trigger.
            </p>
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 bg-gray-50 dark:bg-white/[0.03]">
              <p className="font-semibold text-black dark:text-white mb-2 flex items-center gap-1.5">
                <FiTarget size={14} />
                How it works
              </p>
              <ol className="list-decimal pl-5 space-y-1.5">
                <li>Copper rods placed at multiple points in the soil</li>
                <li>Rods connected via copper wire to a central alarm unit</li>
                <li>
                  Ground movement displaces the rods, changing wire position
                </li>
                <li>Position change triggers the alarm system</li>
              </ol>
            </div>
            <p>
              The focus was on measuring real landscape movement and
              understanding how to optimize the detection — finding the right
              rod placement, the right wire tension, and the right threshold to
              avoid false triggers while catching genuine ground shifts early.
            </p>
          </div>
        </motion.section>

        {/* What We Analyzed */}
        <motion.section {...fadeUp} transition={{ delay: 0.2, duration: 0.5 }}>
          <h2 className="text-xl font-bold text-black dark:text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black dark:bg-white" />
            Measuring & Optimizing
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            <p>
              The real work was in analysis and iteration. We ran manual tests
              simulating soil movement at different intensities to understand
              how the system behaved:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                What&apos;s the minimum ground shift that produces a detectable
                wire displacement?
              </li>
              <li>
                How many rod placement points are needed to cover a vulnerable
                area?
              </li>
              <li>
                How do we distinguish normal settlement from genuine landslide
                precursors?
              </li>
              <li>
                What wire tension gives the best sensitivity without false
                triggers?
              </li>
            </ul>
            <p>
              Each test cycle gave us data to refine the setup. We iterated on
              rod depth, wire routing, and alarm thresholds until the system was
              reliable enough for real deployment conditions.
            </p>
          </div>
        </motion.section>

        {/* Images */}
        <motion.section {...fadeUp} transition={{ delay: 0.25, duration: 0.5 }}>
          <h2 className="text-xl font-bold text-black dark:text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black dark:bg-white" />
            Model Photos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {imageFiles.map((img, i) => (
              <div key={i}>
                <img
                  src={`${import.meta.env.BASE_URL}images/landslide/${encodeURIComponent(img.file)}`}
                  alt={img.label}
                  className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111]"
                />
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1.5 text-center">
                  {img.label}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Phase 2 / Lessons */}
        <motion.section {...fadeUp} transition={{ delay: 0.3, duration: 0.5 }}>
          <h2 className="text-xl font-bold text-black dark:text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black dark:bg-white" />
            Phase 2 — Improvements & Lessons
          </h2>
          <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            <p>
              Phase 1 proved the core idea works: a simple mechanical trigger
              can detect ground movement. But there&apos;s room to make it
              smarter. Phase 2 would add:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Microcontroller-based signal processing for more granular
                detection levels
              </li>
              <li>
                Multiple sensitivity tiers (caution, warning, critical) instead
                of a binary alarm
              </li>
              <li>Wireless telemetry for remote monitoring</li>
              <li>
                Weather data integration (rainfall intensity as a precursor
                input)
              </li>
            </ul>
            <p>
              The project was awarded{" "}
              <strong className="text-black dark:text-white">1st Prize</strong>{" "}
              in the project competition — validating both the problem and the
              simplicity of the approach.
            </p>
          </div>
        </motion.section>

        {/* Reference */}
        <motion.section
          {...fadeUp}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="pb-12"
        >
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
              References
            </p>
            <a
              href="https://www.hindustantimes.com/india-news/hopes-of-finding-survivors-in-landslide-hit-maharashtra-villages-fade-101627111873712.html"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <FiExternalLink size={15} />
              Hindustan Times — Taliye landslide coverage
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default CaseStudyLandslide;
