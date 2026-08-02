import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiZap,
  FiServer,
  FiBox,
  FiTrendingUp,
  FiCpu,
  FiClock,
  FiBookOpen,
  FiArrowRight,
  FiGitCommit,
} from "react-icons/fi";

import costReductionDiagram from "../assets/blogs/_- visual selection.svg";
import scalabilityDiagram from "../assets/blogs/_- visual selection (1).svg";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const SectionHeading = ({ children }) => (
  <h2 className="text-xl font-bold text-black dark:text-white mb-4 flex items-center gap-2">
    <span className="w-2 h-2 rounded-full bg-black dark:bg-white" />
    {children}
  </h2>
);

const DiagramCard = ({ src, caption }) => (
  <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }}>
    <div className="border border-gray-800 rounded-2xl bg-[#0a0a0a] p-4 sm:p-6 overflow-x-auto">
      <img src={src} alt={caption} className="mx-auto w-full h-auto max-w-[720px] min-w-[560px]" />
    </div>
    <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-3">{caption}</p>
  </motion.div>
);

const HighlightCard = ({ icon: Icon, title, children, delay = 0.05 }) => (
  <motion.div
    {...fadeUp}
    transition={{ delay, duration: 0.5 }}
    className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-[#111] hover:shadow-md dark:hover:shadow-black/20 transition-shadow"
  >
    <div className="flex items-center gap-2 mb-3">
      <div className="p-2 bg-gray-100 dark:bg-white/5 rounded-xl">
        <Icon size={18} className="text-gray-600 dark:text-gray-400" />
      </div>
      <h3 className="text-base font-bold text-black dark:text-white">{title}</h3>
    </div>
    <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{children}</div>
  </motion.div>
);

const BlogAmazonPrimeVideo = () => {
  const siteUrl = "https://siddh4194.github.io";
  return (
    <div className="bg-white dark:bg-[#0a0a0a] min-h-screen transition-colors duration-300">
      <Helmet>
        <title>Amazon Prime Video: From Microservices to Monolith — Blog</title>
        <meta name="description" content="Amazon Prime Video cut costs by 90% by moving Video Quality Analysis off AWS Step Functions and S3 onto a containerized monolith. Here's the story, and what it says about microservices." />
        <link rel="canonical" href={`${siteUrl}/blog/amazon-prime-video-monolith`} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Amazon Prime Video: From Microservices to Monolith" />
        <meta property="og:description" content="Why stateful microservices on AWS Step Functions were bleeding money — and how containerizing the whole workflow into a monolith cut costs by 90%." />
        <meta property="og:url" content={`${siteUrl}/blog/amazon-prime-video-monolith`} />
        <meta property="og:image" content={`${siteUrl}/og-image.svg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amazon Prime Video: From Microservices to Monolith" />
        <meta name="twitter:description" content="Containerizing a Step Functions + S3 workflow into a single monolith cut Amazon Prime Video's VQA costs by 90%." />
        <meta name="twitter:image" content={`${siteUrl}/og-image.svg`} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Amazon Prime Video: From Microservices to Monolith",
            "description": "How shifting Video Quality Analysis from AWS Step Functions and S3 to a containerized monolith cut costs by 90%.",
            "image": `${siteUrl}/og-image.svg`,
            "datePublished": "2026-01-15",
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
              "@id": `${siteUrl}/blog/amazon-prime-video-monolith`
            },
            "keywords": ["Amazon Prime Video", "Microservices", "Monolith", "AWS Step Functions", "System Design"]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteUrl}/` },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${siteUrl}/blog` },
              { "@type": "ListItem", "position": 3, "name": "Amazon Prime Video: From Microservices to Monolith" }
            ]
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

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-14">
        {/* Title */}
        <motion.div {...fadeUp}>
          <p className="font-mono text-xs text-gray-400 dark:text-gray-500 mb-3 tracking-widest uppercase">
            Blog · System Design
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black dark:text-white leading-tight">
            Amazon Prime Video
            <br />
            Microservices to Monolith
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base mt-4 max-w-xl">
            How moving Video Quality Analysis off AWS Step Functions and S3 onto a
            single containerized app cut infrastructure costs by{" "}
            <strong className="text-black dark:text-white">90%</strong> — and what it
            says about microservices.
          </p>
          <div className="flex items-center gap-4 mt-6 text-xs text-gray-400 dark:text-gray-500">
            <span className="flex items-center gap-1">
              <FiClock size={13} />
              ~6 min read
            </span>
            <span className="flex items-center gap-1">
              <FiBookOpen size={13} />
              System Design · AWS
            </span>
          </div>
        </motion.div>

        {/* Intro */}
        <motion.section {...fadeUp} transition={{ delay: 0.05, duration: 0.5 }}>
          <SectionHeading>The 90% Story</SectionHeading>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            <p>
              Here&apos;s a story that always makes me pause. Amazon Prime Video — the
              company that practically invented &ldquo;scale out&rdquo; — cut 90% of the cost
              of one of its biggest systems by doing something that sounds almost
              backwards: it tore down its microservices and put everything into one
              monolith.
            </p>
            <p>
              The system in question is Video Quality Analysis, or{" "}
              <strong className="text-black dark:text-white">VQA</strong> — the pipeline that
              checks whether the video you&apos;re watching actually looks right, inspecting
              thousands of frames every second. It was built as a chain of AWS Step
              Functions calling serverless detectors. Perfectly reasonable microservices.
              But it cost an absolute fortune to run. Not because the machines were slow —
              because orchestrating all that state between services drained money at
              every single step.
            </p>
            <p>
              The fix wasn&apos;t a slicker cloud setup or more services. It was the opposite.
              Bundle the whole workflow into a single containerized app and pass the frames
              between processors <strong className="text-black dark:text-white">in memory</strong>.
              Ninety percent cheaper. The kind of result that makes you question everything
              you assumed about architecture.
            </p>
          </div>
        </motion.section>

        {/* The Problem */}
        <motion.section {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }}>
          <SectionHeading>The Problem: Stateful Microservices</SectionHeading>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            <p>
              Let me break down why it got so expensive. The VQA pipeline ran on{" "}
              <strong className="text-black dark:text-white">AWS Step Functions</strong>. Step
              Functions is great for modelling a job as a flow of nodes — you define the
              nodes, their state, what each one does, and the order they run in. It&apos;s a
              flowchart that actually executes.
            </p>
            <p>
              But here&apos;s the catch that catches a lot of people:{" "}
              <strong className="text-black dark:text-white">AWS bills you for every state
              transition</strong>. Every hop from one node to the next costs money. Now scale
              that up — VQA is processing tens of thousands of video frames per second. Those
              tiny per-transition charges stack up into a genuinely scary bill.
            </p>
            <p>
              And the architecture made it worse. The detectors are Lambda functions, and each
              one needs the output of the one before it. So the pipeline was writing every
              intermediate frame to <strong className="text-black dark:text-white">S3 buckets</strong>{" "}
              just to hand it off to the next detector:
            </p>

            <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-[#111]">
              <p className="font-semibold text-black dark:text-white mb-3 flex items-center gap-1.5">
                <FiGitCommit size={14} className="text-gray-400 dark:text-gray-500" />
                The data flow
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-2 text-sm font-mono text-gray-500 dark:text-gray-400">
                <span className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-white/5 whitespace-nowrap">Step Functions</span>
                <FiArrowRight size={14} className="hidden sm:block text-gray-400 dark:text-gray-500" />
                <span className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-white/5 whitespace-nowrap">Detectors (Lambda)</span>
                <FiArrowRight size={14} className="hidden sm:block text-gray-400 dark:text-gray-500" />
                <span className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-white/5 whitespace-nowrap">S3 Buckets</span>
                <FiArrowRight size={14} className="hidden sm:block text-gray-400 dark:text-gray-500" />
                <span className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-white/5 whitespace-nowrap">Next Detector</span>
              </div>
            </div>

            <p>
              S3 charges for every create, every update, every delete. So you&apos;ve got a
              pipeline that&apos;s constantly writing and reading images — but S3 is built for
              storing files you keep, not juggling transient data. The whole thing was paying
              twice: once for each Step Function transition, once for every S3 operation.
            </p>
          </div>
        </motion.section>

        {/* Diagram: before/after */}
        <DiagramCard
          src={costReductionDiagram}
          caption="Before: Step Functions + S3 bucket handoffs between detectors. After: containerized monolith with in-memory state transfer."
        />

        {/* The Solution */}
        <motion.section {...fadeUp} transition={{ delay: 0.15, duration: 0.5 }}>
          <SectionHeading>The Solution: Containerize into a Monolith</SectionHeading>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            <p>
              So instead of trying to optimize all that, the team asked a different question:
              what if there&apos;s no handoff at all? They{" "}
              <strong className="text-black dark:text-white">containerized the entire workflow</strong>{" "}
              — every detector node — into a single application. One deployable. And instead
              of uploading a frame to S3 and pulling it back down in the next step, the frame
              just moves from one processor to the next{" "}
              <strong className="text-black dark:text-white">in memory</strong>.
            </p>
            <p>
              In-memory handoff is a different universe compared to the old approach:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-black dark:text-white">It&apos;s free.</strong> No S3
                operations, no per-transition billing.
              </li>
              <li>
                <strong className="text-black dark:text-white">It&apos;s fast.</strong> We&apos;re
                talking nanoseconds, not the milliseconds a network round-trip takes.
              </li>
              <li>
                <strong className="text-black dark:text-white">It&apos;s easier to think about.</strong>{" "}
                There&apos;s no orchestration layer holding a big pile of state — the state is
                just... there, in memory.
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Results */}
        <motion.section {...fadeUp} transition={{ delay: 0.2, duration: 0.5 }}>
          <SectionHeading>Where the 90% Came From</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <HighlightCard icon={FiBox} title="S3 Costs" delay={0.05}>
              Every intermediate frame used to go to S3 and back. That&apos;s gone now — no more
              paying to store, read, and delete video samples over and over.
            </HighlightCard>
            <HighlightCard icon={FiZap} title="State Transitions" delay={0.1}>
              Every Step Function hop was billed. Moving state in memory meant the transfer
              itself costs nothing and happens instantly.
            </HighlightCard>
            <HighlightCard icon={FiClock} title="Latency" delay={0.15}>
              The old network calls took milliseconds. In-memory handoffs take nanoseconds.
              Same work, wildly less waiting.
            </HighlightCard>
          </div>
        </motion.section>

        {/* AWS Services */}
        <motion.section {...fadeUp} transition={{ delay: 0.25, duration: 0.5 }}>
          <SectionHeading>The AWS Building Blocks</SectionHeading>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            <p>
              To get the full picture, it helps to know the three AWS services in play here:
            </p>
            <div className="space-y-3">
              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-[#111]">
                <p className="font-semibold text-black dark:text-white mb-1.5 flex items-center gap-1.5">
                  <FiGitCommit size={14} className="text-gray-400 dark:text-gray-500" />
                  AWS Step Functions
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A state machine service — think Node-RED with a bill. You lay out nodes,
                  define their state, actions, and sequence. Incredibly powerful for
                  orchestrating, but every single transition is a chargeable event.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-[#111]">
                <p className="font-semibold text-black dark:text-white mb-1.5 flex items-center gap-1.5">
                  <FiServer size={14} className="text-gray-400 dark:text-gray-500" />
                  ECS + Fargate
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Amazon&apos;s container platform. With Fargate you just hand it a container image
                  and it figures out the CPU and memory for you. No servers to babysit — you
                  ship the image, it runs.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-[#111]">
                <p className="font-semibold text-black dark:text-white mb-1.5 flex items-center gap-1.5">
                  <FiCpu size={14} className="text-gray-400 dark:text-gray-500" />
                  EC2 (VM-based)
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  The classic virtual machine — a full OS that&apos;s all yours. More control, more
                  overhead. Great when you want a persistent box you can poke at, less so when
                  you want something cheap to run at scale.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Scalability */}
        <motion.section {...fadeUp} transition={{ delay: 0.3, duration: 0.5 }}>
          <SectionHeading>The Scalability Problem</SectionHeading>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            <p>
              There was another win hiding in here too. Running the old pipeline meant
              orchestrating a bunch of containers — bringing them up and down, scaling them,
              keeping them healthy. That alone was a full-time job, and it capped how much
              load the system could realistically handle.
            </p>
            <p>
              Before the change, the system was only scaling to about{" "}
              <strong className="text-black dark:text-white">5% of what it could actually do</strong>.
              After moving to the monolith, that number went way up — because the
              orchestration overhead between every node just disappeared.
            </p>
          </div>
        </motion.section>

        {/* Diagram: scalability */}
        <DiagramCard
          src={scalabilityDiagram}
          caption="Monolith architecture improved scalability beyond 5% — container orchestration made scaling up and down far easier."
        />

        {/* Key takeaways */}
        <motion.section {...fadeUp} transition={{ delay: 0.35, duration: 0.5 }} className="pb-12">
          <SectionHeading>What I Take Away</SectionHeading>
          <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-[#111] space-y-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              <strong className="text-black dark:text-white">Microservices are a tool, not a badge.</strong>{" "}
              They&apos;re worth it when you genuinely need independent scaling or separate deploy
              cycles. But if your services are tightly coupled and passing data back and forth
              nonstop, the &ldquo;microservices&rdquo; part is just tax.
            </p>
            <p>
              <strong className="text-black dark:text-white">The little costs add up.</strong>{" "}
              A fraction of a cent per transition, a cent per S3 write — on a dashboard it
              looks like nothing. Multiply that by thousands of frames a second, running around
              the clock, and it&apos;s a very different number.
            </p>
            <p>
              <strong className="text-black dark:text-white">Match the architecture to the actual problem.</strong>{" "}
              Prime Video didn&apos;t throw away microservices everywhere. They collapsed the
              pipeline where the boundaries were costing more than they saved. That 90% wasn&apos;t
              a magic trick — it was just removing an abstraction that was never paying for itself.
            </p>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
              Back
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <FiArrowLeft size={15} />
              Return to Portfolio
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default BlogAmazonPrimeVideo;
