'use client';
import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'What is Ownstay?',
    answer: 'Ownstay is an AI receptionist built specifically for hotels. It handles guest communication 24/7 — answering questions, processing requests, and routing important matters to your team — so your staff can focus on delivering exceptional hospitality.',
  },
  {
    question: 'How does Ownstay work?',
    answer: 'Ownstay uses AI to understand guest messages across channels like chat, voice, and WhatsApp. It draws from your hotel\'s knowledge base to provide accurate, instant responses. When a request needs human attention, it routes it to the right team member.',
  },
  {
    question: 'Can Ownstay answer hotel-specific questions?',
    answer: 'Yes. Ownstay is trained on your hotel\'s specific information — room types, amenities, policies, restaurant hours, local attractions, and more. The knowledge base is customizable to match your property.',
  },
  {
    question: 'Can guests communicate with Ownstay 24/7?',
    answer: 'Absolutely. Ownstay is available around the clock, every day of the year. Guests receive immediate responses regardless of the time — no hold music, no waiting.',
  },
  {
    question: 'Can Ownstay handle guest requests?',
    answer: 'Yes. Guests can request services like extra towels, late checkout, room cleaning, restaurant reservations, and more. Ownstay logs and routes these requests to the appropriate hotel team.',
  },
  {
    question: 'Does Ownstay support multiple languages?',
    answer: 'Yes. Ownstay supports conversations in multiple languages including English, Vietnamese, Chinese, Japanese, Hindi, and others. Language detection is automatic — guests simply write or speak in their preferred language.',
  },
  {
    question: 'Can Ownstay connect with hotel systems?',
    answer: 'Ownstay is designed to integrate with the hotel technology ecosystem. Please contact our team to discuss specific integrations with your PMS, booking engine, or other hotel systems.',
  },
  {
    question: 'Can guests speak with a human?',
    answer: 'Yes. Ownstay supports human escalation. When a guest needs to speak with a team member, or when Ownstay determines human attention is needed, it seamlessly transfers the conversation with full context.',
  },
  {
    question: 'How long does implementation take?',
    answer: 'Implementation timelines vary based on your property and requirements. Our team works with you to configure Ownstay for your hotel. Book a demo to discuss your specific situation.',
  },
  {
    question: 'How much does Ownstay cost?',
    answer: 'Pricing is based on your property size and requirements. Book a demo to speak with our team and receive a proposal tailored to your hotel.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-pad bg-secondary" id="faq" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">FAQ</p>
          <h2 id="faq-heading" className="text-section-xl font-bold text-foreground tracking-tight">
            Common questions.
          </h2>
        </div>

        <div className="space-y-3" role="list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl border border-border overflow-hidden"
              role="listitem"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-secondary/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-base font-semibold text-foreground">{faq.question}</span>
                <Icon
                  name={openIndex === i ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                  size={18}
                  className={`flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'text-primary' : 'text-muted-foreground'}`}
                />
              </button>
              {openIndex === i && (
                <div
                  id={`faq-answer-${i}`}
                  className="px-6 pb-5"
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}