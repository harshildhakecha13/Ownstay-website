'use client';
import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface JourneyStage {
  stage: string;
  icon: string;
  headline: string;
  description: string;
  example: string;
}

const stages: JourneyStage[] = [
  {
    stage: 'Discover',
    icon: 'MagnifyingGlassIcon',
    headline: 'Before the booking',
    description: 'Guests ask about the property, room types, amenities, and availability.',
    example: '"What facilities do you have near the beach?"',
  },
  {
    stage: 'Book',
    icon: 'CalendarDaysIcon',
    headline: 'During booking',
    description: 'Ownstay assists guests through the booking process with instant answers.',
    example: '"Is breakfast included in the Deluxe room?"',
  },
  {
    stage: 'Check-in',
    icon: 'KeyIcon',
    headline: 'Arrival day',
    description: 'Guests receive arrival information, parking directions, and check-in details.',
    example: '"What time is check-in? Where do I park?"',
  },
  {
    stage: 'Stay',
    icon: 'HomeModernIcon',
    headline: 'During the stay',
    description: 'Guests ask questions and make requests throughout their entire visit.',
    example: '"Can I get extra pillows and a late checkout?"',
  },
  {
    stage: 'Check-out',
    icon: 'ArrowRightOnRectangleIcon',
    headline: 'Departure',
    description: 'Guests get checkout information, bill queries, and transport assistance.',
    example: '"How do I request an invoice for my company?"',
  },
];

export default function GuestJourneySection() {
  const [activeStage, setActiveStage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="section-pad bg-secondary"
      id="guest-journey"
      aria-labelledby="journey-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
            Guest Journey
          </p>
          <h2
            id="journey-heading"
            className="text-section-xl font-bold text-foreground tracking-tight mb-5"
          >
            One AI across the entire guest journey.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            From the first question to the final checkout — Ownstay is present at every touchpoint.
          </p>
        </div>

        {/* Journey Timeline — Desktop */}
        <div className="hidden lg:block">
          {/* Stage tabs */}
          <div className="flex items-center justify-between mb-12 relative">
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-border" aria-hidden="true" />
            <div
              className="absolute top-6 left-0 h-0.5 bg-primary transition-all duration-500"
              style={{ width: `${(activeStage / (stages.length - 1)) * 100}%` }}
              aria-hidden="true"
            />
            {stages.map((stage, i) => (
              <button
                key={stage.stage}
                onClick={() => setActiveStage(i)}
                className="relative flex flex-col items-center gap-3 group z-10"
                aria-label={`View ${stage.stage} stage`}
              >
                <div
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    i <= activeStage
                      ? 'bg-primary border-primary text-primary-foreground shadow-orange'
                      : 'bg-card border-border text-muted-foreground group-hover:border-primary/50'
                  }`}
                >
                  <Icon name={stage.icon as Parameters<typeof Icon>[0]['name']} size={20} />
                </div>
                <span
                  className={`text-sm font-bold tracking-wide transition-colors ${
                    i === activeStage ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {stage.stage}
                </span>
              </button>
            ))}
          </div>

          {/* Active stage content */}
          <div className="bg-card rounded-3xl border border-border shadow-card p-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-primary mb-3 block">
                  {stages[activeStage].stage}
                </span>
                <h3 className="text-display-lg font-bold text-foreground mb-4">
                  {stages[activeStage].headline}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {stages[activeStage].description}
                </p>
              </div>
              <div className="bg-secondary rounded-2xl p-6">
                <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3">
                  Example guest message
                </p>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-border flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="UserIcon" size={16} className="text-muted-foreground" />
                  </div>
                  <div className="bg-foreground text-white px-4 py-3 rounded-2xl rounded-tl-sm text-sm leading-relaxed max-w-xs">
                    {stages[activeStage].example}
                  </div>
                </div>
                <div className="flex items-start gap-3 mt-4 justify-end">
                  <div className="bg-primary/10 text-foreground border border-primary/20 px-4 py-3 rounded-2xl rounded-tr-sm text-sm leading-relaxed max-w-xs">
                    <span className="text-primary font-semibold">Ownstay</span> responds instantly
                    with the right answer.
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon
                      name="SparklesIcon"
                      size={16}
                      className="text-primary-foreground"
                      variant="solid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile — Vertical stacked */}
        <div className="lg:hidden space-y-4">
          {stages.map((stage, i) => (
            <div
              key={stage.stage}
              className={`rounded-2xl border p-6 transition-all duration-300 cursor-pointer ${
                i === activeStage
                  ? 'border-primary bg-primary/5 shadow-card'
                  : 'border-border bg-card'
              }`}
              onClick={() => setActiveStage(i)}
            >
              <div className="flex items-center gap-4 mb-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    i === activeStage
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground'
                  }`}
                >
                  <Icon name={stage.icon as Parameters<typeof Icon>[0]['name']} size={18} />
                </div>
                <div>
                  <p className="font-bold text-foreground">{stage.stage}</p>
                  <p className="text-xs text-muted-foreground">{stage.headline}</p>
                </div>
              </div>
              {i === activeStage && (
                <p className="text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
