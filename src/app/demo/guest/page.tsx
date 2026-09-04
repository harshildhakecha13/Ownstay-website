'use client';
import { useState } from 'react';
import Link from 'next/link';

type GuestTab = 'home' | 'food' | 'amenities' | 'issue' | 'desk' | 'orders';

interface DishItem {
  id: string;
  name: string;
  desc: string;
  price: number;
  eta: string;
  allergens: string[];
  emoji: string;
  qty: number;
}

const dishes: DishItem[] = [
  {
    id: 'd1',
    name: 'Butter Chicken',
    desc: 'Slow-cooked chicken in rich tomato cream sauce',
    price: 420,
    eta: '18–22 min',
    allergens: ['Dairy', 'Gluten'],
    emoji: '🍛',
    qty: 0,
  },
  {
    id: 'd2',
    name: 'Margherita Pizza',
    desc: 'Wood-fired base with fresh mozzarella & basil',
    price: 380,
    eta: '20–25 min',
    allergens: ['Dairy', 'Gluten'],
    emoji: '🍕',
    qty: 0,
  },
  {
    id: 'd3',
    name: 'Caesar Salad',
    desc: 'Crispy romaine with parmesan, croutons & dressing',
    price: 280,
    eta: '8–10 min',
    allergens: ['Dairy', 'Gluten'],
    emoji: '🥗',
    qty: 0,
  },
  {
    id: 'd4',
    name: 'Club Sandwich',
    desc: 'Triple-decker with grilled chicken, bacon & avocado',
    price: 320,
    eta: '12–15 min',
    allergens: ['Gluten'],
    emoji: '🥪',
    qty: 0,
  },
  {
    id: 'd5',
    name: 'Mango Lassi',
    desc: 'Chilled yogurt-mango blend with cardamom',
    price: 120,
    eta: '5 min',
    allergens: ['Dairy'],
    emoji: '🥛',
    qty: 0,
  },
];

const amenities = [
  { id: 'a1', label: 'Bath Towels', icon: '🛁', max: 5 },
  { id: 'a2', label: 'Extra Pillows', icon: '🛏', max: 4 },
  { id: 'a3', label: 'Full Room Cleaning', icon: '🧹', max: 1 },
  { id: 'a4', label: 'Toiletries Set', icon: '🧴', max: 3 },
  { id: 'a5', label: 'Mineral Water (500ml)', icon: '💧', max: 10 },
  { id: 'a6', label: 'Extra Blanket', icon: '🛌', max: 2 },
];

const maintenanceIssues = [
  { id: 'm1', label: 'AC / Temperature', icon: '❄️' },
  { id: 'm2', label: 'Smart TV', icon: '📺' },
  { id: 'm3', label: 'Wi-Fi / Internet', icon: '📶' },
  { id: 'm4', label: 'Plumbing', icon: '🚿' },
  { id: 'm5', label: 'Door / Keycard', icon: '🔑' },
  { id: 'm6', label: 'Lighting', icon: '💡' },
];

const liveOrders = [
  {
    id: 'O-041',
    label: 'Butter Chicken + Naan',
    status: 'Preparing in Kitchen',
    staff: 'Chef Rajan K.',
    eta: '12 min',
    pct: 40,
    icon: '🍛',
  },
  {
    id: 'O-039',
    label: 'Extra Pillows × 2',
    status: 'Assigned to housekeeping',
    staff: 'Divya M.',
    eta: '8 min',
    pct: 60,
    icon: '🛏',
  },
  {
    id: 'O-038',
    label: 'Room Cleaning Scheduled',
    status: 'En route to Suite 402',
    staff: 'Sunita R.',
    eta: '3 min',
    pct: 85,
    icon: '🧹',
  },
];

function PhoneStatus() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[11px] font-bold text-gray-800">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <span>📶</span>
        <span>🔋</span>
      </div>
    </div>
  );
}

