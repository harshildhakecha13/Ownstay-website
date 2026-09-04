'use client';

import { useState } from 'react';

// Replace DEMO_VIDEO_ID with your actual YouTube video ID
const DEMO_VIDEO_ID = 'dQw4w9WgXcQ';

export default function VideoDemoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-24 bg-[#111111] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF6B35] opacity-5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#FF6B35] text-sm font-semibold tracking-widest uppercase mb-4">
            Product Demo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            See Ownstay in action.
          </h2>
          <p className="text-[#9B9B9B] text-lg max-w-2xl mx-auto">
            Experience how an AI receptionist can transform hotel guest communication — from first
            question to resolved request.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#1A1A1A]">
          {/* Aspect ratio wrapper */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            {/* Placeholder thumbnail / overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#1A1A1A] via-[#1F1F1F] to-[#111111] z-10">
                {/* Decorative chat bubbles */}
                <div className="absolute top-8 left-8 md:top-12 md:left-16 opacity-60">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl rounded-tl-none px-4 py-3 text-white text-sm max-w-[200px]">
                    Hi, what time is breakfast?
                  </div>
                </div>
                <div className="absolute top-8 right-8 md:top-12 md:right-16 opacity-60">
                  <div className="bg-[#FF6B35]/20 backdrop-blur-sm rounded-2xl rounded-tr-none px-4 py-3 text-white text-sm max-w-[220px]">
                    Breakfast is served from 7:00 AM to 10:30 AM on the ground floor. 🍳
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-16 opacity-60 hidden sm:block">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl rounded-bl-none px-4 py-3 text-white text-sm max-w-[180px]">
                    Can I get late checkout?
                  </div>
                </div>
                <div className="absolute bottom-8 right-8 md:bottom-12 md:right-16 opacity-60 hidden sm:block">
                  <div className="bg-[#FF6B35]/20 backdrop-blur-sm rounded-2xl rounded-br-none px-4 py-3 text-white text-sm max-w-[210px]">
                    Of course! I can arrange that for you. ✓
                  </div>
                </div>

                {/* Center content */}
                <div className="flex flex-col items-center gap-6 z-10">
                  {/* Ownstay logo mark */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B35] flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <span className="text-white font-semibold text-lg">Ownstay</span>
                  </div>

                  {/* Play button */}
                  <button
                    onClick={handlePlay}
                    aria-label="Play demo video"
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#FF6B35] hover:bg-[#e55a25] transition-all duration-300 flex items-center justify-center shadow-lg shadow-[#FF6B35]/30 hover:scale-105 active:scale-95"
                  >
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>

                  <p className="text-[#9B9B9B] text-sm mt-1">Watch the 2-minute demo</p>
                </div>

                {/* Animated pulse rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-[#FF6B35]/30 animate-ping opacity-30" />
                </div>
              </div>
            )}

            {/* YouTube iframe — loads and autoplays when play button is clicked */}
            {isPlaying && (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${DEMO_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="Ownstay Product Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>

        {/* Bottom stats row */}
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
          <div>
            <div className="text-2xl font-bold text-white mb-1">24/7</div>
            <div className="text-[#9B9B9B] text-sm">Always available</div>
          </div>
          <div className="border-x border-white/10">
            <div className="text-2xl font-bold text-[#FF6B35] mb-1">Instant</div>
            <div className="text-[#9B9B9B] text-sm">Guest responses</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">Every stay</div>
            <div className="text-[#9B9B9B] text-sm">Consistent service</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a25] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#FF6B35]/25 hover:-translate-y-0.5"
          >
            Book a Demo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
