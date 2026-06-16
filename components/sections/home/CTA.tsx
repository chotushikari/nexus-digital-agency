"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../../layout/Container";
import { Button } from "../../ui/custom-ui";
import { Magnetic } from "../../ui/Magnetic";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-32 bg-void relative overflow-hidden">
      {/* Centered electric radial blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo/15 via-violet/10 to-cyan/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute top-12 left-1/3 w-32 h-32 bg-indigo/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-1/3 w-36 h-36 bg-violet/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Main Display Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-text-primary tracking-tight"
          >
            Ready to Transform <br className="hidden sm:inline" />
            Your Business?
          </motion.h2>

          {/* Subtitle description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-text-secondary text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Get a free digital audit. We'll analyze your current setup and show you exactly where you can improve — no obligation, no sales pitch.
          </motion.p>

          {/* Button Trigger */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-6 inline-block"
          >
            <Magnetic strength={12}>
              <Link href="/audit/">
                <Button variant="glow" size="lg" className="px-10 py-4.5 rounded-xl font-bold">
                  Start Your Free Audit
                  <ArrowRight className="w-5 h-5 ml-1.5" />
                </Button>
              </Link>
            </Magnetic>
          </motion.div>

          {/* Trust Caption */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-text-muted text-xs sm:text-sm font-semibold tracking-wide"
          >
            Takes 2 minutes. Results in 24 hours.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
export default CTA;
