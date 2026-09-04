'use client';
import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Step {
  number: string;
  icon: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    icon: 'ChatBubbleBottomCenterTextIcon',
    title: 'Guest asks',
    description: 'A guest contacts the hotel through any channel — chat, voice, or WhatsApp.',
  },
  {
    number: '02',
    icon: 'CpuChipIcon',
    title: 'Ownstay understands',
    description: "The AI understands the guest's intent, language, and context in real time.",
  },
  {
    number: '03',
    icon: 'BoltIcon',
    title: 'Ownstay responds',
    description: 'The guest receives an accurate, instant answer — no waiting, no hold music.',
  },
  {
    number: '04',
    icon: 'BellAlertIcon',
    title: 'Hotel team stays informed',
    description: 'Important requests and escalations are routed to the right team automatically.',
  },
];

export default function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.step-item').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-pad bg-background" id="how-it-works" aria-labelledby="hiw-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
            How It Works
          </p>
          <h2
            id="hiw-heading"
            className="text-section-xl font-bold text-foreground tracking-tight mb-5"
          >
            From question to resolution in seconds.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Ownstay handles the full conversation — from the first message to the final resolution.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line — desktop */}
          <div
            className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-border hidden lg:block"
            aria-hidden="true"
          />

          {steps.map((step) => (
            <div
              key={step.number}
              className="step-item relative bg-card border border-border rounded-2xl p-7 shadow-card"
              style={{
                opacity: 1,
                transform: 'translateY(0)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Number badge */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 z-10 relative">
                  <Icon
                    name={step.icon as Parameters<typeof Icon>[0]['name']}
                    size={18}
                    className="text-primary-foreground"
                  />
                </div>
                <span className="text-xs font-bold tracking-widest text-muted-foreground">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
