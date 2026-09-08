'use client';

import { useState } from 'react';
import Link from 'next/link';

interface GuestProfile {
  id: string;
  name: string;
  avatar: string;
  room: string;
  status: 'In-house' | 'Arriving Tomorrow' | 'Checked Out' | 'No Show';
  tier: 'Diamond Elite' | 'Platinum' | 'Gold' | 'Club Member';
  isVip: boolean;
  spend: string;
  phone: string;
  email: string;
  preferences: string[];
  tempPref: number;
  pillowPref: string;
  stayHistory: Array<{
    date: string;
    room: string;
    nights: number;
    amount: string;
  }>;
  chatHistory: Array<{
    id: string;
    sender: 'guest' | 'ai' | 'agent';
    text: string;
    time: string;
    status?: 'sent' | 'delivered' | 'read';
  }>;
}

const initialGuests: GuestProfile[] = [
  {
    id: 'g1',
    name: 'Ananya Sharma',
    avatar: 'AS',
    room: 'Suite 402',
    status: 'In-house',
    tier: 'Diamond Elite',
    isVip: true,
    spend: '₹1,84,200',
    phone: '+91 98765 43210',
    email: 'ananya.sharma@gmail.com',
    preferences: ['Gluten-Free Diet', 'Complimentary Late Checkout', 'High Floor Suite'],
    tempPref: 21,
    pillowPref: 'Feather Pillow',
    stayHistory: [
      { date: 'Sep 2–5, 2024', room: 'Suite 402', nights: 3, amount: '₹72,000' },
      { date: 'Apr 12–16, 2024', room: 'Suite 402', nights: 4, amount: '₹84,000' },
      { date: 'Dec 22–25, 2023', room: 'Room 201', nights: 3, amount: '₹28,200' },
    ],
    chatHistory: [
      {
        id: 'c1',
        sender: 'ai',
        text: 'Good afternoon, Ms. Sharma! Welcome to your suite. I am your personal digital butler. Please let me know if you need anything.',
        time: '14:00',
        status: 'read',
      },
      {
        id: 'c2',
        sender: 'guest',
        text: 'Hello, thanks! Can we please get 2 extra feather pillows sent up?',
        time: '14:22',
        status: 'read',
      },
      {
        id: 'c3',
        sender: 'ai',
        text: 'Certainly! I have scheduled 2 feather pillows via our Housekeeping queue. They will arrive in approx. 6 minutes.',
        time: '14:23',
        status: 'read',
      },
    ],
  },
  {
    id: 'g2',
    name: 'Amit Shah',
    avatar: 'AS',
    room: 'Room 201',
    status: 'In-house',
    tier: 'Platinum',
    isVip: true,
    spend: '₹1,20,500',
    phone: '+91 99887 76655',
    email: 'amit.shah@corporate.com',
    preferences: ['Morning Newspaper', 'Extra Hangers', 'Decaf Espresso'],
    tempPref: 22,
    pillowPref: 'Memory Foam',
    stayHistory: [
      { date: 'Sep 1–6, 2024', room: 'Room 201', nights: 5, amount: '₹65,000' },
      { date: 'Jul 15–18, 2024', room: 'Room 104', nights: 3, amount: '₹39,000' },
    ],
    chatHistory: [
      {
        id: 'c1',
        sender: 'ai',
        text: 'Welcome back to Ownstay, Mr. Shah! Your direct business rate has been applied to this stay.',
        time: '11:15',
        status: 'read',
      },
    ],
  },
  {
    id: 'g3',
    name: 'Sarah Jenkins',
    avatar: 'SJ',
    room: 'Room 304',
    status: 'Arriving Tomorrow',
    tier: 'Diamond Elite',
    isVip: true,
    spend: '₹2,45,000',
    phone: '+1 (555) 019-2834',
    email: 'sarah.j@techcorp.io',
    preferences: ['Yoga Mat in Room', 'Almond Milk', 'Quiet Room Corner'],
    tempPref: 20,
    pillowPref: 'Orthopedic Pillow',
    stayHistory: [
      { date: 'May 10–16, 2024', room: 'Suite 405', nights: 6, amount: '₹1,50,000' },
      { date: 'Feb 20–24, 2024', room: 'Suite 405', nights: 4, amount: '₹95,000' },
    ],
    chatHistory: [
      {
        id: 'c1',
        sender: 'ai',
        text: 'Hello Ms. Jenkins! This is Ownstay concierge. We see you are arriving tomorrow. Would you like us to pre-schedule your private car pickup?',
        time: '09:30',
        status: 'delivered',
      },
    ],
  },
  {
    id: 'g4',
    name: 'Rajesh Kumar',
    avatar: 'RK',
    room: 'Room 101',
    status: 'Checked Out',
    tier: 'Gold',
    isVip: false,
    spend: '₹54,600',
    phone: '+91 98112 23344',
    email: 'rajesh.k@gmail.com',
    preferences: ['Vegetarian Meals Only', 'Extra Towels'],
    tempPref: 23,
    pillowPref: 'Standard Firm',
    stayHistory: [
      { date: 'Sep 2–4, 2024', room: 'Room 101', nights: 2, amount: '₹24,000' },
      { date: 'Jun 12–15, 2024', room: 'Room 105', nights: 3, amount: '₹30,600' },
    ],
    chatHistory: [
      {
        id: 'c1',
        sender: 'ai',
        text: 'Your express checkout has been completed, Mr. Kumar! The receipt was dispatched to your email. Safe travels!',
        time: '11:02',
        status: 'read',
      },
    ],
  },
];

