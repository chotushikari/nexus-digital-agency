"use client";

import React, { useState, useEffect, useRef } from "react";
import { Container } from "../../layout/Container";
import { useInView, motion } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Businesses Transformed" },
  { value: 3, suffix: "x", label: "Average Conversion Increase" },
  { value: 40, suffix: "%", label: "Time Saved Through Automation" },
  { value: 100, suffix: "%", label: "Client Satisfaction" }
];

interface CounterProps {
  value: number;
  suffix: string;
  duration?: number;
}

function Counter({ value, suffix, duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000; // in seconds
      
      // Calculate progress percentage
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function: easeOutQuad
      const easeProgress = progress * (2 - progress);
      
      // Calculate current value
      const currentVal = Math.floor(easeProgress * value);
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="text-5xl sm:text-6xl lg:text-7xl font-black font-display gradient-text tracking-tighter">
      {count}
      {suffix}
    </span>
  );
}

export function Results() {
  return (
    <section className="py-24 bg-void relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute inset-0 bg-radial-at-t from-indigo/5 via-transparent to-transparent pointer-events-none" />

      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 text-center">
          {stats.map((stat, index) => {
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                {/* Numeric counter */}
                <Counter value={stat.value} suffix={stat.suffix} />

                {/* Animated label */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-text-secondary mt-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest max-w-[200px]"
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
export default Results;
