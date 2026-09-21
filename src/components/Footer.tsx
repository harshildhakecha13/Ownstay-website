import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import SocialLinks from '@/components/ui/SocialLinks';

const footerLinks = {
  product: [
    { label: 'AI Receptionist', href: '/product#ai-receptionist' },
    { label: 'Voice AI', href: '/product#voice' },
    { label: 'Guest Chat', href: '/product#chat' },
    { label: 'Guest Requests', href: '/product#requests' },
    { label: 'Integrations', href: '/product#integrations' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Ownthum AI ↗', href: 'https://ownthum.com', external: true },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Documentation', href: '/docs' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top Row */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group" aria-label="Ownstay home">
              <AppLogo size={36} />
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-foreground tracking-tight leading-none group-hover:text-orange-600 transition-colors">
                  Ownstay
                </span>
                <span className="text-[10px] font-bold text-orange-600 tracking-widest uppercase leading-none mt-1">
                  by Ownthum AI
                </span>
              </div>
            </Link>

            <p className="text-xs text-muted-foreground leading-relaxed max-w-[260px]">
              Autonomous AI receptionist & front-office operating system engineered for modern
              boutique & luxury hotels.
            </p>

            {/* Help & Support Card */}
            <a
              href="mailto:help@ownstayai.com"
              className="group flex items-center gap-3 p-2.5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-orange-300 shadow-2xs hover:shadow-md hover:shadow-orange-500/5 transition-all duration-200 max-w-[270px]"
            >
              <div className="w-8 h-8 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-[#F95A1E] group-hover:text-white transition-colors duration-200">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground group-hover:text-orange-600 transition-colors">
                  Helpdesk & Inquiries
                </span>
                <span className="block text-xs font-bold text-foreground group-hover:text-orange-600 transition-colors truncate">
                  help@ownstayai.com
                </span>
              </div>
              <svg
                className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-orange-600 group-hover:translate-x-0.5 transition-all shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>

            {/* Social Media */}
            <div className="space-y-2 pt-1 max-w-[270px]">
              <p className="text-[11px] font-bold tracking-wider uppercase text-muted-foreground">
                Connect With Us
              </p>
              <SocialLinks variant="buttons" iconClassName="w-4 h-4" />
            </div>
          </div>

          {/* Product */}
          <div className="col-span-1">
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
              Product
            </p>
            <ul className="space-y-3">
              {footerLinks?.product?.map((link) => (
                <li key={link?.label}>
                  <Link
                    href={link?.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
              Company
            </p>
            <ul className="space-y-3">
              {footerLinks?.company?.map((link) => (
                <li key={link?.label}>
                  {link?.href.startsWith('http') ? (
                    <a
                      href={link?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors inline-flex items-center gap-1"
                    >
                      {link?.label}
                    </a>
                  ) : (
                    <Link
                      href={link?.href}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link?.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
              Resources
            </p>
            <ul className="space-y-3">
              {footerLinks?.resources?.map((link) => (
                <li key={link?.label}>
                  <Link
                    href={link?.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
              Legal
            </p>
            <ul className="space-y-3">
              {footerLinks?.legal?.map((link) => (
                <li key={link?.label}>
                  <Link
                    href={link?.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2026 Ownthum AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
