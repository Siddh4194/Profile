import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FiArrowLeft, FiBookOpen, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

const blogs = [
  {
    slug: "amazon-prime-video-monolith",
    title: "Amazon Prime Video: From Microservices to Monolith",
    subtitle: "How a containerized monolith cut VQA infrastructure costs by 90%",
    tags: ["System Design", "AWS"],
    date: "Jan 2026",
    readTime: "6 min read",
    desc: "Video Quality Analysis ran on AWS Step Functions with S3 bucket handoffs between detectors — and the per-transition and per-action billing was bleeding money. Shifting to a containerized monolith with in-memory state transfer cut costs by 90%.",
    highlights: [
      "Step Functions billed per state transition",
      "S3 billed per create/update/delete",
      "In-memory transfer: nanoseconds",
      "Scalability: 5% → beyond 5%",
    ],
  },
];

const BlogsIndex = () => {
  const siteUrl = "https://siddh4194.github.io";
  return (
    <div className="bg-white dark:bg-[#0a0a0a] min-h-screen transition-colors duration-300">
      <Helmet>
        <title>Blogs — Siddhant Kadam</title>
        <meta name="description" content="Articles on distributed systems, platform infrastructure, and engineering decisions — from AWS architecture to system design trade-offs." />
        <link rel="canonical" href={`${siteUrl}/blog`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blogs — Siddhant Kadam" />
        <meta property="og:description" content="Articles on distributed systems, platform infrastructure, and engineering decisions." />
        <meta property="og:url" content={`${siteUrl}/blog`} />
        <meta property="og:image" content={`${siteUrl}/og-image.svg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blogs — Siddhant Kadam" />
        <meta name="twitter:description" content="Articles on distributed systems, platform infrastructure, and engineering decisions." />
        <meta name="twitter:image" content={`${siteUrl}/og-image.svg`} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Siddhant Kadam's Blog",
            "description": "Articles on distributed systems, platform infrastructure, and engineering decisions.",
            "url": `${siteUrl}/blog`,
            "author": {
              "@type": "Person",
              "name": "Siddhant Kadam"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteUrl}/` },
              { "@type": "ListItem", "position": 2, "name": "Blogs", "item": `${siteUrl}/blog` }
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

      <main className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-gray-400 dark:text-gray-500 mb-3 tracking-widest uppercase">
            Read
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white leading-tight">
            Blogs<span className="text-gray-300 dark:text-gray-600">.</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base mt-3 max-w-xl">
            Articles on distributed systems, platform infrastructure, and the
            engineering decisions behind building for scale.
          </p>
        </motion.div>

        <div className="space-y-5">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Link
                to={`/blog/${blog.slug}`}
                className="group block border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-[#111] hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md dark:hover:shadow-black/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex w-12 h-12 shrink-0 rounded-xl bg-gray-100 dark:bg-white/5 items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                    <FiBookOpen size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border text-violet-700 dark:text-violet-300 border-violet-400 dark:border-violet-600 bg-violet-50 dark:bg-violet-900/20">
                        Blog
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500 mb-1">
                      <span>{blog.date}</span>
                      <span className="flex items-center gap-1">
                        <FiClock size={11} />
                        {blog.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {blog.subtitle}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                      {blog.desc}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                      {blog.highlights.map((h, j) => (
                        <span key={j} className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500" />
                          {h}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors mt-4">
                      <FiBookOpen size={14} />
                      Read article
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

export default BlogsIndex;
