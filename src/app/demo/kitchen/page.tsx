'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

type TicketStatus = 'new' | 'preparing' | 'ready' | 'served';
type TicketSource = 'Room Service' | 'Restaurant POS' | 'QR Order';

interface Ticket {
  id: string;
  table: string;
  source: TicketSource;
  items: { name: string; mods?: string }[];
  status: TicketStatus;
  minutes: number;
  sla: number;
}

interface StockItem {
  name: string;
  qty: number;
  unit: string;
  threshold: number;
  status: 'ok' | 'low' | 'out';
}

const initialTickets: Ticket[] = [
  { id: 'T-041', table: 'Suite 402', source: 'Room Service', items: [{ name: 'Butter Chicken', mods: 'no onion' }, { name: 'Garlic Naan x2' }], status: 'new', minutes: 2, sla: 30 },
  { id: 'T-040', table: 'Table 7', source: 'Restaurant POS', items: [{ name: 'Tandoori Platter' }, { name: 'Lassi x2', mods: 'sweet' }], status: 'new', minutes: 5, sla: 25 },
  { id: 'T-039', table: 'Room 201', source: 'QR Order', items: [{ name: 'Club Sandwich' }, { name: 'Fresh Juice' }], status: 'preparing', minutes: 12, sla: 25 },
  { id: 'T-038', table: 'Table 3', source: 'Restaurant POS', items: [{ name: 'Grilled Salmon' }, { name: 'Caesar Salad' }], status: 'preparing', minutes: 18, sla: 30 },
  { id: 'T-037', table: 'Suite 301', source: 'Room Service', items: [{ name: 'Pasta Arrabiata' }, { name: 'Tiramisu' }], status: 'ready', minutes: 24, sla: 30 },
  { id: 'T-036', table: 'Table 12', source: 'Restaurant POS', items: [{ name: 'Biryani Bowl' }, { name: 'Raita' }], status: 'ready', minutes: 27, sla: 30 },
  { id: 'T-035', table: 'Table 5', source: 'QR Order', items: [{ name: 'Pancake Stack' }, { name: 'Coffee' }], status: 'served', minutes: 32, sla: 30 },
  { id: 'T-034', table: 'Room 305', source: 'Room Service', items: [{ name: 'Veg Thali' }], status: 'served', minutes: 38, sla: 35 },
];

const stations = [
  { name: 'Indian / Tandoor', load: 92, chef: 'Rajan K.', overloaded: true },
  { name: 'Continental', load: 68, chef: 'Pierre L.', overloaded: false },
  { name: 'Grill', load: 74, chef: 'Suresh M.', overloaded: false },
  { name: 'Bakery', load: 45, chef: 'Anita R.', overloaded: false },
  { name: 'Salad', load: 30, chef: 'Priya S.', overloaded: false },
  { name: 'Dessert', load: 55, chef: 'Fatima B.', overloaded: false },
  { name: 'Beverage & Bar', load: 62, chef: 'Dev T.', overloaded: false },
  { name: 'Main Kitchen', load: 78, chef: 'Head Chef A.', overloaded: false },
];

const inventory: StockItem[] = [
  { name: 'Basmati Rice', qty: 45, unit: 'kg', threshold: 20, status: 'ok' },
  { name: 'Chicken Breast', qty: 18, unit: 'kg', threshold: 10, status: 'ok' },
  { name: 'Vine Ripe Tomatoes', qty: 8, unit: 'kg', threshold: 15, status: 'low' },
  { name: 'Full Cream Milk', qty: 4, unit: 'L', threshold: 10, status: 'low' },
  { name: 'Norwegian Salmon Fillets', qty: 0, unit: 'kg', threshold: 5, status: 'out' },
  { name: 'Garlic (peeled)', qty: 3.5, unit: 'kg', threshold: 2, status: 'ok' },
  { name: 'Butter (unsalted)', qty: 6, unit: 'kg', threshold: 4, status: 'ok' },
  { name: 'Fresh Cream', qty: 2, unit: 'L', threshold: 5, status: 'low' },
  { name: 'Paneer', qty: 12, unit: 'kg', threshold: 8, status: 'ok' },
  { name: 'Imported Parmesan', qty: 0, unit: 'kg', threshold: 2, status: 'out' },
];

const statusMeta: Record<TicketStatus, { label: string; bg: string; text: string; border: string }> = {
  new: { label: 'New', bg: '#EFF6FF', text: '#1D4ED8', border: '#93C5FD' },
  preparing: { label: 'Preparing', bg: '#FFFBEB', text: '#92400E', border: '#FCD34D' },
  ready: { label: 'Ready', bg: '#F0FDF4', text: '#166534', border: '#86EFAC' },
  served: { label: 'Served', bg: '#F9FAFB', text: '#6B7280', border: '#E5E7EB' },
};

const sourceBadge: Record<TicketSource, string> = {
  'Room Service': '#F5F3FF',
  'Restaurant POS': '#FFF7ED',
  'QR Order': '#F0FDF4',
};

