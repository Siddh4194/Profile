import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX, FiSend, FiExternalLink } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useNavigate } from "react-router-dom";
import { profileData } from "../../data/profileData";
import { askGemini } from "../../services/aiService";

const WELCOME_MESSAGE = {
  role: "bot",
  text: "Hey, I'm **Sodd** — Siddhant's personal assistant. Ask me anything about him!"
};

const ACTION_REGEX = /--action:([A-Z_]+):(.+?)--/g;

function parseAndClean(text) {
  const actions = [];
  let match;
  while ((match = ACTION_REGEX.exec(text)) !== null) {
    actions.push({ command: match[1], value: match[2] });
  }
  return { clean: text.replace(ACTION_REGEX, "").trim(), actions };
}

function executeAction({ command, value }) {
  switch (command) {
    case "SCROLL": {
      const el = document.getElementById(value);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      break;
    }
    case "THEME": {
      const root = document.documentElement;
      const isDark = root.classList.contains("dark");
      if (isDark) {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
      break;
    }
  }
}

const BotMessage = ({ text }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      a: ({ href, children }) => (
        <a
          href={href}
          target="_blank"
          className="inline-flex items-center gap-0.5 underline underline-offset-2 hover:opacity-80 transition-opacity"
          style={{ color: "inherit" }}
        >
          {children}
          <FiExternalLink size={11} />
        </a>
      ),
      p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
      ul: ({ children }) => <ul className="list-disc pl-5 mb-1 last:mb-0 space-y-0.5">{children}</ul>,
      ol: ({ children }) => <ol className="list-decimal pl-5 mb-1 last:mb-0 space-y-0.5">{children}</ol>,
      li: ({ children }) => <li>{children}</li>,
      strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
      code: ({ children }) => (
        <code className="text-[12px] bg-gray-200 dark:bg-white/10 px-1 py-0.5 rounded break-words">{children}</code>
      ),
      pre: ({ children }) => (
        <pre className="whitespace-pre-wrap break-words text-[12px] bg-gray-200 dark:bg-white/10 p-2 rounded-lg mb-1 last:mb-0 overflow-x-hidden">{children}</pre>
      ),
    }}
  >
    {text}
  </ReactMarkdown>
);

const AIChat = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (open) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [open, messages, scrollToBottom]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);

    const response = await askGemini(
      text,
      profileData,
      messages.filter((m) => m !== WELCOME_MESSAGE)
    );

    const { clean, actions } = parseAndClean(response);
    setMessages((prev) => [...prev, { role: "bot", text: clean }]);
    setLoading(false);

    actions.forEach((action) => {
      if (action.command === "NAVIGATE") {
        navigate(action.value);
      } else {
        setTimeout(() => executeAction(action), 300);
      }
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-3.5 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
        title="Ask about Siddhant"
      >
        <FiMessageSquare size={22} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] h-[520px] max-h-[calc(100vh-10rem)] bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800 shrink-0">
              <div>
                <p className="text-sm font-bold text-black dark:text-white">Sodd</p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">Siddhant's Personal Assistant</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 text-gray-400 hover:text-black dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"
              >
                <FiX size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
    className={`max-w-[85%] text-sm leading-relaxed px-4 py-2.5 rounded-2xl break-words [overflow-wrap:anywhere] ${
      msg.role === "user"
        ? "bg-black dark:bg-white text-white dark:text-black rounded-br-md"
        : "bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-200 rounded-bl-md"
    }`}
                  >
                    {msg.role === "user" ? msg.text : <BotMessage text={msg.text} />}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 text-sm px-4 py-2.5 rounded-2xl rounded-bl-md">
                    <span className="inline-flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-800 shrink-0">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask Sodd about Siddhant..."
                  disabled={loading}
                  className="flex-1 text-sm bg-gray-100 dark:bg-white/10 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20 disabled:opacity-50 transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="p-2.5 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:opacity-80 disabled:opacity-30 transition-all shrink-0"
                >
                  <FiSend size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
          </AnimatePresence>
    </>
  );
};

export default AIChat;
