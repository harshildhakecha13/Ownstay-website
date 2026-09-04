'use client';
import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ProblemCard {
  icon: string;
  title: string;
  description: string;
  color: string;
  bg: string;
}

const problems: ProblemCard[] = [
  {
    icon: 'PhoneXMarkIcon',
    title: 'Missed calls',
    description:
      'Guests call when your team is busy managing check-ins, housekeeping, or other priorities.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: 'ArrowPathIcon',
    title: 'Repetitive questions',
    description:
      'The same questions about breakfast, parking, and Wi-Fi are asked dozens of times every day.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: 'ClockIcon',
    title: 'Slow responses',
    description:
      'Guests expect immediate answers. Delays create frustration and affect satisfaction scores.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: 'UserGroupIcon',
    title: 'Overworked teams',
    description:
      'Your staff should focus on creating memorable guest experiences, not answering routine queries.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
];

export default function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.problem-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add('animate-fade-up');
                (card as HTMLElement).style.opacity = '1';
              }, i * 120);
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
    <section className="section-pad bg-background" id="problem" aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2
            id="problem-heading"
            className="text-section-xl font-bold text-foreground tracking-tight mb-5"
          >
            Your guests have questions. Your team shouldn&apos;t have to answer the same ones all
            day.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Front desk teams spend hours every day on routine, repetitive interactions — time that
            could be spent on genuine hospitality.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="problem-card card-hover bg-card border border-border rounded-2xl p-7 shadow-card"
              style={{ opacity: 1 }}
            >
              <div
                className={`w-12 h-12 rounded-xl ${problem.bg} flex items-center justify-center mb-5`}
              >
                <Icon
                  name={problem.icon as Parameters<typeof Icon>[0]['name']}
                  size={22}
                  className={problem.color}
                />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