function SlaTimer({ minutes, sla }: { minutes: number; sla: number }) {
  const [elapsed, setElapsed] = useState(minutes);
  useEffect(() => {
    const t = setInterval(() => setElapsed((e) => e + 1 / 60), 1000);
    return () => clearInterval(t);
  }, []);
  const pct = Math.min((elapsed / sla) * 100, 100);
  const over = elapsed > sla;
  const color = over ? '#9E2A2B' : elapsed > sla * 0.8 ? '#E09F3E' : '#2D6A4F';
  const mins = Math.floor(elapsed);
  const secs = Math.floor((elapsed - mins) * 60);
  return (
    <div className="mt-2">
      <div className="flex items-center justify-between text-[10px] mb-1">
        <span className="font-bold" style={{ color }}>{mins}m {String(secs).padStart(2, '0')}s</span>
        <span className="text-gray-400">SLA {sla}m</span>
      </div>
      <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
        <div className="h-1 rounded-full transition-all duration-1000" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}

function KanbanColumn({ status, tickets, onMove }: { status: TicketStatus; tickets: Ticket[]; onMove: (id: string, to: TicketStatus) => void }) {
  const meta = statusMeta[status];
  const nextStatus: Record<TicketStatus, TicketStatus | null> = { new: 'preparing', preparing: 'ready', ready: 'served', served: null };
  return (
    <div className="flex-1 min-w-[220px]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ background: meta.border }} />
          <span className="text-xs font-bold uppercase tracking-wider text-gray-600">{meta.label}</span>
        </div>
        <span className="text-xs font-bold bg-gray-100 text-gray-500 rounded-full px-2 py-0.5">{tickets.length}</span>
      </div>
      <div className="flex flex-col gap-3">
        {tickets.map((t) => (
          <div key={t.id} className="bg-white rounded-xl border p-3" style={{ borderColor: '#EAEAEA', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div className="flex items-start justify-between mb-1.5">
              <div>
                <div className="text-xs font-bold text-gray-900">{t.id}</div>
                <div className="text-[10px] text-gray-500">{t.table}</div>
              </div>
              <div className="text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: sourceBadge[t.source], color: '#555' }}>{t.source}</div>
            </div>
            <div className="flex flex-col gap-1 mb-2">
              {t.items.map((item, i) => (
                <div key={i} className="text-[11px] text-gray-700">
                  • {item.name}{item.mods && <span className="text-gray-400"> ({item.mods})</span>}
                </div>
              ))}
            </div>
            <SlaTimer minutes={t.minutes} sla={t.sla} />
            {nextStatus[status] && (
              <button onClick={() => onMove(t.id, nextStatus[status]!)} className="mt-2 w-full text-[10px] font-bold py-1.5 rounded-lg border transition-colors hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 border-gray-200 text-gray-500">
                Mark as {statusMeta[nextStatus[status]!].label} →
              </button>
            )}
          </div>
        ))}
        {tickets.length === 0 && (
          <div className="border-2 border-dashed border-gray-100 rounded-xl p-6 text-center text-xs text-gray-400">No tickets</div>
        )}
      </div>
    </div>
  );
}

type TabKey = 'kds' | 'stations' | 'inventory';

export default function KitchenDemoPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('kds');
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);

  const moveTicket = (id: string, to: TicketStatus) => {
    setTickets((ts) => ts.map((t) => t.id === id ? { ...t, status: to } : t));
  };

  const cols: TicketStatus[] = ['new', 'preparing', 'ready', 'served'];

  const tabs: { key: TabKey; label: string; icon: string }[] = [
    { key: 'kds', label: 'Live KDS Board', icon: '📋' },
    { key: 'stations', label: 'Station Capacity', icon: '⚡' },
    { key: 'inventory', label: 'Inventory & Stock', icon: '📦' },
  ];

  return (
    <div className="min-h-screen" style={{ background: '#FAF8F5', fontFamily: 'Manrope, system-ui, sans-serif' }}>
      {/* Topbar */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between" style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.05)' }}>
        <div className="flex items-center gap-4">
          <Link href="/demo" className="text-xs font-semibold text-gray-400 hover:text-orange-500 transition-colors">← Demo Home</Link>
          <div className="w-px h-4 bg-gray-200" />
          <span className="text-sm font-bold text-gray-900">Kitchen Operations & KDS</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-full px-3 py-1 text-xs font-bold text-green-700">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" /> Live Service
          </div>
          <div className="bg-red-50 border border-red-200 rounded-full px-3 py-1 text-xs font-bold text-red-700">⚠ Tandoor Overloaded</div>
        </div>
      </div>

      {/* Tab Nav */}
      <div className="bg-white border-b border-gray-100 px-6">
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)} className={`flex items-center gap-2 px-5 py-3.5 text-sm font-semibold border-b-2 transition-all ${activeTab === tab.key ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
              <span>{tab.icon}</span>{tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-8">
        {/* KDS Board */}
        {activeTab === 'kds' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">Master Orders — Live Kitchen Display</h2>
              <div className="text-xs text-gray-400">{tickets.filter(t => t.status !== 'served').length} active tickets</div>
            </div>
            <div className="flex gap-5 overflow-x-auto pb-4">
              {cols.map((col) => (
                <KanbanColumn key={col} status={col} tickets={tickets.filter((t) => t.status === col)} onMove={moveTicket} />
              ))}
            </div>
          </div>
        )}

        {/* Stations */}
        {activeTab === 'stations' && (
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Kitchen Station Capacity Load</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stations.map((st) => {
                const color = st.overloaded ? '#9E2A2B' : st.load > 70 ? '#E09F3E' : '#2D6A4F';
                const bg = st.overloaded ? '#FEF2F2' : st.load > 70 ? '#FFFBEB' : '#F0FDF4';
                const border = st.overloaded ? '#FCA5A5' : st.load > 70 ? '#FCD34D' : '#86EFAC';
                return (
                  <div key={st.name} className="bg-white rounded-2xl border p-5" style={{ borderColor: st.overloaded ? '#FCA5A5' : '#EAEAEA', boxShadow: `0 4px 20px rgba(0,0,0,0.05)`, outline: st.overloaded ? '2px solid #FCA5A580' : 'none' }}>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-sm font-bold text-gray-900">{st.name}</h3>
                        <div className="text-[10px] text-gray-400 mt-0.5">{st.chef}</div>
                      </div>
                      {st.overloaded && (
                        <div className="text-[10px] font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded-full animate-pulse">OVERLOADED</div>
                      )}
                    </div>
                    <div className="flex items-end gap-2 mb-2">
                      <span className="text-3xl font-bold" style={{ color }}>{st.load}%</span>
                      <span className="text-xs text-gray-400 mb-1">capacity</span>
                    </div>
                    <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden mb-3">
                      <div className="h-2.5 rounded-full transition-all duration-700" style={{ width: `${st.load}%`, background: color }} />
                    </div>
                    <div className="text-[10px] font-semibold px-2 py-1 rounded-lg text-center" style={{ background: bg, color, border: `1px solid ${border}` }}>
                      {st.overloaded ? '🚨 Redistribute load' : st.load > 70 ? '⚠ High demand' : '✅ Operating normally'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Inventory */}
        {activeTab === 'inventory' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">Kitchen Inventory & Stock Levels</h2>
              <div className="flex gap-2">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-green-700"><div className="w-2 h-2 rounded-full bg-green-500" />OK</div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-700"><div className="w-2 h-2 rounded-full bg-amber-400" />Low</div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-red-700"><div className="w-2 h-2 rounded-full bg-red-500" />Out of Stock</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-gray-400 px-5 py-3">Ingredient</th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-gray-400 px-3 py-3">Current Stock</th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-gray-400 px-3 py-3">Threshold</th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-gray-400 px-3 py-3">Level</th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-gray-400 px-3 py-3">Status</th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-gray-400 px-5 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.map((item) => {
                    const pct = item.status === 'out' ? 0 : Math.min((item.qty / item.threshold) * 50, 100);
                    const statusColor = item.status === 'ok' ? { bg: '#F0FDF4', text: '#166534', border: '#86EFAC', bar: '#22C55E' }
                      : item.status === 'low' ? { bg: '#FFFBEB', text: '#92400E', border: '#FCD34D', bar: '#F59E0B' }
                      : { bg: '#FEF2F2', text: '#991B1B', border: '#FCA5A5', bar: '#EF4444' };
                    return (
                      <tr key={item.name} className={`border-b border-gray-50 last:border-0 ${item.status === 'out' ? 'bg-red-50/40' : item.status === 'low' ? 'bg-amber-50/30' : ''}`}>
                        <td className="px-5 py-3 text-sm font-semibold text-gray-800">{item.name}</td>
                        <td className="px-3 py-3">
                          <span className={`text-sm font-bold ${item.status === 'out' ? 'text-red-600' : item.status === 'low' ? 'text-amber-600' : 'text-gray-700'}`}>
                            {item.qty} {item.unit}
                          </span>
                        </td>
                        <td className="px-3 py-3 text-sm text-gray-500">{item.threshold} {item.unit}</td>
                        <td className="px-3 py-3 w-32">
                          <div className="h-1.5 w-full bg-gray-100 rounded-full">
                            <div className="h-1.5 rounded-full transition-all" style={{ width: `${pct}%`, background: statusColor.bar }} />
                          </div>
                        </td>
                        <td className="px-3 py-3">
                          <span className="text-[10px] font-bold px-2 py-1 rounded-full border" style={{ background: statusColor.bg, color: statusColor.text, borderColor: statusColor.border }}>
                            {item.status === 'ok' ? '✅ OK' : item.status === 'low' ? '⚠ Low Stock' : '🚨 Out of Stock'}
                          </span>
                        </td>
                        <td className="px-5 py-3">
                          {item.status !== 'ok' && (
                            <button className="text-[11px] font-bold px-3 py-1.5 rounded-lg border transition-all hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600 border-gray-200 text-gray-500">
                              Requisition Restock
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
