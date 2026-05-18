import Link from 'next/link';

const links = {
  Product: [
    { label: 'VS-120 Panel', href: '/product' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Fleet Dashboard', href: '/dashboard' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'FAQ', href: '/faq' },
  ],
  Resources: [
    { label: 'Contact Sales', href: '/contact' },
    { label: 'Book a Demo', href: '/contact' },
    { label: 'Fleet Audit (Free)', href: '/contact' },
    { label: 'API Documentation', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] dark-surface" style={{ background: 'linear-gradient(180deg, #0d1e38 0%, #0a1628 100%)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4" aria-label="VoltKeep home">
              <div className="w-8 h-8 rounded-lg bg-[var(--amber)] flex items-center justify-center shadow-lg shadow-[var(--amber-shadow)]">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" fill="#0a1628" />
                </svg>
              </div>
              <span className="text-lg font-bold text-[var(--fg)]">
                Volt<span className="text-[var(--amber)]">Keep</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--fg-muted)] leading-relaxed max-w-xs mb-6">
              Solar-powered auxiliary battery maintenance for commercial fleets. Eliminate dead batteries. Permanently.
            </p>
            <p className="text-xs text-[var(--fg-muted)]">
              Industrielaan 42, 2000 Antwerp, Belgium<br />
              <a href="tel:+3232001234" className="hover:text-[var(--amber)] transition-colors">+32 3 200 12 34</a>
              {' · '}
              <a href="mailto:fleet@voltkeep.eu" className="hover:text-[var(--amber)] transition-colors">fleet@voltkeep.eu</a>
            </p>
            {/* Certifications */}
            <div className="flex gap-2 mt-5 flex-wrap">
              {['CE', 'ISO 9001', 'IP67', 'ISO 14001'].map(cert => (
                <span key={cert} className="text-[10px] font-semibold border border-[var(--card-border)] text-[var(--fg-muted)] px-2 py-0.5 rounded">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--fg-muted)] mb-4">
                {group}
              </h3>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-[var(--fg-muted)] hover:text-[var(--amber)] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-divider mt-12 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--fg-muted)]">
          <p>© {new Date().getFullYear()} VoltKeep BV. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[var(--amber)] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--amber)] transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-[var(--amber)] transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
