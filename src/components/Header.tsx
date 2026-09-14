'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { navigationConfig, NavigationItem } from './header/navigationData';

// 3D Visual Cards for the Product Mega Menu
function ProductVisual3D({ kind, imageSrc }: { kind: string; imageSrc: string }) {
  return (
    <div className="relative h-[140px] w-full overflow-hidden rounded-t-2xl bg-slate-900 group">
      {/* 3D Render Image */}
      <img
        src={imageSrc}
        alt={kind === 'platform' ? 'Ownstay 3D Hotel Platform' : 'Ownstay 3D AI Concierge'}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
      />

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-t-2xl pointer-events-none" />

      {/* Floating Badge */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white shadow-lg">
        {kind === 'platform' ? (
          <>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>2-Way PMS Engine</span>
          </>
        ) : (
          <>
            <span className="text-primary">✦</span>
            <span>40+ Languages AI</span>
          </>
        )}
      </div>
    </div>
  );
}

// 3D Spotlight Card for Solutions and Resources Menus
function MenuSpotlightCard({
  title,
  subtitle,
  description,
  imageSrc,
  href,
  ctaText,
  onClick,
}: {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  href: string;
  ctaText: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex flex-col h-full bg-gradient-to-b from-slate-50 to-orange-50/40 rounded-2xl border border-border/80 p-4 hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden justify-between"
    >
      <div>
        <div className="relative h-[140px] w-full rounded-xl overflow-hidden mb-4 bg-slate-900 shadow-sm">
          <img
            src={imageSrc}
            alt={title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          <div className="absolute bottom-2.5 left-3 right-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary-foreground bg-primary/90 px-2 py-0.5 rounded-md">
              {subtitle}
            </span>
          </div>
        </div>

        <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1 mb-1">
          {title}
        </h4>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{description}</p>
      </div>

      <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-bold text-primary">
        <span>{ctaText}</span>
        <Icon
          name="ArrowRightIcon"
          size={14}
          className="group-hover:translate-x-1 transition-transform"
        />
      </div>
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Popover States
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut Cmd+K or Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setSearchOpen(false);
        setActiveMenu(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openMenu = (menuId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuId);
  };

  const closeMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const _isActivePath = (path: string) => pathname?.startsWith(path);

  const navItems = [
    { label: 'Home', href: '/', isActive: true },
    { label: 'Features', href: '#features' },
    { label: 'Solutions', href: '/solutions', menuId: 'solutions', hasDropdown: true },
    { label: 'Pricing', href: '/contact' },
    { label: 'About', href: '/about' },
  ];

  // Search Results Filter
  const allSearchItems = [
    {
      name: 'Ownstay Hotel Platform',
      category: 'Product',
      href: '/product/ownstay-platform',
      badge: 'PMS Engine',
    },
    {
      name: 'Ownstay AI Concierge & Voice Receptionist',
      category: 'Product',
      href: '/product/ownstay-ai-receptionist',
      badge: 'AI Autopilot',
    },
    {
      name: 'Reservations & Rates Sync',
      category: 'Operations',
      href: '/product/booking-assistance',
      badge: 'Live Sync',
    },
    {
      name: 'Guest Profiles & Stay CRM',
      category: 'Operations',
      href: '/product/guest-messaging',
      badge: 'VIP CRM',
    },
    {
      name: 'Housekeeping & Turndown Dispatch',
      category: 'Operations',
      href: '/product/guest-request-management',
      badge: 'Auto',
    },
    {
      name: 'Kitchen & KDS Screen',
      category: 'Teams',
      href: '/product/kitchen-kds',
      badge: 'Station',
    },
    {
      name: 'Analytics & Yield Reports',
      category: 'Intelligence',
      href: '/product/yield-analytics',
      badge: 'AI RevPAR',
    },
    {
      name: 'Schedule Live Platform Walkthrough',
      category: 'Request Demo',
      href: '/contact',
      badge: '14-Day Pilot',
    },
    { name: 'API Reference & REST Docs', category: 'Docs', href: '/docs', badge: 'v2.4' },
    {
      name: 'Hotel ROI & Case Studies',
      category: 'Case Studies',
      href: '/case-studies',
      badge: '42% Boost',
    },
    {
      name: 'Hospitality AI Articles & Research',
      category: 'Blog',
      href: '/blog',
      badge: 'Industry',
    },
    {
      name: 'Schedule Live Walkthrough',
      category: 'Contact',
      href: '/contact',
      badge: '14-Day Pilot',
    },
  ];

  const filteredSearch = allSearchItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.badge.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isDarkHero = pathname === '/';
  const isScrolledOrLight = scrolled || !isDarkHero;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolledOrLight
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
        role="banner"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 relative flex items-center h-12 justify-between">
          {/* Left: Brand Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center gap-3 group" aria-label="Ownstay home">
              <AppLogo size={32} />
              <span
                className={`font-semibold text-2xl tracking-tight leading-none transition-colors duration-200 ${
                  isScrolledOrLight ? 'text-slate-900' : 'text-white'
                }`}
              >
                Ownstay
              </span>
            </Link>
          </div>

          {/* Center: Desktop Navigation Bar */}
          <nav className="hidden lg:flex items-center gap-10 h-full" aria-label="Main navigation">
            {navItems.map((item) => {
              const isCurrent =
                item.href === '/'
                  ? pathname === '/'
                  : item.href.startsWith('#')
                    ? false
                    : pathname?.startsWith(item.href);
              return (
                <div
                  key={item.label}
                  className="relative h-full flex flex-col justify-center items-center"
                  onMouseEnter={() => item.hasDropdown && item.menuId && openMenu(item.menuId)}
                  onMouseLeave={closeMenu}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center text-[15px] transition-colors duration-200 py-1 ${
                      isCurrent
                        ? isScrolledOrLight
                          ? 'text-slate-900 font-semibold'
                          : 'text-white font-medium'
                        : isScrolledOrLight
                          ? 'text-slate-600 hover:text-slate-900 font-normal'
                          : 'text-white/80 hover:text-white font-normal'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {isCurrent && (
                    <span className="absolute bottom-1 w-full h-[2.5px] bg-[#F95A1E] rounded-full" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Direct Book Demo CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F95A1E] hover:bg-[#e04e17] text-white text-sm font-medium transition-all shadow-md shadow-orange-500/20 group"
            >
              <span>Book a Demo</span>
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                isScrolledOrLight
                  ? 'text-slate-900 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP MEGA MENUS CONTAINER                                              */}
        {/* ========================================================================= */}
        <div
          className={`hidden lg:block absolute top-full left-0 w-full transition-all duration-200 pointer-events-none ${
            activeMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}
        >
          {/* 1. PRODUCT MEGA MENU */}
          {activeMenu === 'product' && (
            <div
              className="w-full max-w-[1240px] mx-auto bg-white border border-border rounded-3xl shadow-[0_30px_90px_rgba(20,20,30,0.14)] pointer-events-auto overflow-hidden animate-in fade-in-50 zoom-in-[0.98] duration-200"
              onMouseEnter={() => openMenu('product')}
              onMouseLeave={closeMenu}
            >
              <div className="flex w-full">
                {/* Left: 3D Featured Visual Cards */}
                <div className="w-[36%] bg-slate-50/70 p-6 border-r border-border flex flex-col gap-4 justify-between">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground flex items-center justify-between">
                    <span>FEATURED PRODUCTS</span>
                    <span className="text-[10px] font-normal text-primary lowercase">
                      3d interactive suite
                    </span>
                  </div>

                  {navigationConfig.product.featured.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setActiveMenu(null)}
                      className="group block bg-white rounded-2xl border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col"
                    >
                      <ProductVisual3D kind={item.visual} imageSrc={item.imageSrc} />
                      <div className="p-4 bg-white">
                        <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                          <span>{item.title}</span>
                          <span className="text-[10px] font-semibold bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Right: Operations, Teams & Intelligence Categories */}
                <div className="w-[64%] p-7 grid grid-cols-3 gap-x-8 bg-white">
                  {/* Column 1: Hotel Operations */}
                  <div className="flex flex-col gap-7">
                    <div>
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3 pb-1.5 border-b border-border/60">
                        {navigationConfig.product.categories.hotops.title}
                      </h3>
                      <div className="flex flex-col gap-1.5">
                        {navigationConfig.product.categories.hotops.items.map((link) => (
                          <NavigationRow
                            key={link.label}
                            item={link}
                            onClick={() => setActiveMenu(null)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Hotel Teams */}
                  <div className="flex flex-col gap-7">
                    <div>
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3 pb-1.5 border-b border-border/60">
                        {navigationConfig.product.categories.teams.title}
                      </h3>
                      <div className="flex flex-col gap-1.5">
                        {navigationConfig.product.categories.teams.items.map((link) => (
                          <NavigationRow
                            key={link.label}
                            item={link}
                            onClick={() => setActiveMenu(null)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Intelligence & Guest AI */}
                  <div className="flex flex-col gap-7">
                    <div>
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3 pb-1.5 border-b border-border/60">
                        {navigationConfig.product.categories.intelligence.title}
                      </h3>
                      <div className="flex flex-col gap-1.5">
                        {navigationConfig.product.categories.intelligence.items.map((link) => (
                          <NavigationRow
                            key={link.label}
                            item={link}
                            onClick={() => setActiveMenu(null)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. SOLUTIONS MEGA MENU */}
          {activeMenu === 'solutions' && (
            <div
              className="w-full max-w-[1200px] mx-auto bg-white border border-border rounded-3xl shadow-[0_30px_90px_rgba(20,20,30,0.14)] pointer-events-auto overflow-hidden animate-in fade-in-50 zoom-in-[0.98] duration-200"
              onMouseEnter={() => openMenu('solutions')}
              onMouseLeave={closeMenu}
            >
              <div className="flex w-full p-7 gap-8">
                {/* Left 3D Spotlight Card */}
                <div className="w-[30%] shrink-0">
                  <MenuSpotlightCard
                    title={navigationConfig.solutions.spotlight.title}
                    subtitle={navigationConfig.solutions.spotlight.subtitle}
                    description={navigationConfig.solutions.spotlight.description}
                    imageSrc={navigationConfig.solutions.spotlight.imageSrc}
                    href={navigationConfig.solutions.spotlight.href}
                    ctaText={navigationConfig.solutions.spotlight.ctaText}
                    onClick={() => setActiveMenu(null)}
                  />
                </div>

                {/* Right 3 Categorized Columns */}
                <div className="w-[70%] grid grid-cols-3 gap-6">
                  {navigationConfig.solutions.sections.map((col) => (
                    <div key={col.title}>
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4 pb-1.5 border-b border-border/60">
                        {col.title}
                      </h3>
                      <div className="flex flex-col gap-2">
                        {col.items.map((link) => (
                          <NavigationRow
                            key={link.label}
                            item={link}
                            onClick={() => setActiveMenu(null)}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Bar */}
              <div className="px-6 py-3 bg-slate-50 border-t border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground">
                  Serving luxury boutiques, resort destinations, and multi-property management
                  groups worldwide.
                </span>
                <Link
                  href="/case-studies"
                  onClick={() => setActiveMenu(null)}
                  className="font-bold text-primary hover:underline flex items-center gap-1"
                >
                  Calculate Hotel Labor & RevPAR ROI →
                </Link>
              </div>
            </div>
          )}

          {/* 3. RESOURCES MEGA MENU */}
          {activeMenu === 'resources' && (
            <div
              className="w-full max-w-[1200px] mx-auto bg-white border border-border rounded-3xl shadow-[0_30px_90px_rgba(20,20,30,0.14)] pointer-events-auto overflow-hidden animate-in fade-in-50 zoom-in-[0.98] duration-200"
              onMouseEnter={() => openMenu('resources')}
              onMouseLeave={closeMenu}
            >
              <div className="flex w-full p-7 gap-8">
                {/* Left 3D Spotlight Card */}
                <div className="w-[30%] shrink-0">
                  <MenuSpotlightCard
                    title={navigationConfig.resources.spotlight.title}
                    subtitle={navigationConfig.resources.spotlight.subtitle}
                    description={navigationConfig.resources.spotlight.description}
                    imageSrc={navigationConfig.resources.spotlight.imageSrc}
                    href={navigationConfig.resources.spotlight.href}
                    ctaText={navigationConfig.resources.spotlight.ctaText}
                    onClick={() => setActiveMenu(null)}
                  />
                </div>

                {/* Right 3 Categorized Columns */}
                <div className="w-[70%] grid grid-cols-3 gap-6">
                  {navigationConfig.resources.sections.map((col) => (
                    <div key={col.title}>
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4 pb-1.5 border-b border-border/60">
                        {col.title}
                      </h3>
                      <div className="flex flex-col gap-2">
                        {col.items.map((link) => (
                          <NavigationRow
                            key={link.label}
                            item={link}
                            onClick={() => setActiveMenu(null)}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Bar */}
              <div className="px-6 py-3 bg-slate-50 border-t border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground">
                  Explore REST webhooks, Open API v2.4, and the 2026 Hospitality Automation Report.
                </span>
                <Link
                  href="/docs"
                  onClick={() => setActiveMenu(null)}
                  className="font-bold text-primary hover:underline flex items-center gap-1"
                >
                  Test API Endpoints in Live Console →
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ========================================================================= */}
      {/* COMMAND / SEARCH MODAL (CMD + K)                                         */}
      {/* ========================================================================= */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4 animate-in fade-in-50 duration-150">
          <div className="w-full max-w-xl bg-white border border-border rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
            <div className="p-4 border-b border-border flex items-center gap-3">
              <Icon name="MagnifyingGlassIcon" size={20} className="text-primary" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search modules, PMS docs, sandboxes, ROI..."
                className="w-full bg-transparent text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="px-2 py-1 text-xs rounded-lg bg-slate-100 text-muted-foreground hover:bg-slate-200"
              >
                ESC
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-border/40">
              {filteredSearch.length > 0 ? (
                filteredSearch.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </div>
                      <div className="text-xs text-muted-foreground">{item.category}</div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {item.badge}
                    </span>
                  </Link>
                ))
              ) : (
                <div className="p-8 text-center text-xs text-muted-foreground">
                  No matching destinations found for &quot;{searchQuery}&quot;.
                </div>
              )}
            </div>

            <div className="p-3 bg-slate-50 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
              <span>Navigate with arrow keys or click</span>
              <span>Press ESC to close</span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MOBILE DRAWER OVERLAY                                                     */}
      {/* ========================================================================= */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 flex flex-col ${
          mobileOpen
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-full pointer-events-none'
        }`}
        style={{ paddingTop: '72px' }}
      >
        <div className="flex-1 overflow-y-auto px-6 pb-20 space-y-4">
          {/* Book Personalized Demo Promo in Mobile */}
          <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200/60">
            <div className="text-xs font-bold text-orange-950 mb-1">Book a Personalized Demo</div>
            <p className="text-[11px] text-orange-900/80 mb-3">
              See Ownstay handle real hotel guest conversations in a custom-tailored 1-on-1
              walkthrough.
            </p>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full py-2 bg-primary hover:bg-primary/90 text-white text-center text-xs font-bold rounded-xl shadow-sm transition-all"
            >
              Schedule Consultation →
            </Link>
          </div>

          <MobileAccordion label="Product">
            <div className="pl-3 py-2 flex flex-col gap-4 border-l-2 border-border ml-2">
              <div>
                <div className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2">
                  Featured 3D Modules
                </div>
                <div className="space-y-2">
                  {navigationConfig.product.featured.map((f) => (
                    <Link
                      key={f.title}
                      href={f.href}
                      onClick={() => setMobileOpen(false)}
                      className="block p-2 rounded-lg bg-slate-50 text-xs font-bold text-foreground"
                    >
                      {f.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
                  {navigationConfig.product.categories.hotops.title}
                </div>
                <div className="space-y-1">
                  {navigationConfig.product.categories.hotops.items.map((f) => (
                    <Link
                      key={f.label}
                      href={f.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-xs font-semibold text-foreground hover:text-primary"
                    >
                      {f.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
                  {navigationConfig.product.categories.teams.title}
                </div>
                <div className="space-y-1">
                  {navigationConfig.product.categories.teams.items.map((f) => (
                    <Link
                      key={f.label}
                      href={f.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-xs font-semibold text-foreground hover:text-primary"
                    >
                      {f.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
                  {navigationConfig.product.categories.intelligence.title}
                </div>
                <div className="space-y-1">
                  {navigationConfig.product.categories.intelligence.items.map((f) => (
                    <Link
                      key={f.label}
                      href={f.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-xs font-semibold text-foreground hover:text-primary"
                    >
                      {f.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </MobileAccordion>

          <MobileAccordion label="Solutions">
            <div className="pl-3 py-2 flex flex-col gap-4 border-l-2 border-border ml-2">
              {navigationConfig.solutions.sections.map((col) => (
                <div key={col.title}>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                    {col.title}
                  </div>
                  {col.items.map((f) => (
                    <Link
                      key={f.label}
                      href={f.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-xs font-semibold text-foreground hover:text-primary"
                    >
                      {f.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </MobileAccordion>

          <MobileAccordion label="Resources">
            <div className="pl-3 py-2 flex flex-col gap-4 border-l-2 border-border ml-2">
              {navigationConfig.resources.sections.map((col) => (
                <div key={col.title}>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                    {col.title}
                  </div>
                  {col.items.map((f) => (
                    <Link
                      key={f.label}
                      href={f.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-xs font-semibold text-foreground hover:text-primary"
                    >
                      {f.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </MobileAccordion>
        </div>

        <div className="p-4 border-t border-border bg-slate-50 flex flex-col gap-2">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="w-full text-center py-3 rounded-xl bg-primary text-white text-xs font-bold shadow-sm"
          >
            Book 20-Min Live Demo
          </Link>
        </div>
      </div>
    </>
  );
}

// Sub-component for individual item row with Icon, Label & Clean Single-Line Subtext
function NavigationRow({ item, onClick }: { item: NavigationItem; onClick?: () => void }) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="group flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-100/80 transition-all duration-150"
    >
      {item.icon && (
        <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-primary/10 group-hover:text-primary flex items-center justify-center shrink-0 mt-0.5 transition-colors">
          <Icon name={item.icon} size={15} />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors block truncate">
          {item.label}
        </span>
        {item.description && (
          <p className="text-[11px] text-muted-foreground/80 font-normal leading-tight truncate mt-0.5">
            {item.description}
          </p>
        )}
      </div>
      <Icon
        name="ChevronRightIcon"
        size={12}
        className="text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100 shrink-0 mt-1"
      />
    </Link>
  );
}

function MobileAccordion({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60 pb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-3 text-left flex justify-between items-center text-base font-bold text-foreground focus:outline-none"
      >
        {label}
        <Icon name={open ? 'MinusIcon' : 'PlusIcon'} size={16} className="text-muted-foreground" />
      </button>
      {open && <div className="pb-2 animate-in fade-in slide-in-from-top-1">{children}</div>}
    </div>
  );
}
