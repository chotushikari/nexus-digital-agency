"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { CaseStudyCard } from "@/components/sections/shared/CaseStudyCard";
import { caseStudies, industries } from "@/lib/data";
import { Badge } from "@/components/ui/custom-ui";

export default function CaseStudiesPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Filter case studies based on selected tag
  const filteredCases = caseStudies.filter((project) => {
    if (selectedFilter === "All") return true;
    return project.industry.toLowerCase() === selectedFilter.toLowerCase();
  });

  return (
    <div className="bg-void min-h-screen pt-32 pb-24">
      <Container>
        {/* Section Header */}
        <SectionHeader
          eyebrow="Portfolio"
          title="Client Success Stories"
          subtitle="Real results, metrics, and software transformation details from local businesses."
          align="center"
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16 max-w-3xl mx-auto">
          {industries.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border transition-all duration-300 ${
                  isActive
                    ? "bg-indigo text-white border-indigo shadow-glow-indigo"
                    : "bg-surface text-text-secondary border-border hover:border-indigo/50 hover:text-text-primary"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Grid List */}
        {filteredCases.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCases.map((project, idx) => (
              <CaseStudyCard
                key={project.id}
                slug={project.slug}
                client={project.client}
                industry={project.industry}
                result={project.result}
                gradient={project.gradient}
                tags={project.tags}
                size="medium" // standard uniform size for the listing grid
                index={idx}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 border border-dashed border-border rounded-2xl bg-surface/30 max-w-md mx-auto">
            <p className="text-text-secondary text-sm font-medium">
              No case studies found in this category.
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}
