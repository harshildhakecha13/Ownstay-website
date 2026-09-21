'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import OwnstayLogo from '@/components/ui/OwnstayLogo';
import { motion, AnimatePresence } from 'framer-motion';
import heroBg from '@/assets/images/luxury_hotel_hero_1789389909219.jpg';

export default function HeroSection() {
  const [step, setStep] = useState(0);

  // Staggered chat appearance on landing
  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 700);
    const t2 = setTimeout(() => setStep(2), 1800);
    const t3 = setTimeout(() => setStep(3), 2900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-6 overflow-hidden bg-slate-950 text-white"
      aria-label="Hero"
    >
      {/* Background Photography of Luxury Hotel Lobby with Receptionist & Wood Wall */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Luxury Hotel Receptionist at Front Desk"
          fill
          priority
          placeholder="blur"
          referrerPolicy="no-referrer"
          className="object-cover object-[78%_center] lg:object-[82%_center]"
          sizes="100vw"
        />
        {/* Soft Vignette Gradients for Text Readability while keeping Receptionist bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/60 via-40% to-transparent to-75%" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />
      </div>

      {/* Main Content Grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full relative z-10 flex-1 flex items-center py-6 lg:py-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center w-full">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6 text-left">
            <div className="text-xs sm:text-[13px] tracking-[0.2em] font-medium text-slate-300 uppercase">
              AI HOTEL RECEPTIONIST
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-normal tracking-tight text-white leading-[1.08]">
              The next generation
              <br />
              of guest experience,
              <br />
              <span className="text-[#F95A1E] font-normal">powered by AI.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-lg font-normal">
              Ownstay is your AI receptionist — handling guest enquiries, reservations, and daily
              operations, so your team can focus on what matters most.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#F95A1E] hover:bg-[#e04e17] text-white font-medium text-sm transition-all shadow-lg shadow-orange-500/25 group"
              >
                <span>Book a Demo</span>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>

              <Link
                href="/product"
                className="inline-flex items-center gap-3.5 text-white hover:text-orange-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center transition-all group-hover:border-orange-500/40">
                  <Icon name="CubeIcon" size={20} className="text-[#F95A1E]" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-white leading-tight">
                    Explore Product
                  </div>
                  <div className="text-xs text-slate-400 font-normal mt-0.5">
                    Platform &amp; AI Suite
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Middle-Right Column: Floating Glassmorphic Chat Simulator */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-start relative z-10">
            <div className="w-full max-w-[360px] bg-white/95 backdrop-blur-xl rounded-[28px] p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border border-white/40 text-slate-900 flex flex-col space-y-4">
              {/* Header inside Card */}
              <div className="flex items-center gap-2.5 pb-1">
                <OwnstayLogo size={22} />
                <span className="text-sm font-bold text-slate-900 tracking-tight">Ownstay AI</span>
              </div>

              {/* Chat Canvas Section */}
              <div className="space-y-4 min-h-[300px] flex flex-col justify-end">
                <AnimatePresence>
                  {/* Message 1: Guest Inquiry */}
                  {step >= 1 && (
                    <motion.div
                      key="guest-msg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2.5"
                    >
                      <div className="w-7 h-7 rounded-full bg-slate-200 border border-slate-300/80 flex items-center justify-center shrink-0 text-slate-500 mt-1">
                        <Icon name="UserIcon" size={13} variant="solid" />
                      </div>
                      <div className="flex-1 bg-slate-100/90 rounded-2xl rounded-tl-sm p-3.5 text-xs text-slate-800 leading-relaxed font-normal shadow-sm">
                        <p>Hi, do you have any rooms available for tonight?</p>
                        <div className="text-[10px] text-slate-400 text-right mt-1 font-normal">
                          10:24 AM
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Message 2: AI Reply */}
                  {step >= 2 && (
                    <motion.div
                      key="ai-msg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2.5"
                    >
                      <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm mt-1 p-1">
                        <OwnstayLogo size={16} />
                      </div>
                      <div className="flex-1 bg-slate-100/90 rounded-2xl rounded-tl-sm p-3.5 text-xs text-slate-800 leading-relaxed font-normal shadow-sm">
                        <p>
                          Yes! We have 2 rooms available for tonight. Would you like me to check the
                          best rate and book it for you?
                        </p>
                        <div className="text-[10px] text-slate-400 text-right mt-1 font-normal">
                          10:24 AM
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Message 3: Inline Booking card */}
                  {step >= 3 && (
                    <motion.div
                      key="room-card"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', damping: 22 }}
                      className="bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-sm space-y-3"
                    >
                      <div className="flex gap-3.5 items-center">
                        <div className="relative w-18 h-15 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                          <Image
                            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=200&auto=format&fit=crop"
                            alt="Deluxe King Room"
                            width={72}
                            height={60}
                            referrerPolicy="no-referrer"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-slate-900 leading-tight">
                            Deluxe King Room
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="inline-flex items-center gap-1 text-[10px] text-slate-500 font-medium">
                              <Icon name="UserIcon" size={10} /> 2 guests
                            </span>
                            <span className="inline-flex items-center gap-1 text-[10px] text-slate-500 font-medium">
                              <Icon name="ShieldCheckIcon" size={11} className="text-emerald-500" />{' '}
                              Best rate
                            </span>
                          </div>
                          <div className="text-xs font-bold text-slate-900 mt-1">
                            ₹12,500{' '}
                            <span className="text-[10px] text-slate-400 font-normal">/ night</span>
                          </div>
                        </div>
                      </div>

                      <div
                        id="hero-mock-book-now-button"
                        className="w-full py-2.5 rounded-full bg-[#F95A1E] text-white font-medium text-xs text-center select-none cursor-default shadow-sm shadow-orange-500/20"
                        aria-hidden="true"
                      >
                        Book now →
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Docked Bottom Bar with 5 Columns & Subtle Dividers (Matching Screenshot) */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 border-t border-white/10 pt-6 pb-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 items-center">
          {/* 1: Instant guest support */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
              <Icon name="ChatBubbleLeftRightIcon" size={18} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">Instant guest support</p>
              <p className="text-xs text-slate-400 font-normal mt-0.5">24/7, in any language</p>
            </div>
          </div>

          {/* 2: More bookings */}
          <div className="flex items-center gap-3.5 lg:border-l lg:border-white/10 lg:pl-6">
            <div className="w-11 h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
              <Icon name="CalendarDaysIcon" size={18} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">More bookings</p>
              <p className="text-xs text-slate-400 font-normal mt-0.5">
                Higher occupancy & revenue
              </p>
            </div>
          </div>

          {/* 3: Less manual work */}
          <div className="flex items-center gap-3.5 lg:border-l lg:border-white/10 lg:pl-6">
            <div className="w-11 h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
              <Icon name="BoltIcon" size={18} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">Less manual work</p>
              <p className="text-xs text-slate-400 font-normal mt-0.5">For your hotel team</p>
            </div>
          </div>

          {/* 4: Seamless integration */}
          <div className="flex items-center gap-3.5 lg:border-l lg:border-white/10 lg:pl-6">
            <div className="w-11 h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
              <Icon name="ShieldCheckIcon" size={18} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">Seamless integration</p>
              <p className="text-xs text-slate-400 font-normal mt-0.5">
                Works with your existing systems
              </p>
            </div>
          </div>

          {/* 5: Trusted by modern hotels worldwide */}
          <Link
            href="/contact"
            className="flex items-center gap-3 lg:border-l lg:border-white/10 lg:pl-6 group transition-colors py-1 col-span-1 sm:col-span-2 lg:col-span-1"
          >
            <div className="w-[2px] h-7 bg-[#F95A1E] shrink-0 rounded-full" />
            <div className="flex items-center justify-between flex-1">
              <p className="text-xs font-medium text-white group-hover:text-orange-400 transition-colors leading-tight">
                Trusted by modern
                <br />
                hotels worldwide
              </p>
              <span className="text-white group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all text-sm ml-2">
                →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
