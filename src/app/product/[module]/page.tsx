import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import InteractiveProductSimulator from '@/app/product/components/InteractiveProductSimulator';

type Benefit = {
  title: string;
  text: string;
  icon: string;
};

type ModuleData = {
  title: string;
  description: string;
  category: string;
  heroSubtitle: string;
  icon: string;
  simType: 'voice' | 'chat' | 'dispatch' | 'pms' | 'yield' | 'booking' | 'inventory';
  stat: { value: string; label: string };
  benefits: Benefit[];
  howItWorks: string[];
  specs: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
  testimonial: { quote: string; author: string; role: string; hotel: string };
  pmsList: string[];
  sandboxHref?: string;
};

const moduleData: Record<string, ModuleData> = {
  'ownstay-platform': {
    title: 'Ownstay Hotel Platform',
    category: 'Core Infrastructure',
    description:
      'Unified cloud orchestration for rooms, guest folios, housekeeping, and front-desk automation.',
    heroSubtitle:
      'Unify all hotel communication, guest profiles, and department workflows under one ultra-secure, 2-way PMS synchronized AI layer.',
    icon: 'CubeIcon',
    simType: 'pms',
    stat: { value: '99.99%', label: 'Cloud Uptime & 2-Way PMS Parity' },
    benefits: [
      {
        title: 'Centralized Multi-Property Hub',
        text: 'Manage single boutique properties or 1,000+ key resort chains from one unified operations cockpit.',
        icon: 'ComputerDesktopIcon',
      },
      {
        title: 'Plug & Play 2-Way PMS Sync',
        text: 'Native pre-built bi-directional connectors for Opera Cloud, Amadeus, Cloudbeds, and StayNTouch.',
        icon: 'ArrowsRightLeftIcon',
      },
      {
        title: 'Bank-Grade SOC2 Security',
        text: 'Tokenized guest folio payments, encrypted guest PII, and strict GDPR compliance standards.',
        icon: 'ShieldCheckIcon',
      },
    ],
    howItWorks: [
      '1. Connect your hotel PMS via API credentials in under 2 hours.',
      '2. Ingest hotel policies, room types, rate plans, and department roles.',
      '3. Deploy automated AI reception, omnichannel messaging, and dispatch across all channels.',
    ],
    specs: [
      { label: 'Deployment Time', value: '< 2 Hours' },
      { label: 'PMS Latency', value: '< 350 ms bi-directional' },
      { label: 'Security Standard', value: 'SOC2 Type II & PCI-DSS' },
      { label: 'Multi-Tenant Isolation', value: 'Full Dedicated Tenant Vault' },
    ],
    faqs: [
      {
        q: 'Does Ownstay require replacing our current PMS?',
        a: 'No. Ownstay operates as an intelligent real-time AI layer directly on top of your existing PMS (Opera, Amadeus, Cloudbeds, etc.).',
      },
      {
        q: 'How does Ownstay handle guest credit cards?',
        a: 'All credit card data is tokenized via PCI-compliant gateways. Ownstay never stores raw credit card numbers.',
      },
    ],
    testimonial: {
      quote:
        'The platform layer gave us unprecedented visibility into exactly what our guests need, exactly when they need it.',
      author: 'Michael Chang',
      role: 'Director of Hotel Operations',
      hotel: 'The Ritz Carlton Residences',
    },
    pmsList: ['Oracle Opera Cloud', 'Amadeus Systems', 'Cloudbeds', 'StayNTouch', 'Apaleo'],
  },

  'ownstay-ai-receptionist': {
    title: 'Ownstay AI Receptionist',
    category: 'Autonomous Guest Service',
    description: "Your hotel's intelligent front desk, available 24/7 in 40+ languages.",
    heroSubtitle:
      'Never miss a guest query again. Automate 85% of routine front desk tasks without losing the warmth of true luxury hospitality.',
    icon: 'SparklesIcon',
    simType: 'voice',
    stat: { value: '85%', label: 'Routine Front Desk Inquiries Handled' },
    benefits: [
      {
        title: 'Zero Wait Times',
        text: 'Instantly answers guests across telephone calls, WhatsApp, SMS, and website chat simultaneously.',
        icon: 'ClockIcon',
      },
      {
        title: 'Hyper-Personalized Memory',
        text: 'Leverages guest stay history and loyalty tier to deliver tailored recommendations and warm recognition.',
        icon: 'UserCircleIcon',
      },
      {
        title: 'Drastic Cost Reduction',
        text: 'Eliminates after-hours night desk staffing shortages while maintaining 5-star responsiveness.',
        icon: 'CurrencyDollarIcon',
      },
    ],
    howItWorks: [
      '1. Guest calls or texts hotel with an inquiry or request.',
      '2. AI parses intent, checks room folio/availability in 300ms, and delivers a natural voice response.',
      '3. Complex VIP requests smoothly escalate to on-duty staff with full context.',
    ],
    specs: [
      { label: 'Voice Response Latency', value: '< 600 ms' },
      { label: 'Languages Supported', value: '40+ Native Languages' },
      { label: 'Concurrent Call Capacity', value: 'Unlimited Simultaneous Calls' },
      { label: 'Escalation Accuracy', value: '99.8% Precision' },
    ],
    faqs: [
      {
        q: 'Can the AI Receptionist transfer to human staff?',
        a: 'Yes! If a guest asks for a human or if an issue requires GM intervention, the call is transferred in one second with live transcript handover.',
      },
      {
        q: 'Does it sound robotic?',
        a: 'No. Ownstay utilizes high-fidelity neural voice synthesis with natural pauses, emotional empathy, and conversational tone.',
      },
    ],
    testimonial: {
      quote:
        'Ownstay AI handled nearly 1,000 queries in our first week alone. Our front desk queue essentially disappeared overnight.',
      author: 'Sarah Jenkins',
      role: 'General Manager',
      hotel: 'The Grand Plaza Hotel',
    },
    pmsList: ['Oracle Opera', 'Amadeus', 'Cloudbeds', 'Agilysys', 'Infor HMS'],
  },

  'booking-assistance': {
    title: 'Reservations & Booking Assistance',
    category: 'Revenue Optimization',
    description: 'Direct booking engine, OTA sync & dynamic rate parity automation.',
    heroSubtitle:
      'Turn website visitors and phone callers into confirmed direct bookings with conversational room quoting and frictionless checkout links.',
    icon: 'CalendarDaysIcon',
    simType: 'booking',
    stat: { value: '+18.4%', label: 'Direct Booking Revenue Growth' },
    benefits: [
      {
        title: 'Live Rate & Room Parity',
        text: 'Quotes real-time room rates directly from your CRS/PMS with custom promotions applied.',
        icon: 'CreditCardIcon',
      },
      {
        title: 'Conversational Upselling',
        text: 'Suggests ocean-view upgrades, breakfast packages, and champagne add-ons during inquiry.',
        icon: 'ArrowTrendingUpIcon',
      },
      {
        title: 'Frictionless Reservation Mod',
        text: 'Allows verified guests to modify dates, update guest count, or add special notes without calling the desk.',
        icon: 'ArrowPathIcon',
      },
    ],
    howItWorks: [
      '1. Prospective guest asks about weekend rates or group room blocks.',
      '2. AI queries real-time availability and presents formatted room photos and rates.',
      '3. Direct checkout link sends guest straight to tokenized secure reservation completion.',
    ],
    specs: [
      { label: 'Direct Conversion Lift', value: '+18.4% Average' },
      { label: 'CRS Integration Speed', value: 'Real-time Sub-second' },
      { label: 'Cart Abandonment Recovery', value: 'Automated WhatsApp ping' },
    ],
    faqs: [
      {
        q: 'How does it prevent overbooking?',
        a: 'Ownstay connects directly to your live inventory pool with instant lock verification before quoting rooms.',
      },
    ],
    testimonial: {
      quote:
        'Our direct booking margin jumped 14% in the first quarter of implementing the booking assistant.',
      author: 'Greg Sanders',
      role: 'Revenue Director',
      hotel: 'Azure Horizon Beach Resort',
    },
    pmsList: ['Opera Cloud', 'Amadeus', 'SynXis', 'Amadeus CRS', 'Cloudbeds'],
  },

  'guest-messaging': {
    title: 'Guest Management & Messaging (CRM)',
    category: 'Guest Experience',
    description: 'VIP guest profiles, stay history, and automated preferences over WhatsApp & SMS.',
    heroSubtitle:
      'Meet your guests on their favorite messaging channels with 98% open rates and zero app downloads required.',
    icon: 'DevicePhoneMobileIcon',
    simType: 'chat',
    sandboxHref: '/contact',
    stat: { value: '98%', label: 'Message Read Rate via WhatsApp & SMS' },
    benefits: [
      {
        title: 'Zero App Required',
        text: 'Guests interact natively through WhatsApp, Apple iMessage, SMS, or mobile browser.',
        icon: 'ChatBubbleLeftRightIcon',
      },
      {
        title: 'Automated Stay Milestones',
        text: 'Pre-arrival registration, arrival welcome, mid-stay satisfaction check, and express checkout prompts.',
        icon: 'BellAlertIcon',
      },
      {
        title: 'Rich Media Sharing',
        text: 'Share digital maps, wine lists, spa menus, and boarding pass documents directly in conversation.',
        icon: 'PhotoIcon',
      },
    ],
    howItWorks: [
      '1. Guest checks in and receives an automated personalized welcome greeting.',
      '2. In-stay inquiries regarding Wi-Fi, breakfast, and late checkout are answered in seconds.',
      '3. Digital invoice is delivered to WhatsApp on morning of departure.',
    ],
    specs: [
      { label: 'Supported Channels', value: 'WhatsApp Business API, SMS, WebChat' },
      { label: 'Delivery Speed', value: '< 1 Second' },
      { label: 'Rich Media', value: 'PDFs, Images, Maps, Video' },
    ],
    faqs: [
      {
        q: 'Is WhatsApp Business API officially supported?',
        a: 'Yes, Ownstay is an authorized Meta Business Solution partner with official green-badge verification support.',
      },
    ],
    testimonial: {
      quote:
        'Guests love texting us for extra towels or late check-out. It feels modern, discreet, and effortless.',
      author: 'Marcus Johnson',
      role: 'Guest Experience Lead',
      hotel: 'Metropolitan Luxury Suites',
    },
    pmsList: ['Opera Cloud', 'Amadeus', 'Cloudbeds', 'StayNTouch'],
  },

  'in-stay-support': {
    title: 'In-Stay Support & Digital Butler',
    category: 'Guest Services',
    description: 'Live room availability, keycard lock states, room dining & digital concierge.',
    heroSubtitle:
      'A personal digital concierge in the pocket of every in-house guest, available 24/7 without delays.',
    icon: 'KeyIcon',
    simType: 'chat',
    sandboxHref: '/contact',
    stat: { value: '4.9 / 5', label: 'Average In-Stay Guest Satisfaction' },
    benefits: [
      {
        title: 'Frictionless In-Room Dining',
        text: 'Order burgers, cocktails, and breakfast with allergen confirmation directly billed to the room.',
        icon: 'ShoppingBagIcon',
      },
      {
        title: 'Smart Keycard Telemetry',
        text: 'Issue digital mobile keys and troubleshoot lock access without sending guests back to the lobby.',
        icon: 'LockClosedIcon',
      },
      {
        title: 'Local Neighborhood Concierge',
        text: 'Curated recommendations for secret jazz bars, specialty coffee shops, and local transport.',
        icon: 'MapPinIcon',
      },
    ],
    howItWorks: [
      '1. In-house guest asks for room service or local dinner recommendation.',
      '2. AI recommends tailored options and processes order directly into POS/KDS.',
      '3. Guest room folio is updated and food delivery countdown is shared in chat.',
    ],
    specs: [
      { label: 'Smart Lock Compatibility', value: 'SALTO, Assa Abloy, Dormakaba' },
      { label: 'POS Compatibility', value: 'Micros Simphony, Toast, Lightspeed' },
      { label: 'Folio Sync Speed', value: 'Instant Real-Time' },
    ],
    faqs: [
      {
        q: 'Can guests order room service directly through chat?',
        a: 'Yes! Orders format automatically and push directly into your kitchen POS with room folio charge authorization.',
      },
    ],
    testimonial: {
      quote:
        'Our room service revenue spiked 30% when guests could just text their orders directly.',
      author: 'Roberto Dias',
      role: 'Director of F&B',
      hotel: 'Boutique Heritage Suites',
    },
    pmsList: ['Opera Cloud', 'Amadeus', 'Cloudbeds', 'Simphony POS'],
  },

  'guest-request-management': {
    title: 'Housekeeping & Guest Request Dispatch',
    category: 'Operations & Housekeeping',
    badge: 'Auto-Dispatch',
    description: 'Real-time cleaning dispatch, queue prioritization, inspections & SLA tracking.',
    heroSubtitle:
      'Turn guest requests into structured work orders for housekeeping and maintenance in seconds.',
    icon: 'SparklesIcon',
    simType: 'dispatch',
    stat: { value: '4.2 min', label: 'Average Request Resolution SLA' },
    benefits: [
      {
        title: 'Proximity-Based Task Dispatch',
        text: 'Assigns extra pillow and towel requests to the floor attendant nearest to the guest room.',
        icon: 'PaperAirplaneIcon',
      },
      {
        title: 'Real-Time SLA Tracking',
        text: 'Live dashboard flags any ticket exceeding 12 minutes for immediate supervisor intervention.',
        icon: 'ChartBarIcon',
      },
      {
        title: 'Closed-Loop Guest Confirmation',
        text: 'Automatically texts guest upon task completion to ensure 100% satisfaction.',
        icon: 'CheckBadgeIcon',
      },
    ],
    howItWorks: [
      '1. Guest texts: "Could we please get 2 extra feather pillows in Room 512?"',
      '2. AI creates an urgent Housekeeping ticket and pings the 5th-floor attendant.',
      '3. Attendant taps "Delivered" and guest receives a polite confirmation text.',
    ],
    specs: [
      { label: 'Dispatch Latency', value: '< 2.5 Seconds' },
      { label: 'SLA Tracking', value: 'Live Real-Time Countdown' },
      { label: 'Escalation Alert', value: 'Automated SMS to Duty Manager' },
    ],
    faqs: [
      {
        q: 'How do floor staff receive tickets?',
        a: 'Staff receive lightweight mobile web notifications or SMS alerts without needing complex app setups.',
      },
    ],
    testimonial: {
      quote: 'We dropped our average request fulfillment time from 24 minutes to under 5 minutes.',
      author: 'David Kim',
      role: 'Executive Housekeeper',
      hotel: 'The Alpine Crest Hotel',
    },
    pmsList: ['Opera Cloud', 'Amadeus', 'HotSOS', 'Optii Solutions', 'Cloudbeds'],
  },

  'facility-maintenance': {
    title: 'Facility Maintenance & IoT Telemetry',
    category: 'Engineering & Facilities',
    description: 'Instant repair ticket triage, IoT HVAC telemetry, and equipment logs.',
    heroSubtitle:
      'Prevent guest complaints before they happen. Triage HVAC, plumbing, and electrical issues automatically.',
    icon: 'WrenchScrewdriverIcon',
    simType: 'dispatch',
    stat: { value: '0 Missed', label: 'Critical Engineering Work Orders' },
    benefits: [
      {
        title: 'Instant Maintenance Triage',
        text: 'Classifies repair urgency (e.g., water leak vs. lightbulb change) and routes to on-duty engineer.',
        icon: 'WrenchIcon',
      },
      {
        title: 'IoT HVAC & Sensor Telemetry',
        text: 'Monitors smart thermostat temperature anomalies and triggers proactive maintenance.',
        icon: 'CpuChipIcon',
      },
      {
        title: 'Asset History & Audit Trail',
        text: 'Maintains complete repair history and warranty logs for every air conditioner and appliance.',
        icon: 'ClipboardDocumentListIcon',
      },
    ],
    howItWorks: [
      '1. Guest or room sensor reports an AC cooling delay.',
      '2. AI tags issue as High-Priority Engineering and dispatches to duty technician with room details.',
      '3. Technician logs completion and diagnostic resolution in mobile portal.',
    ],
    specs: [
      { label: 'Priority Levels', value: 'P1 Emergency, P2 Urgent, P3 Routine' },
      { label: 'IoT Protocol Support', value: 'BACnet, Zigbee, MQTT' },
      { label: 'Engineering App', value: 'Responsive Mobile Portal' },
    ],
    faqs: [
      {
        q: 'Does it integrate with building management systems (BMS)?',
        a: 'Yes, Ownstay connects to major BMS controllers via standard MQTT and BACnet gateways.',
      },
    ],
    testimonial: {
      quote:
        'We caught a major boiler malfunction within 4 minutes thanks to the automated alert pipeline.',
      author: 'Kenji Sato',
      role: 'Chief Engineer',
      hotel: 'Metropolitan Tower Hotel',
    },
    pmsList: ['Opera Cloud', 'Amadeus', 'Knowcross', 'HotSOS', 'Cloudbeds'],
  },

  'staff-scheduling': {
    title: 'Staff & Shift Scheduling',
    category: 'Workforce Management',
    description: 'Role-based access, attendance logs & automated shift handover summaries.',
    heroSubtitle:
      'Keep hotel teams perfectly in sync. Eliminate shift handover gaps with AI-generated operational recaps.',
    icon: 'UserGroupIcon',
    simType: 'scheduling',
    stat: { value: '15 min', label: 'Night Audit Shift Handover (Down from 2 hrs)' },
    benefits: [
      {
        title: 'Automated Shift Handover Logs',
        text: 'Compiles open maintenance tickets, VIP arrivals, and special notes for incoming morning crew.',
        icon: 'ClipboardDocumentCheckIcon',
      },
      {
        title: 'Role-Based Permissions',
        text: 'Strict access boundaries between GM, Front Desk, Housekeeping, and F&B teams.',
        icon: 'LockClosedIcon',
      },
      {
        title: 'Automated Overtime & Break Alerts',
        text: 'Notifies supervisors when shift coverage is low during unexpected check-in spikes.',
        icon: 'ClockIcon',
      },
    ],
    howItWorks: [
      '1. At end of shift, AI analyzes all logged tickets, guest conversations, and check-in events.',
      '2. Generates structured executive summary for the incoming shift supervisor.',
      '3. Supervisor reviews and signs off digitally in 60 seconds.',
    ],
    specs: [
      { label: 'Handover Generation Time', value: '< 5 Seconds' },
      { label: 'Export Formats', value: 'PDF, Email, Slack, WhatsApp' },
    ],
    faqs: [
      {
        q: 'Can the GM review all shifts from home?',
        a: 'Yes! Automated email summaries and mobile push notifications keep leadership informed 24/7.',
      },
    ],
    testimonial: {
      quote:
        'Our morning briefing went from 30 minutes of chaos to a 5-minute review of the AI shift recap.',
      author: 'Tom Harrison',
      role: 'Night Audit Manager',
      hotel: 'The Grand Palace',
    },
    pmsList: ['Opera Cloud', 'Amadeus', 'Cloudbeds', 'StayNTouch'],
  },

  'kitchen-kds': {
    title: 'Kitchen & KDS Station',
    category: 'F&B Operations',
    description: 'Live food ticket prep times, room dining pacing & bar orders.',
    heroSubtitle:
      'Digitize kitchen ticket pacing and room service orders. Connect guest WhatsApp chats directly to kitchen prep screens.',
    icon: 'FireIcon',
    simType: 'kitchen',
    sandboxHref: '/contact',
    stat: { value: '18 min', label: 'Average Room Service Delivery Time' },
    benefits: [
      {
        title: 'Live Kitchen Display System (KDS)',
        text: 'Color-coded prep timers, station routing (grill, salad, bar), and runner dispatch alerts.',
        icon: 'DeviceTabletIcon',
      },
      {
        title: 'Automated Allergen Verification',
        text: 'Cross-checks every order against guest allergy profiles before firing to kitchen stations.',
        icon: 'ShieldCheckIcon',
      },
      {
        title: 'Dynamic Course Pacing',
        text: 'Coordinates multi-course dining for penthouse suites and private dining venues.',
        icon: 'ClockIcon',
      },
    ],
    howItWorks: [
      '1. Guest texts order for Ribeye Steak and Pinot Noir.',
      '2. AI injects ticket directly to Grill station and Bar dispenser.',
      '3. When runner takes tray, guest receives arrival countdown notification.',
    ],
    specs: [
      { label: 'POS Protocol', value: 'Simphony, Toast, Lightspeed' },
      { label: 'Prep Timer Accuracy', value: 'Sub-minute countdown' },
    ],
    faqs: [
      {
        q: 'Can guests customize cooking temperatures?',
        a: 'Yes! AI prompts guests for meat temperatures, dressings, and special requests automatically.',
      },
    ],
    testimonial: {
      quote: 'Order errors dropped to zero and our late-night room service revenue doubled.',
      author: 'Chef Antoine Laurent',
      role: 'Executive Chef',
      hotel: 'Le Royal Mirage',
    },
    pmsList: ['Oracle Simphony', 'Toast', 'Lightspeed', 'Agilysys InfoGenesis'],
  },

  'hotel-inventory': {
    title: 'Hotel Inventory & Asset Tracking',
    category: 'Supplies & Logistics',
    description: 'F&B stock tracking, amenities reorder points & supplier replenishment alerts.',
    heroSubtitle:
      'Never run out of luxury shampoo or breakfast bacon. Track hotel consumption with predictive replenishment.',
    icon: 'CubeIcon',
    simType: 'inventory',
    stat: { value: '-22%', label: 'Reduction in Amenity Waste & Spoilage' },
    benefits: [
      {
        title: 'Predictive Reorder Triggers',
        text: 'Calculates upcoming weekend occupancy and calculates exact linen and coffee supply requirements.',
        icon: 'ArrowTrendingUpIcon',
      },
      {
        title: 'Minibar Stock Telemetry',
        text: 'Reconciles housekeeping restock scans against guest folios and supplier invoices.',
        icon: 'ListBulletIcon',
      },
      {
        title: 'Supplier Purchase Order Automation',
        text: 'Drafts replenishment purchase orders when stock reaches critical safety thresholds.',
        icon: 'DocumentDuplicateIcon',
      },
    ],
    howItWorks: [
      '1. AI monitors occupancy forecast and daily consumption rates.',
      '2. Warns procurement manager 48 hours before coffee beans or toiletry stocks deplete.',
      '3. Generates 1-click supplier purchase orders.',
    ],
    specs: [
      { label: 'Forecasting Horizon', value: '14-Day Predictive' },
      { label: 'ERP Integration', value: 'SAP, Oracle NetSuite, QuickBooks' },
    ],
    faqs: [
      {
        q: 'Does it support multi-warehouse properties?',
        a: 'Yes, tracks main storage vaults, floor pantries, and individual kitchen walk-ins.',
      },
    ],
    testimonial: {
      quote: 'We cut our monthly food waste and amenity overstock by over $12,000.',
      author: 'Clara Oswald',
      role: 'Procurement Director',
      hotel: 'Highland Resort Group',
    },
    pmsList: ['Opera Cloud', 'Amadeus', 'NetSuite', 'SAP Hospitality'],
  },

  'yield-analytics': {
    title: 'Yield Analytics & Revenue Reports',
    category: 'Intelligence & Revenue',
    description: 'RevPAR, ADR, occupancy forecasting & dynamic pricing recommendations.',
    heroSubtitle:
      'Unlock predictive hospitality intelligence. Optimize pricing and monitor real-time department profitability.',
    icon: 'ChartBarIcon',
    simType: 'yield',
    stat: { value: '+$14.20', label: 'Average ADR Uplift Across Portfolio' },
    benefits: [
      {
        title: 'Autonomous Dynamic Pricing',
        text: 'Monitors local concert dates, flight arrivals, and competitor rates to suggest optimal ADR.',
        icon: 'CurrencyDollarIcon',
      },
      {
        title: 'Departmental Profitability Breakdown',
        text: 'Analyzes labor cost per occupied room (CPOR) and in-room dining profit margins.',
        icon: 'ChartPieIcon',
      },
      {
        title: 'Executive Weekly Briefings',
        text: 'Automated executive summary delivered every Monday morning at 7:00 AM.',
        icon: 'DocumentTextIcon',
      },
    ],
    howItWorks: [
      '1. Connects to PMS historical folios and local market event feeds.',
      '2. AI computes demand elasticity models for next 90 days.',
      '3. Recommends rate adjustments directly pushable to CRS with one click.',
    ],
    specs: [
      { label: 'Forecast Accuracy', value: '94.8% at 30 Days' },
      { label: 'Market Data Sources', value: 'STR, OTA Feeds, Airline APIs' },
    ],
    faqs: [
      {
        q: 'Can we set hard price floors and ceilings?',
        a: 'Yes, full custom guardrails ensure rates never breach brand pricing rules.',
      },
    ],
    testimonial: {
      quote:
        'The automated rate yield recommendations paid for the entire platform in the first 2 weeks.',
      author: 'Julian Thorne',
      role: 'VP of Revenue Management',
      hotel: 'Horizon Hotel Collection',
    },
    pmsList: ['Opera Cloud', 'Amadeus', 'IDeaS RMS', 'Duetto', 'Cloudbeds'],
  },

  'hotel-knowledge-ai': {
    title: 'Hotel Knowledge AI & Concierge Brain',
    category: 'Intelligence & Concierge',
    description:
      'Trained on your hotel menus, policies, amenities & local city guide with zero hallucinations.',
    heroSubtitle:
      'Turn scattered PDFs, brand manuals, and Notion docs into an instant AI brain that knows every detail of your hotel.',
    icon: 'CpuChipIcon',
    simType: 'chat',
    stat: { value: '0 Error', label: 'Hallucination Rate with Strict Guardrails' },
    benefits: [
      {
        title: 'Zero-Hallucination Guardrails',
        text: 'AI answers only from verified hotel documents, menus, and verified policies.',
        icon: 'ShieldCheckIcon',
      },
      {
        title: 'Instant 1-Click Policy Updates',
        text: 'Change breakfast hours or pool rules once, and all AI voice & chat agents update in real-time.',
        icon: 'ArrowPathIcon',
      },
      {
        title: 'Curated Local Guide',
        text: 'Recommend favorite neighborhood bakeries, museums, and hidden rooftop bars.',
        icon: 'MapPinIcon',
      },
    ],
    howItWorks: [
      '1. Upload hotel PDFs, website URLs, and menus to dashboard.',
      '2. Knowledge AI vectors the data into isolated tenant memory.',
      '3. All voice and chat interactions reference this trusted source.',
    ],
    specs: [
      { label: 'Ingestion Formats', value: 'PDF, Word, Notion, URL, CSV' },
      { label: 'Update Latency', value: 'Instant (< 1s)' },
    ],
    faqs: [
      {
        q: 'What if a guest asks something not in the knowledge base?',
        a: 'The AI politely acknowledges the question and offers to connect the guest directly to a staff member.',
      },
    ],
    testimonial: {
      quote:
        'It is like cloning our top concierge and giving them photographic memory of the entire city.',
      author: 'Alice Dupont',
      role: 'Chief Concierge',
      hotel: 'The Grand Continental',
    },
    pmsList: ['Opera Cloud', 'Amadeus', 'Cloudbeds', 'Apaleo'],
  },

  'security-compliance': {
    title: 'Security, Audit Logs & Compliance',
    category: 'Enterprise Security',
    description: 'SOC2 Type II compliant, tokenized payments, and PMS audit trails.',
    heroSubtitle:
      'Enterprise security architecture ensuring complete data privacy, GDPR compliance, and PCI-DSS certification.',
    icon: 'ShieldCheckIcon',
    simType: 'security',
    stat: { value: 'SOC2', label: 'Type II Certified & Bank-Grade Security' },
    benefits: [
      {
        title: 'Tokenized Payment Gateway',
        text: 'Collect room deposits and restaurant tabs without exposing raw credit cards.',
        icon: 'LockClosedIcon',
      },
      {
        title: 'Full PMS Audit Trail',
        text: 'Immutable timestamped logs of every room key issuance, folio update, and guest request.',
        icon: 'DocumentCheckIcon',
      },
      {
        title: 'GDPR & CCPA Compliant Data Vault',
        text: 'Automated guest data anonymization and instant compliance request fulfillment.',
        icon: 'ShieldCheckIcon',
      },
    ],
    howItWorks: [
      '1. All data is encrypted in transit (TLS 1.3) and at rest (AES-256).',
      '2. Dedicated multi-tenant isolation ensures zero cross-property data leakage.',
      '3. Regular automated penetration testing and SOC2 audit certification.',
    ],
    specs: [
      { label: 'Encryption Standard', value: 'AES-256 & TLS 1.3' },
      { label: 'Audit Logging', value: 'Immutable SIEM Export' },
    ],
    faqs: [
      {
        q: 'Can we run Ownstay in specific data residency regions (e.g. EU or US)?',
        a: 'Yes, enterprise plans support dedicated EU, US, UK, and Asia-Pacific regional data hosting.',
      },
    ],
    testimonial: {
      quote: 'Ownstay passed our strict enterprise cybersecurity audit on the very first review.',
      author: 'Victor Cruz',
      role: 'Chief Information Security Officer',
      hotel: 'Global Premier Hotels',
    },
    pmsList: ['Opera Cloud', 'Amadeus Enterprise', 'Okta SSO', 'Azure AD'],
  },

  'ai-receptionist': {
    title: 'AI Receptionist Desk',
    category: 'Front Desk Automation',
    description: 'Field check-in questions, parking policies, and everyday guest requests.',
    heroSubtitle:
      'Automate the 20 most repetitive questions front-desk staff hear every single day.',
    icon: 'ChatBubbleLeftRightIcon',
    simType: 'chat',
    stat: { value: '92%', label: 'Guest Resolution Rate on First Touch' },
    benefits: [
      {
        title: 'Automates FAQs',
        text: 'Instant replies regarding breakfast timings, Wi-Fi passwords, parking fees, and gym access.',
        icon: 'LightBulbIcon',
      },
      {
        title: 'Intelligent Staff Routing',
        text: 'Brings in human staff only when situations demand complex hospitality care.',
        icon: 'ArrowsRightLeftIcon',
      },
      {
        title: 'Brand Consistent Copywriting',
        text: 'Responses match your luxury or boutique brand voice perfectly.',
        icon: 'FaceSmileIcon',
      },
    ],
    howItWorks: [
      '1. Ingests your hotel documents and website info.',
      '2. Engages guests dynamically when they message or call.',
      '3. Logs all interactions directly to the guest profile.',
    ],
    specs: [
      { label: 'Response Time', value: '< 400 ms' },
      { label: 'Channel Support', value: 'Web, WhatsApp, SMS, Phone' },
    ],
    faqs: [
      {
        q: 'Can we edit the answers the AI gives?',
        a: 'Yes, you can edit policy guidelines or specific answers at any time from the dashboard.',
      },
    ],
    testimonial: {
      quote: 'Our front desk is no longer overwhelmed by repetitive phone calls.',
      author: 'Liam Robertson',
      role: 'Front Desk Supervisor',
      hotel: 'The Carlton Plaza',
    },
    pmsList: ['Opera Cloud', 'Amadeus', 'Cloudbeds', 'StayNTouch'],
  },

  'ai-voice-receptionist': {
    title: 'AI Voice Receptionist',
    category: 'Voice Telephony',
    description: 'Answer hotel calls with intelligent, natural conversational voice AI.',
    heroSubtitle:
      'A lifelike voice AI that answers every incoming hotel call within 3 rings with zero hold music.',
    icon: 'MicrophoneIcon',
    simType: 'voice',
    stat: { value: '< 600ms', label: 'Voice Response Latency (Human Conversational Pacing)' },
    benefits: [
      {
        title: 'Zero Hold Music',
        text: 'Answers every call simultaneously, scaling to hundreds of concurrent callers.',
        icon: 'SpeakerWaveIcon',
      },
      {
        title: 'Emotional Nuance Detection',
        text: 'Detects guest frustration and adapts tone dynamically or routes to a duty manager.',
        icon: 'HeartIcon',
      },
      {
        title: 'Instant Call Summaries',
        text: 'Transcribes every call with key takeaways and action items sent to staff.',
        icon: 'DocumentTextIcon',
      },
    ],
    howItWorks: [
      '1. Route your main phone number or overflow line to the Ownstay Voice AI SIP trunk.',
      '2. AI greets callers naturally, answers questions, quotes room rates, and takes requests.',
      '3. Seamlessly transfers to staff when human assistance is requested.',
    ],
    specs: [
      { label: 'SIP Protocol', value: 'Standard VoIP / SIP Trunking' },
      { label: 'Call Quality', value: 'HD Voice (Opus / G.711)' },
    ],
    faqs: [
      {
        q: 'Do we need new phone hardware?',
        a: 'No, Ownstay works with your existing PBX or VoIP phone provider (Cisco, Mitel, CloudCall, etc.).',
      },
    ],
    testimonial: {
      quote:
        'Callers frequently ask for our voice agent by name thinking she is a receptionist sitting in our lobby.',
      author: 'Elena Martinez',
      role: 'VP of Guest Experience',
      hotel: 'Seaside Grand Resort',
    },
    pmsList: ['Opera Cloud', 'Amadeus', 'Cisco CallManager', 'Mitel', 'Cloudbeds'],
  },

  'multilingual-ai': {
    title: 'Multilingual Guest AI',
    category: 'International Hospitality',
    description: 'Communicate with guests in 40+ languages seamlessly.',
    heroSubtitle:
      'Break down language barriers. Offer flawless, culturally nuanced hospitality in over 40 languages across voice and chat.',
    icon: 'GlobeAltIcon',
    simType: 'voice',
    stat: { value: '40+ Langs', label: 'Native Foreign Language Accuracy' },
    benefits: [
      {
        title: 'Automatic Language Detection',
        text: 'Detects whether guest speaks Spanish, Mandarin, French, German, or Japanese from their first words.',
        icon: 'LanguageIcon',
      },
      {
        title: 'Cultural Formality Adaptation',
        text: 'Applies appropriate honorifics and polite hospitality phrasing for different international markets.',
        icon: 'UserGroupIcon',
      },
      {
        title: 'Real-Time Staff Translation',
        text: 'Receptionists write in English and the guest reads in Japanese or Korean.',
        icon: 'ArrowsRightLeftIcon',
      },
    ],
    howItWorks: [
      '1. Guest initiates conversation in their native language.',
      '2. AI identifies the language profile and responds fluently in that exact idiom.',
      '3. Staff portal shows side-by-side English translation for complete clarity.',
    ],
    specs: [
      {
        label: 'Languages',
        value: '40+ including Japanese, Mandarin, Arabic, Spanish, French, German',
      },
      { label: 'Translation Latency', value: '< 200 ms' },
    ],
    faqs: [
      {
        q: 'Does it support regional accents?',
        a: 'Yes, trained on extensive global audio corpuses for accurate speech recognition.',
      },
    ],
    testimonial: {
      quote: 'Our international guests from Japan and Brazil feel completely at home.',
      author: 'Chen Wei',
      role: 'Hotel Managing Director',
      hotel: 'Metropolitan International Hotel',
    },
    pmsList: ['Opera Cloud', 'Amadeus', 'Cloudbeds', 'Apaleo'],
  },

  'ai-operations': {
    title: 'AI Operations & Shift Automation',
    category: 'Back of House',
    description: 'Automate repetitive hotel communication, logs, and departmental workflows.',
    heroSubtitle:
      'Behind closed doors, the AI acts as an invisible manager to keep shifts synced, handovers smooth, and tickets resolved.',
    icon: 'CogIcon',
    simType: 'pms',
    stat: { value: '3.8x', label: 'Operational Efficiency ROI' },
    benefits: [
      {
        title: 'Automated Shift Handover',
        text: 'Summarizes key events, open repair tickets, and incoming VIP arrivals for the next team.',
        icon: 'ClipboardDocumentIcon',
      },
      {
        title: 'Automated Reminders & Pings',
        text: 'Pings housekeeping supervisors regarding scheduled deep cleans and inspection deadlines.',
        icon: 'BellAlertIcon',
      },
      {
        title: 'Automated Email Ingestion',
        text: 'Extracts booking details and dietary notes from incoming guest emails into PMS fields.',
        icon: 'DocumentDuplicateIcon',
      },
    ],
    howItWorks: [
      '1. AI monitors triggers in PMS and communication channels.',
      '2. Executes automated dispatch workflows based on hotel SOPs.',
      '3. Keeps management updated on SLA milestones.',
    ],
    specs: [
      { label: 'Integration Type', value: 'REST Webhooks & Event Streams' },
      { label: 'SOP Customization', value: 'Configurable Rule Engine' },
    ],
    faqs: [
      {
        q: 'Can we customize standard operating procedures (SOPs)?',
        a: 'Yes! You can configure exact routing rules, response thresholds, and notification hierarchies.',
      },
    ],
    testimonial: {
      quote:
        'The night audit no longer takes 3 hours. It takes 15 minutes of reviewing AI summaries.',
      author: 'Tom Harrison',
      role: 'Night Manager',
      hotel: 'The Grand Palace',
    },
    pmsList: ['Opera Cloud', 'Amadeus', 'Cloudbeds', 'StayNTouch'],
  },

  'conversation-management': {
    title: 'Conversation Management & Unified Inbox',
    category: 'Omnichannel Support',
    description:
      'Keep guest conversations organized, consistent, and actionable across all channels.',
    heroSubtitle:
      'Turn chaotic disparate inboxes into a unified, high-efficiency workspace for your customer service team.',
    icon: 'InboxStackIcon',
    simType: 'chat',
    stat: { value: '1 Inbox', label: 'Consolidating WhatsApp, SMS, Web & Booking.com' },
    benefits: [
      {
        title: 'Unified Omnichannel Inbox',
        text: 'WhatsApp, SMS, Email, and OTA messaging in one streamlined view.',
        icon: 'InboxIcon',
      },
      {
        title: 'Sentiment & Urgency Tagging',
        text: 'Instantly identifies upset guests or VIP loyalty members for prioritized attention.',
        icon: 'TagIcon',
      },
      {
        title: 'Smart Department Triage',
        text: 'Routes billing inquiries to accounting and room requests to front desk.',
        icon: 'QueueListIcon',
      },
    ],
    howItWorks: [
      '1. Messages arrive from multiple channels.',
      '2. AI categorizes and tags them with sentiment and urgency.',
      '3. Agents respond with 1-click AI-suggested answers or allow auto-reply.',
    ],
    specs: [
      { label: 'Channel Count', value: '5+ Unified Channels' },
      { label: 'Auto-Categorization', value: '99.4% Accuracy' },
    ],
    faqs: [
      {
        q: 'Can staff take over an AI conversation?',
        a: 'Yes, clicking "Take Over" pauses the AI immediately and lets the human agent reply.',
      },
    ],
    testimonial: {
      quote:
        'We merged 5 separate tools into this one inbox. Our team response time dropped to under 1 minute.',
      author: 'Nina Perez',
      role: 'Reservations Team Lead',
      hotel: 'The Grand Vista',
    },
    pmsList: ['Opera Cloud', 'Amadeus', 'Cloudbeds', 'Zendesk', 'HubSpot'],
  },

  '24-7-guest-assistance': {
    title: '24/7 Guest Assistance',
    category: 'Round-the-Clock Hospitality',
    description: 'Give guests immediate help before, during, and after their stay.',
    heroSubtitle:
      'Hospitality that never sleeps. Guarantee sub-minute response times at 3:00 AM without staffing bottlenecks.',
    icon: 'ClockIcon',
    simType: 'voice',
    stat: { value: '24/7/365', label: 'Uninterrupted Guest Coverage' },
    benefits: [
      {
        title: 'Night Audit Relief',
        text: 'Takes the pressure off night auditors handling late arrivals and queries.',
        icon: 'MoonIcon',
      },
      {
        title: 'Pre-Arrival Trip Prep',
        text: 'Helps guests organize airport transfers and tours before landing.',
        icon: 'CalendarDaysIcon',
      },
      {
        title: 'Rapid Complaint Interception',
        text: 'Intercepts late-night issues at 2 AM before they become negative online reviews.',
        icon: 'ShieldExclamationIcon',
      },
    ],
    howItWorks: [
      '1. Late-night messages or calls route instantly to the AI concierge.',
      '2. AI resolves Wi-Fi issues, orders extra blankets, or validates late checkout.',
      '3. Escalates urgent physical security matters to on-site night manager.',
    ],
    specs: [
      { label: 'Uptime', value: '99.99% Guaranteed SLA' },
      { label: 'Peak Capacity', value: 'Unlimited Concurrency' },
    ],
    faqs: [
      {
        q: 'What happens in an emergency at night?',
        a: 'The AI immediately alerts on-duty security and duty managers via phone and SMS while assisting the guest.',
      },
    ],
    testimonial: {
      quote:
        'Having 24/7 coverage without hiring 3 extra night shift workers saved us over $160,000 this year.',
      author: 'Sophie Laurent',
      role: 'Hotel Owner & GM',
      hotel: 'Château Belmont',
    },
    pmsList: ['Opera Cloud', 'Amadeus', 'Cloudbeds', 'StayNTouch'],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ module: string }>;
}): Promise<Metadata> {
  const { module } = await params;
  const data = moduleData[module];
  if (!data) return { title: 'Module Not Found — Ownstay' };

  return {
    title: `${data.title} — Hospitality AI Platform | Ownstay`,
    description: data.heroSubtitle,
  };
}

