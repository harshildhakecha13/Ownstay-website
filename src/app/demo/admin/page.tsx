'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

type RoomBlock = {
  roomId: string;
  guest: string;
  checkIn: number;
  checkOut: number;
  status: 'occupied' | 'dirty' | 'maintenance' | 'clean' | 'reserved';
};

type WizardStep = 1 | 2 | 3 | 4 | 5;

const kpiData = [
  { label: 'Occupancy Rate', value: '13%', sub: '4/30 rooms', icon: '🏨', trend: '+2%', trendUp: true },
  { label: "Today's Arrivals", value: '9', sub: 'expected today', icon: '📥', trend: 'on track', trendUp: true },
  { label: 'Departures', value: '1', sub: 'by 12:00 PM', icon: '📤', trend: null, trendUp: null },
  { label: 'RevPAR', value: '₹37,400', sub: 'revenue per room', icon: '💰', trend: '+8%', trendUp: true },
  { label: 'Clean Rooms', value: '7', sub: 'ready for guests', icon: '✅', trend: null, trendUp: null, color: '#2D6A4F' },
  { label: 'Dirty Rooms', value: '3', sub: 'awaiting housekeeping', icon: '🧹', trend: null, trendUp: null, color: '#C57E17' },
  { label: 'Maintenance Issues', value: '3', sub: 'open tickets', icon: '🔧', trend: null, trendUp: null, color: '#9E2A2B' },
  { label: 'Active Staff', value: '6/7', sub: '1 on break', icon: '👥', trend: null, trendUp: null, color: '#E85D04' },
];

const aiAlerts = [
  { time: '14:02', type: 'warning', icon: '🧹', msg: 'Room 204 — Housekeeping delayed 28 min past scheduled clean. Reassign?' },
  { time: '13:58', type: 'critical', icon: '🍳', msg: 'Kitchen load at 92% capacity. Indian/Tandoor station overloaded.' },
  { time: '13:45', type: 'info', icon: '📋', msg: 'Guest Ananya Sharma (Suite 402) requested late checkout — 2 PM.' },
  { time: '13:31', type: 'warning', icon: '📦', msg: 'Norwegian Salmon at 0kg. Supplier requisition required before dinner.' },
  { time: '13:15', type: 'info', icon: '🔑', msg: '9 new arrivals confirmed. Digital keys pre-issued to 7 guests.' },
];

const rooms: RoomBlock[] = [
  { roomId: '101 Single', guest: 'Rajesh Kumar', checkIn: 0, checkOut: 3, status: 'occupied' },
  { roomId: '102 Single', guest: 'Priya Nair', checkIn: 2, checkOut: 6, status: 'occupied' },
  { roomId: '103 Single', guest: '', checkIn: 0, checkOut: 1, status: 'dirty' },
  { roomId: '104 Single', guest: '', checkIn: 0, checkOut: 0, status: 'maintenance' },
  { roomId: '201 Double', guest: 'Amit Shah', checkIn: 1, checkOut: 4, status: 'occupied' },
  { roomId: '202 Double', guest: 'Meera Pillai', checkIn: 0, checkOut: 2, status: 'occupied' },
  { roomId: '203 Double', guest: '', checkIn: 0, checkOut: 0, status: 'clean' },
  { roomId: '301 Triple', guest: 'Sharma Family', checkIn: 3, checkOut: 6, status: 'reserved' },
  { roomId: '401 Suite', guest: 'Ananya Sharma', checkIn: 0, checkOut: 5, status: 'occupied' },
];

const days = ['Mon 2', 'Tue 3', 'Wed 4', 'Thu 5', 'Fri 6', 'Sat 7', 'Sun 8'];

const statusColors: Record<string, { bg: string; border: string; text: string; label: string }> = {
  occupied: { bg: '#EFF6FF', border: '#93C5FD', text: '#1D4ED8', label: 'Occupied' },
  dirty: { bg: '#FFFBEB', border: '#FCD34D', text: '#92400E', label: 'Dirty' },
  maintenance: { bg: '#FEF2F2', border: '#FCA5A5', text: '#991B1B', label: 'Maint.' },
  clean: { bg: '#F0FDF4', border: '#86EFAC', text: '#166534', label: 'Clean' },
  reserved: { bg: '#F5F3FF', border: '#C4B5FD', text: '#6D28D9', label: 'Reserved' },
};

const wizardSteps = [
  { no: 1, title: 'Find Reservation' },
  { no: 2, title: 'ID Verification' },
  { no: 3, title: 'Room & Key' },
  { no: 4, title: 'Agreement' },
  { no: 5, title: 'Complete' },
];

