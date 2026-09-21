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
    spotlight: {
      title: 'Ownstay AI Receptionist Suite',
      subtitle: '24/7 Front Desk Co-Pilot',
      badge: 'Core Platform',
      description:
        'Autonomous phone calls, WhatsApp concierge, and certified 2-way PMS dispatch across 40+ native languages.',
      imageSrc: '/images/navigator_ai_concierge_3d_1788356177876.jpg',
      href: '/product',
      ctaText: 'Explore Platform Overview',
      highlights: [
        '90% routine call deflection without hold times',
        '2-way sync with Opera, Cloudbeds, Mews & Guesty',
        '40+ languages with natural conversational nuance',
      ],
    },
    sections: [
      {
        title: 'AI GUEST RECEPTION',
        items: [
          {
            label: 'AI Voice Receptionist',
            href: '/product/ownstay-ai-receptionist',
            description: '24/7 phone inquiry handling, room bookings & late-night coverage.',
            icon: 'PhoneIcon',
          },
          {
            label: 'Guest Chat & WhatsApp',
            href: '/product/guest-messaging',
            description: 'Omnichannel guest messaging across WhatsApp, SMS & web.',
            icon: 'ChatBubbleBottomCenterTextIcon',
          },
          {
            label: 'In-Stay Requests & Housekeeping',
            href: '/product/guest-request-management',
            description: 'Automated towel, maintenance & turndown service dispatch.',
            icon: 'SparklesIcon',
          },
          {
            label: 'Hospitality AI Knowledge Base',
            href: '/product/hotel-knowledge-ai',
            description: 'Trained on hotel menus, amenities, policies & checkout hours.',
            icon: 'BookOpenIcon',
          },
        ],
      },
      {
        title: 'HOTEL OPERATIONS & PMS',
        items: [
          {
            label: 'Unified Hotel Platform (PMS)',
            href: '/product/ownstay-platform',
            description: 'Certified 2-way sync with Opera Cloud, Cloudbeds, Mews & Guesty.',
            icon: 'Squares2X2Icon',
          },
          {
            label: 'Direct Reservations & Rates Engine',
            href: '/product/booking-assistance',
            description: 'Commission-free booking engine, dynamic yield pricing & OTA sync.',
            icon: 'CalendarDaysIcon',
          },
          {
            label: 'Kitchen KDS & Room Service',
            href: '/product/kitchen-kds',
            description: 'Instant food ticket dispatch straight from guest chat to kitchen.',
            icon: 'FireIcon',
          },
          {
            label: 'RevPAR & Yield Analytics',
            href: '/product/yield-analytics',
            description: 'Real-time occupancy yield, labor deflection & ADR reporting.',
            icon: 'ChartBarIcon',
          },
        ],
      },
    ],
  },
  solutions: {
    spotlight: {
      title: 'Smart Property Ecosystem',
      subtitle: 'Engineered for Modern Hospitality',
      badge: 'Tailored Solutions',
      description:
        'From boutique retreats to 1,000+ key luxury resort chains, scale guest services without expanding hotel headcount.',
      imageSrc: '/images/navigator_resort_3d_1788356199214.jpg',
      href: '/solutions',
      ctaText: 'Explore Solutions Overview',
      highlights: [
        'Instant mobile check-in & keycard dispatch',
        'Housekeeping & maintenance automated triage',
        'Centralized multi-property tenant management',
      ],
    },
    sections: [
      {
        title: 'BY HOTEL ROLE & TEAMS',
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
          {
            label: 'Front Desk & Reception',
            href: '/solutions/front-desk',
            description:
              'Zero-wait check-in, key generation, and multilingual guest voice assistance.',
            icon: 'BoltIcon',
          },
          {
            label: 'Housekeeping & Operations',
            href: '/solutions/housekeeping',
            description:
              'Live mobile cleaning queues, priority room turnover & automated minibar checks.',
            icon: 'SparklesIcon',
          },
        ],
      },
      {
        title: 'BY PROPERTY CATEGORY',
        items: [
          {
            label: 'Boutique & Heritage Hotels',
            href: '/solutions/boutique-hotels',
            description: 'High-touch personalized concierge workflows tailored to boutique guests.',
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
          },
          {
            label: 'F&B, Kitchens & Room Service',
            href: '/solutions/kitchen-fb',
            description:
              'Order pacing, dietary allergen filters, and digitized room service routing.',
            icon: 'FireIcon',
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
            description: 'Setup guides, webhooks, and technical specifications.',
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
        ],
      },
    ],
  },
};
