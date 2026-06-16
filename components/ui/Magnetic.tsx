"use client";

import React, { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";

interface MagneticProps {
  children: React.ReactElement;
  range?: number; // active distance limit
  strength?: number; // max movement pixel offset (default 12)
}

export function Magnetic({ children, range = 0.5, strength = 12 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Scale displacement based on element dimensions and designated max strength
    const x = (distanceX / (width * range)) * strength;
    const y = (distanceY / (height * range)) * strength;

    // Cap values to max strength
    const cap = (val: number, max: number) => Math.min(max, Math.max(-max, val));
    
    setPosition({ x: cap(x, strength), y: cap(y, strength) });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
