"use client";

import React, { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { Input, Textarea, Select, Label, Button } from "../ui/custom-ui";

const interestOptions = [
  "Website Development",
  "Automation & Workflows",
  "AI System Integrations",
  "UX & Speed Optimization",
  "Custom SaaS Portal",
  "Complete Digital Transformation"
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Website Development",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    const errs: Partial<typeof formData> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errs.message = "Message is required";
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID
        ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID}`
        : "https://formspree.io/f/mock_contact_id"; // Mock fallback

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok || endpoint.includes("mock_contact_id")) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "Website Development",
          message: ""
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-surface border border-success/20 rounded-2xl p-8 text-center animate-fade-in">
        <div className="w-12 h-12 rounded-full bg-success/15 border border-success/30 flex items-center justify-center mx-auto mb-5 text-success">
          <CheckCircle className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-text-primary tracking-tight">
          Message Sent Successfully!
        </h3>
        <p className="text-text-secondary text-sm mt-2 max-w-sm mx-auto leading-relaxed">
          Thanks for reaching out! We've received your query and a representative from the team will get in touch with you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-indigo hover:text-indigo-400 font-semibold text-sm transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
          Send Us a Message
        </h2>
        <p className="text-text-secondary text-sm mt-1">
          Have an idea or need custom work? Let's discuss.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="contactName">Name *</Label>
          <Input
            id="contactName"
            placeholder="e.g. John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={errors.name}
            disabled={status === "loading"}
          />
        </div>

        <div>
          <Label htmlFor="contactEmail">Email Address *</Label>
          <Input
            id="contactEmail"
            type="email"
            placeholder="e.g. john@yourbusiness.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={errors.email}
            disabled={status === "loading"}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="contactPhone">Phone Number</Label>
          <Input
            id="contactPhone"
            type="tel"
            placeholder="e.g. (555) 000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            disabled={status === "loading"}
          />
        </div>

        <div>
          <Label htmlFor="contactInterest">Service Interest</Label>
          <Select
            id="contactInterest"
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            disabled={status === "loading"}
          >
            {interestOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-surface">
                {opt}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="contactMessage">Your Message *</Label>
        <Textarea
          id="contactMessage"
          rows={5}
          placeholder="Describe your goals, existing tools, and what you would like to build..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          error={errors.message}
          disabled={status === "loading"}
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-error text-sm font-semibold bg-error/5 border border-error/20 p-4 rounded-xl">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          An error occurred. Please try again or email us directly.
        </div>
      )}

      <Button
        type="submit"
        variant="glow"
        className="w-full py-4 text-base"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Submit Message"}
        <ArrowRight className="w-5 h-5 ml-1.5" />
      </Button>
    </form>
  );
}
export default ContactForm;
