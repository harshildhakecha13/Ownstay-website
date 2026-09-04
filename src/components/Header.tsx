'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { navigationConfig, NavigationItem } from './header/navigationData';

// 3D Visual Cards for the Product Mega Menu
function ProductVisual3D({
  kind,
  imageSrc,
  tag,
}: {
  kind: string;
  imageSrc: string;
  tag?: string;
}) {
  return (
    <div className="relative h-[160px] w-full overflow-hidden rounded-t-2xl bg-slate-900 group">
      {/* 3D Render Image */}
      <img
        src={imageSrc}
        alt={kind === 'platform' ? 'Ownstay 3D Hotel Platform' : 'Ownstay 3D AI Concierge'}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
      />

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-t-2xl pointer-events-none" />

      {/* Floating 3D Badge */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white shadow-lg">
        {kind === 'platform' ? (
          <>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>2-Way PMS Engine</span>
          </>
        ) : (
          <>
            <span className="text-primary">✦</span>
            <span>40+ Languages • 24/7 AI</span>
          </>
        )}
      </div>

      {/* Bottom Floating Tag */}
      {tag && (
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-medium text-slate-200">
          <span className="truncate">{tag}</span>
          <span className="text-primary font-bold text-xs group-hover:translate-x-0.5 transition-transform">
            →
          </span>
        </div>
      )}
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

// Quick Notification Feed Item
const notificationsData = [
  {
    id: 1,
    title: 'Room 408: Late Checkout Approved',
    desc: 'Autonomous AI extended stay to 1:00 PM via Opera Cloud PMS sync.',
    time: '2m ago',
    type: 'ai',
  },
  {
    id: 2,
    title: 'VIP Arrival: Mr. Vance (Pres. Suite)',
    desc: 'Pre-checkin complete with mobile digital key issued.',
    time: '14m ago',
    type: 'guest',
  },
  {
    id: 3,
    title: 'Kitchen KDS: Rush Order Completed',
    desc: 'Table 14 order fulfilled in 9.4 mins (below 12 min target).',
    time: '28m ago',
    type: 'kds',
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Popover States
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [sandboxSwitcherOpen, setSandboxSwitcherOpen] = useState(false);

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
        setNotificationsOpen(false);
        setSandboxSwitcherOpen(false);
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
    { label: 'Product', menuId: 'product', hasDropdown: true },
    { label: 'Solutions', menuId: 'solutions', hasDropdown: true },
    { label: 'Resources', menuId: 'resources', hasDropdown: true },
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
      href: '/product/in-stay-support',
      badge: 'Station',
    },
    {
      name: 'Analytics & Yield Reports',
      category: 'Intelligence',
      href: '/product/conversation-management',
      badge: 'AI RevPAR',
    },
    {
      name: 'Interactive Demo & Sandbox Suite',
      category: 'Sandbox',
      href: '/demo',
      badge: 'Live 3-in-1',
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-sm py-2.5'
            : 'bg-white/70 backdrop-blur-sm border-b border-border/40 py-4'
        }`}
        role="banner"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center h-11 justify-between">
          {/* Left: Brand Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="Ownstay home">
              <AppLogo size={32} />
              <div className="flex flex-col justify-center">
                <span className="font-bold text-[19px] text-foreground tracking-tight leading-none mb-[2px]">
                  Ownstay
                </span>
                <span className="text-[8px] font-bold text-muted-foreground tracking-[0.2em] uppercase leading-none">
                  BY OWNTHUM AI
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Desktop Navigation Bar */}
          <nav className="hidden lg:flex items-center gap-8 h-full" aria-label="Main navigation">
            {navItems.map((item) => {
              const isMenuOpen = activeMenu === item.menuId;
              return (
                <div
                  key={item.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => openMenu(item.menuId)}
                  onMouseLeave={closeMenu}
                >
                  <button
                    className={`flex items-center text-sm font-semibold transition-colors duration-200 py-2 ${
                      isMenuOpen ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
                    }`}
                    onClick={() =>
                      activeMenu === item.menuId ? closeMenu() : openMenu(item.menuId)
                    }
                  >
                    {item.label}
                    <Icon
                      name="ChevronDownIcon"
                      size={14}
                      className={`ml-1 shrink-0 transition-transform duration-200 ${
                        isMenuOpen ? 'rotate-180 text-primary' : 'text-muted-foreground'
                      }`}
                      strokeWidth={2.5}
                    />
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Notification Center */}
            <div className="relative">
              <button
                onClick={() => {
                  setNotificationsOpen(!notificationsOpen);
                  setSandboxSwitcherOpen(false);
                }}
                className={`relative p-2 rounded-full hover:bg-slate-100 transition-colors ${
                  notificationsOpen
                    ? 'bg-slate-100 text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-label="Real-time notifications"
              >
                <Icon name="BellIcon" size={19} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary ring-2 ring-white animate-pulse" />
              </button>

              {/* Notification Popover */}
              {notificationsOpen && (
                <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-white border border-border rounded-2xl shadow-2xl p-4 z-50 animate-in fade-in-50 zoom-in-95 duration-150">
                  <div className="flex items-center justify-between pb-3 border-b border-border/80">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-xs font-bold text-foreground">
                        Live AI Hotel Activity
                      </span>
                    </div>
                    <span className="text-[10px] text-muted-foreground font-mono">
                      Real-time Opera Stream
                    </span>
                  </div>

                  <div className="divide-y divide-border/50 max-h-64 overflow-y-auto my-2">
                    {notificationsData.map((n) => (
                      <div
                        key={n.id}
                        className="py-2.5 hover:bg-slate-50 rounded-lg px-2 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-xs font-bold text-foreground leading-tight">
                            {n.title}
                          </span>
                          <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                            {n.time}
                          </span>
                        </div>
                        <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                          {n.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-border/80 flex items-center justify-between">
                    <Link
                      href="/demo"
                      onClick={() => setNotificationsOpen(false)}
                      className="text-xs font-bold text-primary hover:underline"
                    >
                      Open Live Ops Console →
                    </Link>
                    <button
                      onClick={() => setNotificationsOpen(false)}
                      className="text-[11px] text-muted-foreground hover:text-foreground"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Sandbox & Role Switcher */}
            <div className="relative">
              <button
                onClick={() => {
                  setSandboxSwitcherOpen(!sandboxSwitcherOpen);
                  setNotificationsOpen(false);
                }}
                className={`flex items-center gap-1.5 p-1.5 sm:px-3 sm:py-1.5 rounded-full bg-secondary/80 hover:bg-secondary border border-border text-xs font-semibold text-foreground transition-colors ${
                  sandboxSwitcherOpen ? 'border-primary ring-2 ring-primary/20' : ''
                }`}
                aria-label="Role & Sandbox switcher"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                  <Icon name="UserIcon" size={14} />
                </div>
                <span className="hidden md:inline">Sandboxes</span>
                <Icon
                  name="ChevronDownIcon"
                  size={12}
                  className="hidden sm:inline text-muted-foreground"
                />
              </button>

              {/* Sandbox Switcher Popover */}
              {sandboxSwitcherOpen && (
                <div className="absolute right-0 mt-3 w-72 bg-white border border-border rounded-2xl shadow-2xl p-4 z-50 animate-in fade-in-50 zoom-in-95 duration-150">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
                    Switch Active Sandbox
                  </div>
                  <div className="space-y-1.5">
                    <Link
                      href="/demo?tab=admin"
                      onClick={() => setSandboxSwitcherOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-border transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">
                        <Icon name="BuildingOffice2Icon" size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-foreground group-hover:text-primary">
                          Admin Operations PMS
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          Guest folios, room grid, analytics
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/demo?tab=guest"
                      onClick={() => setSandboxSwitcherOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-border transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-xs shrink-0">
                        <Icon name="ChatBubbleBottomCenterTextIcon" size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-foreground group-hover:text-primary">
                          Guest Mobile Concierge
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          Digital key, AI chat & room dining
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/demo?tab=kds"
                      onClick={() => setSandboxSwitcherOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-border transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                        <Icon name="FireIcon" size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-foreground group-hover:text-primary">
                          Kitchen KDS Display
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          Live ticket dispatch & prep timing
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-border/80">
                    <Link
                      href="/contact"
                      onClick={() => setSandboxSwitcherOpen(false)}
                      className="block text-center py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors shadow-sm"
                    >
                      Book 20-Min Custom Demo
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Book Demo CTA */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all shadow-sm hover:shadow-md hover:shadow-primary/20"
            >
              <span>Book Demo</span>
              <Icon name="ArrowRightIcon" size={12} />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden p-2 -mr-1 rounded-xl hover:bg-secondary transition-colors text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
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
                      <ProductVisual3D kind={item.visual} imageSrc={item.imageSrc} tag={item.tag} />
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

                {/* Right: Operations & Teams Categories */}
                <div className="w-[64%] p-7 grid grid-cols-2 gap-x-10 gap-y-8 bg-white">
                  {/* Column 1: Operations & Intelligence */}
                  <div className="flex flex-col gap-7">
                    {/* HOTEL OPERATIONS */}
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

                    {/* INTELLIGENCE & CONTROL */}
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
                </div>
              </div>

              {/* Bottom Quick Bar */}
              <div className="px-6 py-3 bg-slate-50 border-t border-border flex items-center justify-between text-xs">
                <div className="flex items-center gap-6 text-muted-foreground">
                  <span className="font-semibold text-foreground flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Live Integrations:
                  </span>
                  <span>Oracle Opera Cloud</span>
                  <span>Amadeus</span>
                  <span>Cloudbeds</span>
                  <span>StayNTouch</span>
                </div>
                <Link
                  href="/demo"
                  onClick={() => setActiveMenu(null)}
                  className="font-bold text-primary hover:underline flex items-center gap-1"
                >
                  Launch Interactive Sandbox Suite →
                </Link>
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
          {/* Quick Sandbox Links in Mobile */}
          <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200/60">
            <div className="text-xs font-bold text-orange-950 mb-2">Live Demo Sandboxes</div>
            <div className="grid grid-cols-3 gap-2">
              <Link
                href="/demo?tab=admin"
                onClick={() => setMobileOpen(false)}
                className="p-2 bg-white rounded-xl border border-orange-200 text-center text-[11px] font-bold text-foreground hover:bg-orange-100"
              >
                PMS Admin
              </Link>
              <Link
                href="/demo?tab=guest"
                onClick={() => setMobileOpen(false)}
                className="p-2 bg-white rounded-xl border border-orange-200 text-center text-[11px] font-bold text-foreground hover:bg-orange-100"
              >
                Guest Mobile
              </Link>
              <Link
                href="/demo?tab=kds"
                onClick={() => setMobileOpen(false)}
                className="p-2 bg-white rounded-xl border border-orange-200 text-center text-[11px] font-bold text-foreground hover:bg-orange-100"
              >
                Kitchen KDS
              </Link>
            </div>
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

// Sub-component for individual item row with Icon, Label, Description & Badge
function NavigationRow({ item, onClick }: { item: NavigationItem; onClick?: () => void }) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="group flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors"
    >
      {item.icon && (
        <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-primary/10 group-hover:text-primary flex items-center justify-center shrink-0 mt-0.5 transition-colors">
          <Icon name={item.icon} size={15} />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
            {item.label}
          </span>
          {item.badge && (
            <span className="text-[9px] font-bold uppercase tracking-wider bg-orange-100 text-orange-800 px-1.5 py-0.2 rounded-md">
              {item.badge}
            </span>
          )}
        </div>
        <p className="text-[11px] text-muted-foreground line-clamp-1 leading-normal mt-0.5">
          {item.description}
        </p>
      </div>
      <Icon
        name="ChevronRightIcon"
        size={12}
        className="text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100 mt-1 shrink-0"
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
