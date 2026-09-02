import Icon from '@/components/ui/AppIcon';

/* PLACEHOLDER TESTIMONIALS — Replace with real testimonials when available */
const testimonials = [
  {
    quote: 'Ownstay has completely changed the way our team handles guest communication. The time savings are significant.',
    name: 'Hotel Manager',
    title: 'General Manager',
    hotel: 'Boutique Hotel — Singapore',
    /* Replace with actual name, title, hotel, and photo when real testimonial is provided */
  },
  {
    quote: "Our guests love how quickly they get answers, and our front desk team can finally focus on the guests in front of them.",
    name: 'Hotel Operations Director',
    title: 'Director of Operations',
    hotel: 'Independent Hotel — Vietnam',
    /* Replace with actual name, title, hotel, and photo when real testimonial is provided */
  },
  {
    quote: 'Rolling out Ownstay across our properties gave us a consistent guest communication standard we could not achieve before.',
    name: 'VP of Guest Experience',
    title: 'VP Guest Experience',
    hotel: 'Hotel Group — International',
    /* Replace with actual name, title, hotel, and photo when real testimonial is provided */
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-background" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Results</p>
          <h2 id="testimonials-heading" className="text-section-xl font-bold text-foreground tracking-tight mb-5">
            Hotels that chose Ownstay.
          </h2>
          <p className="text-xs text-muted-foreground italic">
            Placeholder testimonials — replace with verified customer quotes before publishing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials?.map((t, i) => (
            <div
              key={i}
              className="card-hover bg-card border border-border rounded-2xl p-8 shadow-card flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)]?.map((_, j) => (
                  <Icon key={j} name="StarIcon" size={16} className="text-primary" variant="solid" />
                ))}
              </div>
              <blockquote className="text-base text-foreground leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t?.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                  <Icon name="UserIcon" size={18} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t?.name}</p>
                  <p className="text-xs text-muted-foreground">{t?.title} · {t?.hotel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}