const messageTemplates = [
  {
    id: 't1',
    label: 'Check-In Greeting',
    text: 'Welcome to Ownstay! Your room is clean and ready. Tap this link to fetch your Mobile Keycard instantly: keys.ownstay.com/f721a',
  },
  {
    id: 't2',
    label: 'Mid-Stay Feedback',
    text: 'How is everything with your stay so far? If there is anything we can improve, please text us directly here!',
  },
  {
    id: 't3',
    label: 'Late Checkout Compl.',
    text: 'Complimentary Late Checkout! As a VIP elite member, we have reserved Room 412 for you until 2:00 PM comped. Tap to confirm.',
  },
  {
    id: 't4',
    label: 'Post-Stay Survey',
    text: 'Thank you for staying with us! We would highly appreciate it if you could share your feedback here: reviews.ownstay.com',
  },
];

export default function CrmDemoPage() {
  const [guests, setGuests] = useState<GuestProfile[]>(initialGuests);
  const [selectedGuestId, setSelectedGuestId] = useState<string>('g1');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'All' | 'VIP Only' | 'In-house'>('All');
  const [newPreference, setNewPreference] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatInput, setChatInput] = useState('');

  const selectedGuest = guests.find((g) => g.id === selectedGuestId) || guests[0];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredGuests = guests.filter((g) => {
    const matchesSearch =
      g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.room.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.tier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === 'All' ||
      (filter === 'VIP Only' && g.isVip) ||
      (filter === 'In-house' && g.status === 'In-house');
    return matchesSearch && matchesFilter;
  });

  const toggleVip = (id: string) => {
    setGuests((prev) => prev.map((g) => (g.id === id ? { ...g, isVip: !g.isVip } : g)));
  };

  const handleTempChange = (val: number) => {
    setGuests((prev) => prev.map((g) => (g.id === selectedGuest.id ? { ...g, tempPref: val } : g)));
  };

  const handlePillowChange = (val: string) => {
    setGuests((prev) =>
      prev.map((g) => (g.id === selectedGuest.id ? { ...g, pillowPref: val } : g))
    );
  };

  const addPreference = () => {
    if (!newPreference.trim()) return;
    setGuests((prev) =>
      prev.map((g) => {
        if (g.id === selectedGuest.id) {
          return {
            ...g,
            preferences: [...g.preferences, newPreference.trim()],
          };
        }
        return g;
      })
    );
    setNewPreference('');
  };

  const removePreference = (pref: string) => {
    setGuests((prev) =>
      prev.map((g) => {
        if (g.id === selectedGuest.id) {
          return {
            ...g,
            preferences: g.preferences.filter((p) => p !== pref),
          };
        }
        return g;
      })
    );
  };

  const handleSendManualChat = () => {
    if (!chatInput.trim()) return;
    const text = chatInput.trim();
    setChatInput('');

    // Append Guest Msg
    const newMsg = {
      id: Math.random().toString(),
      sender: 'agent' as const,
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent' as const,
    };

    setGuests((prev) =>
      prev.map((g) => {
        if (g.id === selectedGuest.id) {
          return {
            ...g,
            chatHistory: [...g.chatHistory, newMsg],
          };
        }
        return g;
      })
    );

    // Simulate Guest Auto-reply after 1.2 seconds
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const autoResponse = {
        id: Math.random().toString(),
        sender: 'guest' as const,
        text: 'That sounds perfect. Thank you for always remembering my preferences!',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'read' as const,
      };

      setGuests((prev) =>
        prev.map((g) => {
          if (g.id === selectedGuest.id) {
            return {
              ...g,
              chatHistory: [...g.chatHistory, autoResponse],
            };
          }
          return g;
        })
      );
    }, 1500);
  };

  const sendTemplateMessage = (templateText: string) => {
    const newMsg = {
      id: Math.random().toString(),
      sender: 'ai' as const,
      text: templateText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent' as const,
    };

    setGuests((prev) =>
      prev.map((g) => {
        if (g.id === selectedGuest.id) {
          return {
            ...g,
            chatHistory: [...g.chatHistory, newMsg],
          };
        }
        return g;
      })
    );

    // Dynamic reply based on template
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      let replyText = 'Thanks for the message!';
      if (templateText.includes('Complimentary Late Checkout')) {
        replyText =
          'Oh wow! complimentary until 2 PM? Yes please, confirm that for me immediately. Thank you!';
      } else if (templateText.includes('Mid-Stay')) {
        replyText = 'The service has been incredible. The digital keycard worked perfectly!';
      } else if (templateText.includes('ready')) {
        replyText = 'Brilliant, landing now and heading straight to Room 412!';
      } else if (templateText.includes('feedback')) {
        replyText = 'Will do, 10/10 stars for the automated concierge!';
      }

      const replyMsg = {
        id: Math.random().toString(),
        sender: 'guest' as const,
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'read' as const,
      };

      setGuests((prev) =>
        prev.map((g) => {
          if (g.id === selectedGuest.id) {
            // Also perform side effects
            let updatedPrefs = g.preferences;
            if (
              templateText.includes('Complimentary Late Checkout') &&
              !g.preferences.includes('Complimentary Late Checkout')
            ) {
              updatedPrefs = [...g.preferences, 'Complimentary Late Checkout'];
            }
            return {
              ...g,
              preferences: updatedPrefs,
              chatHistory: [...g.chatHistory, replyMsg],
            };
          }
          return g;
        })
      );
    }, 1800);
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: '#FAF8F5', fontFamily: 'Manrope, system-ui, sans-serif' }}
    >
      {/* Topbar */}
      <div
        className="sticky top-0 z-40 bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between"
        style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.05)' }}
      >
        <div className="flex items-center gap-4">
          <Link
            href="/demo"
            className="text-xs font-semibold text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-1"
          >
            ← Demo Home
          </Link>
          <div className="w-px h-4 bg-gray-200" />
          <span className="text-sm font-bold text-gray-900">Guest Profiles & CRM Sandbox</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-purple-50 border border-purple-200 rounded-full px-3 py-1 text-xs font-bold text-purple-700">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse inline-block" />{' '}
            Live CRM Sync
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col gap-6">
        {/* KPI Row */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total CRM Profiles', value: '1,248', icon: '👥', color: 'text-blue-600' },
            { label: 'Active VIP Members', value: '184', icon: '👑', color: 'text-amber-500' },
            {
              label: 'Auto Preference Matches',
              value: '3,492',
              icon: '⚡',
              color: 'text-green-600',
            },
            { label: 'WhatsApp Opt-In Rate', value: '96.4%', icon: '💬', color: 'text-purple-600' },
          ].map((kpi, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-gray-100 flex items-center gap-4 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-2xl">
                {kpi.icon}
              </div>
              <div>
                <div className="text-2xl font-extrabold text-gray-900 leading-tight">
                  {kpi.value}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-1">
                  {kpi.label}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Main Workspace Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Guest Directory (35%) */}
          <div className="lg:col-span-4 flex flex-col gap-4 bg-white rounded-3xl border border-gray-100 p-5 shadow-sm max-h-[800px]">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider">
                Guest Directory
              </h2>
              <span className="text-xs text-gray-400 font-mono">{filteredGuests.length} found</span>
            </div>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search name, room, tier..."
                className="w-full bg-gray-50 border border-gray-200/80 rounded-xl pl-9 pr-4 py-2 text-xs text-gray-800 focus:outline-none focus:border-purple-500"
              />
              <span className="absolute left-3.5 top-3 text-gray-400 text-xs">🔍</span>
            </div>

            {/* Filter Pills */}
            <div className="flex gap-1.5 border-b border-gray-100 pb-3">
              {(['All', 'VIP Only', 'In-house'] as const).map((opt) => (
                <button
                  key={opt}
                  onClick={() => setFilter(opt)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                    filter === opt
                      ? 'bg-purple-600 text-white shadow-sm shadow-purple-200'
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* Directory List */}
            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
              {filteredGuests.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGuestId(g.id)}
                  className={`w-full text-left p-3 rounded-2xl border transition-all flex items-center justify-between ${
                    selectedGuest.id === g.id
                      ? 'border-purple-200 bg-purple-50/40 shadow-sm shadow-purple-50'
                      : 'border-transparent hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                        g.isVip
                          ? 'bg-amber-100 text-amber-700 border border-amber-200'
                          : 'bg-purple-50 text-purple-700 border border-purple-100'
                      }`}
                    >
                      {g.avatar}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                        {g.name}
                        {g.isVip && <span className="text-[9px] text-amber-600">👑</span>}
                      </div>
                      <div className="text-[10px] text-gray-400 mt-0.5">
                        {g.room} · {g.tier}
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span
                      className={`text-[9px] font-bold px-2 py-0.5 rounded-full inline-block ${
                        g.status === 'In-house'
                          ? 'bg-green-50 text-green-700'
                          : g.status === 'Arriving Tomorrow'
                            ? 'bg-blue-50 text-blue-700'
                            : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {g.status}
                    </span>
                    <div className="text-[10px] text-gray-400 font-mono mt-1">{g.spend}</div>
                  </div>
                </button>
              ))}
              {filteredGuests.length === 0 && (
                <div className="text-center py-8 text-gray-400 text-xs font-medium">
                  No guest matching &quot;{searchTerm}&quot;
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Profile Detail + Chat Simulator (8 columns total) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Top Section: Rich Profile Detail Card */}
            <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm flex flex-col md:flex-row gap-6 justify-between items-start">
              <div className="flex-1 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl border ${
                    selectedGuest.isVip
                      ? 'bg-amber-100 text-amber-700 border-amber-300'
                      : 'bg-purple-100 text-purple-700 border-purple-200'
                  }`}
                >
                  {selectedGuest.avatar}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h1 className="text-xl font-extrabold text-gray-900">{selectedGuest.name}</h1>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2.5 py-0.5 rounded-full font-bold">
                      {selectedGuest.tier}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {selectedGuest.status === 'In-house'
                      ? `Current In-house Guest in ${selectedGuest.room}`
                      : `${selectedGuest.status}`}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-2 text-[11px] text-gray-400 font-medium">
                    <span>📞 {selectedGuest.phone}</span>
                    <span>✉️ {selectedGuest.email}</span>
                  </div>
                </div>
              </div>

              {/* Action Actions */}
              <div className="flex flex-row md:flex-col gap-3 shrink-0 items-start md:items-end w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 font-semibold">VIP Status</span>
                  <button
                    onClick={() => toggleVip(selectedGuest.id)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      selectedGuest.isVip ? 'bg-amber-500' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        selectedGuest.isVip ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
                <div className="text-left md:text-right">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                    Total Hospitality Spend
                  </span>
                  <span className="text-lg font-black text-purple-700 font-mono">
                    {selectedGuest.spend}
                  </span>
                </div>
              </div>
            </div>

            {/* Split Grid for Preferences + Stay History & WhatsApp Message Simulator */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Preferences & Stay History */}
              <div className="flex flex-col gap-6">
                {/* Preference Panel */}
                <div className="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm space-y-4">
                  <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                    <span>🎨</span> Automated Preferences
                  </h3>

                  {/* Temp Slide Preference */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold text-gray-700">
                      <span>Preferred Room Temp</span>
                      <span className="text-purple-600 font-mono">{selectedGuest.tempPref}°C</span>
                    </div>
                    <input
                      type="range"
                      min="18"
                      max="26"
                      value={selectedGuest.tempPref}
                      onChange={(e) => handleTempChange(Number(e.target.value))}
                      className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-purple-600"
                    />
                  </div>

                  {/* Pillow preference */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 block">
                      Preferred Pillow Choice
                    </label>
                    <select
                      value={selectedGuest.pillowPref}
                      onChange={(e) => handlePillowChange(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-800 focus:outline-none"
                    >
                      <option value="Feather Pillow">Feather Pillow (Complementary VIP)</option>
                      <option value="Memory Foam">Memory Foam Pillow</option>
                      <option value="Orthopedic Pillow">Orthopedic Pillow</option>
                      <option value="Standard Firm">Standard Firm</option>
                    </select>
                  </div>

                  {/* Preference tags */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-700 block">
                      Learned AI Preference Flags
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedGuest.preferences.map((pref) => (
                        <span
                          key={pref}
                          className="inline-flex items-center gap-1 text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-100 px-2.5 py-1 rounded-lg"
                        >
                          {pref}
                          <button
                            onClick={() => removePreference(pref)}
                            className="hover:text-red-500 font-normal ml-1"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2 mt-2">
                      <input
                        type="text"
                        value={newPreference}
                        onChange={(e) => setNewPreference(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && addPreference()}
                        placeholder="Add preference (e.g. Vegan)"
                        className="bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-[11px] text-gray-800 focus:outline-none flex-1"
                      />
                      <button
                        onClick={addPreference}
                        className="bg-purple-600 text-white px-3 py-1 rounded-lg text-xs font-bold hover:bg-purple-700"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Stay History Panel */}
                <div className="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm space-y-3">
                  <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                    <span>📜</span> Hotel Booking History
                  </h3>
                  <div className="divide-y divide-gray-100">
                    {selectedGuest.stayHistory.map((stay, idx) => (
                      <div key={idx} className="py-2.5 flex justify-between items-center text-xs">
                        <div>
                          <div className="font-bold text-gray-800">{stay.room}</div>
                          <div className="text-[10px] text-gray-400 mt-0.5">
                            {stay.date} · {stay.nights} nights
                          </div>
                        </div>
                        <div className="font-bold font-mono text-purple-700">{stay.amount}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* WhatsApp Message Simulator */}
              <div className="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">💬</span>
                    <div>
                      <h3 className="text-xs font-bold text-gray-900 leading-tight">
                        WhatsApp CRM Simulator
                      </h3>
                      <p className="text-[9px] text-green-600 font-bold uppercase tracking-wider mt-0.5">
                        Live Autopilot Active
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-gray-400 font-mono">Meta Business Cloud</span>
                </div>

                {/* Message Templates Box */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Select Milestone Template
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {messageTemplates.map((tpl) => (
                      <button
                        key={tpl.id}
                        onClick={() => sendTemplateMessage(tpl.text)}
                        className="p-2 border border-purple-100 bg-purple-50/10 hover:bg-purple-50/50 rounded-xl text-left text-[10px] font-semibold text-purple-900 hover:border-purple-300 transition-colors"
                      >
                        🚀 {tpl.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated Chat Feed */}
                <div className="flex-1 bg-slate-50 rounded-2xl p-4 min-h-[220px] max-h-[300px] overflow-y-auto space-y-2.5 flex flex-col justify-end text-[11px] border border-gray-100">
                  {selectedGuest.chatHistory.map((msg) => (
                    <div
                      key={msg.id}
                      className={`max-w-[85%] rounded-2xl p-2.5 leading-relaxed ${
                        msg.sender === 'guest'
                          ? 'bg-white text-gray-800 self-start rounded-tl-none border border-gray-100 shadow-sm'
                          : msg.sender === 'ai'
                            ? 'bg-purple-600 text-white self-end rounded-tr-none shadow-sm shadow-purple-100'
                            : 'bg-emerald-600 text-white self-end rounded-tr-none shadow-sm shadow-emerald-100'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[9px] opacity-75 mb-1 gap-2">
                        <span className="font-bold">
                          {msg.sender === 'guest'
                            ? selectedGuest.name
                            : msg.sender === 'ai'
                              ? 'Ownstay AI Butler'
                              : 'Operator Staff'}
                        </span>
                        <span>{msg.time}</span>
                      </div>
                      <div>{msg.text}</div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="bg-white text-gray-500 self-start rounded-2xl rounded-tl-none p-2.5 border border-gray-100 shadow-sm text-[10px] italic flex items-center gap-1.5 shrink-0">
                      <span
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0ms' }}
                      />
                      <span
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: '150ms' }}
                      />
                      <span
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: '300ms' }}
                      />
                      <span>{selectedGuest.name} is typing...</span>
                    </div>
                  )}
                </div>

                {/* Chat Manual Input */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendManualChat()}
                    placeholder="Type manual reply as staff..."
                    className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-600 flex-1"
                  />
                  <button
                    onClick={handleSendManualChat}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
