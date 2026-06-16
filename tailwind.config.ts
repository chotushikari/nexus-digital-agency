import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Nexus Digital palette driven by CSS variables for theme support
        void: "var(--void)",
        surface: "var(--surface)",
        "surface-raised": "var(--surface-raised)",
        border: "var(--border)",
        "border-hover": "var(--border-hover)",
        indigo: "var(--indigo)",
        violet: "var(--violet)",
        cyan: "var(--cyan)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "text-inverse": "var(--text-inverse)",
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
      },
      fontSize: {
        // Viewport-responsive typography driven by clamp() CSS variables
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "4xl": "var(--text-4xl)",
        "5xl": "var(--text-5xl)",
        "6xl": "var(--text-6xl)",
        "7xl": "var(--text-7xl)",
      },
      fontFamily: {
        display: ["var(--font-geist)", "var(--font-inter)", "system-ui", "sans-serif"],
        sans: ["var(--font-geist)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter: "var(--tracking-tighter)",
        tight: "var(--tracking-tight)",
        normal: "var(--tracking-normal)",
        wide: "var(--tracking-wide)",
        wider: "var(--tracking-wider)",
      },
      lineHeight: {
        none: "var(--leading-none)",
        tight: "var(--leading-tight)",
        snug: "var(--leading-snug)",
        normal: "var(--leading-normal)",
        relaxed: "var(--leading-relaxed)",
      },
      spacing: {
        "space-1": "var(--space-1)",
        "space-2": "var(--space-2)",
        "space-3": "var(--space-3)",
        "space-4": "var(--space-4)",
        "space-5": "var(--space-5)",
        "space-6": "var(--space-6)",
        "space-8": "var(--space-8)",
        "space-10": "var(--space-10)",
        "space-12": "var(--space-12)",
        "space-16": "var(--space-16)",
        "space-20": "var(--space-20)",
        "space-24": "var(--space-24)",
        "space-32": "var(--space-32)",
        "space-40": "var(--space-40)",
      },
      boxShadow: {
        "glow-indigo": "0 0 40px rgba(99, 102, 241, 0.3)",
        "glow-violet": "0 0 60px rgba(139, 92, 246, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;