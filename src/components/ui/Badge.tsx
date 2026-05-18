import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'amber' | 'green' | 'blue' | 'red' | 'muted';
  className?: string;
}

export default function Badge({ children, variant = 'amber', className }: BadgeProps) {
  const variants = {
    amber: 'bg-[var(--amber-soft)] text-[var(--amber-text)] border-[var(--amber)]/25',
    green: 'bg-green-500/15 text-green-400 border-green-500/25',
    blue: 'bg-blue-500/15 text-blue-400 border-blue-500/25',
    red: 'bg-red-500/15 text-red-400 border-red-500/25',
    muted: 'bg-[var(--surface)] text-[var(--fg-muted)] border-[var(--card-border)]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
