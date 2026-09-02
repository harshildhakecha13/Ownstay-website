import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

type Benefit = {
  title: string;
  text: string;
  icon: Parameters<typeof Icon>[0]['name'];
};

type ModuleData = {
  title: string;
  description: string;
  heroSubtitle: string;
  icon: Parameters<typeof Icon>[0]['name'];
  benefits: Benefit[];
  howItWorks: string[];
  testimonial: { quote: string; author: string; role: string };
};

const moduleData: Record<string, ModuleData> = {
  'ownstay-ai-receptionist': {
    title: 'Ownstay AI Receptionist',
    description: "Your hotel's intelligent front desk, available 24/7.",
    heroSubtitle: 'Never miss a guest query again. Automate 80% of your routine front desk tasks without losing the personal touch.',
    icon: 'SparklesIcon',
    benefits: [
      { title: 'Zero Wait Times', text: 'Instantly answers guests across voice, chat, and WhatsApp.', icon: 'ClockIcon' },
      { title: 'Hyper-Personalized', text: 'Uses guest history and booking data to tailor every conversation.', icon: 'UserCircleIcon' },
      { title: 'Cost Efficient', text: 'Reduces operational overhead and allows your staff to focus on high-value interactions.', icon: 'CurrencyDollarIcon' },
    ],
    howItWorks: [
      '1. Guest asks a question via chat or call.',
      '2. AI parses intent and checks hotel policies in milliseconds.',
      '3. Delivers a native-fluent, accurate response or seamlessly escalates to a human agent.'
    ],
    testimonial: { quote: "Ownstay AI handled nearly 1,000 queries in our first week alone. Our front desk queue essentially disappeared overnight.", author: 'Sarah Jenkins', role: 'General Manager, The Plaza' }
  },
  'ownstay-platform': {
    title: 'Ownstay Platform',
    description: 'One intelligent AI layer for every guest conversation.',
    heroSubtitle: 'Unify your hotel communications under one robust, scalable, and secure AI infrastructure.',
    icon: 'CubeIcon',
    benefits: [
      { title: 'Centralized Dashboard', text: 'See all channels and performance metrics from a unified view.', icon: 'ComputerDesktopIcon' },
      { title: 'Plug & Play Integration', text: 'Connects directly with your PMS and existing tech stack in minutes.', icon: 'PuzzlePieceIcon' },
      { title: 'Enterprise Security', text: 'Bank-grade encryption protecting all your guest data and history.', icon: 'ShieldCheckIcon' },
    ],
    howItWorks: [
      '1. Connect your PMS (Opera, Mews, Cloudbeds).',
      '2. Configure your properties securely in the platform settings.',
      '3. Deploy AI agents across all communication channels seamlessly.'
    ],
    testimonial: { quote: "The platform layer gave us unprecedented visibility into exactly what our guests need, exactly when they need it.", author: 'Michael Chang', role: 'Director of Operations' }
  },
  'ai-receptionist': {
    title: 'AI Receptionist',
    description: 'Handle routine guest conversations automatically.',
    heroSubtitle: 'Give your staff their time back by letting AI field FAQs, check-in questions, and simple requests.',
    icon: 'ChatBubbleLeftRightIcon',
    benefits: [
      { title: 'Automates FAQs', text: 'Instantly replies to questions regarding wifi, parking, and dining.', icon: 'LightBulbIcon' },
      { title: 'Intelligent Routing', text: 'Brings in human staff only when situations demand complex care.', icon: 'ArrowsRightLeftIcon' },
      { title: 'Brand Consistent', text: 'Responses perfectly align with your hotel brand voice and tone.', icon: 'FaceSmileIcon' },
    ],
    howItWorks: [
      '1. Ingests your hotel documents and website info.',
      '2. Engages guests dynamically when they message.',
      '3. Logs all interactions directly to the guest profile.'
    ],
    testimonial: { quote: "Our front desk is no longer overwhelmed by phone calls and quick queries. It acts as our first line of extraordinary defense.", author: 'Liam Robertson', role: 'Front Desk Manager' }
  },
  'ai-voice-receptionist': {
    title: 'AI Voice Receptionist',
    description: 'Answer hotel calls with intelligent, natural voice AI.',
    heroSubtitle: 'A lifelike, conversational voice AI that never puts a guest on hold and scales instantly to unlimited concurrent calls.',
    icon: 'MicrophoneIcon',
    benefits: [
      { title: 'No More Hold Music', text: 'Answers every call within 3 rings, simultaneously.', icon: 'SpeakerWaveIcon' },
      { title: 'Emotional Nuance', text: 'Detects guest frustration and adapts tone dynamically.', icon: 'HeartIcon' },
      { title: 'Actionable Transcripts', text: 'Every call is transcribed and summarized for easy review.', icon: 'DocumentTextIcon' },
    ],
    howItWorks: [
      '1. Route your overflow or after-hours calls to the AI number.',
      '2. AI greets the caller dynamically based on Caller ID.',
      '3. Handles the request natively or transfers the call to the appropriate department.'
    ],
    testimonial: { quote: "Guests literally thought they were speaking to a human. The voice quality and latency are simply unbelievable.", author: 'Elena Martinez', role: 'VP of Guest Experience' }
  },
  'guest-request-management': {
    title: 'Guest Request Management',
    description: 'Manage everyday guest requests without adding front-desk workload.',
    heroSubtitle: 'From extra towels to in-room dining, automate the lifecycle of every request straight to fulfillment teams.',
    icon: 'ClipboardDocumentListIcon',
    benefits: [
      { title: 'Task Dispatch', text: 'Automatically assigns requests to housekeeping or maintenance.', icon: 'PaperAirplaneIcon' },
      { title: 'Live Progress', text: 'Guests see real-time updates on when their items will arrive.', icon: 'ArrowTrendingUpIcon' },
      { title: 'SLA Tracking', text: 'Monitor response times to guarantee exceptional service standards.', icon: 'ChartBarIcon' },
    ],
    howItWorks: [
      '1. Guest sends request via WhatsApp or SMS.',
      '2. AI parses request and generates a ticket for staff.',
      '3. Staff confirms completion, triggering an automatic success message to the guest.'
    ],
    testimonial: { quote: "We dropped our average request fulfillment time from 22 minutes to 8 minutes. Pure magic.", author: 'David Kim', role: 'Head of Housekeeping' }
  },
  'hotel-knowledge-ai': {
    title: 'Hotel Knowledge AI',
    description: 'Give guests instant answers about your property, amenities and policies.',
    heroSubtitle: 'Transform your scattered PDFs, manuals, and Notion docs into a unified AI brain that knows everything about your property.',
    icon: 'BuildingOffice2Icon',
    benefits: [
      { title: 'Smart Search', text: 'Searches through unstructured data to find precise answers.', icon: 'MagnifyingGlassIcon' },
      { title: 'Easy Updates', text: 'Change parking policy once, and the AI agent instantly learns it.', icon: 'ArrowPathIcon' },
      { title: 'Local Concierge', text: 'Recommends local attractions based on curated staff lists.', icon: 'MapPinIcon' },
    ],
    howItWorks: [
      '1. Upload your training materials via the dashboard.',
      '2. Knowledge AI vectors the data for rapid retrieval.',
      '3. AI references this isolated environment to ensure zero hallucinations.'
    ],
    testimonial: { quote: "It’s like cloning our best concierge and giving them encyclopedic knowledge of the entire city.", author: 'Alice Dupont', role: 'Chief Concierge' }
  },
  'ai-operations': {
    title: 'AI Operations',
    description: 'Automate repetitive hotel communication and workflows.',
    heroSubtitle: 'Behind closed doors, the AI acts as an invisible manager to keep shifts synced, handover smooth, and reports generated.',
    icon: 'CogIcon',
    benefits: [
      { title: 'Shift Handover', text: 'Automatically generates a summary of the days major events for the night crew.', icon: 'ClipboardDocumentIcon' },
      { title: 'Automated Reminders', text: 'Pings staff automatically regarding scheduled cleans or VIP arrivals.', icon: 'BellAlertIcon' },
      { title: 'Data Extraction', text: 'Pulls data from unstructured emails into standardized formats.', icon: 'DocumentDuplicateIcon' },
    ],
    howItWorks: [
      '1. AI listens for trigger events in the PMS or staff comms.',
      '2. Executes automated scripts based on standard operating procedures.',
      '3. Notifies relevant stakeholders upon completion.'
    ],
    testimonial: { quote: "The night audit no longer takes 3 hours. It takes 15 minutes of reviewing AI summaries.", author: 'Tom Harrison', role: 'Night Manager' }
  },
  'conversation-management': {
    title: 'Conversation Management',
    description: 'Keep guest conversations organized, consistent and actionable.',
    heroSubtitle: 'Turn a chaotic inbox into an organized, stress-free workspace for your customer service team.',
    icon: 'InboxStackIcon',
    benefits: [
      { title: 'Unified Inbox', text: 'Email, WhatsApp, SMS, Booking.com messaging all in one view.', icon: 'InboxIcon' },
      { title: 'Sentiment Tagging', text: 'Prioritize angry or distressed guests automatically.', icon: 'TagIcon' },
      { title: 'Smart Triage', text: 'Routes billing to accounting and room issues to the desk.', icon: 'QueueListIcon' },
    ],
    howItWorks: [
      '1. Messages arrive from multiple disparate channels.',
      '2. AI categorizes and labels them before they even show up.',
      '3. Agent clicks into a highly organized, contextualized workflow.'
    ],
    testimonial: { quote: "We basically merged 5 different software solutions into this one inbox.", author: 'Nina Perez', role: 'Reservations Team Lead' }
  },
  'guest-messaging': {
    title: 'Guest Messaging',
    description: 'Let guests connect with your hotel instantly through digital channels.',
    heroSubtitle: 'Meet your guests where they already are. No apps to download, no portals to log into.',
    icon: 'DevicePhoneMobileIcon',
    benefits: [
      { title: 'High Open Rates', text: '98% open rates through WhatsApp and SMS.', icon: 'EyeIcon' },
      { title: 'Rich Media', text: 'Share maps, PDFs, and beautiful photos directly.', icon: 'PhotoIcon' },
      { title: 'Broadcasts', text: 'Send mass updates regarding weather or property events safely.', icon: 'MegaphoneIcon' },
    ],
    howItWorks: [
      '1. Guest checks in and opts into communication.',
      '2. AI initiates a personalized welcome message on their channel of choice.',
      '3. Continuous back-and-forth natively within the app.'
    ],
    testimonial: { quote: "Guests love not having to call us. They just text us for a pillow and we drop it off. It feels luxurious.", author: 'Marcus Johnson', role: 'Guest Experience Manager' }
  },
  '24-7-guest-assistance': {
    title: '24/7 Guest Assistance',
    description: 'Give guests immediate help before, during and after their stay.',
    heroSubtitle: 'Your hospitality never sleeps. Guarantee sub-minute response times at any hour of the day or night.',
    icon: 'ClockIcon',
    benefits: [
      { title: 'Night Auditing Synergy', text: 'Takes the pressure off night auditors handling check-ins.', icon: 'MoonIcon' },
      { title: 'Pre-Arrival Prep', text: 'Helps guests organize tours and transport days before landing.', icon: 'CalendarDaysIcon' },
      { title: 'Feedback Loop', text: 'Intercepts complaints at 2 AM before they become TripAdvisor reviews.', icon: 'ShieldExclamationIcon' },
    ],
    howItWorks: [
      '1. Triggered rules check the local time when a message arrives.',
      '2. Nighttime mode adjusts tone to be extremely delicate and urgent.',
      '3. Escalates to duty managers if a severe threshold is breached.'
    ],
    testimonial: { quote: "Having 24/7 coverage without hiring 3 additional night shifts has been a massive budgetary relief.", author: 'Sophie Laurent', role: 'Owner' }
  },
  'booking-assistance': {
    title: 'Booking Assistance',
    description: 'Help guests with booking-related questions and conversations.',
    heroSubtitle: 'Turn curious website browsers into confirmed direct bookings using persuasive conversational AI.',
    icon: 'CalendarIcon',
    benefits: [
      { title: 'Direct Bookings', text: 'Increases conversion rate by answering doubt-inducing questions.', icon: 'CreditCardIcon' },
      { title: 'Upsell Engine', text: 'Subtly suggests premium rooms or add-on packages during inquiry.', icon: 'ArrowUpCircleIcon' },
      { title: 'Modification Easy', text: 'Handles date changes or cancellations securely.', icon: 'WrenchIcon' },
    ],
    howItWorks: [
      '1. Visitor interacts with the website widget asking for rates.',
      '2. AI queries real-time inventory from your CRS.',
      '3. AI guides user through check-out with a direct link.'
    ],
    testimonial: { quote: "Our direct booking margin jumped 12% in the first quarter of implementing the booking assistant.", author: 'Greg Sanders', role: 'Revenue Manager' }
  },
  'multilingual-ai': {
    title: 'Multilingual AI',
    description: 'Communicate with guests in the languages they prefer.',
    heroSubtitle: 'Break down every language barrier. Offer flawless, grammatically perfect support in over 100 languages.',
    icon: 'GlobeAltIcon',
    benefits: [
      { title: 'Auto Detection', text: 'Instantly identifies the language the guest is typing in.', icon: 'LanguageIcon' },
      { title: 'Cultural Nuance', text: 'Adapts formality levels appropriate for different cultures.', icon: 'UserGroupIcon' },
      { title: 'Real-Time Translation', text: 'Human agents type in English, guest reads in Japanese.', icon: 'ArrowsRightLeftIcon' },
    ],
    howItWorks: [
      '1. Guest initiates conversation in their native language.',
      '2. System tags the conversation logic with the detected ISO code.',
      '3. All AI generated output strictly adheres to that language profile.'
    ],
    testimonial: { quote: "We host an international market, and being able to service our Korean and German guests natively is a massive advantage.", author: 'Chen Wei', role: 'Hotel Director' }
  },
  'in-stay-support': {
    title: 'In-Stay Support',
    description: 'Help guests get information and request services throughout their stay.',
    heroSubtitle: 'A digital butler in the pocket of every single guest currently residing in your property.',
    icon: 'QuestionMarkCircleIcon',
    benefits: [
      { title: 'Frictionless Orders', text: 'Allow guests to order in-room dining directly via chat.', icon: 'ShoppingBagIcon' },
      { title: 'Check-out Flows', text: 'Automate the digital check-out and invoice generation.', icon: 'DocumentCheckIcon' },
      { title: 'Service Prominders', text: 'Pings them proactively asking if the room temperature is okay.', icon: 'ChatBubbleBottomCenterTextIcon' },
    ],
    howItWorks: [
      '1. System knows the guest status is "Checked In".',
      '2. Unlocks specific workflows like Room Service and Spa Booking.',
      '3. Seamlessly bills items to the room folio on the PMS.'
    ],
    testimonial: { quote: "Our F&B room service numbers spiked when we made it as simple as texting 'Can I get a burger to 402?'", author: 'Roberto Dias', role: 'F&B Director' }
  },
};

