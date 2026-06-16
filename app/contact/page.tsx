"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { Badge } from "@/components/ui/custom-ui";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const dramaticEase = [0.16, 1, 0.3, 1];

  return (
    <div className="bg-void min-h-screen pt-32 pb-24 relative overflow-hidden text-text-primary">
      {/* Background blurs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-indigo/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet/5 rounded-full blur-[110px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="neon">Get in Touch</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: dramaticEase }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-text-primary"
          >
            Let's Talk Digital
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-sm sm:text-base max-w-md mx-auto"
          >
            Ready to integrate AI systems, automate your CRM pipelines, or rebuild your website? Reach out below.
          </motion.p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mt-12">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: dramaticEase }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>

          {/* Right: Info & Calendly Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: dramaticEase }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Info details */}
            <div className="card-premium rounded-2xl p-6 space-y-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-indigo">
                Contact Information
              </h3>
              
              <div className="space-y-4 text-sm font-medium">
                <div className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors">
                  <Mail className="w-5 h-5 text-indigo flex-shrink-0" />
                  <span>hello@nexusdigital.agency</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors">
                  <Phone className="w-5 h-5 text-indigo flex-shrink-0" />
                  <span>+1 (555) 789-2026</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <MapPin className="w-5 h-5 text-indigo flex-shrink-0" />
                  <span>Silicon Valley &bull; Remote Everywhere</span>
                </div>
              </div>
            </div>

            {/* Quick scheduler booking block */}
            <div className="card-premium rounded-2xl p-6 space-y-5">
              <div className="flex items-center gap-3 text-indigo">
                <Calendar className="w-5 h-5 flex-shrink-0" />
                <h3 className="text-xs font-semibold uppercase tracking-wider">
                  Book a Quick Call
                </h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Prefer to schedule a direct, 1-on-1 strategy briefing session? Reserve a time on our calendar.
              </p>
              
              <div className="rounded-xl overflow-hidden border border-border bg-void">
                <iframe
                  src="https://calendly.com/nexus-digital-mock/30min?embed_domain=nexusdigital.vercel.app&embed_type=inline"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  className="w-full h-[450px] border-none"
                  title="Calendly Scheduler Sidebar"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
