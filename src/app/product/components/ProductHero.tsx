import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function ProductHero() {
  return (
    <section id="ai-receptionist" className="pt-32 pb-16 bg-background relative overflow-hidden" aria-label="Product overview">
      {/* Background blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 blob-primary -z-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-80 h-80 blob-secondary -z-10 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Icon name="SparklesIcon" size={14} className="text-primary" variant="solid" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Product</span>
          </div>
          <h1 className="text-hero-xl font-bold text-foreground tracking-tight mb-6">
            Everything Ownstay can do for your hotel.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            From voice calls to WhatsApp messages, guest requests to multilingual conversations — Ownstay handles it all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-base px-7 py-4 rounded-xl hover:opacity-90 transition-all shadow-orange"
            >
              Book a Demo
              <Icon name="ArrowRightIcon" size={18} />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground font-semibold text-base px-7 py-4 rounded-xl hover:bg-border transition-colors border border-border"
            >
              Back to Overview
            </Link>
          </div>
        </div>

        {/* Product capability pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-14">
          {[
            { icon: 'MicrophoneIcon', label: 'Voice AI' },
            { icon: 'ChatBubbleLeftRightIcon', label: 'Guest Chat' },
            { icon: 'DevicePhoneMobileIcon', label: 'WhatsApp' },
            { icon: 'ClipboardDocumentListIcon', label: 'Guest Requests' },
            { icon: 'GlobeAltIcon', label: 'Multilingual' },
            { icon: 'BuildingOffice2Icon', label: 'Hotel Knowledge' },
            { icon: 'PuzzlePieceIcon', label: 'Integrations' },
          ].map((cap) => (
            <div
              key={cap.label}
              className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2.5 shadow-card"
            >
              <Icon name={cap.icon as Parameters<typeof Icon>[0]['name']} size={16} className="text-primary" />
              <span className="text-sm font-semibold text-foreground">{cap.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}