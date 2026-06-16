"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { ParticleField } from "@/components/three/ParticleField";
import { CTA } from "@/components/sections/home/CTA";
import { Badge, Progress } from "@/components/ui/custom-ui";
import { Globe, Zap, Bot, TrendingUp, BarChart3, MessageSquare, Mail, ShieldAlert, ArrowRight, ShieldCheck, ZapOff, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const dramaticEase = [0.16, 1, 0.3, 1];

  return (
    <div className="bg-void min-h-screen">
      {/* 1. Hero Block */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-void border-b border-border">
        {/* Dynamic backdrop particles (less intense count) */}
        <div className="absolute inset-0 z-0 opacity-60">
          <ParticleField />
        </div>
        
        <Container className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="neon" className="mb-4">
              Our Capabilities
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: dramaticEase }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-text-primary tracking-tight max-w-3xl"
          >
            Services Built for <br />
            Your Business
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed mt-5"
          >
            Whether you need a new website, smarter operations, or AI that actually works. We build systems that drive revenue.
          </motion.p>
        </Container>
      </section>

      {/* 2. Detailed Categories (Alternating Layouts) */}
      <section className="py-16 space-y-32">
        {/* Category 1: Website Development (Odd: Text Left, Visual Right) */}
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-indigo/10 text-indigo flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text-primary">
                Website Development
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We build high-converting, mobile-first websites designed to turn visitors into paying customers. Every site is optimized for speed, search visibility, and smooth user flow, helping dentists, brokers, and local businesses capture more attention.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm font-medium text-text-secondary">
                <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-indigo" /> Business Sites</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-indigo" /> Landing Pages</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-indigo" /> Client Portals</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-indigo" /> SEO Optimization</span>
              </div>
            </div>

            {/* Visual: Bento mini-grid */}
            <div className="grid grid-cols-2 gap-4 bg-surface/50 border border-border p-6 rounded-[1.25rem] relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo/10 rounded-full blur-3xl pointer-events-none" />
              <div className="card-premium rounded-xl p-4 bg-void border border-border flex flex-col gap-2 relative z-10">
                <span className="text-[10px] text-indigo uppercase font-bold tracking-wider">Speed Score</span>
                <span className="text-2xl font-black text-text-primary">100%</span>
                <Progress value={100} />
              </div>
              <div className="card-premium rounded-xl p-4 bg-void border border-border flex flex-col gap-2 relative z-10">
                <span className="text-[10px] text-violet uppercase font-bold tracking-wider">Mobile UX</span>
                <span className="text-2xl font-black text-text-primary">Clean</span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet" />
                  <div className="w-1.5 h-1.5 rounded-full bg-violet" />
                  <div className="w-1.5 h-1.5 rounded-full bg-violet" />
                </div>
              </div>
              <div className="card-premium rounded-xl p-4 bg-void border border-border col-span-2 flex flex-col gap-2 relative z-10">
                <span className="text-[10px] text-cyan uppercase font-bold tracking-wider">Responsive Layout</span>
                <p className="text-xs text-text-secondary">Fully dynamic clamp scale ensures perfect renders on screens from 320px to 4K width.</p>
              </div>
            </div>
          </div>
        </Container>

        {/* Category 2: AI Integration (Even: Visual Left, Text Right) */}
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Visual: Chatbot mockup */}
            <div className="order-2 lg:order-1 bg-surface/50 border border-border p-6 rounded-[1.25rem] flex flex-col gap-4 max-w-md mx-auto w-full relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-violet/10 rounded-full blur-3xl pointer-events-none" />
              
              {/* Simulator header */}
              <div className="flex items-center gap-3 border-b border-border pb-3 relative z-10">
                <div className="w-3 h-3 rounded-full bg-success" />
                <div>
                  <h4 className="text-xs font-bold text-text-primary">NexusAI Assistant</h4>
                  <p className="text-[10px] text-text-muted">Trained on Metro Clinic FAQs</p>
                </div>
              </div>

              {/* Chat track */}
              <div className="space-y-3 relative z-10 text-xs">
                <div className="bg-void border border-border p-3 rounded-xl rounded-tl-none max-w-[85%] text-text-secondary leading-relaxed">
                  Hi! Do you have any openings for dental check-ups this Wednesday afternoon?
                </div>
                <div className="bg-indigo text-white p-3 rounded-xl rounded-tr-none max-w-[85%] ml-auto leading-relaxed">
                  Yes, Dr. Chen has openings at 2:30 PM and 4:00 PM on Wednesday. Would you like me to reserve the 2:30 PM slot for you?
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="w-12 h-12 rounded-xl bg-violet/10 text-violet flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text-primary">
                AI Integration
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Connect your business with custom conversational AI assistants trained on your internal policies, services, and scheduling guidelines. Handle client support 24/7, qualify inbound listing queries, and automatically coordinate appointments.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm font-medium text-text-secondary">
                <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-violet" /> 24/7 AI Receptionists</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-violet" /> Support Agents</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-violet" /> Lead Qualification</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-violet" /> FAQ Automation</span>
              </div>
            </div>
          </div>
        </Container>

        {/* Category 3: Automation (Odd: Text Left, Visual Right) */}
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-cyan/10 text-cyan flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text-primary">
                Automation & Workflows
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Eliminate administrative friction. We audit your business actions and tie your systems (CRM, calendar tools, messaging, and emails) into automated pipelines that update dynamically without manual entry.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm font-medium text-text-secondary">
                <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-cyan" /> CRM Custom Pipelines</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-cyan" /> Text Alert Triggers</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-cyan" /> Scheduling Pipelines</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-cyan" /> Billing Syncs</span>
              </div>
            </div>

            {/* Visual: Workflow diagram */}
            <div className="bg-surface/50 border border-border p-6 rounded-[1.25rem] flex flex-col gap-3.5 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between border border-border bg-void p-3 rounded-lg relative z-10 text-xs">
                <span className="font-semibold text-text-primary">Lead Inbound (Site Form)</span>
                <span className="text-indigo font-bold uppercase tracking-wider text-[10px]">Start</span>
              </div>

              <div className="flex justify-center text-text-muted relative z-10 text-xs">↓</div>

              <div className="flex items-center justify-between border border-border bg-void p-3 rounded-lg relative z-10 text-xs">
                <span className="font-semibold text-text-primary">Sync CRM & Alert Agent (SMS)</span>
                <span className="text-success font-bold text-[10px]">Synced</span>
              </div>

              <div className="flex justify-center text-text-muted relative z-10 text-xs">↓</div>

              <div className="flex items-center justify-between border border-border bg-void p-3 rounded-lg relative z-10 text-xs">
                <span className="font-semibold text-text-primary">Start Email Nurturing Drip</span>
                <span className="text-violet font-bold text-[10px]">Active</span>
              </div>
            </div>
          </div>
        </Container>

        {/* Category 4: Digital Improvement (Even: Visual Left, Text Right) */}
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Visual: Before/After split */}
            <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-5 relative overflow-hidden bg-surface/50 border border-border p-6 rounded-[1.25rem]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-rose/15 rounded-full blur-3xl pointer-events-none" />
              
              {/* Before Card */}
              <div className="card-premium rounded-xl p-4 bg-void border border-border flex flex-col gap-2 relative z-10">
                <div className="flex justify-between items-center text-text-muted text-[10px] uppercase font-bold">
                  <span>Old Site</span>
                  <ZapOff className="w-3.5 h-3.5 text-error" />
                </div>
                <div className="text-4xl font-black text-error">5.4s</div>
                <p className="text-[10px] text-text-muted">High bounce rates and slow loading speeds drive traffic away.</p>
              </div>

              {/* After Card */}
              <div className="card-premium rounded-xl p-4 bg-void border border-border flex flex-col gap-2 relative z-10">
                <div className="flex justify-between items-center text-indigo text-[10px] uppercase font-bold">
                  <span>Nexus Digital</span>
                  <Globe className="w-3.5 h-3.5 text-success" />
                </div>
                <div className="text-4xl font-black text-success">0.9s</div>
                <p className="text-[10px] text-text-muted">Blazing fast speed ensures maximum client retention.</p>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="w-12 h-12 rounded-xl bg-indigo/10 text-indigo flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text-primary">
                Digital Improvement & CRO
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Already have a site but losing prospects? We run rigorous diagnostic analysis checks across your current design to locate loading speed bottlenecks, improve mobile layout click flows, and boost customer conversions.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm font-medium text-text-secondary">
                <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-indigo" /> Page Speed Tuning</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-indigo" /> Mobile Responsiveness</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-indigo" /> Click Funnel Audits</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-indigo" /> Speed Diagnosis</span>
              </div>
            </div>
          </div>
        </Container>

        {/* Category 5: Digital Transformation (Odd: Text Left, Visual Right) */}
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-indigo/10 text-indigo flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text-primary">
                Digital Transformation
              </h2>
              <p className="text-text-secondary leading-relaxed">
                A top-to-bottom shift from legacy offline operations to modern software ecosystems. We audit your paper records, manual logs, and phone-only queues, replacing them with custom portals, dashboards, and automated tools.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm font-medium text-text-secondary">
                <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-indigo" /> Legacy File Syncs</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-indigo" /> Operations Redesigns</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-indigo" /> Centralized Dashboards</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-indigo" /> Team Systems Onboarding</span>
              </div>
            </div>

            {/* Visual: 4-step mini timeline */}
            <div className="bg-surface/50 border border-border p-6 rounded-[1.25rem] space-y-4 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-4 relative z-10 text-xs">
                <div className="w-7 h-7 rounded-full bg-indigo text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-text-primary text-xs leading-none">Map Offline Friction</h4>
                  <p className="text-[10px] text-text-secondary mt-0.5">Locate document piles and bottlenecks.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 relative z-10 text-xs">
                <div className="w-7 h-7 rounded-full bg-indigo text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-text-primary text-xs leading-none">Construct Cloud CRM</h4>
                  <p className="text-[10px] text-text-secondary mt-0.5">Transition client data safely to secure databases.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 relative z-10 text-xs">
                <div className="w-7 h-7 rounded-full bg-indigo text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-text-primary text-xs leading-none">Integrate AI Helpers</h4>
                  <p className="text-[10px] text-text-secondary mt-0.5">Automate support tickets and schedulers.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Final Call to Action */}
      <CTA />

      {/* FAQ Schema Injector */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  );
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is digital transformation for small businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Digital transformation is the process of moving from manual processes to digital systems, then to automation, and finally to AI-enhanced operations. For small businesses, this means better websites, automated workflows, and AI tools that handle customer inquiries 24/7."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a business website cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Business website costs vary based on complexity. At Nexus Digital, we offer scalable packages starting from landing pages to full digital transformation. Contact us for a free audit and custom quote."
      }
    }
  ]
};
