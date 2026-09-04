import Icon from '@/components/ui/AppIcon';

export default function ProductChat() {
  return (
    <section className="section-pad bg-background" id="chat" aria-labelledby="chat-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Chat UI */}
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-3xl border border-border shadow-card-hover overflow-hidden">
              {/* Header */}
              <div className="bg-foreground px-5 py-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                  <Icon
                    name="SparklesIcon"
                    size={18}
                    className="text-primary-foreground"
                    variant="solid"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Ownstay</p>
                  <p className="text-xs text-white/60">Meridian Resort · Chat Support</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400" aria-hidden="true" />
                  <span className="text-xs text-white/60">Online</span>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-4 bg-secondary/30">
                {[
                  {
                    from: 'ai',
                    text: 'Hello! Welcome to Meridian Resort. How can I assist you today?',
                  },
                  { from: 'guest', text: 'Hi! What time does the spa open?' },
                  {
                    from: 'ai',
                    text: 'Our spa is open daily from 9:00 AM to 9:00 PM. Would you like to make a booking?',
                  },
                  { from: 'guest', text: 'Yes, for tomorrow at 3 PM for 2 people.' },
                  {
                    from: 'ai',
                    text: "I've noted your spa booking request for 2 guests at 3:00 PM tomorrow. Our spa team will confirm shortly. Is there anything else?",
                  },
                ]?.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg?.from === 'guest' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg?.from === 'ai' && (
                      <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                        <Icon
                          name="SparklesIcon"
                          size={13}
                          className="text-primary-foreground"
                          variant="solid"
                        />
                      </div>
                    )}
                    <div
                      className={`max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        msg?.from === 'guest'
                          ? 'bg-foreground text-white rounded-tr-sm'
                          : 'bg-card border border-border text-foreground rounded-tl-sm shadow-card'
                      }`}
                    >
                      {msg?.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="px-5 py-4 border-t border-border bg-card">
                <div className="flex items-center gap-3 bg-secondary rounded-xl px-4 py-3">
                  <Icon
                    name="ChatBubbleLeftRightIcon"
                    size={16}
                    className="text-muted-foreground"
                  />
                  <span className="text-sm text-muted-foreground flex-1">Type a message...</span>
                  <button
                    className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center"
                    aria-label="Send"
                  >
                    <Icon
                      name="PaperAirplaneIcon"
                      size={13}
                      className="text-primary-foreground"
                      variant="solid"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1.5 mb-6">
              <Icon name="ChatBubbleLeftRightIcon" size={14} className="text-blue-600" />
              <span className="text-xs font-bold tracking-widest uppercase text-blue-600">
                Guest Chat
              </span>
            </div>
            <h2
              id="chat-heading"
              className="text-section-xl font-bold text-foreground tracking-tight mb-5"
            >
              AI Guest Chat
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Guests communicate with Ownstay through your website, mobile app, or any digital
              channel. Conversations are intelligent, on-brand, and always available.
            </p>
            <ul className="space-y-4">
              {[
                'Embeds directly on your hotel website',
                'Handles unlimited simultaneous conversations',
                'Maintains conversation context throughout the stay',
                'Seamless handoff to human staff when needed',
                'Fully customizable to match your brand voice',
              ]?.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="CheckIcon" size={12} className="text-blue-600" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
