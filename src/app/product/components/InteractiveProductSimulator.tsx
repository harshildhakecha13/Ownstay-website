'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SimulatorProps {
  moduleTitle: string;
  simType: 'voice' | 'chat' | 'dispatch' | 'pms' | 'yield';
  stat: { value: string; label: string };
}

export default function InteractiveProductSimulator({
  moduleTitle,
  simType,
  stat,
}: SimulatorProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'payload' | 'roi' | 'trace'>('preview');
  const [selectedPms, setSelectedPms] = useState<
    'Opera Cloud' | 'Amadeus' | 'Cloudbeds' | 'StayNTouch'
  >('Opera Cloud');
  const [selectedLanguage, setSelectedLanguage] = useState<
    'English' | 'Spanish' | 'French' | 'Japanese' | 'Arabic'
  >('English');

  const [chatMessages, setChatMessages] = useState<
    Array<{ sender: 'guest' | 'ai'; text: string; time: string; tag?: string }>
  >([
    {
      sender: 'guest',
      text: 'Hi! Could we please get 2 extra feather pillows in Room 412?',
      time: '14:22',
    },
    {
      sender: 'ai',
      text: 'Good afternoon, Mr. Anderson! Certainly. I have dispatched 2 feather pillows to your room via Housekeeping queue #4821. Expected delivery in 6 minutes.',
      time: '14:22',
      tag: 'PMS Folio & Task Synchronized',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isCalling, setIsCalling] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [voiceTranscript, setVoiceTranscript] = useState(
    'AI Voice Assistant standing by on SIP Trunk. Tap "Start Simulated Call" to begin live synthesis.'
  );

  // ROI Calculator in simulator
  const [simRooms, setSimRooms] = useState(120);

  const samplePrompts = [
    'What time is breakfast served tomorrow?',
    'Can I request a 1:00 PM late check-out?',
    'Where is the rooftop pool and gym located?',
    'Please send an iron and ironing board to room 305.',
  ];

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const newGuestMsg = { sender: 'guest' as const, text, time: '14:23' };
    setChatMessages((prev) => [...prev, newGuestMsg]);
    setInputText('');

    setTimeout(() => {
      let aiReply = 'I have recorded your request and notified the front desk team.';
      let tag = 'Auto-Dispatched';
      const lower = text.toLowerCase();
      if (lower.includes('breakfast')) {
        aiReply =
          'Breakfast is served daily at The Grand Dining Room from 6:30 AM to 10:30 AM on Level 2. Continental buffet & à la carte menu available.';
        tag = 'Knowledge Base (100% match)';
      } else if (
        lower.includes('late check-out') ||
        lower.includes('late checkout') ||
        lower.includes('1:00')
      ) {
        aiReply =
          'I checked room availability in Opera PMS for Room 412. Your late check-out at 1:00 PM is confirmed with complimentary VIP status.';
        tag = 'Opera PMS 2-Way Lock';
      } else if (lower.includes('pool') || lower.includes('gym') || lower.includes('fitness')) {
        aiReply =
          'The 24/7 Wellness Center is on Level 3 and the Rooftop Infinity Pool is open 7:00 AM – 10:00 PM on Level 14. Your keycard grants direct access.';
        tag = 'Amenity Telemetry';
      } else if (lower.includes('iron')) {
        aiReply =
          'Dispatched: 1 Steam Iron & Board sent to Room 305 via Housekeeping queue. Staff assigned: Maria R. (ETA 5 mins).';
        tag = 'Housekeeping Dispatch SLA';
      }

      setChatMessages((prev) => [...prev, { sender: 'ai', text: aiReply, time: '14:23', tag }]);
    }, 380);
  };

  const toggleCall = () => {
    if (!isCalling) {
      setIsCalling(true);
      setVoiceTranscript('Connecting to Ownstay Neural Voice SIP Trunk (380ms jitter buffer)...');
      setTimeout(() => {
        setVoiceTranscript(
          `"Good afternoon! Thank you for calling The Grand Plaza. I am your AI receptionist speaking ${selectedLanguage}. How may I assist your stay today?"`
        );
      }, 650);
    } else {
      setIsCalling(false);
      setVoiceTranscript(
        'Call completed. Audio transcript & intent vector automatically logged to hotel PMS folio.'
      );
    }
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl text-white relative overflow-hidden">
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-slate-200 uppercase tracking-widest">
            {moduleTitle} Sandbox
          </span>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-3 py-1 rounded-lg font-semibold transition-all ${
              activeTab === 'preview'
                ? 'bg-primary text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Live Simulator
          </button>
          <button
            onClick={() => setActiveTab('payload')}
            className={`px-3 py-1 rounded-lg font-semibold transition-all ${
              activeTab === 'payload'
                ? 'bg-primary text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            PMS Payload
          </button>
          <button
            onClick={() => setActiveTab('roi')}
            className={`px-3 py-1 rounded-lg font-semibold transition-all ${
              activeTab === 'roi'
                ? 'bg-primary text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Shift ROI
          </button>
          <button
            onClick={() => setActiveTab('trace')}
            className={`px-3 py-1 rounded-lg font-semibold transition-all ${
              activeTab === 'trace'
                ? 'bg-primary text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            SLA Trace
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      {activeTab === 'preview' && (
        <div>
          {simType === 'voice' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-slate-900/90 border border-slate-800 rounded-xl px-3 py-2 text-xs">
                <span className="text-slate-400">Language Model:</span>
                <div className="flex gap-1">
                  {(['English', 'Spanish', 'French', 'Japanese', 'Arabic'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                        selectedLanguage === lang
                          ? 'bg-orange-500 text-white'
                          : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center mx-auto transition-transform hover:scale-105">
                  <Icon name={isCalling ? 'SpeakerWaveIcon' : 'PhoneIcon'} size={30} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    {isCalling
                      ? 'Live Voice Stream • 380ms Sub-Second Neural Synthesis'
                      : 'Hospitality Voice AI Autopilot'}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Direct SIP / WebRTC PBX Gateway with Opera Folio Sync
                  </div>
                </div>

                {isCalling && (
                  <div className="flex justify-center items-center gap-1.5 py-2">
                    {[35, 70, 25, 90, 65, 30, 85, 55, 95, 45, 75, 40, 60, 20].map((height, i) => (
                      <span
                        key={i}
                        className="w-1.5 bg-orange-400 rounded-full animate-pulse"
                        style={{ height: `${height}%`, animationDelay: `${i * 70}ms` }}
                      />
                    ))}
                  </div>
                )}

                <p className="text-xs bg-slate-950 border border-slate-800/80 rounded-xl p-3.5 text-slate-200 italic min-h-[60px] flex items-center justify-center leading-relaxed">
                  {voiceTranscript}
                </p>

                <button
                  onClick={toggleCall}
                  className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md ${
                    isCalling
                      ? 'bg-rose-600 hover:bg-rose-700 text-white'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  }`}
                >
                  <Icon name={isCalling ? 'PhoneXMarkIcon' : 'PhoneIcon'} size={16} />
                  {isCalling ? 'End Call Simulation' : 'Start Simulated Guest Call'}
                </button>
              </div>
            </div>
          )}

          {simType === 'chat' && (
            <div className="space-y-4">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 h-64 overflow-y-auto space-y-3 flex flex-col justify-end text-xs">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`max-w-[85%] rounded-2xl p-3 leading-relaxed ${
                      msg.sender === 'guest'
                        ? 'bg-slate-800 text-white self-end rounded-br-none border border-slate-700/50'
                        : 'bg-orange-600 text-white self-start rounded-bl-none shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] opacity-75 mb-1">
                      <span>
                        {msg.sender === 'guest' ? 'Guest • Room 412' : 'Ownstay Concierge AI'}
                      </span>
                      <span>{msg.time}</span>
                    </div>
                    <div>{msg.text}</div>
                    {msg.tag && (
                      <div className="mt-1.5 inline-block text-[9px] font-bold bg-black/25 px-2 py-0.5 rounded text-orange-200">
                        ✓ {msg.tag}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Sample Prompts */}
              <div className="flex flex-wrap gap-1.5">
                {samplePrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(prompt)}
                    className="text-[10px] bg-slate-900 hover:bg-slate-800 text-slate-300 px-2.5 py-1.5 rounded-lg border border-slate-800 transition-colors"
                  >
                    + {prompt}
                  </button>
                ))}
              </div>

              {/* Input box */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask a guest query (amenities, check-out, service)..."
                  className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-primary flex-1"
                />
                <button
                  onClick={() => handleSendMessage()}
                  className="bg-primary hover:bg-orange-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm"
                >
                  Send
                </button>
              </div>
            </div>
          )}

          {simType === 'dispatch' && (
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
                <span>Real-Time Department SLA Queues</span>
                <span className="text-emerald-400 font-bold">4 Active Dispatches</span>
              </div>
              <div className="space-y-2">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex justify-between items-center text-xs">
                  <div>
                    <div className="font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                      Room 412 • 2 Feather Pillows
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      Housekeeping Floor 4 • Dispatched via WhatsApp
                    </div>
                  </div>
                  <span className="bg-rose-500/20 text-rose-400 border border-rose-500/30 px-2.5 py-1 rounded text-[10px] font-bold">
                    3:14 min SLA
                  </span>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex justify-between items-center text-xs">
                  <div>
                    <div className="font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      Room 208 • AC Temp Calibration
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      Engineering Team • Tech On-Floor
                    </div>
                  </div>
                  <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2.5 py-1 rounded text-[10px] font-bold">
                    5:40 min SLA
                  </span>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex justify-between items-center text-xs">
                  <div>
                    <div className="font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Room 704 • Wagyu Burger & Pinot Noir
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      Kitchen KDS • Plating Station #2
                    </div>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded text-[10px] font-bold">
                    12:00 min SLA
                  </span>
                </div>
              </div>
            </div>
          )}

          {simType === 'pms' && (
            <div className="space-y-3 text-xs">
              <div className="flex gap-2 mb-2">
                {(['Opera Cloud', 'Amadeus', 'Cloudbeds', 'StayNTouch'] as const).map((pms) => (
                  <button
                    key={pms}
                    onClick={() => setSelectedPms(pms)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                      selectedPms === pms
                        ? 'bg-primary text-white'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {pms}
                  </button>
                ))}
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-[11px] text-emerald-400 space-y-1.5 overflow-x-auto">
                <div className="text-slate-500">{`// Connected: ${selectedPms} 2-Way Sync Engine`}</div>
                <div>
                  [14:24:02.118] POST /api/v2/{selectedPms.toLowerCase().replace(' ', '')}/sync -
                  200 OK
                </div>
                <div>[14:24:02.241] ROOM_STATUS_UPDATE: Room 502 -&gt; CLEAN_INSPECTED</div>
                <div>[14:24:02.390] KEYCARD_DISPATCH: SALTO/ASSA ABLOY Lock UUID-89241 SUCCESS</div>
                <div>[14:24:02.512] GUEST_FOLIO_UPDATE: +$42.00 In-Room Dining (Tax Included)</div>
              </div>
              <div className="flex justify-between items-center text-[11px] text-slate-400 px-1">
                <span>Sync Protocol: TLS 1.3 / WebSocket</span>
                <span className="text-emerald-400 font-bold">
                  340 ms Avg Bi-directional Latency
                </span>
              </div>
            </div>
          )}

          {simType === 'yield' && (
            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Weekend Occupancy Forecast</span>
                  <span className="text-emerald-400 font-bold">94.2% (High Demand Surge)</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-500 to-amber-400 h-full w-[94%]" />
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800 text-xs">
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80">
                    <div className="text-[10px] text-slate-400">Current Fixed ADR</div>
                    <div className="font-bold text-white text-base">$248.00</div>
                  </div>
                  <div className="bg-orange-500/10 p-2.5 rounded-xl border border-orange-500/20">
                    <div className="text-[10px] text-orange-400">AI Dynamic Optimized ADR</div>
                    <div className="font-bold text-orange-400 text-base">
                      $284.00 (+$36.00/night)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'payload' && (
        <div className="space-y-3">
          <div className="flex justify-between items-center text-[11px] text-slate-400">
            <span>Webhook: /api/v1/telemetry/event</span>
            <span className="text-emerald-400 font-mono">STATUS: 200 COMMITTED</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-[10px] text-slate-300 overflow-x-auto">
            <pre>
              {`{
  "event": "OWNSTAY_AI_DISPATCH_SUCCESS",
  "module": "${moduleTitle}",
  "timestamp": "${new Date().toISOString()}",
  "hotel_id": "HOTEL_OPERA_8831",
  "guest_profile": {
    "room": "412",
    "name": "Anderson, John",
    "loyalty": "Platinum VIP Tier",
    "preferred_language": "${selectedLanguage}"
  },
  "ai_intent": "HOUSEKEEPING_AMENITY_REQUEST",
  "sla_seconds": 360,
  "pms_connector": "${selectedPms}",
  "sync_status": "COMMITTED_TO_FOLIO"
}`}
            </pre>
          </div>
        </div>
      )}

      {activeTab === 'roi' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-4 text-xs">
          <div className="flex justify-between items-center">
            <span className="text-slate-300 font-bold">Property Room Count:</span>
            <span className="text-primary font-bold text-sm">{simRooms} Rooms</span>
          </div>
          <input
            type="range"
            min="30"
            max="500"
            step="10"
            value={simRooms}
            onChange={(e) => setSimRooms(Number(e.target.value))}
            className="w-full accent-orange-500 cursor-pointer"
          />
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">Estimated Annual Labor Savings</div>
              <div className="text-lg font-black text-emerald-400">
                ${Math.round(simRooms * 1250).toLocaleString()} / yr
              </div>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">Direct Booking RevPAR Uplift</div>
              <div className="text-lg font-black text-orange-400">
                +${Math.round(simRooms * 680).toLocaleString()} / yr
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'trace' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2.5 text-[11px] font-mono">
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>00.00ms: Inbound SIP Audio Frame Received</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>112.4ms: Speech-to-Text Transcribed (Whisper Large v3)</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>204.1ms: Vector Embeddings &amp; Hotel Policy Guardrail Validated</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>285.7ms: Opera PMS API Room &amp; Folio State Confirmed</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>378.2ms: Streaming Neural Voice Frame Output Generated</span>
          </div>
        </div>
      )}

      {/* Simulator Footer Benchmark */}
      <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <Icon name="CheckBadgeIcon" size={15} className="text-emerald-400" />
          Verified Hospitality Benchmark:
        </span>
        <span className="text-orange-400 font-bold">
          {stat.value} {stat.label}
        </span>
      </div>
    </div>
  );
}
