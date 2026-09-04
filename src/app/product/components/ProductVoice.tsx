import Icon from '@/components/ui/AppIcon';

export default function ProductVoice() {
  return (
    <section className="section-pad bg-secondary" id="voice" aria-labelledby="voice-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5 mb-6">
              <Icon name="MicrophoneIcon" size={14} className="text-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Voice AI
              </span>
            </div>
            <h2
              id="voice-heading"
              className="text-section-xl font-bold text-foreground tracking-tight mb-5"
            >
              AI Voice Receptionist
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Ownstay answers hotel phone calls, understands what guests need, and provides instant
              responses — without putting anyone on hold or routing calls to a busy front desk.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Answers calls 24 hours a day, 7 days a week',
                'Understands natural speech in multiple languages',
                'Provides accurate answers from your hotel knowledge base',
                'Escalates to human staff when needed',
                'Logs every call interaction for your team',
              ]?.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="CheckIcon" size={12} className="text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Voice UI */}
          <div className="bg-card rounded-3xl border border-border shadow-card-hover p-8 flex flex-col items-center gap-6">
            <div className="text-center">
              <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-2">
                Live Call
              </p>
              <p className="text-sm font-semibold text-foreground">
                Grand Pacific Hotel · Front Desk
              </p>
            </div>

            {/* Voice visualization */}
            <div className="relative flex items-center justify-center w-32 h-32">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse-ring" />
              <div
                className="absolute inset-4 rounded-full border-2 border-primary/30 animate-pulse-ring"
                style={{ animationDelay: '0.3s' }}
              />
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-orange">
                <Icon name="MicrophoneIcon" size={32} className="text-primary-foreground" />
              </div>
            </div>

            {/* Waveform */}
            <div className="flex items-end gap-1 h-12">
              {[...Array(16)]?.map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 rounded-full bg-primary/60 ${
                    i % 3 === 0
                      ? 'animate-waveform'
                      : i % 3 === 1
                        ? 'animate-waveform-3'
                        : 'animate-waveform-2'
                  }`}
                  style={{ height: `${16 + (i % 5) * 8}px` }}
                />
              ))}
            </div>

            {/* Transcript */}
            <div className="w-full space-y-3">
              <div className="bg-secondary rounded-2xl p-4">
                <p className="text-xs text-muted-foreground mb-1">Guest</p>
                <p className="text-sm text-foreground">
                  &ldquo;Can I have a wake-up call at 6 AM tomorrow?&rdquo;
                </p>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4">
                <p className="text-xs text-primary font-semibold mb-1">Ownstay</p>
                <p className="text-sm text-foreground">
                  &ldquo;Of course! I&apos;ve scheduled a wake-up call for 6:00 AM. Is there
                  anything else I can help you with?&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-green-600 font-semibold">
                <Icon name="CheckCircleIcon" size={14} variant="solid" />
                Wake-up call logged automatically
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
