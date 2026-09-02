import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function FinalCtaSection() {
  return (
    <section className="pt-16 pb-8 px-6 bg-background" id="cta" aria-labelledby="cta-heading">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-foreground rounded-3xl overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center shadow-card-hover">
          {/* Background blobs */}
          <div className="absolute top-0 right-0 w-80 h-80 blob-primary opacity-60 -z-0" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-64 h-64 blob-secondary opacity-40 -z-0" aria-hidden="true" />

          <div className="relative z-10 space-y-6">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-primary">
              Ready to transform guest communication?
            </p>
            <h2 id="cta-heading" className="text-section-xl font-bold text-white tracking-tight">
              Your hotel is open 24/7.{' '}
              <span className="font-display italic text-gradient-orange">
                Your AI receptionist should be too.
              </span>
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
              Give every guest an instant answer with Ownstay.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-base px-8 py-4 rounded-xl hover:opacity-90 transition-all shadow-orange-lg"
              >
                Book a Demo
                <Icon name="ArrowRightIcon" size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-white/15 transition-colors border border-white/20"
              >
                Talk to Our Team
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-white/40">
              {['Available 24/7', 'Built for hospitality', 'Multilingual support']?.map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <Icon name="CheckCircleIcon" size={14} className="text-primary" variant="solid" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}