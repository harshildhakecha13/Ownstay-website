'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

interface SearchResult {
  title: string;
  category: string;
  description: string;
  href: string;
  icon: Parameters<typeof Icon>[0]['name'];
}

const SEARCH_ITEMS: SearchResult[] = [
  // Products & Modules
  {
    title: 'Ownstay Hotel Platform',
    category: 'Product',
    description: "Centralized operating system for your hotel's daily operations.",
    href: '/product/ownstay-platform',
    icon: 'CubeIcon',
  },
  {
    title: 'Ownstay AI Receptionist',
    category: 'Product',
    description: '24/7 intelligent guest communication and front desk automation.',
    href: '/product/ownstay-ai-receptionist',
    icon: 'SparklesIcon',
  },
  {
    title: 'AI Voice Receptionist',
    category: 'Product',
    description: 'Instant zero-wait voice AI answering telephone calls naturally.',
    href: '/product/ai-voice-receptionist',
    icon: 'MicrophoneIcon',
  },
  {
    title: 'Guest Request Management',
    category: 'Operations',
    description: 'Automate housekeeping, maintenance, and guest request fulfillment.',
    href: '/product/guest-request-management',
    icon: 'ClipboardDocumentListIcon',
  },
  {
    title: 'Hotel Knowledge AI',
    category: 'AI & Data',
    description: 'Train AI on your hotel policies, amenities, dining menus, and local guides.',
    href: '/product/hotel-knowledge-ai',
    icon: 'BuildingOffice2Icon',
  },
  {
    title: 'Multilingual AI Communication',
    category: 'AI & Data',
    description: 'Support international guests in 40+ native languages seamlessly.',
    href: '/product/multilingual-ai',
    icon: 'GlobeAltIcon',
  },
  {
    title: 'Booking Assistance & Upselling',
    category: 'Revenue',
    description: 'Direct booking conversion, room upgrade suggestions, and add-ons.',
    href: '/product/booking-assistance',
    icon: 'CalendarIcon',
  },
  {
    title: 'In-Stay Support & Room Service',
    category: 'Guest Experience',
    description: 'In-room digital orders, amenities, and concierge services.',
    href: '/product/in-stay-support',
    icon: 'ShoppingBagIcon',
  },
  {
    title: 'Conversation Management & Inbox',
    category: 'Operations',
    description: 'Omnichannel inbox for WhatsApp, SMS, Booking.com, and website chat.',
    href: '/product/conversation-management',
    icon: 'InboxStackIcon',
  },

  // Interactive Live Demos
  {
    title: 'Live Demo: Admin Operations Suite',
    category: 'Interactive Demo',
    description: 'Experience the real-time front desk KPI dashboard and check-in timeline.',
    href: '/demo/admin',
    icon: 'ComputerDesktopIcon',
  },
  {
    title: 'Live Demo: Kitchen Operations & KDS',
    category: 'Interactive Demo',
    description: 'Interactive kitchen display board with live ticket routing.',
    href: '/demo/kitchen',
    icon: 'FireIcon',
  },
  {
    title: 'Live Demo: Guest Concierge Mobile Portal',
    category: 'Interactive Demo',
    description: 'Interactive guest portal for in-room dining and housekeeping requests.',
    href: '/demo/guest',
    icon: 'DevicePhoneMobileIcon',
  },
  {
    title: 'Live Demo: Guest CRM & Profiles Sandbox',
    category: 'Interactive Demo',
    description: 'VIP guest profiles database, preferences, stay history, and chat simulator.',
    href: '/demo/crm',
    icon: 'UsersIcon',
  },
  {
    title: 'Interactive Demos Hub',
    category: 'Interactive Demo',
    description: 'Explore all 4 live interactive product sandbox environments.',
    href: '/demo',
    icon: 'SparklesIcon',
  },

  // Resources & Company
  {
    title: 'Documentation & API Reference',
    category: 'Resources',
    description: 'API endpoints, webhooks, PMS integration guides, and tutorials.',
    href: '/docs',
    icon: 'DocumentTextIcon',
  },
  {
    title: 'Case Studies & Success Stories',
    category: 'Resources',
    description: 'Real results from boutique hotels, resorts, and international chains.',
    href: '/case-studies',
    icon: 'ChartBarIcon',
  },
  {
    title: 'Industry Insights Blog',
    category: 'Resources',
    description: 'Articles on hospitality AI trends, ROI analysis, and guest communication.',
    href: '/blog',
    icon: 'BookOpenIcon',
  },
  {
    title: 'About Ownstay & Team',
    category: 'Company',
    description: 'Our story, mission, milestones, and leadership team.',
    href: '/about',
    icon: 'UserGroupIcon',
  },
  {
    title: 'Careers at Ownstay',
    category: 'Company',
    description: 'Join our team building the future of hotel technology.',
    href: '/careers',
    icon: 'BriefcaseIcon',
  },
  {
    title: 'Book a Personalized Demo',
    category: 'Get Started',
    description: 'Schedule a tailored walkthrough with a hospitality AI specialist.',
    href: '/contact',
    icon: 'CalendarDaysIcon',
  },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filtered = query.trim()
    ? SEARCH_ITEMS.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : SEARCH_ITEMS.slice(0, 7);

  const handleSelect = (href: string) => {
    onClose();
    router.push(href);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-slate-50/50">
          <Icon name="MagnifyingGlassIcon" size={20} className="text-muted-foreground shrink-0" />
          <input
            type="text"
            placeholder="Search products, live demos, docs, case studies..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            autoFocus
            className="w-full bg-transparent text-foreground placeholder:text-muted-foreground text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-muted-foreground hover:text-foreground text-xs font-semibold px-1.5 py-0.5 rounded bg-muted"
            >
              Clear
            </button>
          )}
          <kbd className="hidden sm:inline-block text-[10px] font-mono text-muted-foreground border border-border px-2 py-0.5 rounded bg-white shadow-xs">
            ESC
          </kbd>
        </div>

        {/* Quick Category Chips */}
        <div className="flex items-center gap-2 px-5 py-2.5 bg-slate-100/60 border-b border-border text-xs overflow-x-auto">
          <span className="text-muted-foreground font-medium shrink-0">Quick jump:</span>
          <button
            onClick={() => setQuery('demo')}
            className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-colors shrink-0"
          >
            Live Demos
          </button>
          <button
            onClick={() => setQuery('receptionist')}
            className="px-2.5 py-1 rounded-full bg-white border border-border text-foreground font-medium hover:border-primary transition-colors shrink-0"
          >
            AI Receptionist
          </button>
          <button
            onClick={() => setQuery('api')}
            className="px-2.5 py-1 rounded-full bg-white border border-border text-foreground font-medium hover:border-primary transition-colors shrink-0"
          >
            API & Docs
          </button>
          <button
            onClick={() => setQuery('case')}
            className="px-2.5 py-1 rounded-full bg-white border border-border text-foreground font-medium hover:border-primary transition-colors shrink-0"
          >
            Case Studies
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-border/40">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">
              <Icon name="MagnifyingGlassIcon" size={32} className="mx-auto mb-2 opacity-40" />
              <p className="text-sm font-medium">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs mt-1">
                Try searching for &ldquo;Voice AI&rdquo;, &ldquo;Demo&rdquo;, or
                &ldquo;Integration&rdquo;
              </p>
            </div>
          ) : (
            filtered.map((item, index) => (
              <div
                key={item.href + item.title}
                onClick={() => handleSelect(item.href)}
                className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                  index === selectedIndex
                    ? 'bg-primary/5 text-primary'
                    : 'hover:bg-slate-50 text-foreground'
                }`}
              >
                <div className="p-2 rounded-lg bg-slate-100 text-foreground shrink-0 mt-0.5">
                  <Icon name={item.icon} size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-semibold text-sm text-foreground truncate">
                      {item.title}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-muted-foreground shrink-0">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
                <Icon
                  name="ArrowRightIcon"
                  size={14}
                  className="text-muted-foreground opacity-40 shrink-0 self-center"
                />
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-border bg-slate-50 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
          </div>
          <Link
            href="/contact"
            onClick={onClose}
            className="text-primary font-semibold hover:underline flex items-center gap-1"
          >
            Need help? Talk to an expert →
          </Link>
        </div>
      </div>
    </div>
  );
}
