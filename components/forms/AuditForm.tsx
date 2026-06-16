"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";
import { Check, ArrowRight, ArrowLeft, Shield, Clock, Lock, Edit2 } from "lucide-react";
import { Input, Button, Select, Label, Checkbox, Radio, Progress } from "../ui/custom-ui";

type Step = 1 | 2 | 3;

interface FormData {
  businessName: string;
  industry: string;
  websiteUrl: string;
  challenges: string[];
  primaryGoal: string;
  name: string;
  email: string;
  phone: string;
  preferredContact: "email" | "phone";
}

const defaultData: FormData = {
  businessName: "",
  industry: "",
  websiteUrl: "",
  challenges: [],
  primaryGoal: "More leads/sales",
  name: "",
  email: "",
  phone: "",
  preferredContact: "email",
};

const challengeOptions = [
  "Need a new website",
  "Slow or outdated site",
  "No automation / everything manual",
  "Losing leads",
  "Want AI integration",
  "Don't know where to start"
];

const goalOptions = [
  "More leads/sales",
  "Better online presence",
  "Automate operations",
  "Add AI capabilities",
  "All of the above"
];

const industryOptions = [
  "Restaurant",
  "Clinic/Medical",
  "School/Education",
  "Real Estate",
  "Retail",
  "Fitness",
  "Professional Services",
  "Other"
];

// Helper to validate URL structure
const isValidUrl = (url: string) => {
  try {
    new URL(url.startsWith("http") ? url : "https://" + url);
    return true;
  } catch {
    return false;
  }
};