function HomeTab() {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-5 text-white">
        <div className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">
          Welcome back
        </div>
        <h2 className="text-lg font-bold mb-0.5">Good afternoon, Ananya 👋</h2>
        <p className="text-xs opacity-80">Suite 402 · Sep 2–5, 2024</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: '🍽', label: 'Order Food', sub: 'In-room dining' },
          { icon: '🧹', label: 'Housekeeping', sub: 'Request service' },
          { icon: '🔧', label: 'Report Issue', sub: 'Maintenance help' },
          { icon: '📞', label: 'Front Desk', sub: 'Get assistance' },
        ].map((q) => (
          <div
            key={q.label}
            className="bg-white border border-gray-100 rounded-2xl p-3 flex flex-col gap-1 shadow-sm"
          >
            <span className="text-xl">{q.icon}</span>
            <div className="text-xs font-bold text-gray-800">{q.label}</div>
            <div className="text-[10px] text-gray-400">{q.sub}</div>
          </div>
        ))}
      </div>
      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
        <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
          Active Orders
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xl">🍛</span>
          <div className="flex-1">
            <div className="text-xs font-bold text-gray-800">Butter Chicken</div>
            <div className="text-[10px] text-gray-400">Preparing · ETA 12 min</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-orange-50 border-2 border-orange-200 flex items-center justify-center text-[10px] font-bold text-orange-600">
            40%
          </div>
        </div>
      </div>
    </div>
  );
}

