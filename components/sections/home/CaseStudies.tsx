"use client";

import React from "react";
import { caseStudies } from "@/lib/data";
import { Container } from "../../layout/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { CaseStudyCard } from "../shared/CaseStudyCard";

export function CaseStudies() {
  // Pull the 4 featured case studies for the bento layout
  const featuredCases = caseStudies.slice(0, 4);

  // Define bento grid sizes for the 4 items
  const bentoSizes: ("large" | "medium" | "wide")[] = ["large", "medium", "medium", "wide"];

  return (
    <section className="py-24 bg-surface relative overflow-hidden" id="work">
      {/* Decorative blurred backgrounds */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet/5 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        {/* Header */}
        <SectionHeader
          eyebrow="Case Studies"
          title="Real Results for Real Businesses"
          subtitle="See how we help businesses go from manual operations to digital leaders."
          align="left"
          cta={{ text: "View All Projects", href: "/case-studies/" }}
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {featuredCases.map((project, index) => {
            return (
              <CaseStudyCard
                key={project.id}
                slug={project.slug}
                client={project.client}
                industry={project.industry}
                result={project.result}
                gradient={project.gradient}
                tags={project.tags}
                size={bentoSizes[index]}
                index={index}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
export default CaseStudies;
