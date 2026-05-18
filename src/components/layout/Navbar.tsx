'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@/components/ui/Button';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300',
          scrolled
            ? 'py-3 bg-white/90 backdrop-blur-2xl border-b border-[var(--card-border)] shadow-[var(--shadow-sm)]'
            : 'py-4 bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="VoltKeep home">
            <div className="w-8 h-8 rounded-xl bg-[var(--amber)] flex items-center justify-center shadow-[0_2px_8px_rgba(255,200,0,0.35)] group-hover:bg-[var(--amber-hover)] transition-colors">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" fill="white" />
              </svg>
            </div>
            <span className="text-[15px] font-bold tracking-tight text-[var(--fg)]">
              Volt<span className="text-[var(--amber)]">Keep</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors',
                    pathname === link.href
                      ? 'text-[var(--fg)] bg-[var(--surface)]'
                      : 'text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--surface)]'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link href="/contact">
              <Button size="sm">Book a Demo</Button>
            </Link>

            <button
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--surface)] transition-all"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileOpen ? (
                  <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                ) : (
                  <><line x1="3" y1="8" x2="21" y2="8" /><line x1="3" y1="16" x2="21" y2="16" /></>
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setMobileOpen(false)} aria-hidden>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </div>
      )}

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-72 max-w-[90vw] bg-[var(--card-bg)] border-l border-[var(--card-border)] shadow-[var(--shadow-xl)] lg:hidden',
          'transition-transform duration-300',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--card-border)]">
          <span className="font-bold text-[var(--fg)]">Volt<span className="text-[var(--amber)]">Keep</span></span>
          <button onClick={() => setMobileOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-lg text-[var(--fg-muted)] hover:bg-[var(--surface)] transition-all" aria-label="Close menu">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <nav className="px-3 py-5 flex flex-col gap-1">
          {[...NAV_LINKS, { label: 'Contact', href: '/contact' }].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                pathname === link.href
                  ? 'bg-[var(--amber-soft)] text-[var(--amber-text)]'
                  : 'text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--surface)]'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="px-5 pt-2">
          <Link href="/contact" className="block">
            <Button className="w-full">Book a Demo</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
