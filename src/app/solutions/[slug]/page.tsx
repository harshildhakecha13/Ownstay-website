import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';
import SolutionInteractiveTools from '@/app/solutions/components/SolutionInteractiveTools';

interface SolutionDetail {
  title: string;
  category: string;
  badge: string;
  headline: string;
  subheadline: string;
  heroImage: string;
  icon: string;
  metrics: { value: string; label: string; subtext: string }[];
  challenges: { problem: string; solution: string }[];
  workflowSteps: { step: string; title: string; desc: string; detailBadge: string }[];
  keyCapabilities: { title: string; desc: string; icon: string }[];
  caseStudy: {
    hotelName: string;
    location: string;
    quote: string;
    author: string;
    role: string;
    highlightMetric: string;
    highlightLabel: string;
  };
  pmsIntegrations: string[];
}

const solutionsData: Record<string, SolutionDetail> = {
  'hotel-owners': {
    title: 'Hotel Owners & Asset Managers',
    category: 'Hotel Leadership',
    badge: 'EBITDA & Asset Yield',
    headline: 'Expand Operating Margins Without Adding Headcount',
    subheadline:
      'Transform your cost structure with autonomous front-desk operations, automated rate inquiries, and real-time portfolio revenue intelligence.',
    heroImage: '/images/navigator_platform_3d_1788356165964.jpg',
    icon: 'BuildingOffice2Icon',
    metrics: [
      {
        value: '+$180,000',
        label: 'Annual Labor Savings',
        subtext: 'Per 120-room property via automated night desk',
      },
      {
        value: '+18.4%',
        label: 'Direct Booking RevPAR',
        subtext: 'Captured from autonomous instant rate quotes',
      },
      {
        value: '3.8x',
        label: 'Average ROI',
        subtext: 'Achieved within first 90 days of deployment',
      },
      {
        value: '100%',
        label: 'Audit Trail Parity',
        subtext: 'Real-time reconciliation with PMS folios',
      },
    ],
    challenges: [
      {
        problem:
          'Skyrocketing hospitality staffing costs and high turnover on night & weekend front-desk shifts.',
        solution:
          'Ownstay voice & WhatsApp AI handles 85% of night queries, check-ins, and maintenance dispatches automatically.',
      },
      {
        problem:
          'High OTA commission leakage when prospective guests call or chat with basic room queries.',
        solution:
          'Instant conversational rate quotes directly connected to your booking engine convert leads into direct bookings.',
      },
      {
        problem:
          'Disjointed reporting across multiple properties with delayed financial visibility.',
        solution:
          'Portfolio-level analytics consolidating ADR, guest sentiment, ticket resolution SLAs, and labor efficiency in one dashboard.',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: '2-Way PMS & CRS Hookup',
        desc: 'Connect Opera, Amadeus, or Cloudbeds in under 2 hours with zero disruption to active reservations.',
        detailBadge: 'Real-time 2-Way Sync',
      },
      {
        step: '02',
        title: 'Custom Brand & Policy Ingestion',
        desc: 'AI ingests rate cards, cancellation policies, parking rules, and breakfast hours without hallucinations.',
        detailBadge: 'Zero Hallucination Guardrails',
      },
      {
        step: '03',
        title: 'Autonomous Multi-Channel Coverage',
        desc: 'Voice calls, WhatsApp, SMS, and website chat begin answering guests simultaneously in 40+ languages.',
        detailBadge: '24/7 Sub-second Latency',
      },
      {
        step: '04',
        title: 'Executive Financial Dashboards',
        desc: 'Receive automated Monday morning EBITDA and RevPAR attribution reports directly in your inbox.',
        detailBadge: 'Portfolio Intelligence',
      },
    ],
    keyCapabilities: [
      {
        title: 'Autonomous Night Audit Support',
        desc: 'Field late check-in calls, keycard locker dispatch, and urgent requests without needing an extra night receptionist on site.',
        icon: 'MoonIcon',
      },
      {
        title: 'Direct Booking Rate Converter',
        desc: 'When potential guests ask about rates, the AI quotes real-time availability and provides direct frictionless checkout links.',
        icon: 'CurrencyDollarIcon',
      },
      {
        title: 'Multi-Property Portfolio View',
        desc: 'Compare guest sentiment, response times, and staff productivity across all hotels in your ownership group.',
        icon: 'ChartBarSquareIcon',
      },
      {
        title: 'Bank-Grade Security & SOC2',
        desc: 'Tokenized credit card handling and strict GDPR/CCPA guest privacy compliance ensure zero liability exposure.',
        icon: 'ShieldCheckIcon',
      },
    ],
    caseStudy: {
      hotelName: 'The Highland Heritage Collection',
      location: 'Edinburgh, UK • 4 Properties, 340 Keys',
      quote:
        'Ownstay reduced our third-party OTA commission spend by 14% in the first quarter while completely automating our after-hours guest dispatch.',
      author: 'Alistair Campbell',
      role: 'Managing Director & Asset Owner',
      highlightMetric: '£142,000 Saved',
      highlightLabel: 'Annual Operational Cost Reduction',
    },
    pmsIntegrations: ['Oracle Opera Cloud', 'Amadeus', 'Cloudbeds', 'StayNTouch', 'Apaleo'],
  },

  'general-managers': {
    title: 'General Managers & Operations Directors',
    category: 'Hotel Leadership',
    badge: 'Unified Operations',
    headline: 'Orchestrate Hotel Departments with Instant AI Dispatch',
    subheadline:
      'Eliminate the chaotic walkie-talkie noise. Connect guest requests directly to housekeeping, engineering, and front desk with automated SLA tracking.',
    heroImage: '/images/navigator_platform_3d_1788356165964.jpg',
    icon: 'UserGroupIcon',
    metrics: [
      {
        value: '4.2 min',
        label: 'Average Ticket Resolution',
        subtext: 'Down from 22 minutes industry average',
      },
      {
        value: '99.4%',
        label: 'SLA Adherence',
        subtext: 'Automated escalation before guest complains',
      },
      {
        value: '+24 NPS',
        label: 'Guest Sentiment Score',
        subtext: 'Measurable rise in TripAdvisor & Google reviews',
      },
      {
        value: '0 Missed',
        label: 'Handover Incidents',
        subtext: 'Automated digital shift summary logs',
      },
    ],
    challenges: [
      {
        problem:
          'Front desk staff overwhelmed with telephone calls while physical guests stand waiting in lobby queues.',
        solution:
          'AI Voice & WhatsApp triage handles incoming phone inquiries so front desk staff can give 100% focus to guests in front of them.',
      },
      {
        problem:
          'Guest maintenance tickets getting lost between morning and evening shift handovers.',
        solution:
          'Automated cross-shift handover summaries compile open tickets, VIP arrivals, and pending guest requests.',
      },
      {
        problem: 'Difficulty tracking individual department resolution times and accountability.',
        solution:
          'Live department dispatch boards with timestamped milestones from guest message to staff fulfillment confirmation.',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Guest Expresses Need',
        desc: 'Guest sends a WhatsApp message or calls asking for extra towels, AC repair, or luggage assistance.',
        detailBadge: 'Multi-Modal Voice & Chat',
      },
      {
        step: '02',
        title: 'Intent Parsing & Tagging',
        desc: 'AI instantly identifies department, urgency, room number, and guest loyalty tier.',
        detailBadge: 'Sub-second Intent Analysis',
      },
      {
        step: '03',
        title: 'Smart Department Dispatch',
        desc: 'Ticket dispatched directly to active floor staff mobile device with priority ranking.',
        detailBadge: 'Automated Routing',
      },
      {
        step: '04',
        title: 'Proactive Confirmation',
        desc: 'Upon ticket closure, guest receives a polite automated message ensuring they are completely satisfied.',
        detailBadge: 'Closed-Loop Satisfaction',
      },
    ],
    keyCapabilities: [
      {
        title: 'Automated Shift Handover',
        desc: 'Generates structured shift transition reports highlighting VIP arrivals, open repair tickets, and room moves.',
        icon: 'ClipboardDocumentCheckIcon',
      },
      {
        title: 'Live Operational Telemetry',
        desc: 'Monitor department queues, response speeds, and active room turnover statuses on an interactive live map.',
        icon: 'ComputerDesktopIcon',
      },
      {
        title: 'Smart Escalation Protocol',
        desc: 'If a high-priority VIP ticket exceeds 15 minutes without assignment, the duty manager receives an instant SMS ping.',
        icon: 'BellAlertIcon',
      },
      {
        title: 'Guest Sentiment Early Warning',
        desc: 'Detects frustrated guest language in real-time and flags the conversation for senior GM intervention.',
        icon: 'ExclamationTriangleIcon',
      },
    ],
    caseStudy: {
      hotelName: 'Grand Pacific Luxury Resort',
      location: 'Maui, Hawaii • 420 Keys',
      quote:
        'Our front desk team is finally calm during 3 PM check-in rush. The AI absorbs the phone barrage and dispatches tasks smoothly behind the scenes.',
      author: 'Marcus Vance',
      role: 'General Manager',
      highlightMetric: '78% Less Calls',
      highlightLabel: 'At the physical Front Desk desk',
    },
    pmsIntegrations: ['Oracle Opera', 'Amadeus', 'Infor HMS', 'Agilysys', 'Maestro PMS'],
  },

  'front-desk': {
    title: 'Front Desk & Reception Teams',
    category: 'Operational Teams',
    badge: 'Zero-Wait Front Desk',
    headline: 'Eliminate Check-in Queues & Phone Barrages',
    subheadline:
      'Empower receptionists to deliver true hospitality. Let AI handle routine queries, parking validations, Wi-Fi passwords, and digital keycards.',
    heroImage: '/images/navigator_ai_concierge_3d_1788356177876.jpg',
    icon: 'BoltIcon',
    metrics: [
      {
        value: '0 Wait',
        label: 'Digital Check-in Time',
        subtext: 'Instant mobile passport scanning & key delivery',
      },
      {
        value: '40+ Langs',
        label: 'Real-Time Translation',
        subtext: 'Receptionists communicate smoothly with any guest',
      },
      {
        value: '88%',
        label: 'FAQ Self-Service Rate',
        subtext: 'Wi-Fi, breakfast hours, pool timings, and checkout',
      },
      {
        value: '3 Rings',
        label: 'Max Ring Time',
        subtext: 'Every incoming call answered instantly by Voice AI',
      },
    ],
    challenges: [
      {
        problem:
          'Lobby queues during 3 PM check-in peak leading to frustrated guests and flustered receptionists.',
        solution:
          'Automated pre-arrival registration allows verified guests to bypass the line with digital key issuance.',
      },
      {
        problem:
          'Language barriers with international travelers causing slow service and misunderstandings.',
        solution:
          'Two-way real-time multilingual translation for both WhatsApp and voice calls with native cultural nuance.',
      },
      {
        problem:
          'Constant phone interruptions while trying to assist a guest in front of the counter.',
        solution:
          'AI Voice Receptionist answers overflow calls, resolving routine inquiries or parking policies seamlessly.',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Pre-Arrival Guest Text',
        desc: 'Guest receives a friendly WhatsApp welcome link 24 hours prior to arrival with digital registration options.',
        detailBadge: 'Automated Guest Touchpoint',
      },
      {
        step: '02',
        title: 'ID Verification & Key Generation',
        desc: 'Secure mobile passport scan and instant room keycard issuance synced to lock provider.',
        detailBadge: 'Assa Abloy / Salto Sync',
      },
      {
        step: '03',
        title: 'In-Stay Concierge Assistance',
        desc: 'Guests ask questions directly on WhatsApp: "What time is breakfast?" or "Can I get late checkout?"',
        detailBadge: 'Instant AI Answers',
      },
      {
        step: '04',
        title: 'Frictionless Digital Checkout',
        desc: 'Guest reviews room folio on mobile, confirms payment, and receives receipt PDF instantly.',
        detailBadge: '1-Click Folio Settlement',
      },
    ],
    keyCapabilities: [
      {
        title: 'AI Multilingual Voice Operator',
        desc: 'Answers external and internal extension calls with human-grade warmth and zero latency.',
        icon: 'SpeakerWaveIcon',
      },
      {
        title: 'Digital Key & Smart Lock Hub',
        desc: 'Connects to SALTO, Assa Abloy, and Dormakaba for automated mobile key issuance.',
        icon: 'KeyIcon',
      },
      {
        title: 'Smart Folio Lookup',
        desc: 'Guests can safely ask for their current billing balance or request invoice copies via authenticated WhatsApp.',
        icon: 'DocumentTextIcon',
      },
      {
        title: 'Instant Staff Handover Switch',
        desc: 'A single click transfers an AI conversation to a live receptionist whenever personalized human warmth is needed.',
        icon: 'ArrowsRightLeftIcon',
      },
    ],
    caseStudy: {
      hotelName: 'The Continental Metropole',
      location: 'Zurich, Switzerland • 190 Keys',
      quote:
        'Our international guests from Japan and Brazil are astonished when our WhatsApp assistant converses with them in flawless native grammar.',
      author: 'Elena Rossi',
      role: 'Front Office Manager',
      highlightMetric: '92% Approval',
      highlightLabel: 'Guest Satisfaction for Check-in',
    },
    pmsIntegrations: ['Oracle Opera Cloud', 'Amadeus', 'Cloudbeds', 'Apaleo', 'StayNTouch'],
  },

  housekeeping: {
    title: 'Housekeeping & Turndown Teams',
    category: 'Operational Teams',
    badge: 'Automated Dispatch',
    headline: 'Turn Rooms Faster with Real-Time Smart Queueing',
    subheadline:
      'Dynamically route cleaning teams based on actual guest departures, VIP arrivals, and IoT room occupancy sensors.',
    heroImage: '/images/navigator_platform_3d_1788356165964.jpg',
    icon: 'SparklesIcon',
    metrics: [
      {
        value: '32 min',
        label: 'Faster Room Turnover',
        subtext: 'Prioritizing early arrivals and VIP keys',
      },
      {
        value: '0 Radio',
        label: 'Radio Noise Reduction',
        subtext: 'Cleaners receive clean mobile task notifications',
      },
      {
        value: '100%',
        label: 'Minibar Telemetry',
        subtext: 'Direct restocking logs synced to PMS folio',
      },
      {
        value: '4.8x',
        label: 'Inspection Speed',
        subtext: 'Photo QA checklists with automated approval',
      },
    ],
    challenges: [
      {
        problem:
          'Housekeeping staff knocking on "Do Not Disturb" doors or entering rooms when guests are still sleeping.',
        solution:
          'IoT door lock status and guest mobile preferences update the room queue in real-time.',
      },
      {
        problem:
          'Front desk constantly calling supervisors asking if room 408 is ready for an early check-in.',
        solution:
          'Real-time cleaning status updates sync directly to the PMS so front desk sees "Clean & Inspected" immediately.',
      },
      {
        problem:
          'Guest requests for extra towels or pillows taking 30+ minutes because orders get lost in walkie-talkie chatter.',
        solution:
          'AI dispatches the request to the housekeeper currently nearest that specific floor.',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Guest Checkout Trigger',
        desc: 'When a guest checks out via mobile or front desk, the room is prioritized in the floor attendant app.',
        detailBadge: 'Auto-Triggered Queue',
      },
      {
        step: '02',
        title: 'VIP Arrival Prioritization',
        desc: 'Rooms booked by incoming Diamond/Platinum loyalty members are placed at the top of the cleaning order.',
        detailBadge: 'Smart Priority Sorting',
      },
      {
        step: '03',
        title: 'Attendant Inspection & Photo QA',
        desc: 'Staff marks room cleaned, logs minibar consumption, and submits a quick checklist.',
        detailBadge: 'Quality Assurance Checklist',
      },
      {
        step: '04',
        title: 'Instant PMS Status Update',
        desc: 'PMS room state switches to "Inspected & Available" and unlocks digital keys for the next guest.',
        detailBadge: 'Sub-Second PMS Push',
      },
    ],
    keyCapabilities: [
      {
        title: 'Floor-Level Proximity Dispatch',
        desc: 'Routes guest amenity requests directly to the team member currently on that floor.',
        icon: 'MapPinIcon',
      },
      {
        title: 'Mobile Photo Inspections',
        desc: 'Supervisors can conduct rapid spot-checks with photo verification and one-tap approvals.',
        icon: 'CameraIcon',
      },
      {
        title: 'Minibar & Linen Consumption Tracker',
        desc: 'Attendants log restocked sodas and linens, automatically posting charges to the guest folio.',
        icon: 'ListBulletIcon',
      },
      {
        title: 'DND & Privacy Respect System',
        desc: 'Respects digital "Do Not Disturb" switches and reschedules turndown to the guest requested time.',
        icon: 'NoSymbolIcon',
      },
    ],
    caseStudy: {
      hotelName: 'The Grand Alpine Lodge',
      location: 'Banff, Canada • 260 Keys',
      quote:
        'We reduced our afternoon room wait times to zero. Housekeeping knows exactly which rooms need turnover first without a single phone call.',
      author: 'Brigitte Leroux',
      role: 'Executive Housekeeper',
      highlightMetric: '35 min Saved',
      highlightLabel: 'Per room turnaround cycle',
    },
    pmsIntegrations: ['Oracle Opera', 'Amadeus', 'Cloudbeds', 'RoomRaccoon', 'Maestro'],
  },

  'kitchen-fb': {
    title: 'Kitchen & F&B Operations',
    category: 'Operational Teams',
    badge: 'Live KDS & Room Dining',
    headline: 'Digitize Room Service & In-Stay Dining Orders',
    subheadline:
      'Allow guests to order room dining directly via WhatsApp. Automate kitchen pacing, allergen safety checks, and instant room folio billing.',
    heroImage: '/images/navigator_ai_concierge_3d_1788356177876.jpg',
    icon: 'FireIcon',
    metrics: [
      {
        value: '+28.6%',
        label: 'In-Room Dining Volume',
        subtext: 'Frictionless chat ordering drives higher ticket frequency',
      },
      {
        value: '$46.20',
        label: 'Average Order Value',
        subtext: 'AI dynamically suggests wine pairings & dessert upsells',
      },
      {
        value: '0 Error',
        label: 'Allergen Compliance',
        subtext: 'Rigorous safety filters matching guest dietary profiles',
      },
      {
        value: '18 min',
        label: 'Average Delivery Time',
        subtext: 'Real-time kitchen display pacing & runner dispatch',
      },
    ],
    challenges: [
      {
        problem:
          'Guests hesitant to call room service on the in-room telephone due to unclear pricing or slow answers.',
        solution:
          'Rich digital menu sent directly on WhatsApp with photos, customizable options, and one-tap ordering.',
      },
      {
        problem:
          'Manual telephone order taking often resulting in forgotten condiments or missing dietary allergy flags.',
        solution:
          'AI verifies guest allergies and dietary preferences against ingredient matrices before sending to the kitchen.',
      },
      {
        problem:
          'Kitchen staff overloaded with telephone calls during peak breakfast and late-night dining rushes.',
        solution:
          'Orders print or render directly to the Kitchen Display System (KDS) with automatic room billing.',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Guest Browses WhatsApp Menu',
        desc: 'Guest types "Can I see the room service menu?" or scans the QR card on their bedside table.',
        detailBadge: 'Interactive Visual Menu',
      },
      {
        step: '02',
        title: 'AI Upsell & Allergen Check',
        desc: 'AI recommends sommelier wine pairings and confirms gluten/nut allergy requirements.',
        detailBadge: 'Automated Upselling',
      },
      {
        step: '03',
        title: 'Direct KDS & POS Ticket Injection',
        desc: 'Order appears on the kitchen station display with prep timer countdown and runner assignment.',
        detailBadge: 'Micros / Toast / Simphony Sync',
      },
      {
        step: '04',
        title: 'Delivery Telemetry & Folio Charge',
        desc: 'Runner marks delivery complete; guest gets automated receipt and charge posts to room folio.',
        detailBadge: 'Instant Room Folio Billing',
      },
    ],
    keyCapabilities: [
      {
        title: 'Dynamic Conversational Upselling',
        desc: 'Suggests wine, cocktail, or dessert pairings matching the main course, lifting average ticket size.',
        icon: 'ArrowTrendingUpIcon',
      },
      {
        title: 'Dietary & Allergen Filtering',
        desc: 'Filters dishes for vegan, halal, kosher, gluten-free, and nut allergies instantly.',
        icon: 'ShieldCheckIcon',
      },
      {
        title: 'POS & KDS 2-Way Sync',
        desc: 'Integrates with Micros Simphony, Toast, Lightspeed, and Agilysys InfoGenesis.',
        icon: 'DeviceTabletIcon',
      },
      {
        title: 'Breakfast Time Slot Reservation',
        desc: 'Guests pre-order breakfast and select an exact delivery window to eliminate morning rush bottlenecks.',
        icon: 'ClockIcon',
      },
    ],
    caseStudy: {
      hotelName: 'The Royal Palm Beach Hotel',
      location: 'Miami, Florida • 310 Keys',
      quote:
        'Our late-night room service revenue surged by 38% after deploying Ownstay. Guests love texting for burgers and cocktails directly.',
      author: 'Antoine Beaulieu',
      role: 'Director of Food & Beverage',
      highlightMetric: '+$42,000 / mo',
      highlightLabel: 'Additional F&B In-Room Revenue',
    },
    pmsIntegrations: ['Oracle Simphony', 'Toast POS', 'Lightspeed', 'Agilysys', 'Infor POS'],
  },

  'boutique-hotels': {
    title: 'Boutique & Heritage Hotels',
    category: 'Property Categories',
    badge: 'High-Touch Luxury',
    headline: 'Bespoke Luxury Service That Scales Seamlessly',
    subheadline:
      'Deliver tailored local storytelling, bespoke concierge itineraries, and VIP recognition for 20 to 120 key luxury properties.',
    heroImage: '/images/navigator_resort_3d_1788356199214.jpg',
    icon: 'HomeModernIcon',
    metrics: [
      {
        value: '4.95 / 5',
        label: 'Guest Rating Score',
        subtext: 'Verified boutique guest feedback',
      },
      {
        value: '96%',
        label: 'VIP Preference Match',
        subtext: 'Room fragrance, pillow choice & beverage history',
      },
      {
        value: '24/7',
        label: 'Bespoke Local Concierge',
        subtext: 'Hidden gems & curated neighborhood guides',
      },
      {
        value: '0 Delay',
        label: 'High-Touch Response',
        subtext: 'Sub-second conversational response',
      },
    ],
    challenges: [
      {
        problem:
          'Boutique hotels lack the massive 24/7 concierge teams of 1,000-room luxury chains.',
        solution:
          'Ownstay clones your top concierge knowledge, providing instant bespoke city guides and reservations 24/7.',
      },
      {
        problem: 'Maintaining personalized guest recognition when staff members rotate shifts.',
        solution:
          'Unified guest memory logs preferences (e.g. oat milk in latte, extra feather pillow, room 302 view) permanently.',
      },
      {
        problem: 'High guest expectations for immediate high-touch communication at all hours.',
        solution:
          'Flawless brand-aligned tone with empathetic, refined hospitality copywriting across all channels.',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Curated Boutique Onboarding',
        desc: 'Ingest your hotel unique history, architectural story, art collection, and neighborhood secrets.',
        detailBadge: 'Custom Storytelling Ingestion',
      },
      {
        step: '02',
        title: 'VIP Profile Memory',
        desc: 'Sync past guest stay history and automated preference tags into every AI interaction.',
        detailBadge: 'Deep Guest Profiles',
      },
      {
        step: '03',
        title: 'Autonomous Local Recommender',
        desc: 'Provide guests with secret cocktail bars, artisanal bakeries, and art gallery walking routes.',
        detailBadge: 'Curated Local Knowledge',
      },
      {
        step: '04',
        title: 'Seamless High-End Experience',
        desc: 'Fulfill guest requests with elegance while preserving the intimate human touch of your property.',
        detailBadge: 'Luxury Standard',
      },
    ],
    keyCapabilities: [
      {
        title: 'Neighborhood Insider AI',
        desc: 'Recommends off-the-beaten-path restaurants, walking trails, and art galleries curated by your management.',
        icon: 'MapPinIcon',
      },
      {
        title: 'Tailored Luxury Voice Tone',
        desc: 'Customizable AI persona reflecting your boutique refined, intimate brand personality.',
        icon: 'SparklesIcon',
      },
      {
        title: 'Bespoke Itinerary Generator',
        desc: 'Builds personalized 24-hour or 48-hour city itineraries tailored to guest pacing and preferences.',
        icon: 'CalendarIcon',
      },
      {
        title: 'VIP Arrival Alerts',
        desc: 'Pings general managers the moment high-profile guests interact with the hotel assistant.',
        icon: 'StarIcon',
      },
    ],
    caseStudy: {
      hotelName: 'Villa San Giorgio Boutique',
      location: 'Florence, Italy • 38 Keys',
      quote:
        'Ownstay feels like having our master concierge in the pocket of every guest. It has elevated our luxury boutique reputation immensely.',
      author: 'Matteo Bellini',
      role: 'Proprietor & Host',
      highlightMetric: '4.98 / 5',
      highlightLabel: 'TripAdvisor Concierge Rating',
    },
    pmsIntegrations: ['Amadeus', 'Cloudbeds', 'Apaleo', 'Hotelogix', 'Sirvoy'],
  },

  resorts: {
    title: 'Resorts & Spa Destinations',
    category: 'Property Categories',
    badge: 'Multi-Venue Experience',
    headline: 'Orchestrate Sprawling Multi-Venue Resort Experiences',
    subheadline:
      'Manage cabana rentals, golf tee times, spa treatments, watersports, and multi-venue dining across expansive resort properties.',
    heroImage: '/images/navigator_resort_3d_1788356199214.jpg',
    icon: 'BuildingStorefrontIcon',
    metrics: [
      {
        value: '+$84k',
        label: 'Monthly Ancillary Spend',
        subtext: 'Spa, excursions, and cabana bookings via AI',
      },
      {
        value: '40+ Langs',
        label: 'Native Foreign Language Voice',
        subtext: 'Seamless support for international guests',
      },
      {
        value: '92%',
        label: 'Cabana Utilization',
        subtext: 'Real-time booking and waitlist management',
      },
      {
        value: '100% Geo',
        label: 'Resort Map Guidance',
        subtext: 'Wayfinding across multi-acre properties',
      },
    ],
    challenges: [
      {
        problem:
          'Guests getting lost or confused across multi-acre properties with 6+ restaurants and activity centers.',
        solution:
          'Interactive geo-aware wayfinding guides guests directly to tennis courts, spa pavilions, or private beaches.',
      },
      {
        problem:
          'High friction booking spa treatments, golf tee times, or beach cabanas resulting in empty time slots.',
        solution:
          'Direct conversational booking engine reserves slots and posts deposits directly to the guest folio.',
      },
      {
        problem:
          'Language barriers with global international tourists causing missed activity revenue.',
        solution:
          'Native real-time translation in 40+ languages across both voice calls and instant messaging.',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Pre-Arrival Activity Discovery',
        desc: 'Guests pre-book airport helicopter transfers, scuba excursions, and spa packages before arriving.',
        detailBadge: 'Ancillary Pre-Sales',
      },
      {
        step: '02',
        title: 'Resort Digital Map & Concierge',
        desc: 'Guests ask: "Where is the adults-only infinity pool?" and receive instant walking directions.',
        detailBadge: 'Interactive Wayfinding',
      },
      {
        step: '03',
        title: 'Poolside & Cabana Service',
        desc: 'Scan QR at sun lounger 24 to order mojitos and fresh fruit skewers directly to pool runners.',
        detailBadge: 'Location-Tagged Ordering',
      },
      {
        step: '04',
        title: 'Multi-Venue Dining Scheduling',
        desc: 'AI balances covers between beachfront grill, sushi bar, and steakhouse to prevent overbooking.',
        detailBadge: 'Covers & Pacing Optimization',
      },
    ],
    keyCapabilities: [
      {
        title: 'Spa & Wellness Scheduler',
        desc: 'Syncs with ResortSuite and Book4Time for autonomous massage and treatment bookings.',
        icon: 'SparklesIcon',
      },
      {
        title: 'Poolside & Beach Order Runner',
        desc: 'Pinpoints specific beach umbrella and cabana numbers for rapid F&B food runner delivery.',
        icon: 'SunIcon',
      },
      {
        title: 'Excursions & Activity Booking',
        desc: 'Coordinates jet ski rentals, catamaran cruises, and kids club sessions automatically.',
        icon: 'MapPinIcon',
      },
      {
        title: 'Resort Weather & Event Broadcasts',
        desc: 'Broadcasts weather warnings, sunset yoga schedules, or live music alerts directly to guest phones.',
        icon: 'MegaphoneIcon',
      },
    ],
    caseStudy: {
      hotelName: 'The Azure Sands Ocean Resort',
      location: 'Phuket, Thailand • 580 Keys & Private Villas',
      quote:
        'Ancillary booking revenue jumped 34% within 60 days. Our guests love reserving catamaran sunset sails and spa sessions right over WhatsApp.',
      author: 'Chaiyo Prasert',
      role: 'Resort Director',
      highlightMetric: '+$94,000 / mo',
      highlightLabel: 'Increase in Resort Spa & Activity Bookings',
    },
    pmsIntegrations: [
      'Oracle Opera Cloud',
      'ResortSuite',
      'Amadeus',
      'Infor HMS',
      'Agilysys Visual One',
    ],
  },

  'hotel-chains': {
    title: 'Hotel Chains & Multi-Property Franchises',
    category: 'Property Categories',
    badge: 'Enterprise Cloud Architecture',
    headline: 'Unified Enterprise Hospitality Intelligence',
    subheadline:
      'Manage 10 to 1,000+ properties with tenant isolation, centralized knowledge repositories, custom brand tones, and global reporting.',
    heroImage: '/images/navigator_kpi_3d_1788356216188.jpg',
    icon: 'BuildingOfficeIcon',
    metrics: [
      {
        value: '1,000+',
        label: 'Property Scalability',
        subtext: 'Multi-tenant architecture with sub-second sync',
      },
      {
        value: '99.99%',
        label: 'Enterprise Uptime SLA',
        subtext: 'High-availability global cloud infrastructure',
      },
      {
        value: '100% SSO',
        label: 'SAML / Okta / Azure AD',
        subtext: 'Role-based access control across all chains',
      },
      {
        value: '-45%',
        label: 'Central Reservation Overhead',
        subtext: 'Automated call center inquiry handling',
      },
    ],
    challenges: [
      {
        problem:
          'Inconsistent guest service quality and branding across geographically dispersed franchise properties.',
        solution:
          'Centralized brand AI knowledge repository enforces rigorous brand voice and policy consistency worldwide.',
      },
      {
        problem:
          'High central reservation call center staffing costs handling overflow booking inquiries.',
        solution:
          'Enterprise Voice AI network handles thousands of concurrent phone calls across all property branches.',
      },
      {
        problem: 'Fragmented tech stacks with different PMS systems across acquired hotel brands.',
        solution:
          'Universal API integration adapter connects Opera, Amadeus, Cloudbeds, and custom CRS into one unified data lake.',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Global Enterprise Onboarding',
        desc: 'Deploy standardized brand guardrails while allowing regional properties to customize local amenities.',
        detailBadge: 'Multi-Tenant Master Config',
      },
      {
        step: '02',
        title: 'Enterprise SSO & Role Access',
        desc: 'Connect Okta, Azure AD, or Google Workspace with regional GM, front desk, and corporate analyst roles.',
        detailBadge: 'RBAC & SOC2 Compliance',
      },
      {
        step: '03',
        title: 'Central Call Center AI Overflow',
        desc: 'Incoming reservation calls dynamically route to localized AI numbers with zero guest wait times.',
        detailBadge: 'Unlimited Concurrent Scale',
      },
      {
        step: '04',
        title: 'Corporate Executive Data Lake',
        desc: 'Consolidated real-time RevPAR, guest sentiment, ADR, and ticket resolution benchmarks across all chains.',
        detailBadge: 'Global Portfolio BI',
      },
    ],
    keyCapabilities: [
      {
        title: 'Multi-Brand Voice & Style Isolation',
        desc: 'Run luxury, select-service, and extended-stay brand profiles under one unified corporate cloud.',
        icon: 'SwatchIcon',
      },
      {
        title: 'Centralized Call Center AI Automation',
        desc: 'Eliminates hold times during high-volume weather events or holiday booking seasons.',
        icon: 'PhoneIcon',
      },
      {
        title: 'Global CRS & Parity Engine',
        desc: 'Maintains rate parity across direct web engines, OTAs, and phone reservation queries.',
        icon: 'ArrowPathIcon',
      },
      {
        title: 'Enterprise Security & Audit Vault',
        desc: 'Full audit logging, tokenized PCI-DSS payments, and enterprise data residency guarantees.',
        icon: 'LockClosedIcon',
      },
    ],
    caseStudy: {
      hotelName: 'Apex Hospitality Group',
      location: 'London • Singapore • New York • 28 Properties, 4,200 Keys',
      quote:
        'Ownstay allowed us to centralize guest communication across 28 hotels without compromising on local property charm. It has saved us millions in call center overhead.',
      author: 'David Sterling',
      role: 'Chief Technology Officer',
      highlightMetric: '£2.4M Saved',
      highlightLabel: 'Annual Multi-Property Operating Efficiency',
    },
    pmsIntegrations: [
      'Oracle Opera Enterprise',
      'Amadeus Enterprise',
      'Amadeus CRS',
      'Sabre SynXis',
      'Infor HMS',
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionsData[slug];
  if (!solution) return { title: 'Solution Not Found — Ownstay' };

  return {
    title: `${solution.title} — Hospitality AI Solutions | Ownstay`,
    description: solution.subheadline,
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutionsData[slug];

  if (!solution) {
    notFound();
  }

  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <Icon name={solution.icon} size={16} className="text-primary" />
                <span className="text-xs font-bold tracking-widest uppercase text-primary">
                  {solution.category} • {solution.badge}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 leading-tight">
                {solution.headline}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 font-normal max-w-2xl">
                {solution.subheadline}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-xl hover:opacity-95 transition-all shadow-md"
                >
                  Schedule Tailored Walkthrough
                  <Icon name="ArrowRightIcon" size={18} />
                </Link>
                <Link
                  href="/product/ownstay-platform"
                  className="inline-flex items-center gap-2 bg-secondary text-foreground font-semibold px-6 py-3.5 rounded-xl hover:bg-slate-200 transition-all border border-border"
                >
                  <Icon name="DocumentTextIcon" size={18} />
                  Explore Product Platform
                </Link>
              </div>

              {/* Supported PMS Tags */}
              <div className="mt-10 pt-6 border-t border-border/60">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Pre-Certified 2-Way Integrations
                </div>
                <div className="flex flex-wrap gap-2">
                  {solution.pmsIntegrations.map((pms, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 rounded-lg"
                    >
                      {pms}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-white p-3">
                <div className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden">
                  <Image
                    src={solution.heroImage}
                    alt={solution.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                    <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-2xl p-5 shadow-xl">
                      <div className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">
                        Verified Benchmark
                      </div>
                      <div className="text-3xl font-extrabold text-white mb-1">
                        {solution.metrics[0]?.value}
                      </div>
                      <div className="text-sm text-slate-300">
                        {solution.metrics[0]?.label} — {solution.metrics[0]?.subtext}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Metrics Row */}
      <section className="py-12 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {solution.metrics.map((metric, i) => (
              <div key={i} className="border-l border-slate-800 pl-6 space-y-1">
                <div className="text-3xl md:text-4xl font-extrabold text-orange-400">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-white">{metric.label}</div>
                <div className="text-xs text-slate-400">{metric.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges vs AI Solutions Matrix */}
      <section className="py-20 bg-card/50 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-widest mb-4">
              Strategic Transformation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              How Ownstay solves the industry&apos;s toughest operational hurdles.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Replacing legacy bottlenecks with continuous, autonomous hospitality intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solution.challenges.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-2xl p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider mb-3">
                    <Icon name="ExclamationCircleIcon" size={18} />
                    Traditional Bottleneck
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
                    &ldquo;{item.problem}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 bg-orange-50/50 -mx-7 -mb-7 p-7 rounded-b-2xl">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-2">
                    <Icon name="CheckCircleIcon" size={18} />
                    Ownstay AI Solution
                  </div>
                  <p className="text-slate-800 text-sm leading-relaxed font-semibold">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Workflow Lifecycle */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-widest mb-3">
                Execution Architecture
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                The {solution.title} Workflow
              </h2>
            </div>
            <Link
              href="/product/ownstay-platform"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-orange-700 transition-colors"
            >
              Explore Product Platform →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-white border border-border rounded-2xl p-6 shadow-sm hover:border-primary/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-primary/30">{step.step}</span>
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {step.detailBadge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities Grid */}
      <section className="py-20 bg-slate-50 border-t border-border/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Engineered for Precision & Compliance
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Enterprise-grade reliability with guaranteed data privacy and PMS isolation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.keyCapabilities.map((cap, i) => (
              <div key={i} className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-primary flex items-center justify-center mb-5">
                  <Icon name={cap.icon} size={24} />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{cap.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Property ROI Calculator & Live Scenario Player */}
      <section className="py-20 bg-background border-t border-border/60">
        <div className="max-w-7xl mx-auto px-6">
          <SolutionInteractiveTools
            solutionTitle={solution.title}
            category={solution.category}
            badge={solution.badge}
          />
        </div>
      </section>

      {/* Verified Hotel Case Study Quote */}
      <section className="py-20 bg-slate-50 border-t border-border/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-orange-50 via-amber-50/40 to-white border border-orange-200/70 rounded-3xl p-8 md:p-12 relative shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
              <div className="space-y-4 max-w-2xl">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="StarIcon" size={18} variant="solid" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl font-semibold text-slate-900 leading-snug">
                  &ldquo;{solution.caseStudy.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-bold text-base text-slate-900">
                    {solution.caseStudy.author}
                  </div>
                  <div className="text-xs font-semibold text-primary">
                    {solution.caseStudy.role} • {solution.caseStudy.hotelName}
                  </div>
                  <div className="text-xs text-slate-500">{solution.caseStudy.location}</div>
                </div>
              </div>

              <div className="bg-white border border-orange-200 rounded-2xl p-6 text-center shadow-md min-w-[220px]">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                  {solution.caseStudy.highlightLabel}
                </div>
                <div className="text-2xl md:text-3xl font-black text-primary">
                  {solution.caseStudy.highlightMetric}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Hospitality Solutions Directory */}
      <section className="py-16 bg-background border-t border-border/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                Explore Solutions
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Hospitality Configurations for Other Roles &amp; Scales
              </h3>
            </div>
            <Link
              href="/solutions"
              className="text-sm font-bold text-primary hover:text-orange-700 flex items-center gap-1.5"
            >
              View All Solutions Matrix →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                slug: 'hotel-owners',
                title: 'Hotel Owners & Asset Managers',
                badge: 'ROI & EBITDA',
                icon: 'BuildingOffice2Icon',
              },
              {
                slug: 'front-desk',
                title: 'Front Desk & Reception',
                badge: 'Zero-Wait Check-in',
                icon: 'BoltIcon',
              },
              {
                slug: 'boutique-hotels',
                title: 'Boutique & Heritage',
                badge: 'High-Touch Luxury',
                icon: 'HomeModernIcon',
              },
              {
                slug: 'hotel-chains',
                title: 'Enterprise Hotel Chains',
                badge: 'Multi-Property Sync',
                icon: 'BuildingOfficeIcon',
              },
            ].map((sol, idx) => (
              <Link
                key={idx}
                href={`/solutions/${sol.slug}`}
                className="bg-white border border-border hover:border-primary/50 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group block"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon name={sol.icon as Parameters<typeof Icon>[0]['name']} size={20} />
                </div>
                <div className="text-xs font-bold text-primary mb-1">{sol.badge}</div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {sol.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Pilot CTA */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
            14-Day Zero-Risk Property Pilot
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to implement Ownstay for {solution.title}?
          </h2>
          <p className="text-slate-400 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Book a 20-minute operational walkthrough. We will connect your PMS sandbox and show you
            live guest automation for your property type.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-orange-600 transition-all shadow-lg text-lg"
            >
              Start Free 14-Day Pilot
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-slate-800 text-slate-200 font-semibold px-7 py-4 rounded-xl hover:bg-slate-700 transition-all border border-slate-700 text-lg"
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
