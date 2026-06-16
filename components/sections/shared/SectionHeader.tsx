"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "../../ui/custom-ui";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  cta?: { text: string; href: string };
}

export function SectionHeader({ eyebrow, title, subtitle, align = "center", cta }: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col mb-12 lg:mb-16",
        isCenter ? "items-center text-center" : "items-start text-left"
      )}
    >
      {/* Eyebrow Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Badge variant="neon" className="mb-4">
          {eyebrow}
        </Badge>
      </motion.div>

      {/* Row Wrapper for Title + Optional CTA */}
      <div
        className={cn(
          "w-full flex flex-col md:flex-row md:items-end justify-between gap-6",
          isCenter ? "justify-center" : ""
        )}
      >
        <div className={cn("max-w-3xl", isCenter ? "mx-auto" : "")}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-text-primary leading-tight"
          >
            {title}
          </motion.h2>
        </div>

        {/* Desktop CTA (shown on the right if left-aligned and cta exists) */}
        {!isCenter && cta && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block flex-shrink-0"
          >
            <Link
              href={cta.href}
              className="inline-flex items-center gap-1.5 text-indigo hover:text-indigo-400 font-semibold transition-colors text-sm"
            >
              {cta.text}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            "text-base sm:text-lg lg:text-xl text-text-secondary mt-4 leading-relaxed max-w-2xl",
            isCenter ? "mx-auto" : ""
          )}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Mobile CTA (only shown on small screens if cta is present) */}
      {!isCenter && cta && (
        <div className="block md:hidden mt-4">
          <Link
            href={cta.href}
            className="inline-flex items-center gap-1.5 text-indigo hover:text-indigo-400 font-semibold transition-colors text-sm"
          >
            {cta.text}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
export default SectionHeader;
