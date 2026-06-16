import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";
import { Container } from "@/components/layout/Container";
import { Badge, Button } from "@/components/ui/custom-ui";
import { ArrowLeft, CheckCircle, ArrowRight, Star } from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params at build time
export async function generateStaticParams() {
  return caseStudies.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-void min-h-screen pb-24">
      {/* 1. Hero Block with Full Width Gradient */}
      <section className={`relative py-32 bg-gradient-to-br ${project.gradient} text-white overflow-hidden`}>
        {/* Absolute dark mask to ease readability */}
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="absolute inset-0 bg-radial-at-t from-transparent via-black/20 to-black/75 z-0" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none" />

        <Container className="relative z-10">
          {/* Back button */}
          <Link
            href="/case-studies/"
            className="inline-flex items-center gap-2 text-white/85 hover:text-white mb-8 text-sm font-semibold transition-colors bg-black/20 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <Badge variant="outline" className="text-white border-white/20 bg-white/10 uppercase tracking-widest font-bold text-[10px] py-1 px-3">
                {project.industry}
              </Badge>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-tight">
                {project.client}
              </h1>
              <p className="text-white/85 text-lg font-medium max-w-xl">
                {project.service}
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <div className="inline-block bg-black/35 backdrop-blur-md rounded-2xl p-6 border border-white/15 text-left min-w-[200px]">
                <span className="text-[10px] text-white/60 uppercase font-black tracking-wider block">Outcome Achieved</span>
                <span className="text-4xl sm:text-5xl font-black font-display text-white mt-1 block tracking-tighter">
                  {project.resultMetric}
                </span>
                <span className="text-xs text-white/80 mt-1 block leading-tight font-medium">
                  {project.result}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Challenge & Solution Details */}
      <Container className="mt-16 sm:mt-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Side: Challenge & Solutions */}
          <div className="lg:col-span-8 space-y-12">
            {/* Challenge */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                The Challenge
              </h2>
              <p className="text-text-secondary leading-relaxed text-base">
                {project.challenge}
              </p>
            </div>

            {/* Solution list */}
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                The Solution
              </h2>
              <div className="space-y-4">
                {project.solution.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 rounded-xl border border-border bg-surface/30">
                    <div className="w-6 h-6 rounded-full bg-indigo/10 text-indigo flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      {idx + 1}
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Key results metrics & testimonials summary */}
          <div className="lg:col-span-4 space-y-8">
            {/* Outcome cards */}
            <div className="card-premium rounded-2xl p-6 space-y-6">
              <h3 className="text-xs font-semibold text-text-primary tracking-wider uppercase">
                Key Metrics
              </h3>
              
              <div className="space-y-5 text-sm">
                {project.results.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary font-medium leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Testimonial section */}
        <div className="mt-16 sm:mt-24 card-premium rounded-3xl p-6 sm:p-10 border-l-4 border-l-indigo flex flex-col justify-between relative overflow-hidden bg-surface-raised/20">
          <p className="text-text-primary text-lg sm:text-xl italic leading-relaxed font-semibold max-w-4xl">
            "{project.testimonial.quote}"
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-indigo/15 text-indigo flex items-center justify-center font-display font-black text-xs">
              {project.client.split(" ").map(w => w[0]).join("")}
            </div>
            <div>
              <h4 className="font-semibold text-text-primary text-sm sm:text-base leading-tight">
                {project.testimonial.author}
              </h4>
              <p className="text-text-secondary text-xs sm:text-sm mt-0.5">
                {project.testimonial.role}
              </p>
            </div>
          </div>
        </div>

        {/* 4. Conversion footer block */}
        <div className="mt-20 border border-border bg-surface rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo/10 rounded-full blur-3xl pointer-events-none" />
          
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Want Similar Results?
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mt-2.5 max-w-md mx-auto leading-relaxed">
            Get your free digital audit in 24 hours. We'll show you exactly how to automate your workflows and optimize client conversions.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/audit/">
              <Button variant="glow" size="md">
                Get Free Digital Audit
                <ArrowRight className="w-4.5 h-4.5 ml-1.5" />
              </Button>
            </Link>
            
            <Link href="/contact/">
              <Button variant="outline" size="md" className="border-border">
                Talk to an Expert
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
