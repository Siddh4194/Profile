import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FiArrowLeft, FiExternalLink, FiTarget, FiGitCommit, FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const CaseStudy3rdStep = () => {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] min-h-screen transition-colors duration-300">
      <Helmet>
        <title>3rd Step Verification — Case Study</title>
        <meta name="description" content="A cryptographic hash-chain verification system that eliminates anonymous social media abuse. Every post tied to a verified user hash." />
        <link rel="canonical" href="https://siddh4194.github.io/case-study/3rd-step-verification" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="3rd Step Verification — Case Study" />
        <meta property="og:description" content="Chained cryptographic hashes for social media accountability — preventing anonymous abuse by tying every post to a verified user hash." />
        <meta property="og:url" content="https://siddh4194.github.io/case-study/3rd-step-verification" />
        <meta property="og:image" content="https://siddh4194.github.io/og-image.svg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="3rd Step Verification — Case Study" />
        <meta name="twitter:description" content="Chained cryptographic hashes for social media accountability — preventing anonymous abuse by tying every post to a verified user hash." />
        <meta name="twitter:image" content="https://siddh4194.github.io/og-image.svg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "3rd Step Verification",
            "description": "A cryptographic hash-chain verification system that prevents anonymous social media abuse by requiring email-verified hashes for every post.",
            "image": "https://siddh4194.github.io/og-image.svg",
            "author": {
              "@type": "Person",
              "name": "Siddhant Kadam"
            },
            "publisher": {
              "@type": "Person",
              "name": "Siddhant Kadam"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://siddh4194.github.io/case-study/3rd-step-verification"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://siddh4194.github.io/" },
              { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://siddh4194.github.io/case-study" },
              { "@type": "ListItem", "position": 3, "name": "3rd Step Verification" }
            ]
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
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-14">
        {/* Title */}
        <motion.div {...fadeUp}>
          <p className="font-mono text-xs text-gray-400 dark:text-gray-500 mb-3 tracking-widest uppercase">
            Case Study
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black dark:text-white leading-tight">
            3rd Step
            <br />
            Verification
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base mt-4 max-w-xl">
            Cryptographic hash-chain authentication for social media accountability.
          </p>
        </motion.div>

        {/* The Spark — The Hindu article */}
        <motion.section {...fadeUp} transition={{ delay: 0.05, duration: 0.5 }}>
          <h2 className="text-xl font-bold text-black dark:text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black dark:bg-white" />
            The Spark
          </h2>
          <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-[#111]">
            <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-4 py-1">
              <p className="text-base italic text-gray-700 dark:text-gray-300 leading-relaxed">
                &ldquo;At least one dead, 10 injured, Internet suspended in Maharashtra&rsquo;s Satara
                over social media post&rdquo;
              </p>
              <a
                href="https://www.thehindu.com/news/cities/mumbai/at-least-one-dead-10-injured-internet-suspended-in-maharashtras-satara-over-social-media-post/article67295790.ece"
                target="_blank"
                className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors mt-2"
              >
                — The Hindu <FiExternalLink size={11} />
              </a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
              An objectionable Instagram post by anonymous accounts escalated into communal
              violence — one dead, ten injured, internet shut down for two days. The post
              itself was the spark, but the real failure was the platform&apos;s inability
              to hold the poster accountable. Anonymous authentication made it possible.
              That gap became the question: could we build a system where every post is
              cryptographically tied to its author?
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
              Most social media platforms operate on a simple authentication model: once
              you&apos;re logged in, you can post freely. There&apos;s no cryptographic link
              between your identity and your content. If someone posts something harmful,
              the platform can only react after the fact — remove the post, ban the account.
              But the damage is already done.
            </p>
            <p>
              The Satara incident was not unique. Anonymous or pseudonymous accounts post
              inflammatory content with zero accountability, knowing there&apos;s no
              cryptographic proof tying them to the post. By the time law enforcement
              traces the account (if they can), the violence has already erupted.
            </p>
            <p>
              The gap: there is no <strong className="text-black dark:text-white">preventive</strong> mechanism
              that forces a user to cryptographically authorize every post with their
              verified identity.
            </p>
          </div>
        </motion.section>

        {/* Solution */}
        <motion.section {...fadeUp} transition={{ delay: 0.15, duration: 0.5 }}>
          <h2 className="text-xl font-bold text-black dark:text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black dark:bg-white" />
            The Solution — 3-Step Verification
          </h2>
          <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-[#111] space-y-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            <p>
              The system adds a cryptographic verification layer between login and
              posting. Every post requires a unique, chained hash that only the verified
              user possesses. Without it, the post is rejected.
            </p>

            <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 bg-gray-50 dark:bg-white/[0.03]">
              <p className="font-semibold text-black dark:text-white mb-2 flex items-center gap-1.5">
                <FiTarget size={14} />
                How it works
              </p>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  <strong className="text-black dark:text-white">User logs in</strong> —
                  Standard authentication establishes the user&apos;s identity on the platform.
                </li>
                <li>
                  <strong className="text-black dark:text-white">User data is cryptographically hashed</strong> —
                  A hash is generated from the user&apos;s data using a cryptographic
                  algorithm. Each hash is derived from the previous one, forming a
                  <strong className="text-black dark:text-white"> hash chain</strong>.
                  If H<sub>n</sub> is the current hash, H<sub>n+1</sub> = Hash(H<sub>n</sub> + user data).
                </li>
                <li>
                  <strong className="text-black dark:text-white">Email delivers the hash</strong> —
                  Before posting, the user receives an email containing their current
                  hash. They must provide this hash to authorize the post. The system
                  validates the hash and advances to the next link in the chain.
                  Post publishes. Chain advances. Next post needs the next hash.
                </li>
              </ol>
            </div>

            <p>
              Without the correct hash from the current chain position, no post can be
              published. The user cannot skip, replay, or fabricate a hash — the chain
              is verified server-side against the stored cryptographic state.
            </p>
          </div>
        </motion.section>

        {/* Why Hash Chaining */}
        <motion.section {...fadeUp} transition={{ delay: 0.2, duration: 0.5 }}>
          <h2 className="text-xl font-bold text-black dark:text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black dark:bg-white" />
            Why Hash Chaining?
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            <p>
              A single static hash could be memorized, shared, or reused. A hash chain
              eliminates all of that:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-black dark:text-white">Non-replayable</strong> —
                Each hash is valid for exactly one post. Using it consumes it.
                The next post needs the next hash in the chain.
              </li>
              <li>
                <strong className="text-black dark:text-white">Tamper-evident</strong> —
                Because each hash depends on the previous one (H<sub>n+1</sub> = Hash(H<sub>n</sub> + data)),
                you cannot insert, delete, or reorder posts without breaking the chain.
                The entire post history becomes auditable — the same cryptographic
                principle behind blockchain ledgers.
              </li>
              <li>
                <strong className="text-black dark:text-white">Traceable</strong> —
                Every post is cryptographically linked to the hash that authorized it,
                which is linked to the email it was delivered to. The chain of evidence
                is complete: post → hash → email → user.
              </li>
            </ul>
            <p>
              This transforms posting from an anonymous action into a cryptographically
              signed one — without requiring the user to manage keys, certificates, or
              any cryptographic infrastructure. They just check their email.
            </p>
          </div>
        </motion.section>

        {/* Impact */}
        <motion.section {...fadeUp} transition={{ delay: 0.25, duration: 0.5 }}>
          <h2 className="text-xl font-bold text-black dark:text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black dark:bg-white" />
            The Impact
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            <p>
              The 3-step verification system does not depend on content moderation.
              It doesn&apos;t analyze what the user says — it ensures that whoever says
              something can be held accountable. The deterrent is built into the act
              of posting itself:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                A user who knows every post requires their verified email hash is far
                less likely to post inflammatory content.
              </li>
              <li>
                If harmful content is posted anyway, law enforcement has a complete
                cryptographic trail from the post to the user.
              </li>
              <li>
                The system works preventively, not reactively — the verification gate
                stops anonymous abuse before the post goes live.
              </li>
            </ul>
          </div>
        </motion.section>

        {/* GitHub */}
        <motion.section {...fadeUp} transition={{ delay: 0.3, duration: 0.5 }}>
          <h2 className="text-xl font-bold text-black dark:text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black dark:bg-white" />
            Implementation
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            <p>
              The full implementation is available on GitHub. It includes the
              cryptographic hash-chain logic, the email delivery integration, and
              the verification API that sits between the client and the post endpoint.
            </p>
            <a
              href="https://github.com/siddh4194/3rdStepVerification"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <FiGitCommit size={15} />
              View on GitHub
              <FiExternalLink size={13} />
            </a>
          </div>
        </motion.section>

        {/* Reference */}
        <motion.section {...fadeUp} transition={{ delay: 0.35, duration: 0.5 }} className="pb-12">
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
              References
            </p>
            <a
              href="https://www.thehindu.com/news/cities/mumbai/at-least-one-dead-10-injured-internet-suspended-in-maharashtras-satara-over-social-media-post/article67295790.ece"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <FiExternalLink size={15} />
              The Hindu — Satara social media post incident
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default CaseStudy3rdStep;
