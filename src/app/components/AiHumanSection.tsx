import Icon from '@/components/ui/AppIcon';

export default function AiHumanSection() {
  return (
    <section className="section-pad bg-foreground" id="ai-human" aria-labelledby="ai-human-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Philosophy</p>
            <h2 id="ai-human-heading" className="text-section-xl font-bold text-white tracking-tight mb-5">
              AI handles the repetitive.{' '}
              <span className="font-display italic text-gradient-orange">
                Your team handles the exceptional.
              </span>
            </h2>
            <p className="text-base text-white/60 leading-relaxed max-w-lg">
              Ownstay takes care of routine conversations so your team can spend more time creating memorable guest experiences. The AI and your staff work together — not against each other.
            </p>
          </div>

          {/* Right — Split visual */}
          <div className="grid grid-cols-2 gap-4">
            {/* AI side */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Icon name="SparklesIcon" size={20} className="text-primary" variant="solid" />
              </div>
              <h3 className="text-base font-bold text-white">Ownstay handles</h3>
              <ul className="space-y-2.5">
                {[
                  'Routine questions',
                  'Amenity information',
                  'Guest requests',
                  'Check-in details',
                  'Restaurant hours',
                  'Parking directions',
                ]?.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                    <Icon name="CheckIcon" size={14} className="text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Human side */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Icon name="HeartIcon" size={20} className="text-white" />
              </div>
              <h3 className="text-base font-bold text-white">Your team focuses on</h3>
              <ul className="space-y-2.5">
                {[
                  'Warm welcomes',
                  'Complex requests',
                  'Guest relationships',
                  'Special occasions',
                  'Problem resolution',
                  'Memorable moments',
                ]?.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                    <Icon name="CheckIcon" size={14} className="text-white/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom message */}
            <div className="col-span-2 bg-primary/10 border border-primary/20 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <Icon name="ArrowsRightLeftIcon" size={18} className="text-primary-foreground" />
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                When a guest needs human attention, Ownstay escalates seamlessly to your team — with full context.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}