'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  bg: string;
  color: string;
  imageClass: string;
}

const features: Feature[] = [
  {
    id: 'voice',
    icon: 'MicrophoneIcon',
    title: 'AI Voice Receptionist',
    description:
      'Answers hotel calls, understands guest requests, and provides instant voice responses without putting anyone on hold. Seamlessly transcribes and routes calls when complex human assistance is required.',
    bg: 'bg-primary',
    color: 'text-primary-foreground',
    imageClass:
      'bg-[url("https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=2000&auto=format&fit=crop")]',
  },
  {
    id: 'chat',
    icon: 'ChatBubbleLeftRightIcon',
    title: 'AI Guest Chat',
    description:
      'Guests communicate through your website, mobile app, or any digital channel — all handled by Ownstay. Instantly replies to pre-arrival queries and in-stay service requests.',
    bg: 'bg-blue-600',
    color: 'text-white',
    imageClass:
      'bg-[url("https://images.unsplash.com/photo-1542314831-c6a4d142104d?q=80&w=2000&auto=format&fit=crop")]',
  },
  {
    id: 'knowledge',
    icon: 'BuildingOffice2Icon',
    title: 'Hotel Knowledge Base',
    description:
      'Ownstay knows your hotel inside out — rooms, amenities, restaurants, policies, facilities, and local recommendations. Upload your PDFs and it learns instantly.',
    bg: 'bg-amber-600',
    color: 'text-white',
    imageClass:
      'bg-[url("https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2000&auto=format&fit=crop")]',
  },
  {
    id: 'requests',
    icon: 'ClipboardDocumentListIcon',
    title: 'Guest Requests',
    description:
      'Extra towels, late checkout, restaurant reservations — requests are parsed intelligently and routed to the right operational team instantly via our dashboard.',
    bg: 'bg-rose-600',
    color: 'text-white',
    imageClass:
      'bg-[url("https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000&auto=format&fit=crop")]',
  },
];

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <section className="py-32 bg-background relative" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-primary mb-4">
            Smarter Operations
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight max-w-2xl">
            Everything a hotel receptionist does — and more.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          {/* Interactive Menu / Text Side */}
          <div className="lg:w-1/2 flex flex-col gap-6 lg:py-10 z-10">
            {features.map((feature) => {
              const isActive = activeFeature === feature.id;
              return (
                <div
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`group cursor-pointer p-6 md:p-8 rounded-3xl transition-all duration-500 border ${
                    isActive
                      ? 'bg-card border-border shadow-card scale-[1.02]'
                      : 'bg-transparent border-transparent hover:bg-card/50'
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`w-12 h-12 flex-shrink-0 rounded-2xl flex items-center justify-center transition-colors duration-500 ${
                        isActive ? feature.bg : 'bg-secondary'
                      }`}
                    >
                      <Icon
                        name={feature.icon as Parameters<typeof Icon>[0]['name']}
                        size={24}
                        className={isActive ? feature.color : 'text-muted-foreground'}
                        variant={isActive ? 'solid' : 'outline'}
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-xl md:text-2xl font-bold mb-3 transition-colors duration-500 ${
                          isActive
                            ? 'text-foreground'
                            : 'text-muted-foreground group-hover:text-foreground/80'
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-muted-foreground leading-relaxed text-base md:text-lg overflow-hidden"
                          >
                            {feature.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Visual Side */}
          <div className="lg:w-1/2 relative lg:h-[700px]">
            <div className="lg:sticky lg:top-32 w-full aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                {features.map((feature) => {
                  if (feature.id !== activeFeature) return null;
                  return (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className={`absolute inset-0 ${feature.imageClass} bg-cover bg-center`}
                    >
                      <div className="absolute inset-0 bg-black/20" />

                      {/* Decorative Mock App floating card */}
                      <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-lg rounded-2xl p-5 shadow-xl hidden md:flex items-center gap-4"
                      >
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${feature.bg}`}
                        >
                          <Icon
                            name={feature.icon as Parameters<typeof Icon>[0]['name']}
                            size={24}
                            className={feature.color}
                            variant="solid"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-foreground text-sm uppercase tracking-wider">
                            {feature.title}
                          </p>
                          <p className="text-muted-foreground text-xs mt-1">
                            System operational and ready.
                          </p>
                        </div>
                        <div className="ml-auto w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
