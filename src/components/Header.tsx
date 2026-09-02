'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { navigationConfig } from './header/navigationData';

function ProductVisual({ kind }: { kind: string }) {
  if (kind === 'platform') {
    return (
      <div className="relative h-[180px] overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 text-white flex flex-col justify-between rounded-t-xl">
        <div className="absolute -right-6 -top-8 h-40 w-40 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -left-6 -bottom-8 h-32 w-32 rounded-full bg-blue-500/20 blur-2xl" />
        <div className="relative z-10 flex flex-col h-full gap-3 justify-center">
            <div className="flex gap-3 mb-3 items-center">
                <div className="h-2.5 w-10 rounded-full bg-primary shadow-lg shadow-primary/30" />
                <div className="h-2.5 w-20 rounded-full bg-white/15" />
            </div>
            <div className="grid grid-cols-3 gap-3 w-full">
                <div className="h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10" />
                <div className="h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10" />
                <div className="h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10" />
                <div className="h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10" />
                <div className="h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10" />
                <div className="h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10" />
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[180px] overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-6 flex flex-col justify-between rounded-t-xl">
      <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -left-6 -bottom-6 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl" />
      <div className="relative z-10 h-full flex flex-col gap-4 justify-center">
        <div className="ml-auto w-4/5 rounded-2xl rounded-tr-sm bg-foreground px-4 py-3 text-[11px] text-white self-end shadow-lg shadow-gray-200/50">
            Can I request late checkout?
        </div>
        <div className="flex gap-3 items-end">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-600 text-[10px] font-bold text-white shadow-md shadow-primary/30 shrink-0">✦</span>
            <div className="w-5/6 rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-[11px] leading-tight text-foreground shadow-lg shadow-gray-200/50 border border-gray-100">
                Of course. What time would you prefer?
            </div>
        </div>
      </div>
    </div>
  );
}

// Reusable parts
const RightActions = () => {
    return (
        <div className="flex items-center gap-5 shrink-0">
            <button className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Search">
                <Icon name="MagnifyingGlassIcon" size={20} />
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Notifications">
                <Icon name="BellIcon" size={20} />
            </button>
            <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center border border-border overflow-hidden hover:border-primary transition-colors" aria-label="Profile">
                <Icon name="UserIcon" size={16} className="text-foreground" />
            </button>
        </div>
    );
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMenu = (menuId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuId);
  };

  const closeMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200); // Small delay to prevent accidental closing
  };

  const isActivePath = (path: string) => pathname?.startsWith(path);

  const NavItem = ({ label, menuId, href, hasDropdown = false }: { label: string, menuId?: string, href?: string, hasDropdown?: boolean }) => {
    const isActive = href ? isActivePath(href) : false;
    const isMenuOpen = activeMenu === menuId;

    const content = (
      <>
        {label}
        {hasDropdown && <Icon name={isMenuOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'} size={14} className="ml-1 shrink-0 transition-transform" strokeWidth={2.5}/>}
      </>
    );

    const classes = `flex items-center text-sm font-semibold transition-colors duration-200 py-2 ${
      isActive || isMenuOpen ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
    }`;

    if (href && !hasDropdown) {
        return <Link href={href} className={classes}>{content}</Link>;
    }

    return (
        <button 
            className={classes} 
            onMouseEnter={() => menuId && openMenu(menuId)}
            onMouseLeave={closeMenu}
            onFocus={() => menuId && openMenu(menuId)}
            onClick={() => menuId && (activeMenu === menuId ? closeMenu() : openMenu(menuId))}
        >
            {content}
        </button>
    );
  };

  const navItems = [
      { label: 'Product', menuId: 'product', hasDropdown: true },
      { label: 'Solutions', menuId: 'solutions', hasDropdown: true },
      { label: 'Resources', menuId: 'resources', hasDropdown: true }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md border-b border-border shadow-sm py-3' : 'bg-transparent py-5'
        }`}
        role="banner"
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8 relative flex items-center h-10">
            {/* Left: Logo */}
            <div className="flex-1 flex items-center shrink-0">
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

            {/* Center: mathematically centered navigation */}
            <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-7 h-full z-10" aria-label="Main navigation">
                {navItems.map(item => (
                    <div key={item.label} className="relative h-full flex items-center">
                        <NavItem label={item.label} menuId={item.menuId} hasDropdown={item.hasDropdown} />
                    </div>
                ))}
            </nav>

            {/* Right: Actions */}
            <div className="flex-1 flex justify-end items-center shrink-0">
                <div className="hidden lg:block">
                    <RightActions />
                </div>
                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 -mr-2 rounded-lg hover:bg-secondary transition-colors text-foreground"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                >
                    <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
                </button>
            </div>
        </div>

        {/* Mega Menus Container - Positioned absolutely below the header using a portal or fixed positioning */}
        <div className="absolute top-full left-0 w-full overflow-hidden pointer-events-none" style={{ height: activeMenu ? '100vh' : 0 }}>
            {/* Product Mega Menu */}
            <div 
                className={`w-full max-w-[1200px] mx-auto bg-white border border-border rounded-b-2xl shadow-[0_40px_100px_rgba(31,31,29,0.12)] pointer-events-auto transition-all duration-300 transform origin-top ${
                    activeMenu === 'product' ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
                }`}
                onMouseEnter={() => openMenu('product')}
                onMouseLeave={closeMenu}
                style={{ position: 'absolute', left: '50%', transform: `translateX(-50%) ${activeMenu === 'product' ? 'translateY(0)' : 'translateY(-10px)'}`, visibility: activeMenu === 'product' ? 'visible' : 'hidden' }}
            >
                <div className="flex w-full h-[560px]">
                    {/* Left: Featured */}
                    <div className="w-[36%] bg-gradient-to-br from-secondary/50 to-secondary/30 p-8 border-r border-border flex flex-col gap-6">
                        {navigationConfig.product.featured.map(item => (
                            <Link key={item.title} href={item.href} onClick={closeMenu} className="group block bg-white rounded-xl border border-border shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 overflow-hidden flex-1 flex flex-col">
                                <ProductVisual kind={item.visual} />
                                <div className="p-5 bg-white flex-1 flex flex-col justify-center">
                                    <div className="text-[16px] font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                                        {item.title}
                                        <Icon name="ArrowRightIcon" size={16} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.description}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    
                    {/* Right: Operations & Teams Categories */}
                    <div className="w-[64%] p-8 grid grid-cols-2 gap-x-14 gap-y-12 overflow-hidden bg-white">
                        <div className="flex flex-col gap-10">
                           {/* HOTEL OPERATIONS */} 
                           <div>
                                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-5 pb-2 border-b border-border/60">{navigationConfig.product.categories.hotops.title}</h3>
                                <div className="flex flex-col gap-4">
                                    {navigationConfig.product.categories.hotops.items.map(link => (
                                        <Link key={link.label} href={link.href} onClick={closeMenu} className="group flex flex-col block">
                                            <span className="text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors">{link.label}</span>
                                        </Link>
                                    ))}
                                </div>
                           </div>
                           
                           {/* INTELLIGENCE & CONTROL */}
                           <div>
                                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-5 pb-2 border-b border-border/60">{navigationConfig.product.categories.intelligence.title}</h3>
                                <div className="flex flex-col gap-4">
                                    {navigationConfig.product.categories.intelligence.items.map(link => (
                                        <Link key={link.label} href={link.href} onClick={closeMenu} className="group flex flex-col block">
                                            <span className="text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors">{link.label}</span>
                                        </Link>
                                    ))}
                                </div>
                           </div>
                        </div>

                        <div className="flex flex-col gap-10">
                            {/* HOTEL TEAMS */}
                            <div>
                                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-5 pb-2 border-b border-border/60">{navigationConfig.product.categories.teams.title}</h3>
                                <div className="flex flex-col gap-4">
                                    {navigationConfig.product.categories.teams.items.map(link => (
                                        <Link key={link.label} href={link.href} onClick={closeMenu} className="group flex flex-col block">
                                            <span className="text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors">{link.label}</span>
                                            <span className="text-xs text-muted-foreground mt-1 leading-snug">{link.description}</span>
                                        </Link>
                                    ))}
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Solutions Mega Menu */}
            <div 
                className={`w-full max-w-[1000px] mx-auto bg-white border border-border rounded-b-2xl shadow-[0_40px_100px_rgba(31,31,29,0.12)] pointer-events-auto transition-all duration-300 transform origin-top p-8 ${
                    activeMenu === 'solutions' ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
                }`}
                onMouseEnter={() => openMenu('solutions')}
                onMouseLeave={closeMenu}
                style={{ position: 'absolute', left: '50%', transform: `translateX(-50%) ${activeMenu === 'solutions' ? 'translateY(0)' : 'translateY(-10px)'}`, visibility: activeMenu === 'solutions' ? 'visible' : 'hidden' }}
            >
                <div className="grid grid-cols-3 gap-10">
                    {navigationConfig.solutions.map(col => (
                        <div key={col.title}>
                            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6 pb-2 border-b border-border/60">{col.title}</h3>
                            <div className="flex flex-col gap-5">
                                {col.items.map(link => (
                                    <Link key={link.label} href={link.href} onClick={closeMenu} className="group block">
                                        <div className="text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors mb-1">{link.label}</div>
                                        {link.description && <div className="text-[13px] text-muted-foreground leading-snug">{link.description}</div>}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Resources Mega Menu */}
            <div 
                className={`w-full max-w-[900px] mx-auto bg-white border border-border rounded-b-2xl shadow-[0_40px_100px_rgba(31,31,29,0.12)] pointer-events-auto transition-all duration-300 transform origin-top p-8 ${
                    activeMenu === 'resources' ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
                }`}
                onMouseEnter={() => openMenu('resources')}
                onMouseLeave={closeMenu}
                style={{ position: 'absolute', left: '50%', transform: `translateX(-50%) ${activeMenu === 'resources' ? 'translateY(0)' : 'translateY(-10px)'}`, visibility: activeMenu === 'resources' ? 'visible' : 'hidden' }}
            >
                <div className="grid grid-cols-3 gap-10">
                    {navigationConfig.resources.map(col => (
                        <div key={col.title}>
                            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6 pb-2 border-b border-border/60">{col.title}</h3>
                            <div className="flex flex-col gap-4">
                                {col.items.map(link => (
                                    <Link key={link.label} href={link.href} onClick={closeMenu} className="group block py-1">
                                        <div className="text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors mb-1">{link.label}</div>
                                        {link.description && <div className="text-[13px] text-muted-foreground leading-snug">{link.description}</div>}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white transition-all duration-400 flex flex-col ${mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}
        style={{ paddingTop: '80px' }}
      >
          <div className="flex-1 overflow-y-auto px-6 pb-20">
              <div className="flex flex-col gap-2">
                  <MobileAccordion label="Product" items={
                      <div className="pl-4 py-2 flex flex-col gap-5 border-l-2 border-border ml-2">
                          <div className="flex flex-col gap-2">
                              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Featured</div>
                              {navigationConfig.product.featured.map(f => <Link key={f.title} href={f.href} onClick={()=>setMobileOpen(false)} className="text-[15px] font-semibold">{f.title}</Link>)}
                          </div>
                          <div className="flex flex-col gap-2">
                              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{navigationConfig.product.categories.hotops.title}</div>
                              {navigationConfig.product.categories.hotops.items.map(f => <Link key={f.label} href={f.href} onClick={()=>setMobileOpen(false)} className="text-[15px] font-semibold">{f.label}</Link>)}
                          </div>
                          <div className="flex flex-col gap-2">
                              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{navigationConfig.product.categories.intelligence.title}</div>
                              {navigationConfig.product.categories.intelligence.items.map(f => <Link key={f.label} href={f.href} onClick={()=>setMobileOpen(false)} className="text-[15px] font-semibold">{f.label}</Link>)}
                          </div>
                          <div className="flex flex-col gap-2">
                              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{navigationConfig.product.categories.teams.title}</div>
                              {navigationConfig.product.categories.teams.items.map(f => <Link key={f.label} href={f.href} onClick={()=>setMobileOpen(false)} className="text-[15px] font-semibold">{f.label}</Link>)}
                          </div>
                      </div>
                  }/>
                  <MobileAccordion label="Solutions" items={
                      <div className="pl-4 py-2 flex flex-col gap-5 border-l-2 border-border ml-2">
                          {navigationConfig.solutions.map(col => (
                              <div key={col.title} className="flex flex-col gap-2">
                                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{col.title}</div>
                                  {col.items.map(f => <Link key={f.label} href={f.href} onClick={()=>setMobileOpen(false)} className="text-[15px] font-semibold">{f.label}</Link>)}
                              </div>
                          ))}
                      </div>
                  }/>
                  <MobileAccordion label="Resources" items={
                      <div className="pl-4 py-2 flex flex-col gap-5 border-l-2 border-border ml-2">
                          {navigationConfig.resources.map(col => (
                              <div key={col.title} className="flex flex-col gap-2">
                                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{col.title}</div>
                                  {col.items.map(f => <Link key={f.label} href={f.href} onClick={()=>setMobileOpen(false)} className="text-[15px] font-semibold">{f.label}</Link>)}
                              </div>
                          ))}
                      </div>
                  }/>
              </div>
          </div>
          <div className="p-6 border-t border-border bg-secondary/20">
               <RightActions />
          </div>
      </div>
    </>
  );
}

function MobileAccordion({ label, items }: { label: string, items: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-border/40">
            <button onClick={() => setOpen(!open)} className="w-full py-4 text-left flex justify-between items-center text-xl font-semibold focus:outline-none">
                {label}
                <Icon name={open ? 'MinusIcon' : 'PlusIcon'} size={20} className="text-muted-foreground" />
            </button>
            {open && <div className="pb-4 animate-in fade-in slide-in-from-top-2">{items}</div>}
        </div>
    );
}