"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge, Button } from "@/components/ui/custom-ui";
import { team } from "@/lib/data";
import { CheckCircle2, Shield, Heart, Lightbulb, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const valuesList = [
  {
    icon: Zap,
    title: "Results First",
    description: "We measure success by your business outcomes — more leads, automated hours saved, and real conversion statistics. Not just arbitrary lines of code."
  },
  {
    icon: Heart,
    title: "True Partnership",
    description: "We work directly alongside you, acting as an extension of your own local business. We optimize and grow together."
  },
  {
    icon: Lightbulb,
    title: "No Jargon",
    description: "We explain everything in plain English. We don't hide behind confusing acronyms or technical developer talk."
  },
  {
    icon: Shield,
    title: "Future-Ready",
    description: "We build layouts and systems using modern frameworks (React 19, Next 15) ensuring they are compatible with AI search algorithms and modern GEO."
  }
];

export default function AboutPage() {
  const dramaticEase = [0.16, 1, 0.3, 1];

  return (
    <div className="bg-void min-h-screen pt-32 pb-24 text-text-primary">
      {/* 1. Hero Block */}
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pb-20 border-b border-border">
          <div className="space-y-6">
            <Badge variant="neon">Our Agency</Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-tight">
              We Build the Digital Future <br />
              <span className="gradient-text">for Small Businesses</span>
            </h1>
            
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              Nexus Digital was founded on a simple premise: local clinics, restaurants, real estate agencies, and schools deserve the same cutting-edge digital infrastructure as massive tech corporations.
            </p>
            
            <p className="text-text-muted leading-relaxed text-sm">
              We replace outdated paper registers and slow websites with modern systems that handle client reservations, coordinate leads, and answer inquiries 24/7.
            </p>

            <div className="pt-2">
              <Link href="/audit/">
                <Button variant="glow">
                  Work With Us
                  <ArrowRight className="w-4.5 h-4.5 ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Graphical Frame */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-surface flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo/10 via-violet/5 to-cyan/5 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="text-center relative z-10 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo via-violet to-cyan flex items-center justify-center mx-auto shadow-lg shadow-indigo/20">
                <span className="font-display font-black text-2xl text-white">N</span>
              </div>
              <p className="text-text-secondary text-sm font-semibold max-w-xs mx-auto">
                Modernizing Operations. Automating Workflows. Driving Local Revenue.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* 2. Values Cards */}
      <section className="py-20 border-b border-border bg-surface/25">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="neon" className="mb-3">Our Values</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
              Principles We Live By
            </h2>
            <p className="text-text-secondary text-sm sm:text-base mt-3">
              How we work alongside our clients to build software.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {valuesList.map((val) => {
              const IconComponent = val.icon;
              return (
                <div key={val.title} className="card-premium rounded-2xl p-6 sm:p-8 bg-surface">
                  <div className="w-11 h-11 rounded-xl bg-indigo/10 text-indigo flex items-center justify-center mb-5">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {val.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Team Grid */}
      <section className="py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="neon" className="mb-3">The Founders</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
              Meet the Team
            </h2>
            <p className="text-text-secondary text-sm sm:text-base mt-3">
              The experts coordinating websites, automation, and AI for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={member.name} className="card-premium rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  {/* Portrait Placeholder Card */}
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-border bg-void/50 mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo/10 to-violet/10 pointer-events-none" />
                    <div className="w-20 h-20 rounded-full bg-surface-raised border border-border/80 flex items-center justify-center font-display font-black text-xl text-indigo shadow-inner shadow-black/30">
                      {member.initials}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-text-primary tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-indigo text-xs font-semibold uppercase tracking-wider mt-1.5">
                    {member.role}
                  </p>
                  <p className="text-text-secondary text-sm mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
