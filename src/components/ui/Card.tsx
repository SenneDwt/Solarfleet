import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'highlight';
  hover?: boolean;
}

export default function Card({ children, className, variant = 'default', hover = false }: CardProps) {
  const variants = {
    default: 'bg-[var(--card-bg)] border border-[var(--card-border)] shadow-[var(--shadow-sm)]',
    glass: 'glass',
    highlight: 'bg-[var(--card-bg)] border border-[var(--amber)]/30 shadow-[var(--shadow-md)]',
  };

  return (
    <div
      className={cn(
        'rounded-2xl',
        variants[variant],
        hover && 'transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}
