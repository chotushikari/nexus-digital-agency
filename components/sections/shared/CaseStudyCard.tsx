"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "../../ui/custom-ui";

interface CaseStudyCardProps {
  slug: string;
  client: string;
  industry: string;
  result: string;
  gradient: string; // tailwind gradient classes, e.g. "from-emerald-500 to-teal-600"
  tags: string[];
  size: "large" | "medium" | "wide";
  index: number;
}

export function CaseStudyCard({ slug, client, industry, result, gradient, tags, size, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative rounded-[1.25rem] overflow-hidden border border-border bg-surface transition-all duration-500 hover:border-indigo/30 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1",
        size === "large" && "md:col-span-2 md:row-span-2 min-h-[480px] lg:min-h-[520px]",
        size === "medium" && "col-span-1 min-h-[320px] md:min-h-[250px] lg:min-h-[280px]",
        size === "wide" && "md:col-span-2 col-span-1 min-h-[320px] md:min-h-[250px] lg:min-h-[280px]"
      )}
    >
      <Link href={`/case-studies/${slug}/`} className="absolute inset-0 flex flex-col justify-between p-6 z-10">
        {/* Top: Badges */}
        <div className="flex flex-wrap gap-2 items-start justify-between w-full">
          <Badge variant="outline" className="text-white bg-black/40 backdrop-blur-md border-white/10 uppercase tracking-wider font-semibold text-[10px] py-1 px-3">
            {industry}
          </Badge>
          
          <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 transform translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Bottom: Text Overlay */}
        <div className="space-y-3 relative z-15">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span key={tag} className="inline-flex text-[10px] font-bold uppercase tracking-wider text-indigo/90 bg-indigo/10 px-2.5 py-0.5 rounded-full border border-indigo/20">
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-text-primary text-xs font-semibold tracking-wider uppercase">
            {client}
          </h3>

          <p className="text-white font-bold text-xl sm:text-2xl tracking-tight leading-tight group-hover:text-indigo-200 transition-colors">
            {result}
          </p>

          <span className="text-indigo text-xs font-semibold inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
            View Case Study <span className="text-sm font-bold">→</span>
          </span>
        </div>
      </Link>

      {/* Background Graphic/Gradients */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br transition-transform duration-700 ease-out group-hover:scale-105",
          gradient
        )}
      >
        {/* Abstract pattern to give a premium UI feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        
        {/* Shadow overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90 z-5" />
      </div>
    </motion.div>
  );
}
export default CaseStudyCard;
