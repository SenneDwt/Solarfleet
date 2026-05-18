'use client';

import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  as?: 'button' | 'a';
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, className, children, disabled, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 select-none disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary:
        'bg-[var(--amber)] text-[var(--navy)] hover:bg-[var(--amber-hover)] active:bg-[var(--amber-active)] focus-visible:ring-[var(--amber)] shadow-[0_2px_10px_rgba(255,200,0,0.35)] hover:shadow-[0_4px_18px_rgba(255,200,0,0.45)] hover:-translate-y-0.5',
      secondary:
        'bg-[var(--card-bg)] text-[var(--fg)] hover:bg-[var(--bg-secondary)] active:bg-[var(--surface)] border border-[var(--card-border)] shadow-[var(--shadow-xs)] focus-visible:ring-[var(--amber)]',
      ghost:
        'text-[var(--amber)] hover:opacity-90 hover:bg-[var(--amber-soft)] active:bg-[var(--amber-soft-20)] focus-visible:ring-[var(--amber)]',
      outline:
        'border border-[var(--amber-border)] text-[var(--amber-text)] hover:bg-[var(--amber-soft)] focus-visible:ring-[var(--amber)]',
    };

    const sizes = {
      sm: 'text-sm px-4 py-2 gap-1.5',
      md: 'text-sm px-5 py-2.5 gap-2',
      lg: 'text-base px-7 py-3.5 gap-2.5',
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
