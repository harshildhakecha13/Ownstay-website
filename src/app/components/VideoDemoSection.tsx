'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import adImageNight from '@/assets/images/ai_hotel_ad_night_concierge_1788850184634.jpg';
import adImageMultilingual from '@/assets/images/ai_hotel_ad_multilingual_1788850208932.jpg';
import adImageUpsell from '@/assets/images/ai_hotel_ad_upsell_1788850225928.jpg';

// Creative 1-Minute AI Commercial Ads
const CREATIVE_ADS = [
  {
    id: 'ad-1',
    badge: '🔥 60s Signature Spot',
    title: 'The 3 AM Room Service Miracle',
    subtitle: 'Zero wait times. Instant WhatsApp AI dispatch straight to the Kitchen KDS.',
    metric: '9.4s Avg Response',
    duration: '0:60',
    image: adImageNight,
    narration: [
      {
        time: '0:05',
        voice: 'Guest (Suite 402)',
        text: '"Hi! Can I get late checkout and hot chocolate sent to my room right now?"',
      },
      {
        time: '0:18',
        voice: 'Ownstay Voice AI',
        text: '"Certainly! Late checkout approved until 1:30 PM. Your hot chocolate is being prepared now!"',
      },
      {
        time: '0:35',
        voice: 'Opera PMS Sync',
        text: '⚡ Ticket #402 Auto-Assigned to Kitchen & Guest Folio Updated in Opera Cloud.',
      },
    ],
  },
  {
    id: 'ad-2',
    badge: '🌍 Global Guest Commercial',
    title: '40+ Languages, Zero Barrier',
    subtitle: 'Fluently communicate with French, Japanese, Spanish & Arabic guests on autopilot.',
    metric: '100% Guest Satisfaction',
    duration: '0:60',
    image: adImageMultilingual,
    narration: [
      {
        time: '0:08',
        voice: 'French Guest',
        text: '"Bonjour, puis-je réserver un taxi pour l’aéroport demain à 7h?"',
      },
      {
        time: '0:22',
        voice: 'Ownstay Multilingual AI',
        text: '"Bonjour! Taxi confirmé pour 7h00. Votre chauffeur vous attendra dans le hall. 🚕"',
      },
      {
        time: '0:42',
        voice: 'Concierge Automation',
        text: '✅ Airport Shuttle Dispatched & €35 Billed directly to Guest Room Folio.',
      },
    ],
  },
  {
    id: 'ad-3',
    badge: '💰 Revenue Surge Spot',
    title: 'Automated RevPAR & Upsells',
    subtitle: 'Autonomous AI offers spa upgrades, early check-in, & dinner reservations automatically.',
    metric: '+42% Direct Upsell RevPAR',
    duration: '0:60',
    image: adImageUpsell,
    narration: [
      {
        time: '0:07',
        voice: 'Guest Enquiry',
        text: '"Is the rooftop infinity spa open this evening?"',
      },
      {
        time: '0:25',
        voice: 'Ownstay Upsell AI',
        text: '"Yes! Open till 10 PM. Would you like our 8 PM Sunset Massage package at 20% off?"',
      },
      {
        time: '0:48',
        voice: 'Revenue Maximizer',
        text: '🎉 Guest accepted! +₹2,400 added directly to room revenue.',
      },
    ],
  },
];

