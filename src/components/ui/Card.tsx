import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, HTMLAttributes, forwardRef } from "react";

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Card = forwardRef<HTMLButtonElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "rounded-md text-left flex flex-col bg-slate-800 p-4 overflow-hidden relative hover:ring-slate-600 hover:ring-2 focus-visible:ring-2 outline-none focus-visible:ring-lime-400 cursor-pointer transition-all duration-300",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Card.displayName = "Card";

const CardOverlay = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-950 pointer-events-none" />
  );
};

interface CardHeaderProps extends HTMLAttributes<HTMLSpanElement> {}

const CardHeader = forwardRef<HTMLSpanElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        className={cn("text-sm font-medium text-slate-300", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

CardHeader.displayName = "CardHeader";

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        className={cn("break-all text-sm leading-6 text-slate-400", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

CardDescription.displayName = "CardDescription";

export { CardDescription, CardHeader, CardOverlay };