// Helper to validate email structure
const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export function AuditForm() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>(defaultData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Auto-load saved state from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("auditForm");
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        console.error("Error parsing saved form data", e);
      }
    }
  }, []);

  // Auto-save state to LocalStorage on changes
  useEffect(() => {
    localStorage.setItem("auditForm", JSON.stringify(formData));
  }, [formData]);

  // Handle challenge checkbox change
  const handleChallengeChange = (challenge: string, checked: boolean) => {
    setFormData((prev) => {
      const current = [...prev.challenges];
      if (checked) {
        current.push(challenge);
      } else {
        const idx = current.indexOf(challenge);
        if (idx > -1) current.splice(idx, 1);
      }
      return { ...prev, challenges: current };
    });
  };

  // Step 1 validation
  const validateStep1 = () => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!formData.businessName.trim()) {
      errs.businessName = "Business name is required";
    }
    if (!formData.industry) {
      errs.industry = "Please select your industry";
    }
    if (formData.websiteUrl && !isValidUrl(formData.websiteUrl)) {
      errs.websiteUrl = "Please enter a valid website URL";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Step 2 validation
  const validateStep2 = () => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) {
      errs.name = "Your name is required";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!isValidEmail(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Navigation handlers
  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep((s) => (s - 1) as Step);
    }
  };

  // Submission
  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // We send form data to Formspree endpoint (swappable placeholder)
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_AUDIT_ID 
        ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_AUDIT_ID}`
        : "https://formspree.io/f/mock_id"; // Mock fallback

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Simulating success even if mock fallback is used to demonstrate UX
      if (res.ok || endpoint.includes("mock_id")) {
        setIsSuccess(true);
        localStorage.removeItem("auditForm");
        
        // Trigger confetti bursts
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#6366f1", "#8b5cf6", "#06b6d4"]
        });
      }
    } catch (e) {
      console.error("Submission failed", e);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-surface border border-indigo/20 rounded-3xl p-8 lg:p-12 text-center max-w-4xl mx-auto my-12 animate-fade-in relative overflow-hidden">
        {/* Glow behind success state */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-16 h-16 rounded-full bg-success/10 border border-success/30 flex items-center justify-center mx-auto mb-6 text-success animate-bounce">
          <Check className="w-8 h-8" strokeWidth={3} />
        </div>

        <h3 className="text-3xl sm:text-4xl font-black font-display gradient-text mb-4">
          Audit Requested!
        </h3>
        
        <p className="text-text-secondary text-base sm:text-lg mb-8 max-w-xl mx-auto">
          We will analyze your business and email your personalized digital audit within 24 hours. Meanwhile, book your free 30-minute strategy call below.
        </p>

        {/* Calendly booking block */}
        <div className="rounded-2xl overflow-hidden border border-border shadow-2xl bg-void">
          <iframe
            src="https://calendly.com/nexus-digital-mock/30min?embed_domain=nexusdigital.vercel.app&embed_type=inline"
            width="100%"
            height="600"
            frameBorder="0"
            className="w-full h-[600px] border-none"
            title="Calendly Scheduler"
          ></iframe>
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Calculate progress percent
  const progressValue = step === 1 ? 33 : step === 2 ? 66 : 100;
  const progressLabels = ["Business Info", "Goals & Contact", "Review"];

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* ProgressBar Steps */}
      <div className="mb-10 relative">
        <Progress value={progressValue} className="mb-6" />
        
        <div className="flex items-center justify-between">
          {progressLabels.map((lbl, idx) => {
            const num = idx + 1;
            const isActive = step === num;
            const isCompleted = step > num;
            
            return (
              <div key={lbl} className="flex flex-col items-center relative z-10">
                <div
                  className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 border",
                    isCompleted && "bg-indigo text-white border-indigo shadow-glow-indigo",
                    isActive && "bg-indigo text-white border-indigo shadow-glow-indigo ring-4 ring-indigo/10",
                    !isActive && !isCompleted && "bg-surface-raised border-border text-text-muted"
                  )}
                >
                  {isCompleted ? <Check className="w-4.5 h-4.5 text-white" strokeWidth={3} /> : num}
                </div>
                <span
                  className={cn(
                    "text-xs font-semibold mt-2.5 transition-colors duration-300",
                    isActive ? "text-text-primary" : "text-text-muted"
                  )}
                >
                  {lbl}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Form Fields wrapper */}
      <div className="bg-surface border border-border rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                Tell us about your business
              </h2>
              <p className="text-text-secondary text-sm mt-1">
                Step 1 of 3: Provide basic company details to kick off the audit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="businessName">Business Name *</Label>
                <Input
                  id="businessName"
                  placeholder="e.g. Metro Dental Clinic"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  error={errors.businessName}
                />
              </div>

              <div>
                <Label htmlFor="industry">Industry *</Label>
                <Select
                  id="industry"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  error={errors.industry}
                >
                  <option value="" disabled className="bg-surface">Select your industry...</option>
                  {industryOptions.map((ind) => (
                    <option key={ind} value={ind.toLowerCase()} className="bg-surface">
                      {ind}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="websiteUrl">Current Website URL (optional)</Label>
              <Input
                id="websiteUrl"
                placeholder="e.g. www.metroclinic.com"
                value={formData.websiteUrl}
                onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                error={errors.websiteUrl}
              />
            </div>

            <div>
              <Label>What are your current challenges? (select all that apply)</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
                {challengeOptions.map((opt) => (
                  <Checkbox
                    key={opt}
                    id={opt}
                    label={opt}
                    checked={formData.challenges.includes(opt)}
                    onChange={(e) => handleChallengeChange(opt, e.target.checked)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                Establish goals & contact details
              </h2>
              <p className="text-text-secondary text-sm mt-1">
                Step 2 of 3: Let us know your targets and where to send the final report.
              </p>
            </div>

            <div>
              <Label>Primary Goal</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
                {goalOptions.map((opt) => (
                  <Radio
                    key={opt}
                    id={opt}
                    name="primaryGoal"
                    label={opt}
                    checked={formData.primaryGoal === opt}
                    onChange={() => setFormData({ ...formData, primaryGoal: opt })}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-3">
              <div>
                <Label htmlFor="fullName">Your Full Name *</Label>
                <Input
                  id="fullName"
                  placeholder="e.g. Dr. Sarah Chen"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  error={errors.name}
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="e.g. sarah@metroclinic.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  error={errors.email}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="phone">Phone Number (optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="e.g. +1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <Label>Preferred Contact Channel</Label>
                <div className="flex gap-6 mt-3">
                  <Radio
                    id="contactEmail"
                    name="preferredContact"
                    label="Email"
                    checked={formData.preferredContact === "email"}
                    onChange={() => setFormData({ ...formData, preferredContact: "email" })}
                  />
                  <Radio
                    id="contactPhone"
                    name="preferredContact"
                    label="Phone"
                    checked={formData.preferredContact === "phone"}
                    onChange={() => setFormData({ ...formData, preferredContact: "phone" })}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                Review your application details
              </h2>
              <p className="text-text-secondary text-sm mt-1">
                Step 3 of 3: Double check your inputs prior to request submission.
              </p>
            </div>

            {/* Summary display blocks */}
            <div className="space-y-4 pt-3">
              {/* Box 1 */}
              <div className="border border-border bg-void/50 rounded-xl p-5 relative">
                <button
                  onClick={() => setStep(1)}
                  className="absolute top-4 right-4 text-text-muted hover:text-indigo transition-colors"
                  aria-label="Edit Section 1"
                >
                  <Edit2 className="w-4.5 h-4.5" />
                </button>
                <h3 className="font-bold text-sm uppercase tracking-wider text-indigo">
                  Business Info
                </h3>
                <div className="mt-3.5 space-y-2 text-sm">
                  <p><span className="text-text-muted font-medium">Business Name:</span> <span className="text-text-primary font-semibold">{formData.businessName}</span></p>
                  <p><span className="text-text-muted font-medium">Industry:</span> <span className="text-text-primary font-semibold capitalize">{formData.industry}</span></p>
                  {formData.websiteUrl && <p><span className="text-text-muted font-medium">Website URL:</span> <span className="text-text-primary font-semibold">{formData.websiteUrl}</span></p>}
                  <p>
                    <span className="text-text-muted font-medium">Current Challenges:</span>{" "}
                    <span className="text-text-primary font-semibold">
                      {formData.challenges.length > 0 ? formData.challenges.join(", ") : "None specified"}
                    </span>
                  </p>
                </div>
              </div>

              {/* Box 2 */}
              <div className="border border-border bg-void/50 rounded-xl p-5 relative">
                <button
                  onClick={() => setStep(2)}
                  className="absolute top-4 right-4 text-text-muted hover:text-indigo transition-colors"
                  aria-label="Edit Section 2"
                >
                  <Edit2 className="w-4.5 h-4.5" />
                </button>
                <h3 className="font-bold text-sm uppercase tracking-wider text-indigo">
                  Goals & Contact Details
                </h3>
                <div className="mt-3.5 space-y-2 text-sm">
                  <p><span className="text-text-muted font-medium">Primary Goal:</span> <span className="text-text-primary font-semibold">{formData.primaryGoal}</span></p>
                  <p><span className="text-text-muted font-medium">Full Name:</span> <span className="text-text-primary font-semibold">{formData.name}</span></p>
                  <p><span className="text-text-muted font-medium">Email Address:</span> <span className="text-text-primary font-semibold">{formData.email}</span></p>
                  {formData.phone && <p><span className="text-text-muted font-medium">Phone Number:</span> <span className="text-text-primary font-semibold">{formData.phone}</span></p>}
                  <p><span className="text-text-muted font-medium">Preferred Contact:</span> <span className="text-text-primary font-semibold capitalize">{formData.preferredContact}</span></p>
                </div>
              </div>
            </div>

            {/* Confirm Submit buttons */}
            <div className="pt-4">
              <Button
                variant="glow"
                className="w-full py-4 text-base"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? "Submitting Request..." : "Get My Free Audit"}
                <ArrowRight className="w-5 h-5 ml-1.5" />
              </Button>
            </div>

            {/* Trust assurances block */}
            <div className="grid grid-cols-3 gap-2 py-4 border-t border-border mt-6 text-center text-[10px] sm:text-xs text-text-secondary">
              <div className="flex flex-col items-center gap-1">
                <Shield className="w-4 h-4 text-success" />
                <span className="font-semibold">No spam, ever</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Clock className="w-4 h-4 text-indigo" />
                <span className="font-semibold">24h response time</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Lock className="w-4 h-4 text-cyan" />
                <span className="font-semibold">Data fully protected</span>
              </div>
            </div>
          </div>
        )}

        {/* Prev / Next Bottom Action Tray */}
        {!isSuccess && step < 3 && (
          <div className="flex items-center justify-between border-t border-border mt-8 pt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrev}
              disabled={step === 1}
              className="border-border hover:border-text-primary/30"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back
            </Button>
            
            <Button variant="glow" size="sm" onClick={handleNext}>
              Next Step
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
export default AuditForm;