export async function generateMetadata({ params }: { params: Promise<{ module: string }> }): Promise<Metadata> {
  const { module } = await params;
  const data = moduleData[module];
  if (!data) return { title: 'Module Not Found' };
  
  return {
    title: `${data.title} — Ownstay`,
    description: data.description,
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
      <section className="pt-40 pb-24 bg-background relative overflow-hidden" aria-label={`${data.title} overview`}>
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] blob-primary -z-10 pointer-events-none opacity-50" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-96 h-96 blob-secondary -z-10 pointer-events-none opacity-40" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5 mb-8">
              <Icon name={data.icon} size={16} className="text-primary" variant="solid" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary">Module Spotlight</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-8 leading-[1.1]">
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto font-medium">
              {data.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl hover:opacity-90 transition-all shadow-orange"
              >
                Get Started
                <Icon name="ArrowRightIcon" size={20} />
              </Link>
              <Link
                href="/product"
                className="inline-flex items-center justify-center gap-2 bg-secondary/80 text-foreground font-semibold text-lg px-8 py-4 rounded-xl hover:bg-border transition-colors border border-border"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-card/60 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Why the industry's top hotels rely on {data.title} to drive operational excellence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {data.benefits.map((benefit, i) => (
              <div key={i} className="bg-background border border-border rounded-3xl p-8 hover:shadow-card transition-all duration-300 group">
                <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-secondary text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                  <Icon name={benefit.icon} size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works / Testimonial Split */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* How It Works */}
            <div>
              <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2 mb-6">
                <span className="text-[10px] font-bold tracking-widest uppercase text-foreground">Workflow</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">How it works in practice</h2>
              <div className="space-y-6">
                {data.howItWorks.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-lg text-muted-foreground pt-0.5">{step.replace(/^\d+\.\s*/, '')}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-primary/5 border border-primary/20 rounded-3xl p-10 relative overflow-hidden">
              <Icon name="QuoteIcon" size={120} className="absolute -top-6 -right-6 text-primary/10" variant="solid" />
              <div className="relative z-10">
                <div className="flex gap-1 text-primary mb-6">
                  {[...Array(5)].map((_, i) => <Icon key={i} name="StarIcon" size={20} variant="solid" />)}
                </div>
                <blockquote className="text-2xl text-foreground font-medium mb-8 leading-snug">
                  "{data.testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-bold text-lg text-foreground">{data.testimonial.author}</p>
                  <p className="text-sm text-primary font-medium">{data.testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to deploy {data.title}?</h2>
          <p className="text-xl text-white/70 mb-10">Join 500+ premier hotels already transforming their guest experience with Ownstay.</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl hover:opacity-90 transition-all shadow-orange"
          >
            Start your free trial
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
