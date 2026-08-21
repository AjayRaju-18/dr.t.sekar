import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Intro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {done ? null : (
        <motion.div
          key="intro"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="blueprint-grid absolute inset-0 opacity-40" />
          <svg
            viewBox="0 0 240 80"
            className="relative w-64 text-primary"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
            aria-hidden
          >
            <motion.path
              d="M4 40 H84 M156 40 H236"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            />
            <motion.circle
              cx="120"
              cy="40"
              r="26"
              strokeDasharray="3 4"
              initial={{ pathLength: 0, rotate: -90 }}
              animate={{ pathLength: 1, rotate: 90 }}
              style={{ originX: "120px", originY: "40px" }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />
            <motion.text
              x="120"
              y="44"
              textAnchor="middle"
              stroke="none"
              fill="currentColor"
              fontSize="10"
              letterSpacing="3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              T. SEKAR
            </motion.text>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
