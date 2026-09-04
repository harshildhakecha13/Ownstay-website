'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { motion } from 'framer-motion';

interface ChatMessage {
  id: number;
  from: 'guest' | 'ai';
  text: string;
  delay: number;
}

const chatMessages: ChatMessage[] = [
  { id: 1, from: 'guest', text: 'Hi, do you have a gym?', delay: 800 },
  {
    id: 2,
    from: 'ai',
    text: 'Yes! Our fitness center is open 24/7 on the 2nd floor. Would you like directions?',
    delay: 2000,
  },
  { id: 3, from: 'guest', text: 'Can I request late checkout?', delay: 4000 },
  {
    id: 4,
    from: 'ai',
    text: 'Of course — I can help with that. What time would you prefer?',
    delay: 5400,
  },
];

export default function HeroSection() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const runChat = () => {
      setVisibleMessages([]);
      setShowTyping(false);

      chatMessages.forEach((msg) => {
        if (msg.from === 'ai') {
          const typingTimeout = setTimeout(() => {
            setShowTyping(true);
          }, msg.delay - 600);
          timeouts.push(typingTimeout);
        }
        const t = setTimeout(() => {
          setShowTyping(false);
          setVisibleMessages((prev) => [...prev, msg.id]);
        }, msg.delay);
        timeouts.push(t);
      });

      const restartTimeout = setTimeout(() => {
        runChat();
      }, 9000);
      timeouts.push(restartTimeout);
    };

    runChat();
    return () => timeouts.forEach(clearTimeout);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-background"
      aria-label="Hero"
    >
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] blob-primary -z-10 pointer-events-none opacity-50"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] blob-secondary -z-10 pointer-events-none opacity-40"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 right-0 bottom-0 noise-overlay -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-6 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2"
            >
              <span
                className="w-2 h-2 rounded-full bg-primary animate-pulse-ring"
                aria-hidden="true"
              />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                AI for Hotels
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.05]"
            >
              Meet the AI receptionist{' '}
              <span className="font-display italic text-gradient-orange block mt-2">
                built for modern hotels.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg font-medium"
            >
              Ownstay answers guest questions, handles requests, and helps your team deliver better
              service — 24/7.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-lg px-8 py-4 rounded-xl hover:opacity-90 transition-all shadow-orange-lg"
              >
                Book a Demo
                <Icon name="ArrowRightIcon" size={18} />
              </Link>
              <Link
                href="/product"
                className="inline-flex items-center justify-center gap-2 bg-secondary/80 text-foreground font-semibold text-lg px-8 py-4 rounded-xl hover:bg-border/80 transition-colors border border-border backdrop-blur-sm"
              >
                <Icon name="PlayCircleIcon" size={18} className="text-primary" />
                See Ownstay in Action
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground pt-4 border-t border-border/50"
            >
              {['Available 24/7', 'Built for hospitality', 'Multilingual'].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <Icon name="CheckCircleIcon" size={16} className="text-primary" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <div className="relative animate-float">
              <div className="bg-card/80 backdrop-blur-md rounded-3xl shadow-[0_20px_60px_rgba(31,31,29,0.12)] border border-white/20 overflow-hidden max-w-md mx-auto lg:ml-auto">
                <div className="bg-foreground px-5 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon
                      name="SparklesIcon"
                      size={18}
                      className="text-primary-foreground"
                      variant="solid"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white leading-none">Ownstay</p>
                    <p className="text-xs text-white/60 mt-0.5">
                      AI Receptionist · Grand Pacific Hotel
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400" aria-hidden="true" />
                    <span className="text-xs text-white/60">Online</span>
                  </div>
                </div>

                <div className="px-5 py-5 space-y-4 min-h-[290px] bg-secondary/30">
                  {chatMessages.map((msg) => {
                    if (!visibleMessages.includes(msg.id)) return null;
                    return (
                      <div
                        key={msg.id}
                        className={`flex ${msg.from === 'guest' ? 'justify-end' : 'justify-start'} animate-fade-up`}
                      >
                        {msg.from === 'ai' && (
                          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center mr-2 flex-shrink-0 mt-1 shadow-sm">
                            <Icon
                              name="SparklesIcon"
                              size={13}
                              className="text-primary-foreground"
                              variant="solid"
                            />
                          </div>
                        )}
                        <div
                          className={`max-w-[78%] px-4 py-3 rounded-2xl text-sm font-medium leading-relaxed ${
                            msg.from === 'guest'
                              ? 'bg-foreground text-white rounded-tr-sm shadow-md'
                              : 'bg-white text-foreground border border-black/5 rounded-tl-sm shadow-md'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    );
                  })}

                  {showTyping && (
                    <div className="flex justify-start animate-fade-up">
                      <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center mr-2 flex-shrink-0 mt-1 shadow-sm">
                        <Icon
                          name="SparklesIcon"
                          size={13}
                          className="text-primary-foreground"
                          variant="solid"
                        />
                      </div>
                      <div className="bg-white border border-black/5 rounded-2xl rounded-tl-sm px-4 py-3 shadow-md">
                        <div className="flex gap-1.5 items-center h-4">
                          <span
                            className="w-2 h-2 rounded-full bg-muted-foreground/60 animate-typing"
                            style={{ animationDelay: '0ms' }}
                          />
                          <span
                            className="w-2 h-2 rounded-full bg-muted-foreground/60 animate-typing"
                            style={{ animationDelay: '200ms' }}
                          />
                          <span
                            className="w-2 h-2 rounded-full bg-muted-foreground/60 animate-typing"
                            style={{ animationDelay: '400ms' }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="px-5 py-4 border-t border-border bg-white">
                  <div className="flex items-center gap-3 bg-secondary/60 border border-black/5 rounded-xl px-4 py-3">
                    <Icon
                      name="ChatBubbleLeftRightIcon"
                      size={18}
                      className="text-muted-foreground flex-shrink-0"
                    />
                    <span className="text-sm text-muted-foreground flex-1">Type a message...</span>
                    <button
                      className="w-8 h-8 rounded-lg bg-primary hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center flex-shrink-0"
                      aria-label="Send message"
                    >
                      <Icon
                        name="PaperAirplaneIcon"
                        size={14}
                        className="text-primary-foreground"
                        variant="solid"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute -left-8 top-1/3 bg-white/90 backdrop-blur-lg border border-white/40 rounded-2xl px-5 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hidden lg:flex items-center gap-3 animate-float-delayed">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shadow-sm">
                  <Icon name="ClockIcon" size={20} className="text-green-600" variant="solid" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground leading-none">24/7 Agent</p>
                  <p className="text-[11px] font-medium text-muted-foreground mt-1">
                    Always available
                  </p>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-white/90 backdrop-blur-lg border border-white/40 rounded-2xl px-5 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hidden lg:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shadow-sm">
                  <Icon name="GlobeAltIcon" size={20} className="text-primary" variant="solid" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground leading-none">Multilingual</p>
                  <p className="text-[11px] font-medium text-muted-foreground mt-1">
                    100+ languages
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
