"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { ParticleField } from "../../three/ParticleField";
import { Button } from "../../ui/custom-ui";
import { Magnetic } from "../../ui/Magnetic";
import { Container } from "../../layout/Container";

const logoList = [
  "Metro Clinic",
  "Bistro 42",
  "Summit Realty",
  "Greenfield School",
  "FitCore Gym"
];

export function Hero() {
  const line1 = "We Build";
  const line2 = "Digital Futures";
  const line3 = "For Real Businesses";

  // Framer Motion spring and easing curves
  const dramaticEase = [0.16, 1, 0.3, 1];

  // H1 letter container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.2,
      },
    },
  };

  // Character spans
  const charVariants = {
    hidden: { opacity: 0, y: "60%", filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.65, ease: dramaticEase },
    },
  };

  const textToSpans = (text: string, isGradient: boolean = false) => {
    return (
      <span className={isGradient ? "gradient-text inline-block" : "inline-block"}>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            className="inline-block origin-bottom"
            style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-void">
      {/* 3D WebGL particle field */}
      <ParticleField />

      {/* Floating neon orbs in background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-8000" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-6000" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: dramaticEase }}
          className="badge-neon mb-6 font-display font-medium text-sm tracking-wider uppercase"
        >
          <span>Digital Transformation Agency</span>
        </motion.div>

        {/* H1 Title with kinetic letter animations */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-display font-black text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tighter max-w-5xl"
        >
          <div className="block">{textToSpans(line1)}</div>
          <div className="block my-1.5">{textToSpans(line2, true)}</div>
          <div className="block">{textToSpans(line3)}</div>
        </motion.h1>

        {/* Subtitle description */}
        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.75, ease: dramaticEase }}
          className="text-text-secondary text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed mt-8"
        >
          Websites that convert. Operations that run themselves. AI that works for you. Built for clinics, restaurants, schools, real estate, and service businesses ready for what's next.
        </motion.p>

        {/* Action Group */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: dramaticEase }}
          className="flex flex-col sm:flex-row gap-4 mt-10 justify-center w-full max-w-md sm:max-w-none px-4"
        >
          <Magnetic strength={10}>
            <Link href="/audit/">
              <Button variant="glow" size="lg" className="w-full sm:w-auto">
                Get Your Free Audit
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </Magnetic>

          <Magnetic strength={10}>
            <Link href="/case-studies/">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-border bg-void/50 backdrop-blur-sm">
                View Our Work
              </Button>
            </Link>
          </Magnetic>
        </motion.div>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.15 }}
          className="mt-16 sm:mt-24 border-t border-border/60 pt-8 w-full max-w-3xl"
        >
          <p className="text-xs uppercase tracking-wider text-text-muted mb-6 font-semibold">
            Trusted by 50+ local businesses
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 px-4">
            {logoList.map((logo) => (
              <span
                key={logo}
                className="text-text-secondary text-sm sm:text-base font-bold tracking-tight opacity-40 hover:opacity-100 hover:text-indigo transition-all duration-300 cursor-default uppercase"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bouncing Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight - 80,
              behavior: "smooth",
            });
          }}
        >
          <span className="text-[10px] text-text-muted uppercase tracking-widest font-bold font-display">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-text-muted" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
export default Hero;
