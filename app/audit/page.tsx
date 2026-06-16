"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { AuditForm } from "@/components/forms/AuditForm";
import { Badge } from "@/components/ui/custom-ui";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function AuditPage() {
  const dramaticEase = [0.16, 1, 0.3, 1];

  return (
    <div className="bg-void min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background electric glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo/5 rounded-full blur-[130px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-indigo/10 border border-indigo/20 px-4 py-1.5 text-indigo text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-4.5 h-4.5 text-indigo" />
            <span>100% Free &bull; No strings attached</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: dramaticEase }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-text-primary leading-tight"
          >
            Get Your Free <br className="sm:hidden" />
            <span className="gradient-text">Digital Audit</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            In 24 hours, you'll receive a personalized report showing exactly where your business can improve online — from speed and mobile layout to CRM automation opportunities.
          </motion.p>
        </div>

        {/* 3-Step Wizard Audit Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: dramaticEase }}
        >
          <AuditForm />
        </motion.div>
      </Container>
    </div>
  );
}
