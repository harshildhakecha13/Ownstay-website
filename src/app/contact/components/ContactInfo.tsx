import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const benefits = [
  {
    icon: 'PlayCircleIcon',
    title: 'Live product walkthrough',
    description: 'See Ownstay handle real hotel guest conversations in a live demo.',
  },
  {
    icon: 'AdjustmentsHorizontalIcon',
    title: 'Tailored to your property',
    description: "We'll show you how Ownstay works specifically for your hotel type and size.",
  },
  {
    icon: 'ChatBubbleLeftRightIcon',
    title: 'Ask anything',
    description: 'Our team answers every question about features, integrations, and pricing.',
  },
  {
    icon: 'CalendarDaysIcon',
    title: 'Flexible scheduling',
    description: 'Book a time that works for you — including evenings and weekends.',
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6 lg:sticky lg:top-28">
      {/* What to expect */}
      <div className="bg-secondary rounded-3xl border border-border p-8">
        <h2 className="text-lg font-bold text-foreground mb-6">What to expect</h2>
        <div className="space-y-5">
          {benefits.map((b) => (
            <div key={b.title} className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name={b.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">{b.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-foreground rounded-3xl p-8 space-y-6">
        <h3 className="text-base font-bold text-white">Ownstay at a glance</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: '24/7', label: 'Availability' },
            { value: 'Instant', label: 'Guest response' },
            { value: '10+', label: 'Languages' },
            { value: 'Every stay', label: 'Consistent service' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <p className="text-xl font-bold text-primary leading-none mb-1">{stat.value}</p>
              <p className="text-xs text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact alternative */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <p className="text-sm font-semibold text-foreground mb-2">Prefer to reach out directly?</p>
        <Link
          href="mailto:hello@ownthum.ai"
          className="text-sm text-primary hover:underline font-medium"
        >
          hello@ownthum.ai
        </Link>
      </div>
    </div>
  );
}