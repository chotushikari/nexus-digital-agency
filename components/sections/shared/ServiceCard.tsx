"use client";

import React, { useRef, useState, MouseEvent } from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  index: number;
}

export function ServiceCard({ icon: Icon, title, description, href, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Calculate rotation coordinates: rotateX depends on Y coordinate, rotateY depends on X coordinate
    // Limits between -10 and 10 degrees as requested
    const rotateX = -((mouseY - centerY) / centerY) * 10;
    const rotateY = ((mouseX - centerX) / centerX) * 10;

    // Glare moves opposite to the cursor
    const glareX = 100 - (mouseX / width) * 100;
    const glareY = 100 - (mouseY / height) * 100;

    setTilt({ x: rotateX, y: rotateY });
    setGlare({ x: glareX, y: glareY, opacity: 0.18 });
  };

  const handleMouseLeave = () => {
    // Reset back to center with spring ease
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="card-premium h-full rounded-[1.25rem] cursor-pointer"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: tilt.x === 0 && tilt.y === 0 
            ? "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s, box-shadow 0.3s" 
            : "transform 0.1s ease-out",
        }}
      >
        {/* Dynamic glare element */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-300 rounded-[1.25rem]"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle 220px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.15) 0%, transparent 80%)`,
          }}
        />

        {/* Icon Frame */}
        <div className="w-14 h-14 p-3 rounded-2xl bg-indigo/10 text-indigo flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <Icon className="w-8 h-8" />
        </div>

        {/* Heading */}
        <h3 className="text-2xl font-bold text-text-primary mt-6 tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary mt-3 leading-relaxed text-sm">
          {description}
        </p>

        {/* Action link */}
        <div className="mt-6">
          <Link href={href} className="text-indigo font-medium inline-flex items-center gap-1 hover:gap-2 transition-all text-sm group">
            Learn more 
            <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
export default ServiceCard;
