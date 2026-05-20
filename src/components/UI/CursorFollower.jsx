import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const CursorFollower = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const rAF = useRef(null);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    setVisible(true);

    const onMove = (e) => {
      if (rAF.current) cancelAnimationFrame(rAF.current);
      rAF.current = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
        const el = document.elementFromPoint(e.clientX, e.clientY);
        if (el) {
          const tag = el.tagName.toLowerCase();
          const role = el.getAttribute("role");
          setIsHovering(
            tag === "a" ||
            tag === "button" ||
            tag === "input" ||
            tag === "textarea" ||
            tag === "select" ||
            role === "button" ||
            el.closest("a") !== null ||
            el.closest("button") !== null
          );
        }
      });
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      if (rAF.current) cancelAnimationFrame(rAF.current);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={{
        x: pos.x - (isHovering ? 24 : 16),
        y: pos.y - (isHovering ? 24 : 16),
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <div
        className={`rounded-full bg-black dark:bg-white transition-opacity ${
          isHovering ? "w-12 h-12 opacity-20" : "w-8 h-8 opacity-60"
        }`}
      />
    </motion.div>
  );
};
