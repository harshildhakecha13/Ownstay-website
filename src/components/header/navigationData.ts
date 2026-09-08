export interface NavigationItem {
  label: string;
  href: string;
  description: string;
  icon?: string;
  badge?: string;
}

export interface NavigationCategory {
  title: string;
  items: NavigationItem[];
}

export const navigationConfig = {
  product: {
    featured: [
      {
        title: 'Ownstay Hotel Platform',
        badge: 'Core PMS Engine',
        description:
          'Unified cloud orchestration for rooms, guest folios, housekeeping, and front-desk automation.',
        visual: 'platform',
        imageSrc: '/images/navigator_platform_3d_1788356165964.jpg',
        href: '/product/ownstay-platform',
        tag: 'Opera • Amadeus • Cloudbeds Sync',
      },
      {
        title: 'Ownstay AI Concierge',
        badge: 'AI Autopilot',
        description:
          'Autonomous voice & WhatsApp guest assistant answering queries and routing work orders in 40+ languages.',
        visual: 'ai',
        imageSrc: '/images/navigator_ai_concierge_3d_1788356177876.jpg',
        href: '/product/ownstay-ai-receptionist',
        tag: 'Sub-second Voice & Chat AI',
      },
    ],
    categories: {
      hotops: {
        title: 'HOTEL OPERATIONS',
        items: [
          {
            label: 'Reservations & Rates',
            href: '/product/booking-assistance',
            description: 'Direct booking engine, OTA sync & dynamic rate parity.',
            icon: 'CalendarDaysIcon',
            badge: 'Real-time',
          },
          {
            label: 'Guest Management (CRM)',
            href: '/product/guest-messaging',
            description: 'VIP guest profiles, stay history, and automated preferences.',
            icon: 'UsersIcon',
          },
          {
            label: 'Rooms & Inventory',
            href: '/product/in-stay-support',
            description: 'Live room availability, keycard lock states & upgrades.',
            icon: 'KeyIcon',
          },
          {
            label: 'Housekeeping & Turndown',
            href: '/product/guest-request-management',
            description: 'Real-time cleaning dispatch, queue prioritization & inspections.',
            icon: 'SparklesIcon',
            badge: 'Auto-Dispatch',
          },
          {
            label: 'Facility Maintenance',
            href: '/product/facility-maintenance',
            description: 'Instant ticket triage, IoT HVAC telemetry & repair logs.',
            icon: 'WrenchScrewdriverIcon',
          },
        ],
      },
      teams: {
        title: 'HOTEL TEAMS',
        items: [
          {
            label: 'Staff & Shift Scheduling',
            href: '/product/staff-scheduling',
            description: 'Role-based access, attendance logs & department assignments.',
            icon: 'UserGroupIcon',
          },
          {
            label: 'Guest Services & Chat',
            href: '/product/conversation-management',
            description: 'Omnichannel guest messaging across WhatsApp, SMS & web.',
            icon: 'ChatBubbleBottomCenterTextIcon',
            badge: 'Unified',
          },
          {
            label: 'Kitchen & KDS Station',
            href: '/product/kitchen-kds',
            description: 'Live food ticket prep times, room dining & bar orders.',
            icon: 'FireIcon',
            badge: 'Live KDS',
          },
          {
            label: 'Hotel Inventory & Assets',
            href: '/product/hotel-inventory',
            description: 'F&B stock tracking, amenities reorder points & supplier alerts.',
            icon: 'CubeIcon',
          },
        ],
      },
      intelligence: {
        title: 'INTELLIGENCE & GUEST AI',
        items: [
          {
            label: 'Analytics & Yield Reports',
            href: '/product/yield-analytics',
            description: 'RevPAR, ADR, occupancy forecasting & labor cost metrics.',
            icon: 'ChartBarIcon',
            badge: 'AI Yield',
          },
          {
            label: 'AI Knowledge Base',
            href: '/product/hotel-knowledge-ai',
            description: 'Trained on your hotel menus, policies, amenities & local guide.',
            icon: 'BookOpenIcon',
          },
          {
            label: 'Security & Audit Logs',
            href: '/product/security-compliance',
            description: 'SOC2 Type II compliant, tokenized payments & PMS audit trail.',
            icon: 'ShieldCheckIcon',
          },
          {
            label: 'AI Voice Receptionist',
            href: '/product/ai-voice-receptionist',
            description: 'Natural high-fidelity voice operator handling incoming calls.',
            icon: 'PhoneIcon',
          },
          {
            label: 'Multilingual Guest AI',
            href: '/product/multilingual-ai',
            description: 'Two-way fluent translation across 40+ native languages.',
            icon: 'LanguageIcon',
          },
        ],
      },
    },
  },
  solutions: {
    spotlight: {
      title: 'Smart Property Ecosystem',
      subtitle: 'Engineered for Modern Hospitality',
      description:
        'From 20-room boutique retreats to 1,000+ key luxury resort chains, scale without expanding headcount.',
      imageSrc: '/images/navigator_resort_3d_1788356199214.jpg',
      href: '/solutions',
      ctaText: 'Explore All Hotel Solutions →',
    },
    sections: [
      {
        title: 'FOR HOTEL LEADERS',
        items: [
          {
            label: 'Hotel Owners & Asset Managers',
            href: '/solutions/hotel-owners',
            description:
              'Maximize RevPAR, reduce operational overhead & track real-time portfolio EBITDA.',
            icon: 'BuildingOffice2Icon',
          },
          {
            label: 'General Managers',
            href: '/solutions/general-managers',
            description:
              'Orchestrate front-of-house, engineering, and housekeeping with automated dispatch.',
            icon: 'UsersIcon',
          },
        ],
      },
      {
        title: 'FOR OPERATIONAL TEAMS',
        items: [
          {
            label: 'Front Desk & Reception',
            href: '/solutions/front-desk',
            description:
              'Instant mobile check-in, key generation, and multilingual guest voice assistance.',
            icon: 'BoltIcon',
            badge: 'Zero-Wait',
          },
          {
            label: 'Housekeeping Supervisors',
            href: '/solutions/housekeeping',
            description:
              'Live mobile cleaning queues, priority room turnover & automated minibar checks.',
            icon: 'SparklesIcon',
          },
          {
            label: 'F&B & Kitchen Chefs',
            href: '/solutions/kitchen-fb',
            description:
              'Order pacing, dietary allergen filters, and digitized room service routing.',
            icon: 'FireIcon',
          },
        ],
      },
      {
        title: 'BY PROPERTY CATEGORY',
        items: [
          {
            label: 'Boutique & Heritage Hotels',
            href: '/solutions/boutique-hotels',
            description:
              'Personalized high-touch concierge workflows tailored to luxury boutique guests.',
            icon: 'HomeModernIcon',
          },
          {
            label: 'Resorts & Spa Destinations',
            href: '/solutions/resorts',
            description:
              'Activity bookings, multi-venue dining reservations & foreign language translation.',
            icon: 'BuildingStorefrontIcon',
          },
          {
            label: 'Hotel Chains & Franchises',
            href: '/solutions/hotel-chains',
            description:
              'Centralized multi-property tenant management with unified enterprise SSO.',
            icon: 'BuildingOffice2Icon',
            badge: 'Enterprise',
          },
        ],
      },
    ],
  },
  resources: {
    spotlight: {
      title: 'Hospitality AI Intelligence Hub',
      subtitle: 'Research, Benchmarks & Open API',
      description:
        'Explore the 2026 Hospitality ROI Benchmark report, developer guides, and sandbox API playground.',
      imageSrc: '/images/navigator_kpi_3d_1788356216188.jpg',
      href: '/docs',
      ctaText: 'Access Developer Documentation →',
    },
    sections: [
      {
        title: 'LEARN & RESEARCH',
        items: [
          {
            label: 'Hospitality AI Blog',
            href: '/blog',
            description:
              'In-depth analyses on autonomous hotels, guest sentiment, and ADR optimization.',
            icon: 'BookOpenIcon',
            badge: 'New Articles',
          },
          {
            label: 'ROI & Case Studies',
            href: '/case-studies',
            description:
              'Verified metrics showing 42% reduction in guest wait times and $180k/yr savings.',
            icon: 'ChartBarIcon',
          },
        ],
      },
      {
        title: 'DEVELOPER & INTEGRATION',
        items: [
          {
            label: 'API Reference & Sandbox',
            href: '/docs',
            description: 'Interactive REST API tester, webhooks, and sample Postman collections.',
            icon: 'CpuChipIcon',
            badge: 'v2.4 API',
          },
          {
            label: 'PMS Integration Directory',
            href: '/docs',
            description:
              'Pre-certified 2-way connectors for Opera, Amadeus, Cloudbeds, StayNTouch & more.',
            icon: 'CubeIcon',
          },
        ],
      },
      {
        title: 'COMPANY & ACCESS',
        items: [
          {
            label: 'About Ownstay & Ownthum',
            href: '/about',
            description:
              'Our mission to redefine modern guest experiences through intelligent automation.',
            icon: 'InformationCircleIcon',
          },
          {
            label: 'Schedule a Consultation',
            href: '/contact',
            description: 'Book a 20-minute tailored walkthrough and 14-day property trial.',
            icon: 'PhoneIcon',
          },
          {
            label: 'Careers',
            href: '/careers',
            description: 'Join our distributed engineering and hospitality innovation team.',
            icon: 'BriefcaseIcon',
            badge: "We're Hiring",
          },
        ],
      },
    ],
  },
};
