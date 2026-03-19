"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const funFacts = [
  "Preparing the playground…",
  "Gathering the crayons…",
  "Waking up the butterflies…",
  "Planting seeds of curiosity…",
  "Mixing the finger paints…",
  "Counting the stars…",
  "Building block towers…",
];

const FloatingEmoji = ({
  emoji,
  delay,
  x,
  duration,
}: {
  emoji: string;
  delay: number;
  x: number;
  duration: number;
}) => (
  <motion.div
    className="absolute text-2xl md:text-3xl select-none pointer-events-none"
    initial={{ opacity: 0, y: 100, x }}
    animate={{
      opacity: [0, 1, 1, 0],
      y: [100, -20, -80, -140],
      x: [x, x + 20, x - 10, x + 15],
      rotate: [0, 15, -10, 20],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatDelay: 1,
      ease: "easeOut",
    }}
  >
    {emoji}
  </motion.div>
);

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [factIndex, setFactIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Progress bar: fill over ~7 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Slightly randomized increments for organic feel
        return Math.min(prev + 1.2 + Math.random() * 0.6, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  // Rotate fun facts
  useEffect(() => {
    const factTimer = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 2000);
    return () => clearInterval(factTimer);
  }, []);

  // Dismiss after progress completes
  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => setDone(true), 600);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-200 flex flex-col items-center justify-center bg-white overflow-hidden"
        >
          {/* Soft radial background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-brand-lt)_0%,_white_70%)]" />

          {/* Floating emojis */}
          <div className="absolute inset-0 flex items-end justify-center">
            <FloatingEmoji emoji="🌟" delay={0} x={-120} duration={4} />
            <FloatingEmoji emoji="🎨" delay={0.8} x={-40} duration={3.5} />
            <FloatingEmoji emoji="🦋" delay={1.5} x={50} duration={4.2} />
            <FloatingEmoji emoji="🌈" delay={2.2} x={130} duration={3.8} />
            <FloatingEmoji emoji="📚" delay={0.5} x={-80} duration={4.5} />
            <FloatingEmoji emoji="🎵" delay={1.8} x={90} duration={3.2} />
            <FloatingEmoji emoji="🌻" delay={2.8} x={-150} duration={4} />
            <FloatingEmoji emoji="✏️" delay={3.2} x={160} duration={3.6} />
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center px-6">
            {/* Logo with bounce */}
            <motion.div
              animate={{
                y: [0, -16, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mb-8"
            >
              <div className="relative">
                <Image
                  src="/logo.png"
                  width={120}
                  height={120}
                  alt="Little Lion"
                  className="w-24 h-24 md:w-28 md:h-28 drop-shadow-xl"
                  priority
                />
                {/* Pulsing ring behind logo */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-brand/20"
                  animate={{ scale: [1, 1.6, 1.6], opacity: [0.6, 0, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  style={{ margin: "-8px" }}
                />
              </div>
            </motion.div>

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-10"
            >
              <h1 className="font-display text-3xl md:text-4xl font-black text-dark tracking-tight">
                Little <span className="text-brand">Lion</span>
              </h1>
              <p className="text-soft text-xs font-bold tracking-[0.25em] uppercase mt-1">
                Early Learning Centre
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 0.5 }}
              className="w-64 md:w-72 mb-6"
            >
              <div className="h-2.5 bg-brand-lt rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-brand to-brand-dk relative"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_1.5s_infinite]" />
                </motion.div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[10px] font-bold text-soft uppercase tracking-widest">
                  Loading
                </span>
                <span className="text-[10px] font-black text-brand tabular-nums">
                  {Math.round(progress)}%
                </span>
              </div>
            </motion.div>

            {/* Rotating fun facts */}
            <div className="h-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={factIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-mid font-medium text-center"
                >
                  {funFacts[factIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Bouncing dots */}
            <div className="flex gap-2 mt-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2.5 h-2.5 rounded-full bg-brand"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
