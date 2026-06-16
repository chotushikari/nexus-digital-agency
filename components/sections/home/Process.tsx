"use client";

import React, { useRef } from "react";
import { Container } from "../../layout/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover & Audit",
    description: "We analyze your current digital presence, operations, and identify the highest-impact opportunities."
  },
  {
    number: "02",
    title: "Design & Plan",
    description: "We create a roadmap with clear deliverables, timelines, and ROI projections tailored to your business."
  },
  {
    number: "03",
    title: "Build & Automate",
    description: "We develop your website, set up automations, and integrate AI tools — with weekly progress updates."
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description: "We go live, train your team, and continuously improve based on real data and user feedback."
  }
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // Map scroll progress to scale value
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="py-24 bg-surface border-y border-border relative overflow-hidden" id="process">
      {/* Background visual touches */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_40px] pointer-events-none" />

      <Container>
        <SectionHeader
          eyebrow="Our Process"
          title="From Manual to AI-Enhanced in 4 Steps"
          subtitle="A proven framework that meets you where you are."
          align="center"
        />

        {/* Timeline body */}
        <div className="relative mt-20">
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-[28px] left-[12%] right-[12%] h-0.5 bg-border z-0">
            <motion.div
              style={{ scaleX: scale, originX: 0 }}
              className="absolute inset-0 bg-gradient-to-r from-indigo via-violet to-cyan"
            />
          </div>

          {/* Mobile Vertical Line */}
          <div className="lg:hidden absolute top-0 bottom-0 left-[24px] w-0.5 bg-border z-0">
            <motion.div
              style={{ scaleY: scale, originY: 0 }}
              className="absolute inset-x-0 top-0 bottom-0 bg-gradient-to-b from-indigo via-violet to-cyan"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => {
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-row lg:flex-col items-start gap-6 lg:gap-0 pl-2 lg:pl-0"
                >
                  {/* Step Connector Marker */}
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-surface-raised border-2 border-border relative z-20 group transition-all duration-300">
                    {/* Pulsing indicator when active */}
                    <div className="absolute inset-1.5 rounded-full bg-indigo opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="font-display font-bold text-sm text-text-primary z-10">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="mt-0 lg:mt-8 relative">
                    {/* Animated backdrop number */}
                    <span className="absolute -top-12 -left-4 text-7xl font-black text-text-muted/5 pointer-events-none select-none tracking-tighter">
                      {step.number}
                    </span>

                    <h3 className="text-xl font-bold text-text-primary mt-1 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mt-2.5 max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
export default Process;
