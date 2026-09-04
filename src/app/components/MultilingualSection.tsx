'use client';
import { useState, useEffect } from 'react';

interface LanguageExample {
  lang: string;
  flag: string;
  guestMsg: string;
  aiMsg: string;
}

const examples: LanguageExample[] = [
  {
    lang: 'English',
    flag: '🇬🇧',
    guestMsg: 'Is there a swimming pool?',
    aiMsg:
      'Yes! Our outdoor pool is open from 7:00 AM to 10:00 PM on the rooftop. Would you like directions?',
  },
  {
    lang: 'Vietnamese',
    flag: '🇻🇳',
    guestMsg: 'Khách sạn có dịch vụ đưa đón sân bay không?',
    aiMsg:
      'Xin chào! Có, khách sạn cung cấp dịch vụ đưa đón sân bay. Vui lòng cho biết giờ đến của bạn.',
  },
  {
    lang: 'Chinese',
    flag: '🇨🇳',
    guestMsg: '请问早餐几点开始？',
    aiMsg: '您好！早餐从早上7:00到10:30在一楼餐厅供应。需要预订座位吗？',
  },
  {
    lang: 'Japanese',
    flag: '🇯🇵',
    guestMsg: 'チェックアウトの時間を教えてください',
    aiMsg: 'チェックアウトは午前11時です。レイトチェックアウトをご希望の場合はお申し付けください。',
  },
  {
    lang: 'Hindi',
    flag: '🇮🇳',
    guestMsg: 'क्या होटल में जिम है?',
    aiMsg: 'जी हाँ! हमारा फिटनेस सेंटर दूसरी मंजिल पर 24 घंटे उपलब्ध है।',
  },
];

const languages = [
  'English',
  'Vietnamese',
  'Chinese',
  'Japanese',
  'Hindi',
  'Korean',
  'Thai',
  'French',
  'Arabic',
  'Spanish',
];

export default function MultilingualSection() {
  const [activeExample, setActiveExample] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExample((prev) => (prev + 1) % examples.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="section-pad bg-background"
      id="multilingual"
      aria-labelledby="multilingual-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
              Multilingual
            </p>
            <h2
              id="multilingual-heading"
              className="text-section-xl font-bold text-foreground tracking-tight mb-5"
            >
              Speak your guests&apos; language.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Ownstay communicates with guests in their preferred language — automatically. No
              manual translation, no language barriers.
            </p>

            {/* Language chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary border border-border text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                >
                  {lang}
                </span>
              ))}
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary">
                + more
              </span>
            </div>

            {/* Language selector */}
            <div className="flex flex-wrap gap-2">
              {examples.map((ex, i) => (
                <button
                  key={ex.lang}
                  onClick={() => setActiveExample(i)}
                  className={`flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl transition-all ${
                    i === activeExample
                      ? 'bg-primary text-primary-foreground shadow-orange'
                      : 'bg-secondary text-muted-foreground hover:bg-border'
                  }`}
                  aria-pressed={i === activeExample}
                >
                  <span>{ex.flag}</span>
                  {ex.lang}
                </button>
              ))}
            </div>
          </div>

          {/* Right — Conversation preview */}
          <div className="bg-card rounded-3xl border border-border shadow-card-hover overflow-hidden">
            <div className="bg-foreground px-5 py-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-sm">{examples[activeExample].flag}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Ownstay</p>
                <p className="text-xs text-white/60">
                  {examples[activeExample].lang} · AI Receptionist
                </p>
              </div>
            </div>
            <div className="p-6 space-y-4 min-h-[200px]">
              <div className="flex justify-end">
                <div className="bg-foreground text-white px-4 py-3 rounded-2xl rounded-tr-sm text-sm leading-relaxed max-w-[80%]">
                  {examples[activeExample].guestMsg}
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-secondary border border-border text-foreground px-4 py-3 rounded-2xl rounded-tl-sm text-sm leading-relaxed max-w-[80%] shadow-card">
                  {examples[activeExample].aiMsg}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
