const placeholderLogos = [
  'Grand Pacific Hotels',
  'Meridian Resorts',
  'The Skyline Group',
  'Lotus Hospitality',
  'Harbour View Hotels',
  'Pinnacle Stays',
];

export default function SocialProofSection() {
  return (
    <section
      className="py-14 border-y border-border bg-secondary/40"
      id="social-proof"
      aria-label="Trusted by hotels"
    >
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold tracking-[0.4em] uppercase text-muted-foreground mb-10">
          Built for the way modern hotels operate
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {placeholderLogos?.map((name) => (
            <div
              key={name}
              className="opacity-30 hover:opacity-60 transition-opacity duration-300 grayscale"
              aria-label={`${name} — placeholder logo`}
            >
              <span className="text-sm font-bold tracking-wide text-foreground whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8 italic">
          {/* Replace placeholder logos with real hotel partner logos when partnerships are confirmed */}
          Partner logos — placeholder only
        </p>
      </div>
    </section>
  );
}
