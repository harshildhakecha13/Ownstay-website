'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SimulatorProps {
  moduleTitle: string;
  simType:
    | 'voice'
    | 'chat'
    | 'dispatch'
    | 'pms'
    | 'yield'
    | 'booking'
    | 'inventory'
    | 'scheduling'
    | 'security'
    | 'kitchen';
  stat: { value: string; label: string };
}

export default function InteractiveProductSimulator({
  moduleTitle,
  simType,
  stat,
}: SimulatorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<
    'English' | 'Spanish' | 'French' | 'Japanese' | 'Arabic'
  >('English');

  const [selectedPms, setSelectedPms] = useState<
    'Opera Cloud' | 'Amadeus' | 'Cloudbeds' | 'StayNTouch'
  >('Opera Cloud');

  const isCrm =
    moduleTitle.toLowerCase().includes('crm') ||
    moduleTitle.toLowerCase().includes('messaging') ||
    moduleTitle.toLowerCase().includes('management');

  const [chatMessages, setChatMessages] = useState<
    Array<{ sender: 'guest' | 'ai'; text: string; time: string; tag?: string }>
  >(() => {
    if (isCrm) {
      return [
        {
          sender: 'guest',
          text: "Hi, this is Ananya Sharma. Can I get a late checkout tomorrow? I'm a Diamond Elite member.",
          time: '14:22',
        },
        {
          sender: 'ai',
          text: 'Hello Ms. Sharma! Welcome back. As a Diamond Elite guest, we have automatically approved a complimentary late checkout at 2:00 PM. Your preferences have been synced with your CRM profile.',
          time: '14:22',
          tag: 'Opera PMS & CRM Profile Synced',
        },
      ];
    }

    return [
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
    ];
  });
  const [inputText, setInputText] = useState('');
  const [isCalling, setIsCalling] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState(
    'AI Voice Assistant standing by on SIP Trunk. Tap "Start Simulated Call" to begin live synthesis.'
  );

  // Booking Simulator States
  const [bookingRoomType, setBookingRoomType] = useState<'deluxe' | 'suite' | 'penthouse'>(
    'deluxe'
  );
  const [bookingBreakfast, setBookingBreakfast] = useState(false);
  const [bookingSpaPass, setBookingSpaPass] = useState(false);
  const [bookingIsSendingLink, setBookingIsSendingLink] = useState(false);
  const [bookingLinkSent, setBookingLinkSent] = useState(false);

  // Inventory Simulator States
  const [inventoryItems, setInventoryItems] = useState([
    {
      name: 'Luxury Aesop Toiletries',
      count: 18,
      minRequired: 150,
      category: 'Bathroom Amenities',
      status: 'CRITICAL_LOW',
    },
    {
      name: 'Nespresso Premium Pods',
      count: 120,
      minRequired: 500,
      category: 'F&B In-Room Stock',
      status: 'LOW',
    },
    {
      name: 'Egyptian Linens & Pillowcases',
      count: 320,
      minRequired: 300,
      category: 'Housekeeping Linen',
      status: 'OPTIMAL',
    },
  ]);
  const [inventoryIsRestocking, setInventoryIsRestocking] = useState(false);

  // Scheduling Simulator States
  const [schedulingShifts, setSchedulingShifts] = useState([
    {
      name: 'Morning Shift (06:00 - 14:00)',
      count: 4,
      status: 'OPTIMAL',
      color: 'text-emerald-400',
    },
    {
      name: 'Afternoon Shift (14:00 - 22:00)',
      count: 2,
      status: 'UNDERSTAFFED',
      color: 'text-amber-400',
    },
    {
      name: 'Night Shift (22:00 - 06:00)',
      count: 1,
      status: 'CRITICAL_LOW',
      color: 'text-rose-400',
    },
  ]);
  const [schedulingIsBalancing, setSchedulingIsBalancing] = useState(false);
  const [schedulingSuccess, setSchedulingSuccess] = useState(false);

  // Security Simulator States
  const [securityLogs, setSecurityLogs] = useState([
    { time: '14:24:02', event: 'Guest Folio Credit Card Tokenized', level: 'SUCCESS' },
    { time: '14:24:05', event: 'SHA-256 Code Integrity Signature Verified', level: 'SUCCESS' },
    { time: '14:24:12', event: 'GDPR PII Guest Data Redacted on Checkout', level: 'SUCCESS' },
  ]);
  const [securityIsAuditing, setSecurityIsAuditing] = useState(false);
  const [securitySuccess, setSecuritySuccess] = useState(false);

  // Kitchen Simulator States
  const [kitchenOrders, setKitchenOrders] = useState([
    {
      id: '#4821',
      destination: 'Room 704',
      items: '1x Prime Wagyu Burger, 1x Pinot Noir',
      elapsed: '4m',
      status: 'PREPARING',
    },
    {
      id: '#4822',
      destination: 'Table 12',
      items: '2x Truffle Penne Pasta, 1x Ginger Ale',
      elapsed: '1m',
      status: 'NEW',
    },
    {
      id: '#4820',
      destination: 'Room 205',
      items: '1x Club Sandwich, 1x Diet Coke',
      elapsed: '14m',
      status: 'READY',
    },
  ]);
  const [kitchenIsPacing, setKitchenIsPacing] = useState(false);

  const samplePrompts = isCrm
    ? [
        'Do you have gluten-free breakfast options?',
        'Update my room temperature preference to 21°C',
        'Confirm my loyalty point balance for this stay',
        'Send me a copy of my historical stay receipts',
      ]
    : [
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

      if (isCrm) {
        if (lower.includes('gluten') || lower.includes('breakfast')) {
          aiReply =
            'Understood! Your CRM profile has a Gluten-Free Diet flag enabled. The kitchen has been alerted and will prepare a customized gluten-free breakfast box tomorrow morning.';
          tag = 'CRM Profile Synchronized';
        } else if (
          lower.includes('temp') ||
          lower.includes('temperature') ||
          lower.includes('21')
        ) {
          aiReply =
            'Understood, Ms. Sharma. I have updated your preferred room temperature to 21°C in our central database. Your suite thermostat has been synced!';
          tag = 'Preference Synced (Opera PMS)';
        } else if (
          lower.includes('loyalty') ||
          lower.includes('point') ||
          lower.includes('balance')
        ) {
          aiReply =
            'You will earn 3,492 points on this stay, bringing your current loyalty balance to 42,150 points. This qualifies you for a complimentary room upgrade on your next stay!';
          tag = 'CRM Loyalty Engine Lock';
        } else if (
          lower.includes('receipt') ||
          lower.includes('dispatched') ||
          lower.includes('history')
        ) {
          aiReply =
            'Of course! I have dispatched PDF receipts for your 3 previous stays to ananya.sharma@gmail.com instantly.';
          tag = 'CRM Receipt Dispatch';
        }
      } else {
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
      </div>

      {/* Main Content (Live Simulator) */}
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
                      {msg.sender === 'guest'
                        ? isCrm
                          ? 'Diamond Elite • Ms. Sharma'
                          : 'Guest • Room 412'
                        : isCrm
                          ? 'Ownstay CRM Loyalty Autopilot'
                          : 'Ownstay Concierge AI'}
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
                placeholder={
                  isCrm
                    ? 'Ask a CRM query (loyalty point balance, preferences, receipts)...'
                    : 'Ask a guest query (amenities, check-out, service)...'
                }
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
              <span>
                {moduleTitle.toLowerCase().includes('housekeeping')
                  ? 'Housekeeping SLA Queue'
                  : moduleTitle.toLowerCase().includes('facility') ||
                      moduleTitle.toLowerCase().includes('maintenance')
                    ? 'Engineering & Maintenance SLA Queue'
                    : 'Real-Time Department SLA Queues'}
              </span>
              <span className="text-emerald-400 font-bold">3 Active Dispatches</span>
            </div>
            <div className="space-y-2">
              {moduleTitle.toLowerCase().includes('housekeeping') ? (
                <>
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
                        Room 501 • Fresh Bath Towels
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        Housekeeping Floor 5 • Dispatched via WhatsApp
                      </div>
                    </div>
                    <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2.5 py-1 rounded text-[10px] font-bold">
                      2:05 min SLA
                    </span>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex justify-between items-center text-xs">
                    <div>
                      <div className="font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Room 322 • Turndown Service
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        Housekeeping Floor 3 • Assigned Runner
                      </div>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded text-[10px] font-bold">
                      12:40 min SLA
                    </span>
                  </div>
                </>
              ) : moduleTitle.toLowerCase().includes('facility') ||
                moduleTitle.toLowerCase().includes('maintenance') ? (
                <>
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
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                        Room 114 • Leaky Shower Handle
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        Plumbing Specialist • Ticket Dispatched
                      </div>
                    </div>
                    <span className="bg-rose-500/20 text-rose-400 border border-rose-500/30 px-2.5 py-1 rounded text-[10px] font-bold">
                      18:20 min SLA
                    </span>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex justify-between items-center text-xs">
                    <div>
                      <div className="font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        Lobby • Elevator Touchscreen Update
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        Systems Support • Completed Just Now
                      </div>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded text-[10px] font-bold">
                      RESOLVED
                    </span>
                  </div>
                </>
              ) : (
                <>
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
                        Room 704 • Wagyu Burger &amp; Pinot Noir
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        Kitchen KDS • Plating Station #2
                      </div>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded text-[10px] font-bold">
                      12:00 min SLA
                    </span>
                  </div>
                </>
              )}
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
                [14:24:02.118] POST /api/v2/{selectedPms.toLowerCase().replace(' ', '')}/sync - 200
                OK
              </div>
              <div>[14:24:02.241] ROOM_STATUS_UPDATE: Room 502 -&gt; CLEAN_INSPECTED</div>
              <div>[14:24:02.390] KEYCARD_DISPATCH: SALTO/ASSA ABLOY Lock UUID-89241 SUCCESS</div>
              <div>[14:24:02.512] GUEST_FOLIO_UPDATE: +$42.00 In-Room Dining (Tax Included)</div>
            </div>
            <div className="flex justify-between items-center text-[11px] text-slate-400 px-1">
              <span>Sync Protocol: TLS 1.3 / WebSocket</span>
              <span className="text-emerald-400 font-bold">340 ms Avg Bi-directional Latency</span>
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
                  <div className="font-bold text-orange-400 text-base">$284.00 (+$36.00/night)</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {simType === 'booking' && (
          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-bold">1. Select Room Category:</span>
                <span className="text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded">
                  PMS Availability Check PASS
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {(['deluxe', 'suite', 'penthouse'] as const).map((room) => {
                  const price = room === 'deluxe' ? 180 : room === 'suite' ? 320 : 750;
                  const name =
                    room === 'deluxe'
                      ? 'Deluxe King'
                      : room === 'suite'
                        ? 'Executive Suite'
                        : 'Royal Penthouse';
                  return (
                    <button
                      key={room}
                      onClick={() => {
                        setBookingRoomType(room);
                        setBookingLinkSent(false);
                      }}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        bookingRoomType === room
                          ? 'bg-orange-500/20 border-orange-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="text-[10px] font-bold block truncate">{name}</div>
                      <div className="text-xs font-black mt-1">${price}/n</div>
                    </button>
                  );
                })}
              </div>

              <div className="space-y-2">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  2. Add Extra Packages:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center gap-2.5 bg-slate-950 border border-slate-800 rounded-xl p-2.5 cursor-pointer hover:border-slate-700 select-none">
                    <input
                      type="checkbox"
                      checked={bookingBreakfast}
                      onChange={(e) => {
                        setBookingBreakfast(e.target.checked);
                        setBookingLinkSent(false);
                      }}
                      className="rounded border-slate-800 text-orange-500 focus:ring-0 focus:ring-offset-0 accent-orange-500"
                    />
                    <span className="text-xs text-slate-300">Breakfast (+$25)</span>
                  </label>
                  <label className="flex items-center gap-2.5 bg-slate-950 border border-slate-800 rounded-xl p-2.5 cursor-pointer hover:border-slate-700 select-none">
                    <input
                      type="checkbox"
                      checked={bookingSpaPass}
                      onChange={(e) => {
                        setBookingSpaPass(e.target.checked);
                        setBookingLinkSent(false);
                      }}
                      className="rounded border-slate-800 text-orange-500 focus:ring-0 focus:ring-offset-0 accent-orange-500"
                    />
                    <span className="text-xs text-slate-300">VIP Spa Pass (+$50)</span>
                  </label>
                </div>
              </div>

              {/* Live Room Quote Calculation block */}
              <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-3.5 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Nightly Base Rate:</span>
                  <span className="font-mono text-slate-200 font-bold">
                    ${bookingRoomType === 'deluxe' ? 180 : bookingRoomType === 'suite' ? 320 : 750}
                    .00
                  </span>
                </div>
                {(bookingBreakfast || bookingSpaPass) && (
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Add-on Amenities:</span>
                    <span className="font-mono text-slate-200 font-bold">
                      +${(bookingBreakfast ? 25 : 0) + (bookingSpaPass ? 50 : 0)}.00
                    </span>
                  </div>
                )}
                <div className="border-t border-slate-800/60 pt-2 flex justify-between items-center text-xs">
                  <span className="text-slate-200 font-bold">Estimated Total (Direct Book):</span>
                  <span className="font-mono text-orange-400 font-black text-sm">
                    $
                    {(bookingRoomType === 'deluxe'
                      ? 180
                      : bookingRoomType === 'suite'
                        ? 320
                        : 750) +
                      (bookingBreakfast ? 25 : 0) +
                      (bookingSpaPass ? 50 : 0)}
                    .00
                  </span>
                </div>
              </div>

              {/* Send checkout link button */}
              <button
                onClick={() => {
                  setBookingIsSendingLink(true);
                  setTimeout(() => {
                    setBookingIsSendingLink(false);
                    setBookingLinkSent(true);
                  }, 1000);
                }}
                disabled={bookingIsSendingLink}
                className="w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md bg-orange-600 hover:bg-orange-500 text-white disabled:opacity-50"
              >
                <Icon name="LinkIcon" size={14} />
                {bookingIsSendingLink
                  ? 'Syncing PMS Checkout Session...'
                  : bookingLinkSent
                    ? '✓ Checkout SMS Sent to Guest Mobile!'
                    : 'Send Conversational Checkout Link'}
              </button>

              {bookingLinkSent && (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-2.5 rounded-xl text-[11px] text-center font-semibold leading-relaxed">
                  SMS sent: &ldquo;Your booking for the{' '}
                  {bookingRoomType === 'deluxe'
                    ? 'Deluxe King'
                    : bookingRoomType === 'suite'
                      ? 'Executive Suite'
                      : 'Royal Penthouse'}{' '}
                  is locked! Complete checkout here: https://ownstay.io/checkout/lnk_83f12&rdquo;
                </div>
              )}
            </div>
          </div>
        )}

        {simType === 'inventory' && (
          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-bold">Property Asset Supplies Tracking</span>
                <span className="text-orange-400 font-mono text-[10px] bg-orange-500/10 px-2 py-0.5 rounded">
                  Predictive Restock Alert ACTIVE
                </span>
              </div>

              <div className="space-y-3">
                {inventoryItems.map((item, idx) => {
                  const percentage = Math.min(
                    100,
                    Math.round((item.count / item.minRequired) * 100)
                  );
                  return (
                    <div
                      key={idx}
                      className="bg-slate-950 border border-slate-800/80 rounded-xl p-3 space-y-2"
                    >
                      <div className="flex justify-between items-center text-xs">
                        <div>
                          <span className="font-bold text-white block">{item.name}</span>
                          <span className="text-[10px] text-slate-400">{item.category}</span>
                        </div>
                        <div className="text-right">
                          <span
                            className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                              item.status === 'CRITICAL_LOW'
                                ? 'bg-rose-500/20 text-rose-400'
                                : item.status === 'LOW'
                                  ? 'bg-amber-500/20 text-amber-400'
                                  : 'bg-emerald-500/20 text-emerald-400'
                            }`}
                          >
                            {item.status.replace('_', ' ')}
                          </span>
                          <span className="text-xs font-mono text-slate-200 block mt-1">
                            {item.count} / {item.minRequired}
                          </span>
                        </div>
                      </div>
                      {/* Progress Bar */}
                      <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-500 ${
                            item.status === 'CRITICAL_LOW'
                              ? 'bg-rose-500'
                              : item.status === 'LOW'
                                ? 'bg-amber-500'
                                : 'bg-emerald-500'
                          }`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Restock action button */}
              <button
                onClick={() => {
                  setInventoryIsRestocking(true);
                  setTimeout(() => {
                    setInventoryIsRestocking(false);
                    setInventoryItems([
                      {
                        name: 'Luxury Aesop Toiletries',
                        count: 150,
                        minRequired: 150,
                        category: 'Bathroom Amenities',
                        status: 'OPTIMAL',
                      },
                      {
                        name: 'Nespresso Premium Pods',
                        count: 500,
                        minRequired: 500,
                        category: 'F&B In-Room Stock',
                        status: 'OPTIMAL',
                      },
                      {
                        name: 'Egyptian Linens & Pillowcases',
                        count: 320,
                        minRequired: 300,
                        category: 'Housekeeping Linen',
                        status: 'OPTIMAL',
                      },
                    ]);
                  }, 1200);
                }}
                disabled={inventoryIsRestocking || inventoryItems[0].status === 'OPTIMAL'}
                className="w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md bg-emerald-600 hover:bg-emerald-500 text-white disabled:opacity-50"
              >
                <Icon
                  name="ArrowPathIcon"
                  size={14}
                  className={inventoryIsRestocking ? 'animate-spin' : ''}
                />
                {inventoryIsRestocking
                  ? 'Generating Autonomous Restock Purchase Order...'
                  : inventoryItems[0].status === 'OPTIMAL'
                    ? 'All Assets Replenished & Optimized ✓'
                    : 'Trigger AI Automatic Supplier Restock Order'}
              </button>
            </div>
          </div>
        )}

        {simType === 'scheduling' && (
          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-bold">
                  Shift &amp; Staffing Roster Optimization
                </span>
                <span className="text-orange-400 font-mono text-[10px] bg-orange-500/10 px-2 py-0.5 rounded">
                  PMS Occupancy Sync: ACTIVE
                </span>
              </div>

              <div className="space-y-3">
                {schedulingShifts.map((shift, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-950 border border-slate-800/80 rounded-xl p-3 flex justify-between items-center text-xs"
                  >
                    <div>
                      <span className="font-bold text-white block">{shift.name}</span>
                      <span className="text-[10px] text-slate-400">Roster Headcount Status</span>
                    </div>
                    <div className="text-right">
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          shift.status === 'OPTIMAL'
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : shift.status === 'UNDERSTAFFED'
                              ? 'bg-amber-500/20 text-amber-400'
                              : 'bg-rose-500/20 text-rose-400'
                        }`}
                      >
                        {shift.status.replace('_', ' ')}
                      </span>
                      <span className="text-xs font-mono text-slate-200 block mt-1">
                        {shift.count} Staff Active
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setSchedulingIsBalancing(true);
                  setTimeout(() => {
                    setSchedulingIsBalancing(false);
                    setSchedulingSuccess(true);
                    setSchedulingShifts([
                      {
                        name: 'Morning Shift (06:00 - 14:00)',
                        count: 5,
                        status: 'OPTIMAL',
                        color: 'text-emerald-400',
                      },
                      {
                        name: 'Afternoon Shift (14:00 - 22:00)',
                        count: 4,
                        status: 'OPTIMAL',
                        color: 'text-emerald-400',
                      },
                      {
                        name: 'Night Shift (22:00 - 06:00)',
                        count: 3,
                        status: 'OPTIMAL',
                        color: 'text-emerald-400',
                      },
                    ]);
                  }, 1200);
                }}
                disabled={schedulingIsBalancing || schedulingSuccess}
                className="w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md bg-orange-600 hover:bg-orange-500 text-white disabled:opacity-50"
              >
                <Icon
                  name="ArrowPathIcon"
                  size={14}
                  className={schedulingIsBalancing ? 'animate-spin' : ''}
                />
                {schedulingIsBalancing
                  ? 'Calculating Optimal Roster via Occupancy Ratios...'
                  : schedulingSuccess
                    ? 'All Shifts Automatically Balanced ✓'
                    : 'Trigger AI Automatic Shift Roster Balancing'}
              </button>

              {schedulingSuccess && (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-2.5 rounded-xl text-[11px] text-center font-semibold">
                  Shift roster automatically balanced based on live room count (412 occupied)!
                </div>
              )}
            </div>
          </div>
        )}

        {simType === 'security' && (
          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-bold">GDPR &amp; SOC2 Guardrail Logs</span>
                <span className="text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded">
                  SYSTEM ENCRYPTED
                </span>
              </div>

              <div className="space-y-2 font-mono text-[11px] text-slate-300">
                {securityLogs.map((log, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-950 border border-slate-800/80 rounded-xl p-2.5 flex justify-between items-center"
                  >
                    <div>
                      <span className="text-slate-500 mr-2">[{log.time}]</span>
                      <span>{log.event}</span>
                    </div>
                    <span className="text-emerald-400 font-bold text-[9px] bg-emerald-500/10 px-1.5 py-0.5 rounded">
                      {log.level}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setSecurityIsAuditing(true);
                  setTimeout(() => {
                    setSecurityIsAuditing(false);
                    setSecuritySuccess(true);
                    setSecurityLogs((prev) => [
                      ...prev,
                      {
                        time: new Date().toTimeString().split(' ')[0],
                        event: 'AES-256 Key Vault Rotated & Verified',
                        level: 'COMPLIANT',
                      },
                    ]);
                  }, 1000);
                }}
                disabled={securityIsAuditing || securitySuccess}
                className="w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md bg-emerald-600 hover:bg-emerald-500 text-white disabled:opacity-50"
              >
                <Icon
                  name="ShieldCheckIcon"
                  size={14}
                  className={securityIsAuditing ? 'animate-spin' : ''}
                />
                {securityIsAuditing
                  ? 'Verifying End-to-End Cryptography Signatures...'
                  : securitySuccess
                    ? 'Vault Audit Completed Successfully ✓'
                    : 'Initiate Automated Vault Security Audit'}
              </button>
            </div>
          </div>
        )}

        {simType === 'kitchen' && (
          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-bold">
                  Kitchen Display System (KDS) Portal
                </span>
                <span className="text-orange-400 font-mono text-[10px] bg-orange-500/10 px-2 py-0.5 rounded">
                  Prep Station Balancing Active
                </span>
              </div>

              <div className="space-y-3">
                {kitchenOrders.map((order, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-950 border border-slate-800/80 rounded-xl p-3 flex justify-between items-center text-xs"
                  >
                    <div>
                      <div className="font-bold text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                        {order.destination} • {order.id}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">{order.items}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                          order.status === 'READY'
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : order.status === 'PREPARING'
                              ? 'bg-amber-500/20 text-amber-400'
                              : 'bg-blue-500/20 text-blue-400'
                        }`}
                      >
                        {order.status}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 block mt-1">
                        Elapsed: {order.elapsed}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setKitchenIsPacing(true);
                  setTimeout(() => {
                    setKitchenIsPacing(false);
                    setKitchenOrders((prev) =>
                      prev.map((order) =>
                        order.status === 'PREPARING'
                          ? { ...order, status: 'READY', elapsed: '5m' }
                          : order
                      )
                    );
                  }, 1000);
                }}
                disabled={kitchenIsPacing || kitchenOrders.every((o) => o.status === 'READY')}
                className="w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md bg-orange-600 hover:bg-orange-500 text-white disabled:opacity-50"
              >
                <Icon name="FireIcon" size={14} className={kitchenIsPacing ? 'animate-spin' : ''} />
                {kitchenIsPacing
                  ? 'Auto-Pacing Kitchen Prep Line...'
                  : kitchenOrders.every((o) => o.status === 'READY')
                    ? 'All Kitchen Orders Dispatched to Runners ✓'
                    : 'AI Optimal Load-Balance Cooking Stations'}
              </button>
            </div>
          </div>
        )}
      </div>

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
