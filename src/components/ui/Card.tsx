import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'highlight';
  hover?: boolean;
}

export default function Card({ children, className, variant = 'default', hover = false }: CardProps) {
  const variants = {
    default: 'bg-[var(--card-bg)] border border-[var(--card-border)]',
    glass: 'glass',
    highlight: 'bg-[var(--card-bg)] border border-[var(--amber)]/30 shadow-lg shadow-[var(--amber)]/5',
  };

  return (
    <div
      className={cn(
        'rounded-xl',
        variants[variant],
        hover && 'transition-all duration-200 hover:-translate-y-1 hover:shadow-xl cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}
