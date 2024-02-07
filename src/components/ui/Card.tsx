import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, HTMLAttributes, forwardRef } from "react";

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Card = forwardRef<HTMLButtonElement, CardProps>(
  ({ className, children, ...props }) => {
    return (
      <button
        className={cn(
          "rounded-md text-left bg-slate-800 p-4 space-y-3 overflow-hidden relative hover:ring-slate-600 hover:ring-2 focus-visible:ring-2 outline-none focus-visible:ring-lime-400 cursor-pointer transition-all duration-300",
          className
        )}
        {...props}
      >
        {children}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-950 pointer-events-none" />
      </button>
    );
  }
);

Card.displayName = "Card";

interface CardHeaderProps extends HTMLAttributes<HTMLHeadingElement> {}

const CardHeader = forwardRef<HTMLHeadingElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <h4
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
        className={cn("text-sm leading-6 text-slate-400", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

CardDescription.displayName = "CardDescription";

export { Card, CardDescription, CardHeader };
