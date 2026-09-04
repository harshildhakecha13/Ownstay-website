import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function ProductCta() {
  return (
    <section className="pt-12 pb-16 px-6 bg-background" aria-label="Product CTA">
      <div className="max-w-4xl mx-auto">
        <div className="bg-foreground rounded-3xl px-8 py-14 md:px-14 md:py-16 text-center relative overflow-hidden shadow-card-hover">
          <div
            className="absolute top-0 right-0 w-72 h-72 blob-primary opacity-50"
            aria-hidden="true"
          />
          <div className="relative z-10 space-y-5">
            <h2 className="text-display-lg font-bold text-white tracking-tight">
              Ready to see Ownstay in action?
            </h2>
            <p className="text-base text-white/60 max-w-md mx-auto leading-relaxed">
              Book a personalized demo and see how Ownstay transforms guest communication at your
              hotel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-base px-7 py-4 rounded-xl hover:opacity-90 transition-all shadow-orange"
              >
                Book a Demo
                <Icon name="ArrowRightIcon" size={18} />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-white/10 text-white font-semibold text-base px-7 py-4 rounded-xl hover:bg-white/15 transition-colors border border-white/20"
              >
                Back to Overview
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