export default async function ModulePage({ params }: { params: Promise<{ module: string }> }) {
  const { module } = await params;
  const data = moduleData[module];

  if (!data) {
    notFound();
  }

  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section
        className="pt-36 pb-20 bg-background relative overflow-hidden"
        aria-label={`${data.title} overview`}
      >
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <Icon name={data.icon} size={16} className="text-primary" />
                <span className="text-xs font-bold tracking-widest uppercase text-primary">
                  {data.category} • Module Spotlight
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 leading-tight">
                {data.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl font-normal">
                {data.heroSubtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-xl hover:opacity-95 transition-all shadow-md text-base"
                >
                  Start 14-Day Free Pilot
                  <Icon name="ArrowRightIcon" size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-secondary text-foreground font-semibold px-6 py-3.5 rounded-xl hover:bg-slate-200 transition-all border border-border text-base"
                >
                  <Icon name="CalendarDaysIcon" size={18} />
                  Book Live Guided Demo
                </Link>
              </div>
            </div>

            {/* Interactive Live Demo Simulator Card */}
            <div className="lg:col-span-5">
              <InteractiveProductSimulator
                moduleTitle={data.title}
                simType={data.simType}
                stat={data.stat}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Metric Banner */}
      <section className="py-8 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <span className="text-2xl md:text-3xl font-extrabold text-orange-400 mr-3">
                  {data.stat.value}
                </span>
                <span className="text-sm md:text-base text-slate-300 font-medium">
                  {data.stat.label}
                </span>
              </div>
            </div>
            <Link
              href="/case-studies"
              className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1"
            >
              Read Verified Hotel ROI Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-20 bg-slate-50/70 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Functional Capabilities
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Built specifically for modern hospitality operators demanding speed, precision, and
              zero hallucinations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {data.benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-orange-50 text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon name={benefit.icon} size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Workflow & Specifications */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Workflow Steps */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-widest mb-4">
                Step-by-Step Architecture
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                How {data.title} operates in production
              </h2>
              <div className="space-y-6">
                {data.howItWorks.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-border/70 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-primary text-white font-bold text-sm shadow-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-base text-slate-800 font-medium pt-1">
                        {step.replace(/^\d+\.\s*/, '')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications Card */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-border rounded-2xl p-7 shadow-md">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="WrenchScrewdriverIcon" size={20} className="text-primary" />
                  Technical Specifications
                </h3>
                <div className="divide-y divide-slate-100">
                  {data.specs.map((spec, idx) => (
                    <div key={idx} className="py-3 flex justify-between items-center text-sm">
                      <span className="text-muted-foreground font-medium">{spec.label}</span>
                      <span className="font-bold text-slate-900">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 bg-orange-50/60 rounded-xl p-4 text-xs text-slate-700">
                  <div className="font-bold text-primary mb-1">Pre-Certified Integration</div>
                  Runs seamlessly with Oracle Opera, Amadeus Systems, Cloudbeds, and major lock
                  providers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Hotel Testimonial */}
      <section className="py-16 bg-slate-50 border-t border-border/60">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-border/80 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden">
            <div className="flex gap-1 text-amber-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="StarIcon" size={18} variant="solid" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-foreground font-semibold mb-6 leading-snug">
              &ldquo;{data.testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-base text-foreground">{data.testimonial.author}</p>
                <p className="text-xs text-primary font-medium">
                  {data.testimonial.role} • {data.testimonial.hotel}
                </p>
              </div>
              <span className="text-xs bg-slate-100 text-slate-600 font-semibold px-3 py-1 rounded-full border border-slate-200">
                Verified Customer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After Ownstay Autonomous Impact */}
      <section className="py-20 bg-slate-50 border-t border-border/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-widest mb-3">
              Operational Contrast
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Ownstay Shift: From Manual Friction to Instant Resolution
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              See the measurable difference between legacy hotel operations and our 24/7 AI
              receptionist engine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Legacy Method */}
            <div className="bg-white border border-rose-200 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-2.5 text-rose-600 font-bold text-sm uppercase tracking-wider mb-6 pb-4 border-b border-rose-100">
                <Icon name="XCircleIcon" size={20} />
                Traditional Manual Operations
              </div>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                  <span>
                    Guests wait on telephone hold or stand in lobby check-in queues during rush
                    hours.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                  <span>
                    Night shifts require expensive $180k/yr staffing or risk missed guest calls and
                    requests.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                  <span>
                    Language barriers with international guests lead to order mistakes and review
                    deductions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                  <span>
                    Front desk must manually type guest tickets into PMS, creating delay and dropped
                    tasks.
                  </span>
                </li>
              </ul>
            </div>

            {/* Ownstay Autonomous Method */}
            <div className="bg-white border-2 border-primary/40 rounded-3xl p-8 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-extrabold uppercase px-4 py-1 rounded-bl-xl tracking-wider">
                Autonomous
              </div>
              <div className="flex items-center gap-2.5 text-primary font-bold text-sm uppercase tracking-wider mb-6 pb-4 border-b border-orange-100">
                <Icon name="CheckCircleIcon" size={20} />
                With Ownstay {data.title}
              </div>
              <ul className="space-y-4 text-sm text-slate-800 font-medium">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>
                    Zero-second hold time across Voice AI, WhatsApp, and Web Concierge in 40+
                    languages.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>
                    Autonomous 24/7 night coverage eliminating redundant shifts while boosting guest
                    review scores to 4.9★.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>
                    Real-time native translations with instant cultural adaptation and localized
                    currency upselling.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>
                    Direct 2-way PMS Folio and KDS/Housekeeping dispatch with automated SLA tracking
                    under 350ms.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Everything you need to know about implementing {data.title}.
            </p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-primary font-bold">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Related Product Modules */}
      <section className="py-16 bg-slate-50 border-t border-border/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                Explore Full Platform
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Other Ownstay Core Modules
              </h3>
            </div>
            <Link
              href="/product"
              className="text-sm font-bold text-primary hover:text-orange-700 flex items-center gap-1.5"
            >
              View All Product Capabilities →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                slug: 'ownstay-ai-receptionist',
                title: 'AI Receptionist',
                icon: 'SparklesIcon',
                tag: 'Voice & SIP',
              },
              {
                slug: 'guest-messaging',
                title: 'Guest Messaging',
                icon: 'ChatBubbleLeftRightIcon',
                tag: 'WhatsApp CRM',
              },
              {
                slug: 'guest-request-management',
                title: 'Housekeeping SLA',
                icon: 'CheckBadgeIcon',
                tag: 'Auto-Dispatch',
              },
              {
                slug: 'booking-assistance',
                title: 'Direct Booking AI',
                icon: 'CalendarDaysIcon',
                tag: 'RevPAR Yield',
              },
            ].map((mod, idx) => (
              <Link
                key={idx}
                href={`/product/${mod.slug}`}
                className="bg-white border border-border hover:border-primary/50 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group block"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon name={mod.icon as Parameters<typeof Icon>[0]['name']} size={20} />
                </div>
                <div className="text-xs font-bold text-primary mb-1">{mod.tag}</div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {mod.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
            Zero-Risk Property Deployment
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to deploy {data.title}?
          </h2>
          <p className="text-slate-400 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Join 500+ premier hotels transforming guest operations with Ownstay. Connect your PMS in
            less than 2 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl hover:opacity-90 transition-all shadow-lg"
            >
              Start Free 14-Day Pilot
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-slate-800 text-slate-200 font-semibold text-lg px-7 py-4 rounded-xl hover:bg-slate-700 transition-all border border-slate-700"
            >
              Book Guided Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