export default function VideoDemoSection() {
  const [selectedAdIndex, setSelectedAdIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [adProgress, setAdProgress] = useState(0);
  const [currentCaptionIdx, setCurrentCaptionIdx] = useState(0);

  const currentAd = CREATIVE_ADS[selectedAdIndex];

  // 60-Second Ad Video playback simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setAdProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          const next = prev + 1.66; // ~60 seconds total
          if (next > 60) setCurrentCaptionIdx(2);
          else if (next > 25) setCurrentCaptionIdx(1);
          else setCurrentCaptionIdx(0);
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayAd = () => {
    setAdProgress(0);
    setCurrentCaptionIdx(0);
    setIsPlaying(true);
  };

  return (
    <section className="py-20 bg-[#0D0D11] relative overflow-hidden border-y border-white/10">
      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#FF6B35] opacity-10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-amber-500 opacity-5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Ad Campaign Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B35]/15 border border-[#FF6B35]/30 text-[#FF6B35] text-xs font-extrabold tracking-widest uppercase mb-4 shadow-sm">
            <span>⚡ AI-Generated Commercial Ads Showcase</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
            See Ownstay Win Hotel Guests in <span className="text-[#FF6B35]">Under 60 Seconds</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
            High-converting 60-second AI video commercials demonstrating real-time guest communication, multilingual translation, and direct revenue upsells.
          </p>
        </div>

        {/* Ad Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {CREATIVE_ADS.map((ad, idx) => (
            <button
              key={ad.id}
              onClick={() => {
                setSelectedAdIndex(idx);
                setIsPlaying(false);
                setAdProgress(0);
                setCurrentCaptionIdx(0);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-2 ${
                selectedAdIndex === idx
                  ? 'bg-[#FF6B35] text-white border-[#FF6B35] shadow-lg shadow-[#FF6B35]/25 scale-102'
                  : 'bg-slate-900/80 text-slate-300 border-white/10 hover:border-white/20 hover:bg-slate-800'
              }`}
            >
              <span>{ad.badge.split(' ')[0]}</span>
              <span>{ad.title}</span>
              <span className="text-[10px] opacity-75 font-mono bg-black/30 px-1.5 py-0.5 rounded">
                00:60
              </span>
            </button>
          ))}
        </div>

        {/* AI Video Commercial Player Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-950">
          {/* Top Ad Status Bar */}
          <div className="bg-slate-900/95 border-b border-white/10 px-5 py-3 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B35] animate-ping" />
              <span className="font-extrabold text-white uppercase tracking-wider text-[11px]">
                {currentAd.badge}
              </span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-slate-400 hidden sm:inline">{currentAd.title}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#FF6B35] font-extrabold bg-[#FF6B35]/10 px-2.5 py-1 rounded-lg border border-[#FF6B35]/20">
                {currentAd.metric}
              </span>
              <span className="font-mono text-slate-300 text-xs font-bold">
                {isPlaying ? `${Math.floor(adProgress)}s / 60s` : '00:60 AI AD'}
              </span>
            </div>
          </div>

          {/* AI Cinematic Ad Screen */}
          <div className="relative w-full aspect-video max-h-[500px] overflow-hidden group bg-black flex items-center justify-center">
            {/* Background AI Commercial Artwork */}
            <Image
              src={currentAd.image}
              alt={currentAd.title}
              fill
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover transition-transform duration-1000 ${
                isPlaying ? 'scale-105 filter brightness-90' : 'filter brightness-75'
              }`}
            />

            {/* Dark Gradient Overlay for Cinematic Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/30 pointer-events-none" />

            {/* Dynamic AI Audio Waveform Visualizer (When playing) */}
            {isPlaying && (
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 bg-slate-900/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex items-end gap-1 h-5">
                    <span className="w-1 bg-[#FF6B35] h-full animate-bounce rounded-full" />
                    <span className="w-1 bg-amber-400 h-2/3 animate-bounce rounded-full delay-75" />
                    <span className="w-1 bg-[#FF6B35] h-4/5 animate-bounce rounded-full delay-150" />
                    <span className="w-1 bg-emerald-400 h-1/2 animate-bounce rounded-full delay-100" />
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    AI Commercial Voiceover Active
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                  LIVE AI SPEECH
                </span>
              </div>
            )}

            {/* Captions & Subtitles Bar on Video */}
            <div className="absolute bottom-16 left-4 right-4 z-20 max-w-2xl mx-auto text-center">
              <div className="inline-block bg-slate-900/90 backdrop-blur-md border border-white/20 text-white px-5 py-3 rounded-2xl shadow-2xl">
                <div className="text-[10px] font-extrabold text-[#FF6B35] uppercase tracking-widest mb-1">
                  {currentAd.narration[currentCaptionIdx].voice}
                </div>
                <p className="text-xs sm:text-sm font-semibold leading-snug">
                  {currentAd.narration[currentCaptionIdx].text}
                </p>
              </div>
            </div>

            {/* Play Button Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-30 gap-4 bg-slate-950/40 backdrop-blur-xs">
                <button
                  onClick={handlePlayAd}
                  className="w-20 h-20 rounded-full bg-[#FF6B35] hover:bg-[#e55a25] text-white flex items-center justify-center shadow-2xl shadow-[#FF6B35]/60 hover:scale-110 active:scale-95 transition-all"
                  title="Play AI Commercial Ad (60s)"
                >
                  <svg className="w-10 h-10 ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <div className="text-center">
                  <div className="text-white font-black text-lg drop-shadow-md">
                    Play 60s AI Commercial: &quot;{currentAd.title}&quot;
                  </div>
                  <div className="text-slate-300 text-xs mt-1">
                    Click to start high-impact AI video commercial with voiceover
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Ad Player Controls */}
            <div className="absolute bottom-0 left-0 right-0 z-30 bg-slate-950/90 border-t border-white/10 px-4 py-2.5 flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 text-white hover:text-[#FF6B35] transition-colors"
              >
                {isPlaying ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              {/* Progress Track */}
              <div
                className="flex-1 bg-white/20 h-2 rounded-full overflow-hidden cursor-pointer relative"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pct = ((e.clientX - rect.left) / rect.width) * 100;
                  setAdProgress(pct);
                }}
              >
                <div
                  className="bg-gradient-to-r from-[#FF6B35] to-amber-400 h-full transition-all duration-300"
                  style={{ width: `${adProgress}%` }}
                />
              </div>

              <span className="text-[11px] font-mono text-slate-300 w-12 text-right">
                {Math.floor(adProgress)}s
              </span>
            </div>
          </div>
        </div>

        {/* 3 AI Generated Ad Cards Below */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {CREATIVE_ADS.map((ad, idx) => (
            <div
              key={ad.id}
              onClick={() => {
                setSelectedAdIndex(idx);
                handlePlayAd();
              }}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between overflow-hidden relative group ${
                selectedAdIndex === idx
                  ? 'bg-slate-900 border-[#FF6B35] shadow-xl shadow-[#FF6B35]/15'
                  : 'bg-slate-950/80 border-white/10 hover:border-white/25 hover:bg-slate-900/60'
              }`}
            >
              <div className="relative h-28 w-full rounded-xl overflow-hidden mb-3">
                <Image
                  src={ad.image}
                  alt={ad.title}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <span className="absolute top-2 left-2 text-[9px] font-extrabold uppercase bg-[#FF6B35] text-white px-2 py-0.5 rounded shadow-sm">
                  {ad.badge.split(' ')[0]} 60s AD
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white mb-1">{ad.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-3 line-clamp-2">
                  {ad.subtitle}
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#FF6B35]">
                <span>Play AI Commercial →</span>
                <span className="text-slate-400 text-[10px] font-normal">{ad.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a25] text-white font-extrabold text-sm px-8 py-3.5 rounded-2xl transition-all shadow-lg shadow-[#FF6B35]/25 hover:-translate-y-0.5"
          >
            <span>Schedule 1-on-1 AI Ad Walkthrough</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="/demo"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold text-sm px-6 py-3.5 rounded-2xl border border-white/20 transition-all backdrop-blur-md"
          >
            <span>🎮 Try Interactive Live Sandbox</span>
          </a>
        </div>
      </div>
    </section>
  );
}