function CheckInWizard({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<WizardStep>(1);
  const [guestSearch, setGuestSearch] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-orange-500 mb-0.5">Front Desk</div>
            <h2 className="text-base font-bold text-gray-900">Guest Check-In Wizard</h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">✕</button>
        </div>

        {/* Steps */}
        <div className="flex px-6 py-3 border-b border-gray-50 gap-1">
          {wizardSteps.map((ws) => (
            <div key={ws.no} className="flex-1 flex flex-col items-center gap-1">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-all ${step > ws.no ? 'bg-green-500 text-white' : step === ws.no ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                {step > ws.no ? '✓' : ws.no}
              </div>
              <div className={`text-[9px] font-semibold text-center leading-tight ${step === ws.no ? 'text-orange-500' : step > ws.no ? 'text-green-600' : 'text-gray-400'}`}>
                {ws.title}
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="px-6 py-5 min-h-[180px]">
          {step === 1 && (
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Find Reservation</h3>
              <input
                type="text"
                placeholder="Search by name, booking ID, or phone..."
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-orange-400 focus:outline-none"
                value={guestSearch}
                onChange={(e) => setGuestSearch(e.target.value)}
              />
              {guestSearch.length > 1 && (
                <div className="mt-2 border border-gray-100 rounded-xl overflow-hidden">
                  {['Rohan Verma — #BK-20240902 — Suite 301', 'Ananya Sharma — #BK-20240891 — Suite 402'].map((r) => (
                    <div key={r} onClick={() => setGuestSearch(r.split(' — ')[0])} className="px-4 py-2.5 text-sm hover:bg-orange-50 cursor-pointer border-b border-gray-50 last:border-0 font-medium text-gray-700">{r}</div>
                  ))}
                </div>
              )}
            </div>
          )}
          {step === 2 && (
            <div>
              <h3 className="font-bold text-gray-800 mb-3">ID Verification</h3>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex gap-4 items-center">
                <div className="w-16 h-20 rounded-lg bg-blue-50 border-2 border-blue-200 flex flex-col items-center justify-center gap-1 shrink-0">
                  <span className="text-xl">🪪</span>
                  <div className="text-[9px] text-blue-400 font-bold uppercase tracking-wider">Passport</div>
                </div>
                <div className="flex flex-col gap-2">
                  {['Photo matches guest', 'Document not expired', 'Address captured'].map((item) => (
                    <label key={item} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                      <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Room & Digital Key Assignment</h3>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {['Suite 301', 'Suite 305', 'Double 201', 'Single 105', 'Suite 402 ✦'].map((r) => (
                  <button key={r} onClick={() => setSelectedRoom(r)} className={`rounded-xl border py-2.5 text-xs font-semibold transition-all ${selectedRoom === r ? 'border-orange-400 bg-orange-50 text-orange-600' : 'border-gray-200 bg-white text-gray-600'}`}>{r}</button>
                ))}
              </div>
              {selectedRoom && <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-2 text-xs text-green-700 font-medium">🔑 Digital key issued to guest&apos;s registered mobile.</div>}
            </div>
          )}
          {step === 4 && (
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Guest Agreement</h3>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-xs text-gray-500 leading-relaxed h-24 overflow-y-auto mb-3">
                The guest acknowledges check-in policies and hotel rules. By proceeding, the guest agrees to the property&apos;s terms including no-smoking policy, responsibility for damages, and check-out time of 11:00 AM unless late checkout has been confirmed...
              </div>
              <label className="flex items-center gap-3 cursor-pointer">
                <div onClick={() => setAgreed(!agreed)} className={`w-10 h-5 rounded-full transition-all relative ${agreed ? 'bg-orange-500' : 'bg-gray-200'}`}>
                  <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all ${agreed ? 'left-5' : 'left-0.5'}`} />
                </div>
                <span className="text-sm font-medium text-gray-700">Guest confirms agreement</span>
              </label>
            </div>
          )}
          {step === 5 && (
            <div className="flex flex-col items-center py-4 text-center gap-3">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Check-In Complete!</h3>
                <p className="text-sm text-gray-500">Room assigned. Digital key sent via SMS.</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-orange-50 border border-orange-200 rounded-lg px-3 py-1.5 text-xs font-semibold text-orange-600">🔑 Key Issued</div>
                <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-1.5 text-xs font-semibold text-green-600">✅ Folio Created</div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1.5 text-xs font-semibold text-blue-600">📱 SMS Sent</div>
              </div>
              <button onClick={onClose} className="bg-orange-500 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-orange-600 transition-colors">Done</button>
            </div>
          )}
        </div>

        {step < 5 && (
          <div className="flex items-center justify-between px-6 py-3 border-t border-gray-100 bg-gray-50">
            <button onClick={() => setStep((s) => Math.max(1, s - 1) as WizardStep)} disabled={step === 1} className="text-sm font-semibold text-gray-400 hover:text-gray-600 disabled:opacity-30">← Back</button>
            <span className="text-xs text-gray-400">Step {step} of 5</span>
            <button onClick={() => setStep((s) => Math.min(5, s + 1) as WizardStep)} className="bg-orange-500 text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-orange-600 transition-colors">
              {step === 4 ? 'Complete →' : 'Next →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminDemoPage() {
  const [wizardOpen, setWizardOpen] = useState(false);
  const [alertIdx, setAlertIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setAlertIdx((i) => (i + 1) % aiAlerts.length), 4000);
    return () => clearInterval(t);
  }, []);

  const colW = 80;

  return (
    <div className="min-h-screen" style={{ background: '#FAF8F5', fontFamily: 'Manrope, system-ui, sans-serif' }}>
      {/* Topbar */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between" style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.05)' }}>
        <div className="flex items-center gap-4">
          <Link href="/demo" className="text-xs font-semibold text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-1">← Demo Home</Link>
          <div className="w-px h-4 bg-gray-200" />
          <span className="text-sm font-bold text-gray-900">Admin Operations Suite</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-full px-3 py-1 text-xs font-bold text-green-700">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" /> Live
          </div>
          <button onClick={() => setWizardOpen(true)} className="bg-orange-500 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-orange-600 transition-colors">
            + New Check-In
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col gap-8">
        {/* KPI Grid */}
        <section>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Live Operations Dashboard</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {kpiData.map((k) => (
              <div key={k.label} className="bg-white rounded-2xl p-4 flex flex-col gap-1 border border-gray-100" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <div className="flex items-start justify-between">
                  <span className="text-xl">{k.icon}</span>
                  {k.trend && (
                    <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${k.trendUp ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{k.trend}</span>
                  )}
                </div>
                <div className="text-xl font-bold mt-1" style={{ color: k.color || '#1A1A1A' }}>{k.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 leading-tight">{k.label}</div>
                <div className="text-[10px] text-gray-400">{k.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Feed */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">AI Intelligence Feed</h2>
            <div className="bg-orange-50 border border-orange-200 rounded-full px-2 py-0.5 text-[10px] font-bold text-orange-600">✦ AI Active</div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
            {aiAlerts.map((a, i) => (
              <div key={i} className={`flex items-start gap-4 px-5 py-3 border-b border-gray-50 last:border-0 transition-all duration-500 ${i === alertIdx ? 'bg-orange-50/60' : ''}`}>
                <span className="text-base shrink-0">{a.icon}</span>
                <p className="text-sm text-gray-700 flex-1 leading-snug">{a.msg}</p>
                <div className="flex items-center gap-2 shrink-0">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${a.type === 'critical' ? 'bg-red-100 text-red-700' : a.type === 'warning' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>{a.type}</span>
                  <span className="text-[10px] text-gray-400">{a.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gantt */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">Front Desk — Room Gantt Timeline</h2>
            <div className="text-xs text-gray-400">Week of Sep 2–8, 2024</div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 overflow-x-auto" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
            <div style={{ minWidth: colW * 7 + 160 }}>
              <div className="flex mb-1">
                <div className="w-40 shrink-0" />
                {days.map((d) => (
                  <div key={d} className="text-center text-[10px] font-bold uppercase tracking-wider text-gray-400 pb-2 border-b border-gray-100" style={{ width: colW }}>{d}</div>
                ))}
              </div>
              {rooms.map((room) => {
                const s = statusColors[room.status];
                const blockSpan = room.status === 'clean' || room.status === 'maintenance' ? 1 : Math.max(1, room.checkOut - room.checkIn);
                return (
                  <div key={room.roomId} className="flex items-center border-b border-gray-50 py-1" style={{ height: 40 }}>
                    <div className="w-40 shrink-0 text-xs font-semibold text-gray-600 pr-2 truncate">{room.roomId}</div>
                    <div className="flex relative" style={{ width: colW * 7 }}>
                      {days.map((_, idx) => <div key={idx} className="border-l border-gray-50" style={{ width: colW, height: 30 }} />)}
                      {room.status !== 'clean' && (
                        <div className="absolute top-0.5 rounded-lg flex items-center px-2 text-[10px] font-semibold border truncate" style={{ left: room.checkIn * colW, width: Math.max(blockSpan, 1) * colW - 4, height: 26, background: s.bg, borderColor: s.border, color: s.text }}>
                          {room.status === 'maintenance' ? '🔧 ' : room.status === 'dirty' ? '🧹 ' : ''}{room.guest || s.label}
                        </div>
                      )}
                      {room.status === 'clean' && (
                        <div className="absolute top-0.5 rounded-lg flex items-center px-2 text-[10px] font-semibold border" style={{ left: 0, width: colW * 7 - 4, height: 26, background: '#F0FDF4', borderColor: '#86EFAC', color: '#166534' }}>✅ Clean & Ready</div>
                      )}
                    </div>
                  </div>
                );
              })}
              <div className="flex gap-4 mt-4 flex-wrap">
                {Object.entries(statusColors).map(([key, val]) => (
                  <div key={key} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: val.text }}>
                    <div className="w-3 h-3 rounded-sm border" style={{ background: val.bg, borderColor: val.border }} />{val.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 flex items-center justify-between text-white">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">Quick Action</div>
            <h3 className="text-base font-bold mb-1">9 guests arriving today</h3>
            <p className="text-sm opacity-80">Use the 5-step check-in wizard to assign rooms and issue digital keys.</p>
          </div>
          <button onClick={() => setWizardOpen(true)} className="bg-white text-orange-600 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-orange-50 transition-colors shrink-0">
            Start Check-In →
          </button>
        </div>
      </div>

      {wizardOpen && <CheckInWizard onClose={() => setWizardOpen(false)} />}
    </div>
  );
}