function FoodTab() {
  const [cart, setCart] = useState<DishItem[]>(dishes.map((d) => ({ ...d, qty: 0 })));
  const [checkout, setCheckout] = useState(false);
  const [payMethod, setPayMethod] = useState('room');

  const update = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((d) => (d.id === id ? { ...d, qty: Math.max(0, d.qty + delta) } : d))
    );
  };
  const total = cart.reduce((s, d) => s + d.price * d.qty, 0);
  const count = cart.reduce((s, d) => s + d.qty, 0);

  return (
    <div className="flex-1 overflow-y-auto flex flex-col">
      <div className="px-4 py-3 bg-white border-b border-gray-100">
        <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">
          In-Room Dining
        </div>
        <h3 className="text-sm font-bold text-gray-900">Order to Suite 402</h3>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3">
        {cart.map((d) => (
          <div key={d.id} className="bg-white border border-gray-100 rounded-2xl p-3 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-2xl shrink-0">
                {d.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-gray-800 mb-0.5">{d.name}</div>
                <div className="text-[10px] text-gray-400 mb-1 leading-snug">{d.desc}</div>
                <div className="flex flex-wrap gap-1 mb-1">
                  {d.allergens.map((a) => (
                    <span
                      key={a}
                      className="text-[9px] font-bold px-1.5 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-full"
                    >
                      {a}
                    </span>
                  ))}
                  <span className="text-[9px] text-gray-400">⏱ {d.eta}</span>
                </div>
                <div className="text-[11px] font-bold text-orange-600">₹{d.price}</div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 mt-2">
              {d.qty > 0 ? (
                <>
                  <button
                    onClick={() => update(d.id, -1)}
                    className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 text-sm font-bold hover:bg-red-50"
                  >
                    −
                  </button>
                  <span className="text-sm font-bold w-5 text-center">{d.qty}</span>
                  <button
                    onClick={() => update(d.id, 1)}
                    className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold hover:bg-orange-600"
                  >
                    +
                  </button>
                </>
              ) : (
                <button
                  onClick={() => update(d.id, 1)}
                  className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-orange-500 text-white hover:bg-orange-600"
                >
                  Add +
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {count > 0 && (
        <div className="px-4 py-3 border-t border-gray-100 bg-white">
          <button
            onClick={() => setCheckout(true)}
            className="w-full bg-orange-500 text-white font-bold text-sm py-3 rounded-2xl hover:bg-orange-600 transition-colors flex items-center justify-between px-5"
          >
            <span>
              🛒 {count} item{count > 1 ? 's' : ''}
            </span>
            <span>Place Order · ₹{total}</span>
          </button>
        </div>
      )}
      {checkout && (
        <div className="absolute inset-0 bg-white z-10 flex flex-col">
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
            <button
              onClick={() => setCheckout(false)}
              className="text-orange-500 font-bold text-sm"
            >
              ← Back
            </button>
            <h3 className="text-sm font-bold text-gray-900">Checkout</h3>
            <div />
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
            <div className="bg-gray-50 rounded-xl p-3">
              {cart
                .filter((d) => d.qty > 0)
                .map((d) => (
                  <div
                    key={d.id}
                    className="flex justify-between text-sm py-1.5 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-gray-700">
                      {d.emoji} {d.name} ×{d.qty}
                    </span>
                    <span className="font-bold text-gray-900">₹{d.price * d.qty}</span>
                  </div>
                ))}
              <div className="flex justify-between text-sm font-bold pt-2 mt-1">
                <span>Total</span>
                <span className="text-orange-600">₹{total}</span>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                Payment Method
              </div>
              {[
                { id: 'room', label: 'Room Charge', icon: '🏨' },
                { id: 'upi', label: 'UPI / Card', icon: '💳' },
                { id: 'cash', label: 'Cash on Delivery', icon: '💵' },
              ].map((m) => (
                <label
                  key={m.id}
                  className={`flex items-center gap-3 p-3 rounded-xl border mb-2 cursor-pointer transition-all ${payMethod === m.id ? 'border-orange-400 bg-orange-50' : 'border-gray-100 bg-white'}`}
                >
                  <input
                    type="radio"
                    name="pay"
                    value={m.id}
                    checked={payMethod === m.id}
                    onChange={() => setPayMethod(m.id)}
                    className="accent-orange-500"
                  />
                  <span className="text-base">{m.icon}</span>
                  <span className="text-sm font-semibold text-gray-800">{m.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="px-4 pb-6">
            <button
              onClick={() => {
                setCheckout(false);
                setCart(dishes.map((d) => ({ ...d, qty: 0 })));
              }}
              className="w-full bg-orange-500 text-white font-bold text-sm py-3 rounded-2xl hover:bg-orange-600 transition-colors"
            >
              Confirm Order ✓
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function AmenitiesTab() {
  const [qtys, setQtys] = useState<Record<string, number>>(
    Object.fromEntries(amenities.map((a) => [a.id, 0]))
  );
  const [submitted, setSubmitted] = useState(false);

  const update = (id: string, delta: number) => {
    setQtys((prev) => ({
      ...prev,
      [id]: Math.max(0, Math.min(amenities.find((a) => a.id === id)!.max, prev[id] + delta)),
    }));
  };

  const total = Object.values(qtys).reduce((s, v) => s + v, 0);

  if (submitted) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl">
          ✅
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-1">Request Sent!</h3>
          <p className="text-sm text-gray-500">
            Housekeeping will deliver to Suite 402 within 15 minutes.
          </p>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setQtys(Object.fromEntries(amenities.map((a) => [a.id, 0])));
          }}
          className="mt-2 text-sm font-bold text-orange-500"
        >
          Make another request
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto flex flex-col">
      <div className="px-4 py-3 bg-white border-b border-gray-100">
        <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">
          Housekeeping & Amenities
        </div>
        <h3 className="text-sm font-bold text-gray-900">Request for Suite 402</h3>
      </div>
      <div className="flex-1 px-4 py-3 flex flex-col gap-2.5">
        {amenities.map((a) => (
          <div
            key={a.id}
            className="bg-white border border-gray-100 rounded-2xl px-4 py-3 flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{a.icon}</span>
              <span className="text-sm font-semibold text-gray-800">{a.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => update(a.id, -1)}
                disabled={qtys[a.id] === 0}
                className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 disabled:opacity-30 font-bold"
              >
                −
              </button>
              <span className="w-5 text-center text-sm font-bold text-gray-900">{qtys[a.id]}</span>
              <button
                onClick={() => update(a.id, 1)}
                disabled={qtys[a.id] >= a.max}
                className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center disabled:opacity-40 font-bold"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      {total > 0 && (
        <div className="px-4 py-3 border-t border-gray-100 bg-white">
          <button
            onClick={() => setSubmitted(true)}
            className="w-full bg-orange-500 text-white font-bold text-sm py-3 rounded-2xl hover:bg-orange-600 transition-colors"
          >
            Send Request ({total} item{total > 1 ? 's' : ''}) →
          </button>
        </div>
      )}
    </div>
  );
}

function IssueTab() {
  const [selected, setSelected] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  const [urgent, setUrgent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  if (submitted) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
          🎫
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-1">
            Ticket #M-{Math.floor(Math.random() * 1000 + 200)} Created
          </h3>
          <p className="text-sm text-gray-500">
            {urgent
              ? 'Duty manager notified immediately.'
              : 'Maintenance will attend within 30 minutes.'}
          </p>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setSelected([]);
            setNotes('');
            setUrgent(false);
          }}
          className="text-sm font-bold text-orange-500"
        >
          Report another issue
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto flex flex-col">
      <div className="px-4 py-3 bg-white border-b border-gray-100">
        <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">
          Report an Issue
        </div>
        <h3 className="text-sm font-bold text-gray-900">Suite 402 Maintenance</h3>
      </div>
      <div className="flex-1 px-4 py-4 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-2.5">
          {maintenanceIssues.map((m) => (
            <button
              key={m.id}
              onClick={() => toggle(m.id)}
              className={`flex items-center gap-2 border rounded-2xl px-3 py-3 transition-all ${selected.includes(m.id) ? 'border-orange-400 bg-orange-50' : 'border-gray-100 bg-white'}`}
            >
              <span className="text-lg">{m.icon}</span>
              <span className="text-xs font-semibold text-gray-700">{m.label}</span>
            </button>
          ))}
        </div>
        <textarea
          placeholder="Describe the issue in more detail (optional)..."
          className="border border-gray-200 rounded-2xl px-4 py-3 text-sm resize-none focus:border-orange-400 focus:outline-none"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <div
          className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${urgent ? 'bg-red-50 border-red-300' : 'bg-gray-50 border-gray-100'}`}
        >
          <div>
            <div className={`text-sm font-bold ${urgent ? 'text-red-700' : 'text-gray-700'}`}>
              🚨 Urgent / Critical Issue
            </div>
            <div className="text-[10px] text-gray-400 mt-0.5">
              Duty manager will be notified immediately
            </div>
          </div>
          <button
            onClick={() => setUrgent(!urgent)}
            className={`w-11 h-6 rounded-full transition-all relative ${urgent ? 'bg-red-500' : 'bg-gray-300'}`}
          >
            <div
              className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${urgent ? 'left-5.5 left-[22px]' : 'left-0.5'}`}
            />
          </button>
        </div>
      </div>
      {selected.length > 0 && (
        <div className="px-4 py-3 border-t border-gray-100 bg-white">
          <button
            onClick={() => setSubmitted(true)}
            className={`w-full font-bold text-sm py-3 rounded-2xl transition-colors text-white ${urgent ? 'bg-red-500 hover:bg-red-600' : 'bg-orange-500 hover:bg-orange-600'}`}
          >
            {urgent ? '🚨 Report Urgent Issue' : 'Submit Maintenance Ticket →'}
          </button>
        </div>
      )}
    </div>
  );
}

function DeskTab() {
  const [checkoutTime, setCheckoutTime] = useState('');
  const [wakeupTime, setWakeupTime] = useState('');
  const [lateSubmitted, setLateSubmitted] = useState(false);

  return (
    <div className="flex-1 overflow-y-auto flex flex-col gap-4 px-4 py-4">
      {/* Late Checkout */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
        <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
          Late Checkout Request
        </div>
        <div className="flex flex-col gap-2">
          {[
            { time: '12:00 PM', note: 'Complimentary', available: true },
            { time: '1:00 PM', note: 'Complimentary', available: true },
            { time: '2:00 PM', note: 'Subject to availability', available: true },
          ].map((opt) => (
            <label
              key={opt.time}
              className={`flex items-center justify-between border rounded-xl px-3 py-2.5 cursor-pointer transition-all ${checkoutTime === opt.time ? 'border-orange-400 bg-orange-50' : 'border-gray-100'}`}
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="co"
                  value={opt.time}
                  className="accent-orange-500"
                  onChange={() => setCheckoutTime(opt.time)}
                />
                <span className="text-sm font-semibold text-gray-800">{opt.time}</span>
              </div>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${opt.note === 'Complimentary' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}
              >
                {opt.note}
              </span>
            </label>
          ))}
        </div>
        {checkoutTime && !lateSubmitted && (
          <button
            onClick={() => setLateSubmitted(true)}
            className="mt-3 w-full bg-orange-500 text-white font-bold text-xs py-2.5 rounded-xl hover:bg-orange-600 transition-colors"
          >
            Request {checkoutTime} Checkout →
          </button>
        )}
        {lateSubmitted && (
          <div className="mt-3 text-xs font-bold text-green-700 bg-green-50 border border-green-200 rounded-xl px-3 py-2 text-center">
            ✅ Request sent to front desk!
          </div>
        )}
      </div>

      {/* Wake-up Call */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
        <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
          Wake-Up Call
        </div>
        <div className="flex gap-2">
          <input
            type="time"
            className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:border-orange-400 focus:outline-none"
            value={wakeupTime}
            onChange={(e) => setWakeupTime(e.target.value)}
          />
          <button
            disabled={!wakeupTime}
            className="bg-orange-500 text-white font-bold text-xs px-4 rounded-xl disabled:opacity-40 hover:bg-orange-600 transition-colors"
          >
            Set
          </button>
        </div>
      </div>

      {/* Luggage */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
        <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
          Luggage Assistance
        </div>
        <div className="flex flex-col gap-2">
          {['Luggage to room', 'Luggage to lobby', 'Airport transfer help'].map((opt) => (
            <button
              key={opt}
              className="text-sm font-semibold text-gray-700 border border-gray-100 rounded-xl px-4 py-2.5 text-left hover:border-orange-300 hover:bg-orange-50 transition-all"
            >
              {opt} →
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function OrdersTab() {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
      <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
        Live Order Tracker
      </div>
      {liveOrders.map((order) => (
        <div key={order.id} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">{order.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-gray-900 truncate">{order.label}</div>
              <div className="text-[10px] text-gray-400">{order.id}</div>
            </div>
            <span
              className={`text-[10px] font-bold px-2 py-1 rounded-full ${order.pct >= 80 ? 'bg-green-100 text-green-700' : order.pct >= 50 ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}`}
            >
              ETA {order.eta}
            </span>
          </div>
          <div className="text-[11px] text-gray-500 mb-2">
            <span className="font-semibold text-gray-700">{order.status}</span> · {order.staff}
          </div>
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-700"
              style={{ width: `${order.pct}%` }}
            />
          </div>
          <div className="flex justify-between text-[9px] text-gray-400 mt-1">
            <span>Order Placed</span>
            <span>In Progress</span>
            <span>Delivered</span>
          </div>
        </div>
      ))}
      {liveOrders.length === 0 && (
        <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-400 gap-3">
          <span className="text-4xl">📭</span>
          <p className="text-sm">No active orders</p>
        </div>
      )}
    </div>
  );
}

const tabConfig: { key: GuestTab; icon: string; label: string }[] = [
  { key: 'home', icon: '🏠', label: 'Home' },
  { key: 'food', icon: '🍽', label: 'Order Food' },
  { key: 'amenities', icon: '🛁', label: 'Amenities' },
  { key: 'issue', icon: '🔧', label: 'Report' },
  { key: 'desk', icon: '📞', label: 'Front Desk' },
  { key: 'orders', icon: '📦', label: 'My Orders' },
];

export default function GuestDemoPage() {
  const [activeTab, setActiveTab] = useState<GuestTab>('home');

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{ background: '#FAF8F5', fontFamily: 'Manrope, system-ui, sans-serif' }}
    >
      {/* Page header */}
      <div
        className="w-full bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between"
        style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.05)' }}
      >
        <div className="flex items-center gap-4">
          <Link
            href="/demo"
            className="text-xs font-semibold text-gray-400 hover:text-orange-500 transition-colors"
          >
            ← Demo Home
          </Link>
          <div className="w-px h-4 bg-gray-200" />
          <span className="text-sm font-bold text-gray-900">Guest Concierge Portal</span>
        </div>
        <div className="text-xs text-gray-400 hidden sm:block">
          Rendered as mobile — tap through the tabs
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        <div className="text-center mb-8 max-w-md">
          <div className="text-[10px] font-bold uppercase tracking-widest text-orange-500 mb-2">
            Guest Experience
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Suite 402 — Ananya Sharma</h1>
          <p className="text-sm text-gray-500">
            Live interactive mobile concierge portal. Tap each tab to explore every service.
          </p>
        </div>

        {/* Phone Shell */}
        <div
          className="relative bg-gray-900 rounded-[48px] overflow-hidden flex flex-col"
          style={{
            width: 390,
            height: 844,
            boxShadow: '0 40px 100px rgba(0,0,0,0.25), 0 0 0 10px #1a1a1a, 0 0 0 12px #333',
          }}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-20" />

          {/* Screen */}
          <div
            className="flex-1 bg-gray-50 flex flex-col overflow-hidden"
            style={{ borderRadius: '40px', margin: '1px' }}
          >
            <PhoneStatus />

            {/* App header */}
            <div className="px-4 pb-2.5 pt-1 bg-white border-b border-gray-100 flex items-center justify-between">
              <div>
                <div
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: '#E85D04' }}
                >
                  OwnStay
                </div>
                <div className="text-sm font-bold text-gray-900">Welcome, Ananya 👋</div>
                <div className="text-[10px] text-gray-400">Suite 402 · Checking out Sep 5</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
            </div>

            {/* Horizontal pill nav */}
            <div
              className="flex overflow-x-auto gap-2 px-4 py-2.5 bg-white border-b border-gray-100"
              style={{ scrollbarWidth: 'none' }}
            >
              {tabConfig.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap transition-all border ${activeTab === tab.key ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-gray-500 border-gray-200 hover:border-orange-300'}`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 flex flex-col overflow-hidden relative">
              {activeTab === 'home' && <HomeTab />}
              {activeTab === 'food' && <FoodTab />}
              {activeTab === 'amenities' && <AmenitiesTab />}
              {activeTab === 'issue' && <IssueTab />}
              {activeTab === 'desk' && <DeskTab />}
              {activeTab === 'orders' && <OrdersTab />}
            </div>

            {/* Bottom safe area */}
            <div className="h-5 bg-gray-50" />
          </div>

          {/* Home bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
    </div>
  );
}
