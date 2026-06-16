import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes, ButtonHTMLAttributes, SelectHTMLAttributes, LabelHTMLAttributes, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

// === BADGE ===
export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "neon" | "outline";
}
export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "neon", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          variant === "neon"
            ? "badge-neon"
            : "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border border-border text-text-secondary bg-surface-raised/40",
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

// === BUTTON ===
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "glow" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "glow", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 active:scale-98 disabled:opacity-50 disabled:pointer-events-none",
          variant === "glow" && "btn-glow text-white",
          variant === "outline" && "border border-border hover:border-indigo/50 bg-transparent text-text-primary hover:bg-white/5",
          variant === "ghost" && "hover:bg-white/5 text-text-secondary hover:text-text-primary",
          size === "sm" && "py-2 px-4 text-sm",
          size === "md" && "py-3 px-6 text-base",
          size === "lg" && "py-4 px-8 text-lg",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// === LABEL ===
export const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn("block text-sm font-medium text-text-secondary mb-2 select-none", className)}
      {...props}
    />
  )
);
Label.displayName = "Label";

// === INPUT ===
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          type={type}
          className={cn(
            "input-glass w-full",
            error && "border-error/50 focus:border-error focus:ring-error/10",
            className
          )}
          {...props}
        />
        {error && <span className="text-xs text-error mt-1.5 block">{error}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";

// === TEXTAREA ===
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          ref={ref}
          className={cn(
            "input-glass w-full min-h-[100px] resize-y",
            error && "border-error/50 focus:border-error focus:ring-error/10",
            className
          )}
          {...props}
        />
        {error && <span className="text-xs text-error mt-1.5 block">{error}</span>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

// === SELECT ===
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
}
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <div className="w-full relative">
        <select
          ref={ref}
          className={cn(
            "input-glass w-full appearance-none bg-no-repeat pr-10",
            error && "border-error/50 focus:border-error focus:ring-error/10",
            className
          )}
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
            backgroundPosition: "right 1rem center",
            backgroundSize: "1.25rem",
          }}
          {...props}
        >
          {children}
        </select>
        {error && <span className="text-xs text-error mt-1.5 block">{error}</span>}
      </div>
    );
  }
);
Select.displayName = "Select";

// === PROGRESS BAR ===
export interface ProgressProps {
  value: number; // percentage 0-100
  className?: string;
}
export const Progress = ({ value, className }: ProgressProps) => {
  return (
    <div className={cn("w-full h-1.5 bg-border rounded-full overflow-hidden relative", className)}>
      <div
        className="h-full bg-gradient-to-r from-indigo via-violet to-cyan transition-all duration-500 ease-out"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
};

// === CHECKBOX ===
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <label className="flex items-start gap-3 cursor-pointer group text-sm select-none">
        <div className="relative flex items-center mt-0.5">
          <input
            ref={ref}
            type="checkbox"
            id={id}
            className={cn(
              "peer sr-only",
              className
            )}
            {...props}
          />
          <div className="w-5 h-5 rounded-md border border-border bg-surface-raised/40 transition-all duration-200 peer-checked:border-indigo peer-checked:bg-indigo flex items-center justify-center text-white">
            <svg
              className="w-3.5 h-3.5 opacity-0 peer-checked:opacity-100 transition-opacity"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
        </div>
        <span className="text-text-secondary group-hover:text-text-primary transition-colors leading-tight">
          {label}
        </span>
      </label>
    );
  }
);
Checkbox.displayName = "Checkbox";

// === RADIO ===
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <label className="flex items-center gap-3 cursor-pointer group text-sm select-none">
        <div className="relative flex items-center">
          <input
            ref={ref}
            type="radio"
            id={id}
            className={cn(
              "peer sr-only",
              className
            )}
            {...props}
          />
          <div className="w-5 h-5 rounded-full border border-border bg-surface-raised/40 transition-all duration-200 peer-checked:border-indigo flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-indigo scale-0 peer-checked:scale-100 transition-transform duration-200" />
          </div>
        </div>
        <span className="text-text-secondary group-hover:text-text-primary transition-colors">
          {label}
        </span>
      </label>
    );
  }
);
Radio.displayName = "Radio";
