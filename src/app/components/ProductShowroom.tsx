'use client';
import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

type ProductTab = 'guest' | 'frontdesk' | 'kitchen';

export default function ProductShowroom() {
  const [activeTab, setActiveTab] = useState<ProductTab>('guest');

  // Guest Mobile State
  const [mobileScreen, setMobileScreen] = useState<'home' | 'dining' | 'amenities' | 'orders'>(
    'home'
  );
  const [orderQty, setOrderQty] = useState<{ [key: string]: number }>({
    'Paneer Tikka': 2,
    'Butter Naan': 1,
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [viewMenuOpen, setViewMenuOpen] = useState(false);
  const [menuCatFilter, setMenuCatFilter] = useState<
    'all' | 'mains' | 'starters' | 'beverages' | 'desserts'
  >('all');
  const [menuSearchText, setMenuSearchText] = useState('');
  const [amenitiesQty, setAmenitiesQty] = useState<{ [key: string]: number }>({
    'Bath Towels': 0,
    'Feather Pillows': 0,
  });

  // Front Desk State
  const [fdSearch, setFdSearch] = useState('');
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  // Kitchen KDS State
  const [kdsOrders, setKdsOrders] = useState([
    {
      id: '#1042',
      room: 'Room 402',
      guest: 'Ananya Deshmukh',
      items: '2x Paneer Tikka, 1x Butter Naan',
      elapsed: '4m',
      status: 'NEW',
    },
    {
      id: '#1043',
      room: 'Table 12',
      guest: 'Walk-in Party of 4',
      items: '1x Truffle Penne Pasta',
      elapsed: '2m',
      status: 'NEW',
    },
    {
      id: '#1041',
      room: 'Table 08',
      guest: 'Rahul Verma',
      items: '1x Margherita Pizza',
      elapsed: '14m',
      status: 'PREPARING',
    },
    {
      id: '#1039',
      room: 'Room 501',
      guest: 'Vikramaditya Rathore',
      items: '2x Garlic Butter Naan',
      elapsed: '28m',
      status: 'READY',
    },
  ]);

  const [kitchenStock, setKitchenStock] = useState([
    {
      name: 'Vine Ripe Tomatoes',
      category: 'Produce',
      stock: '8 kg',
      min: '15 kg',
      status: 'LOW STOCK',
    },
    {
      name: 'Fresh Malai Paneer',
      category: 'Dairy',
      stock: '12 kg',
      min: '8 kg',
      status: 'OPTIMAL',
    },
    {
      name: 'Organic Wheat Flour',
      category: 'Flour',
      stock: '24 kg',
      min: '10 kg',
      status: 'OPTIMAL',
    },
    { name: 'Red Onions', category: 'Produce', stock: '18 kg', min: '12 kg', status: 'OPTIMAL' },
  ]);

  const updateOrderQty = (item: string, delta: number) => {
    setOrderQty((prev) => ({
      ...prev,
      [item]: Math.max(0, (prev[item] || 0) + delta),
    }));
  };

  const updateAmenityQty = (item: string, delta: number) => {
    setAmenitiesQty((prev) => ({
      ...prev,
      [item]: Math.max(0, (prev[item] || 0) + delta),
    }));
  };

  const handleAcceptOrder = (orderId: string) => {
    setKdsOrders((prev) => prev.map((o) => (o.id === orderId ? { ...o, status: 'PREPARING' } : o)));
  };

  const handleReadyOrder = (orderId: string) => {
    setKdsOrders((prev) => prev.map((o) => (o.id === orderId ? { ...o, status: 'READY' } : o)));
  };

  return (
    <section className="py-20 bg-[#FDFBF7] border-t border-border/80" id="showroom">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-orange-600 mb-3">
            Live Interactive Tour
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            Test Drive the Ownstay Platform
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Interact with our live product modules below to see how guest requests seamlessly flow
            from mobile to front-desk and kitchen.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center border-b border-slate-200 mb-10 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-1 md:space-x-4">
            <button
              onClick={() => setActiveTab('guest')}
              className={`flex items-center gap-2.5 px-6 py-4 border-b-2 font-bold text-sm md:text-base whitespace-nowrap transition-all duration-300 ${
                activeTab === 'guest'
                  ? 'border-orange-600 text-orange-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon name="DevicePhoneMobileIcon" size={18} />
              In-Room Guest Portal (Mobile)
            </button>
            <button
              onClick={() => setActiveTab('frontdesk')}
              className={`flex items-center gap-2.5 px-6 py-4 border-b-2 font-bold text-sm md:text-base whitespace-nowrap transition-all duration-300 ${
                activeTab === 'frontdesk'
                  ? 'border-orange-600 text-orange-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon name="BuildingOfficeIcon" size={18} />
              Front Desk Command
            </button>
            <button
              onClick={() => setActiveTab('kitchen')}
              className={`flex items-center gap-2.5 px-6 py-4 border-b-2 font-bold text-sm md:text-base whitespace-nowrap transition-all duration-300 ${
                activeTab === 'kitchen'
                  ? 'border-orange-600 text-orange-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon name="SparklesIcon" size={18} />
              Kitchen Live KDS
            </button>
          </div>
        </div>

        {/* Tab content area */}
        <div className="bg-slate-100/50 rounded-3xl p-4 md:p-8 border border-slate-200/60 shadow-xl overflow-hidden min-h-[600px]">
          {/* GUEST PORTAL TAB */}
          {activeTab === 'guest' && (
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 flex justify-center">
                {/* Simulated Phone Shell */}
                <div className="relative w-[340px] h-[680px] bg-slate-900 rounded-[50px] shadow-2xl p-3.5 border-4 border-slate-800">
                  {/* Camera notch */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-full z-20 flex items-center justify-center">
                    <div className="w-3.5 h-3.5 bg-slate-800 rounded-full" />
                  </div>

                  {/* Phone screen content */}
                  <div className="w-full h-full bg-[#FAF8F5] rounded-[36px] overflow-hidden relative flex flex-col pt-8 text-slate-800 font-sans selection:bg-orange-200">
                    {/* Header */}
                    <div className="bg-[#FAF8F5] border-b border-slate-200/80 px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-6 rounded-md bg-orange-600 flex items-center justify-center text-white text-xs font-black">
                          O
                        </div>
                        <span className="text-xs font-extrabold tracking-wider text-orange-600">
                          OWNSTAY
                        </span>
                      </div>
                      <div className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold">
                        Suite 402
                      </div>
                    </div>

                    {/* Sub-navigation tabs inside phone */}
                    <div className="bg-white border-b border-slate-100 px-3 py-2 flex gap-1.5 overflow-x-auto scrollbar-hide text-xs font-semibold">
                      <button
                        onClick={() => {
                          setMobileScreen('home');
                          setCartOpen(false);
                        }}
                        className={`px-3 py-1.5 rounded-full whitespace-nowrap ${mobileScreen === 'home' ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-600'}`}
                      >
                        Home
                      </button>
                      <button
                        onClick={() => {
                          setMobileScreen('dining');
                          setCartOpen(false);
                        }}
                        className={`px-3 py-1.5 rounded-full whitespace-nowrap ${mobileScreen === 'dining' ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-600'}`}
                      >
                        Order Food
                      </button>
                      <button
                        onClick={() => {
                          setMobileScreen('amenities');
                          setCartOpen(false);
                        }}
                        className={`px-3 py-1.5 rounded-full whitespace-nowrap ${mobileScreen === 'amenities' ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-600'}`}
                      >
                        Amenities
                      </button>
                      <button
                        onClick={() => {
                          setMobileScreen('orders');
                          setCartOpen(false);
                        }}
                        className={`px-3 py-1.5 rounded-full whitespace-nowrap ${mobileScreen === 'orders' ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-600'}`}
                      >
                        My Stay
                      </button>
                    </div>

                    {/* Dynamic Screens */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {mobileScreen === 'home' && (
                        <div className="space-y-4 animate-fade-in">
                          {/* Welcome Hero Card */}
                          <div className="bg-gradient-to-tr from-orange-50 to-amber-50 border border-orange-100/60 rounded-2xl p-4 shadow-sm">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-100/60 px-2.5 py-0.5 rounded-full">
                              Grand Palm Resort
                            </span>
                            <h4 className="text-lg font-bold text-slate-900 mt-2">
                              Welcome to Suite 402, Ananya
                            </h4>
                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                              Everything you need for your stay is right here. Ask anything or
                              browse instant digital hospitality.
                            </p>
                          </div>

                          {/* Quick Services Directory */}
                          <div className="grid grid-cols-2 gap-3">
                            <button
                              onClick={() => setMobileScreen('dining')}
                              className="bg-white border border-slate-100 rounded-xl p-3 text-left hover:border-orange-200 transition-all shadow-sm"
                            >
                              <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 mb-2">
                                <Icon name="BookOpenIcon" size={16} />
                              </div>
                              <span className="text-xs font-bold block text-slate-800">
                                Food & Dining
                              </span>
                              <span className="text-[9px] text-slate-500 block mt-0.5">
                                20 min Delivery
                              </span>
                            </button>

                            <button
                              onClick={() => setMobileScreen('amenities')}
                              className="bg-white border border-slate-100 rounded-xl p-3 text-left hover:border-orange-200 transition-all shadow-sm"
                            >
                              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 mb-2">
                                <Icon name="ArchiveBoxIcon" size={16} />
                              </div>
                              <span className="text-xs font-bold block text-slate-800">
                                Housekeeping
                              </span>
                              <span className="text-[9px] text-slate-500 block mt-0.5">
                                Towels, pillows...
                              </span>
                            </button>

                            <button
                              onClick={() => setMobileScreen('orders')}
                              className="bg-white border border-slate-100 rounded-xl p-3 text-left hover:border-orange-200 transition-all shadow-sm"
                            >
                              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                                <Icon name="ClockIcon" size={16} />
                              </div>
                              <span className="text-xs font-bold block text-slate-800">
                                Active Requests
                              </span>
                              <span className="text-[9px] text-slate-500 block mt-0.5">
                                Track live SLA
                              </span>
                            </button>

                            <a
                              href="/demo"
                              className="bg-white border border-slate-100 rounded-xl p-3 text-left hover:border-orange-200 transition-all shadow-sm block"
                            >
                              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-2">
                                <Icon name="ChatBubbleLeftRightIcon" size={16} />
                              </div>
                              <span className="text-xs font-bold block text-slate-800">
                                Ask Ownstay AI
                              </span>
                              <span className="text-[9px] text-slate-500 block mt-0.5">
                                24/7 AI Concierge
                              </span>
                            </a>
                          </div>

                          {/* Quick status timeline */}
                          <div className="bg-slate-50 border border-slate-200/50 rounded-xl p-3">
                            <span className="text-[9px] font-bold text-slate-500 uppercase block tracking-wider">
                              Your Active Stay Summary
                            </span>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs font-bold">1 active request</span>
                              <button
                                onClick={() => setMobileScreen('orders')}
                                className="text-[10px] text-orange-600 font-bold"
                              >
                                Track &rarr;
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {mobileScreen === 'dining' && (
                        <div className="space-y-3 animate-fade-in">
                          <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm flex items-center justify-between">
                            <div>
                              <h5 className="text-xs font-extrabold text-slate-800">
                                In-Room Dining Menu
                              </h5>
                              <p className="text-[10px] text-slate-500 mt-0.5">
                                Freshly prepared by Chef Marco Rossi
                              </p>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() => setViewMenuOpen(true)}
                                className="flex items-center gap-1 text-[10px] font-bold text-orange-600 bg-orange-50 hover:bg-orange-100 border border-orange-200 px-2 py-1 rounded-lg transition-all"
                                title="View Complete Digital Menu"
                              >
                                <Icon name="BookOpenIcon" size={13} />
                                <span>View Menu</span>
                              </button>
                              <button
                                onClick={() => setCartOpen(true)}
                                className="relative p-2 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition-all"
                              >
                                <Icon name="ShoppingBagIcon" size={16} />
                                <span className="absolute -top-1 -right-1.5 bg-orange-600 text-white text-[8px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center">
                                  {Object.values(orderQty).reduce((a, b) => a + b, 0)}
                                </span>
                              </button>
                            </div>
                          </div>

                          {/* Quick Menu Banner Option */}
                          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 rounded-xl p-2.5 flex items-center justify-between shadow-xs">
                            <div className="flex items-center gap-2">
                              <span className="text-sm">📖</span>
                              <div>
                                <div className="text-[10px] font-bold text-slate-800">
                                  Full Digital Menu Available
                                </div>
                                <div className="text-[9px] text-slate-500">
                                  Browse Starters, Mains, Drinks & Chef Specials
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => setViewMenuOpen(true)}
                              className="text-[9px] font-extrabold bg-orange-600 text-white px-2.5 py-1 rounded-lg hover:bg-orange-700 transition-all whitespace-nowrap shadow-xs"
                            >
                              Explore Menu →
                            </button>
                          </div>

                          {/* Items */}
                          <div className="space-y-2.5">
                            <div className="bg-white border border-slate-100 rounded-xl p-3 flex justify-between gap-2 shadow-sm">
                              <div className="space-y-1">
                                <span className="text-[9px] text-orange-600 font-bold bg-orange-50 px-2 py-0.5 rounded">
                                  Chef&apos;s Pick
                                </span>
                                <h6 className="text-xs font-bold text-slate-800 block">
                                  Paneer Tikka Angara
                                </h6>
                                <p className="text-[10px] text-slate-500 leading-normal">
                                  Clay-oven charred cottage cheese cubes, spiced bell peppers & mint
                                  dip.
                                </p>
                                <span className="text-xs font-bold text-slate-900 block mt-1">
                                  ₹480
                                </span>
                              </div>
                              <div className="flex flex-col items-end justify-between">
                                <span className="text-[9px] text-slate-400">18 min prep</span>
                                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg p-1">
                                  <button
                                    onClick={() => updateOrderQty('Paneer Tikka', -1)}
                                    className="text-slate-500 hover:text-slate-800 w-5 h-5 flex items-center justify-center font-bold"
                                  >
                                    -
                                  </button>
                                  <span className="text-xs font-bold w-4 text-center">
                                    {orderQty['Paneer Tikka'] || 0}
                                  </span>
                                  <button
                                    onClick={() => updateOrderQty('Paneer Tikka', 1)}
                                    className="text-slate-500 hover:text-slate-800 w-5 h-5 flex items-center justify-center font-bold"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white border border-slate-100 rounded-xl p-3 flex justify-between gap-2 shadow-sm">
                              <div className="space-y-1">
                                <h6 className="text-xs font-bold text-slate-800 block">
                                  Butter Naan (Tandoori)
                                </h6>
                                <p className="text-[10px] text-slate-500 leading-normal">
                                  Hand-stretched leavened flatbread glazed with Amul butter.
                                </p>
                                <span className="text-xs font-bold text-slate-900 block mt-1">
                                  ₹120
                                </span>
                              </div>
                              <div className="flex flex-col items-end justify-between">
                                <span className="text-[9px] text-slate-400">8 min prep</span>
                                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg p-1">
                                  <button
                                    onClick={() => updateOrderQty('Butter Naan', -1)}
                                    className="text-slate-500 hover:text-slate-800 w-5 h-5 flex items-center justify-center font-bold"
                                  >
                                    -
                                  </button>
                                  <span className="text-xs font-bold w-4 text-center">
                                    {orderQty['Butter Naan'] || 0}
                                  </span>
                                  <button
                                    onClick={() => updateOrderQty('Butter Naan', 1)}
                                    className="text-slate-500 hover:text-slate-800 w-5 h-5 flex items-center justify-center font-bold"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={() => setCartOpen(true)}
                            className="w-full bg-orange-600 text-white text-xs font-bold py-3 rounded-xl hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2"
                          >
                            <Icon name="ShoppingBagIcon" size={14} />
                            View Dining Basket (₹
                            {(orderQty['Paneer Tikka'] || 0) * 480 +
                              (orderQty['Butter Naan'] || 0) * 120}
                            )
                          </button>
                        </div>
                      )}

                      {mobileScreen === 'amenities' && (
                        <div className="space-y-3 animate-fade-in">
                          <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
                            <h5 className="text-xs font-extrabold text-slate-800">
                              Request Amenities
                            </h5>
                            <p className="text-[10px] text-slate-500 mt-0.5">
                              Complimentary conveniences delivered straight to Room 402
                            </p>
                          </div>

                          <div className="space-y-2.5">
                            <div className="bg-white border border-slate-100 rounded-xl p-3 flex justify-between items-center shadow-sm">
                              <div>
                                <h6 className="text-xs font-bold text-slate-800">
                                  Fresh Bath Towels
                                </h6>
                                <p className="text-[9px] text-slate-400">
                                  Plush Egyptian cotton towels
                                </p>
                              </div>
                              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg p-1">
                                <button
                                  onClick={() => updateAmenityQty('Bath Towels', -1)}
                                  className="text-slate-500 hover:text-slate-800 w-5 h-5 flex items-center justify-center font-bold"
                                >
                                  -
                                </button>
                                <span className="text-xs font-bold w-4 text-center">
                                  {amenitiesQty['Bath Towels'] || 0}
                                </span>
                                <button
                                  onClick={() => updateAmenityQty('Bath Towels', 1)}
                                  className="text-slate-500 hover:text-slate-800 w-5 h-5 flex items-center justify-center font-bold"
                                >
                                  +
                                </button>
                              </div>
                            </div>

                            <div className="bg-white border border-slate-100 rounded-xl p-3 flex justify-between items-center shadow-sm">
                              <div>
                                <h6 className="text-xs font-bold text-slate-800">
                                  Extra Feather Pillows
                                </h6>
                                <p className="text-[9px] text-slate-400">
                                  Hypoallergenic soft pillow
                                </p>
                              </div>
                              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg p-1">
                                <button
                                  onClick={() => updateAmenityQty('Feather Pillows', -1)}
                                  className="text-slate-500 hover:text-slate-800 w-5 h-5 flex items-center justify-center font-bold"
                                >
                                  -
                                </button>
                                <span className="text-xs font-bold w-4 text-center">
                                  {amenitiesQty['Feather Pillows'] || 0}
                                </span>
                                <button
                                  onClick={() => updateAmenityQty('Feather Pillows', 1)}
                                  className="text-slate-500 hover:text-slate-800 w-5 h-5 flex items-center justify-center font-bold"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={() => {
                              alert('Housekeeping request dispatched successfully!');
                              setMobileScreen('orders');
                            }}
                            disabled={
                              !amenitiesQty['Bath Towels'] && !amenitiesQty['Feather Pillows']
                            }
                            className="w-full bg-emerald-600 disabled:bg-slate-300 text-white text-xs font-bold py-3 rounded-xl hover:opacity-95 transition-all shadow-md"
                          >
                            Confirm Request
                          </button>
                        </div>
                      )}

                      {mobileScreen === 'orders' && (
                        <div className="space-y-3 animate-fade-in">
                          <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
                            <h5 className="text-xs font-extrabold text-slate-800">
                              My Active Requests
                            </h5>
                            <p className="text-[10px] text-slate-500 mt-0.5">
                              Real-time status tracking for Room 402
                            </p>
                          </div>

                          <div className="space-y-2.5">
                            {orderPlaced && (
                              <div className="bg-white border border-slate-100 rounded-xl p-3.5 shadow-sm border-l-4 border-orange-500">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <span className="text-[9px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded block w-max mb-1">
                                      #RS-1042
                                    </span>
                                    <h6 className="text-xs font-bold text-slate-800">
                                      In-Room Dining Order
                                    </h6>
                                    <p className="text-[10px] text-slate-500 mt-0.5">
                                      2x Paneer Tikka, 1x Butter Naan
                                    </p>
                                  </div>
                                  <span className="text-[10px] font-bold text-orange-600">
                                    Preparing
                                  </span>
                                </div>
                                <div className="mt-3 flex items-center justify-between text-[9px] text-slate-400">
                                  <span>ETA: 14:40 (15 mins)</span>
                                  <span>Received at 14:22</span>
                                </div>
                              </div>
                            )}

                            <div className="bg-white border border-slate-100 rounded-xl p-3.5 shadow-sm border-l-4 border-emerald-500">
                              <div className="flex justify-between items-start">
                                <div>
                                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded block w-max mb-1">
                                    #HK-812
                                  </span>
                                  <h6 className="text-xs font-bold text-slate-800">
                                    2 Extra Bath Towels
                                  </h6>
                                  <p className="text-[10px] text-slate-500 mt-0.5">
                                    Assigned to Attendant Sunita
                                  </p>
                                </div>
                                <span className="text-[10px] font-bold text-emerald-600">
                                  Attendant on Way
                                </span>
                              </div>
                              <div className="mt-3 flex items-center justify-between text-[9px] text-slate-400">
                                <span>ETA: 14:15 (5 mins)</span>
                                <span>Requested at 14:05</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Dining basket checkout modal overlay */}
                    {cartOpen && (
                      <div className="absolute inset-0 bg-black/40 z-30 flex flex-col justify-end">
                        <div className="bg-white rounded-t-[32px] p-4 space-y-4 max-h-[85%] overflow-y-auto animate-slide-up shadow-2xl">
                          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                            <h5 className="text-xs font-black text-slate-800">
                              Your Dining Basket
                            </h5>
                            <button
                              onClick={() => setCartOpen(false)}
                              className="text-slate-400 hover:text-slate-600 p-1 font-bold text-sm"
                            >
                              ✕
                            </button>
                          </div>

                          <div className="space-y-3 text-xs">
                            <div className="flex justify-between">
                              <span className="text-slate-600">
                                Paneer Tikka Angara x{orderQty['Paneer Tikka']}
                              </span>
                              <span className="font-bold text-slate-800">
                                ₹{orderQty['Paneer Tikka'] * 480}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">
                                Butter Naan x{orderQty['Butter Naan']}
                              </span>
                              <span className="font-bold text-slate-800">
                                ₹{orderQty['Butter Naan'] * 120}
                              </span>
                            </div>
                          </div>

                          <div className="border-t border-slate-100 pt-3 space-y-2">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                              Payment Mode
                            </span>
                            <label className="flex items-center gap-2 p-2.5 bg-orange-50 border border-orange-200 rounded-xl cursor-pointer">
                              <input type="radio" defaultChecked className="accent-orange-600" />
                              <span className="text-xs font-bold text-orange-800">
                                Charge to Room (Pay at Checkout)
                              </span>
                            </label>
                          </div>

                          <div className="border-t border-slate-100 pt-3 flex justify-between items-center text-sm">
                            <span className="font-bold text-slate-600">Total with GST</span>
                            <span className="text-base font-extrabold text-slate-900">
                              ₹
                              {Math.round(
                                (orderQty['Paneer Tikka'] * 480 + orderQty['Butter Naan'] * 120) *
                                  1.05
                              )}
                            </span>
                          </div>

                          <button
                            onClick={() => {
                              setOrderPlaced(true);
                              setCartOpen(false);
                              setMobileScreen('orders');
                            }}
                            className="w-full bg-orange-600 text-white text-xs font-bold py-3.5 rounded-xl hover:opacity-95 transition-all shadow-md"
                          >
                            Confirm Order
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Full Digital Menu Reader Modal Overlay */}
                    {viewMenuOpen && (
                      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs z-40 flex flex-col justify-end">
                        <div className="bg-white rounded-t-[32px] p-4 space-y-3 max-h-[92%] overflow-y-auto animate-slide-up shadow-2xl flex flex-col">
                          {/* Modal Header */}
                          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-base">📖</span>
                                <h5 className="text-xs font-black text-slate-800 uppercase tracking-wider">
                                  Complete Digital Menu
                                </h5>
                              </div>
                              <p className="text-[10px] text-slate-500">
                                Suite 402 • Executive In-Room Dining
                              </p>
                            </div>
                            <button
                              onClick={() => setViewMenuOpen(false)}
                              className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs hover:bg-slate-200 transition-all"
                            >
                              ✕
                            </button>
                          </div>

                          {/* Search Input */}
                          <div className="relative">
                            <input
                              type="text"
                              value={menuSearchText}
                              onChange={(e) => setMenuSearchText(e.target.value)}
                              placeholder="Search dishes, ingredients, allergens..."
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500"
                            />
                            {menuSearchText && (
                              <button
                                onClick={() => setMenuSearchText('')}
                                className="absolute right-2.5 top-2 text-xs font-bold text-slate-400"
                              >
                                ✕
                              </button>
                            )}
                          </div>

                          {/* Category Pills */}
                          <div className="flex gap-1.5 overflow-x-auto scrollbar-hide py-1 text-[10px] font-bold">
                            {[
                              { id: 'all', label: 'All Items' },
                              { id: 'mains', label: '🍛 Mains' },
                              { id: 'starters', label: '🥗 Starters' },
                              { id: 'beverages', label: '🍹 Drinks' },
                              { id: 'desserts', label: '🍨 Desserts' },
                            ].map((cat) => (
                              <button
                                key={cat.id}
                                onClick={() => setMenuCatFilter(cat.id as any)}
                                className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-all border ${
                                  menuCatFilter === cat.id
                                    ? 'bg-orange-600 text-white border-orange-600'
                                    : 'bg-slate-100 text-slate-600 border-slate-200 hover:border-orange-300'
                                }`}
                              >
                                {cat.label}
                              </button>
                            ))}
                          </div>

                          {/* Menu Items List */}
                          <div className="space-y-2.5 my-1 max-h-[360px] overflow-y-auto pr-0.5">
                            {[
                              {
                                name: 'Paneer Tikka Angara',
                                category: 'mains',
                                desc: 'Clay-oven charred cottage cheese cubes, spiced bell peppers & mint dip.',
                                price: 480,
                                eta: '18 min',
                                badge: "Chef's Special",
                                allergens: ['Dairy'],
                              },
                              {
                                name: 'Butter Naan (Tandoori)',
                                category: 'mains',
                                desc: 'Hand-stretched leavened flatbread glazed with Amul butter.',
                                price: 120,
                                eta: '8 min',
                                badge: 'Bestseller',
                                allergens: ['Gluten', 'Dairy'],
                              },
                              {
                                name: 'Truffle Penne Pasta',
                                category: 'mains',
                                desc: 'Wild mushroom cream sauce, parmesan shavings, black truffle oil.',
                                price: 520,
                                eta: '20 min',
                                badge: 'Signature',
                                allergens: ['Gluten', 'Dairy'],
                              },
                              {
                                name: 'Caesar Salad Bowl',
                                category: 'starters',
                                desc: 'Crisp romaine, sourdough croutons, shaved parmesan & caesar dressing.',
                                price: 310,
                                eta: '10 min',
                                badge: 'Healthy',
                                allergens: ['Dairy'],
                              },
                              {
                                name: 'Crispy Veg Spring Rolls',
                                category: 'starters',
                                desc: 'Stuffed with Asian greens, served with sweet chili dip.',
                                price: 290,
                                eta: '12 min',
                                badge: 'Vegan',
                                allergens: ['Gluten'],
                              },
                              {
                                name: 'Fresh Watermelon Mint Juice',
                                category: 'beverages',
                                desc: 'Cold-pressed fresh watermelon, crushed mint & black salt.',
                                price: 160,
                                eta: '5 min',
                                badge: 'Fresh',
                                allergens: [],
                              },
                              {
                                name: 'Belgian Dark Mousse',
                                category: 'desserts',
                                desc: '70% dark chocolate whip with berry compote & gold flake.',
                                price: 260,
                                eta: '5 min',
                                badge: 'Sweet Treat',
                                allergens: ['Dairy'],
                              },
                            ]
                              .filter((item) => {
                                const matchesCat =
                                  menuCatFilter === 'all' || item.category === menuCatFilter;
                                const matchesSearch =
                                  !menuSearchText ||
                                  item.name.toLowerCase().includes(menuSearchText.toLowerCase()) ||
                                  item.desc.toLowerCase().includes(menuSearchText.toLowerCase());
                                return matchesCat && matchesSearch;
                              })
                              .map((item) => (
                                <div
                                  key={item.name}
                                  className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex justify-between gap-2 text-xs"
                                >
                                  <div className="space-y-1 flex-1">
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                      <span className="font-bold text-slate-800">{item.name}</span>
                                      <span className="text-[8px] font-extrabold bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded">
                                        {item.badge}
                                      </span>
                                    </div>
                                    <p className="text-[10px] text-slate-500 leading-snug">
                                      {item.desc}
                                    </p>
                                    <div className="flex items-center gap-1 text-[9px] text-slate-400">
                                      <span>⏱ {item.eta}</span>
                                      {item.allergens.length > 0 && (
                                        <>
                                          <span>•</span>
                                          <span>Contains: {item.allergens.join(', ')}</span>
                                        </>
                                      )}
                                    </div>
                                    <span className="font-extrabold text-slate-900 block text-xs">
                                      ₹{item.price}
                                    </span>
                                  </div>

                                  <div className="flex flex-col items-end justify-between">
                                    <button
                                      onClick={() => {
                                        updateOrderQty(item.name, 1);
                                      }}
                                      className="bg-orange-600 hover:bg-orange-700 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg transition-all shadow-xs"
                                    >
                                      + Add {orderQty[item.name] ? `(${orderQty[item.name]})` : ''}
                                    </button>
                                  </div>
                                </div>
                              ))}
                          </div>

                          {/* Modal Bottom Actions */}
                          <div className="pt-2 border-t border-slate-100 flex gap-2">
                            <button
                              onClick={() => {
                                alert('Downloading high-resolution In-Room Dining PDF menu...');
                              }}
                              className="flex-1 bg-slate-100 text-slate-700 text-[10px] font-bold py-2.5 rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center gap-1"
                            >
                              <span>📥 PDF Menu</span>
                            </button>
                            <button
                              onClick={() => {
                                setViewMenuOpen(false);
                                setCartOpen(true);
                              }}
                              className="flex-2 bg-orange-600 text-white text-xs font-bold py-2.5 rounded-xl hover:bg-orange-700 transition-all shadow-md flex items-center justify-center gap-1"
                            >
                              <Icon name="ShoppingBagIcon" size={14} />
                              <span>
                                View Basket (₹
                                {(orderQty['Paneer Tikka'] || 0) * 480 +
                                  (orderQty['Butter Naan'] || 0) * 120}
                                )
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Guide/Explanation */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">
                  <Icon name="DevicePhoneMobileIcon" size={12} />
                  Zero Login Guest App
                </div>
                <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  No App Install Required. Just Scan & Request.
                </h3>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                  Provide your guests with a fast, gorgeous web portal matching your boutique brand.
                  Guests can seamlessly:
                </p>
                <ul className="space-y-4 text-slate-700 text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <span>
                      <strong>Order Room Service:</strong> Instant checkout with room charge
                      integration. No login or typing card details.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <span>
                      <strong>Request Amenities:</strong> Fresh towels, pillows, toiletries or water
                      requested with single-tap counters.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <span>
                      <strong>Live SLA Updates:</strong> Keep guests happy with precise real-time
                      preparation tracking and delivery timers.
                    </span>
                  </li>
                </ul>

                <div className="bg-amber-50/50 border border-amber-200/80 rounded-2xl p-4 flex gap-3.5 items-start mt-4">
                  <Icon name="LightBulbIcon" size={24} className="text-amber-600 flex-shrink-0" />
                  <div>
                    <h6 className="text-sm font-bold text-amber-900">Try it out now!</h6>
                    <p className="text-xs text-amber-800 leading-relaxed mt-0.5">
                      On the phone simulator, tap **Order Food**, adjust your quantities, and tap
                      **Confirm Order** to watch the state progress!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FRONT DESK COMMAND TAB */}
          {activeTab === 'frontdesk' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid md:grid-cols-4 gap-4">
                {/* Metrics */}
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
                  <span className="text-[10px] uppercase text-slate-400 font-bold">Occupancy</span>
                  <div className="flex justify-between items-baseline mt-1">
                    <span className="text-2xl font-black text-slate-900">13%</span>
                    <span className="text-xs text-emerald-600 font-bold">
                      &uarr; 4.2% vs target
                    </span>
                  </div>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
                  <span className="text-[10px] uppercase text-slate-400 font-bold">
                    Today&apos;s Check-ins
                  </span>
                  <div className="flex justify-between items-baseline mt-1">
                    <span className="text-2xl font-black text-slate-900">9</span>
                    <span className="text-xs text-slate-500">7 arrivals remaining</span>
                  </div>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
                  <span className="text-[10px] uppercase text-slate-400 font-bold">
                    Available Rooms
                  </span>
                  <div className="flex justify-between items-baseline mt-1">
                    <span className="text-2xl font-black text-slate-900">7</span>
                    <span className="text-xs text-emerald-600 font-bold">Clean & ready</span>
                  </div>
                </div>
                <div className="bg-[#EA580C] text-white border border-transparent rounded-2xl p-4 shadow-sm">
                  <span className="text-[10px] uppercase text-orange-200 font-bold">
                    Today&apos;s Est. Revenue
                  </span>
                  <div className="flex justify-between items-baseline mt-1">
                    <span className="text-2xl font-black">₹37,400</span>
                    <span className="text-xs text-orange-100 font-bold">+12% vs target</span>
                  </div>
                </div>
              </div>

              {/* Table / Reservations Gantt grid simulator */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap gap-3 items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-800">
                    Live Gantt Timeline & Room Inventory
                  </h4>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Search room or guest..."
                      value={fdSearch}
                      onChange={(e) => setFdSearch(e.target.value)}
                      className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                      <tr className="bg-slate-50/50 border-b border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        <th className="py-2.5 px-4 w-28">Spaces</th>
                        <th className="py-2.5 px-4 text-center border-l border-slate-100">
                          Sat, Oct 3
                        </th>
                        <th className="py-2.5 px-4 text-center border-l border-slate-100">
                          Sun, Oct 4
                        </th>
                        <th className="py-2.5 px-4 text-center border-l border-slate-100 bg-orange-50/20">
                          Mon, Oct 5
                        </th>
                        <th className="py-2.5 px-4 text-center border-l border-slate-100">
                          Tue, Oct 6
                        </th>
                        <th className="py-2.5 px-4 text-center border-l border-slate-100">
                          Wed, Oct 7
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-xs font-semibold">
                      {[
                        { room: '101', type: 'SINGLE', status: 'ready', guest: null },
                        {
                          room: '102',
                          type: 'SINGLE',
                          status: 'dirty',
                          guest: 'Maxwell Carter',
                          duration: 'Oct 3 - Oct 5',
                          color: 'bg-emerald-100 text-emerald-800 border-emerald-300',
                        },
                        {
                          room: '103',
                          type: 'SINGLE',
                          status: 'ready',
                          guest: 'Ethan Davis',
                          duration: 'Oct 5 - Oct 7',
                          color: 'bg-amber-100 text-amber-800 border-amber-300',
                        },
                        {
                          room: '104',
                          type: 'SINGLE',
                          status: 'ready',
                          guest: 'Room Hold / Block',
                          duration: 'Oct 3 - Oct 5',
                          color: 'bg-slate-100 text-slate-700 border-slate-300 border-dashed',
                        },
                        {
                          room: '105',
                          type: 'DOUBLE',
                          status: 'ready',
                          guest: 'Olivia Bennett',
                          duration: 'Oct 4 - Oct 6',
                          color: 'bg-yellow-100 text-yellow-800 border-yellow-300',
                        },
                      ]
                        .filter(
                          (r) =>
                            !fdSearch ||
                            r.room.includes(fdSearch) ||
                            (r.guest && r.guest.toLowerCase().includes(fdSearch.toLowerCase()))
                        )
                        .map((r, idx) => (
                          <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="py-3 px-4 font-bold border-r border-slate-100">
                              <span className="block text-slate-800">Room {r.room}</span>
                              <span className="text-[9px] text-slate-400 font-bold uppercase">
                                {r.type}
                              </span>
                            </td>
                            <td colSpan={5} className="p-2 relative h-14">
                              {r.guest ? (
                                <div
                                  className={`absolute top-2.5 bottom-2.5 left-4 right-1/3 rounded-xl border p-2 flex items-center justify-between ${r.color}`}
                                >
                                  <span>{r.guest}</span>
                                  <span className="text-[9px] font-bold opacity-75">
                                    {r.duration}
                                  </span>
                                </div>
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-300 font-medium">
                                  Vacant &amp; Available
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* KITCHEN TAB */}
          {activeTab === 'kitchen' && (
            <div className="grid lg:grid-cols-3 gap-8 animate-fade-in">
              {/* Live Active Tickets KDS list */}
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-800">
                      Kitchen Display System (KDS Live)
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Real-time room-service, restaurant and QR guest orders
                    </p>
                  </div>
                  <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full animate-pulse">
                    Auto-Syncing
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {kdsOrders.map((order, i) => (
                    <div
                      key={i}
                      className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between min-h-[170px]"
                    >
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-bold text-slate-400">{order.room}</span>
                          <span
                            className={`text-[9px] font-bold px-2 py-0.5 rounded ${
                              order.status === 'NEW'
                                ? 'bg-orange-100 text-orange-800'
                                : order.status === 'PREPARING'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-emerald-100 text-emerald-800'
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <h5 className="text-xs font-black text-slate-800">{order.guest}</h5>
                        <p className="text-xs text-slate-600 mt-2 font-medium">{order.items}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
                        <span className="text-[10px] text-slate-400">Elapsed: {order.elapsed}</span>
                        {order.status === 'NEW' && (
                          <button
                            onClick={() => handleAcceptOrder(order.id)}
                            className="bg-orange-600 hover:bg-orange-700 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg"
                          >
                            Accept &amp; Start
                          </button>
                        )}
                        {order.status === 'PREPARING' && (
                          <button
                            onClick={() => handleReadyOrder(order.id)}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg"
                          >
                            Mark Ready
                          </button>
                        )}
                        {order.status === 'READY' && (
                          <span className="text-[10px] font-black text-emerald-600 flex items-center gap-1">
                            ✓ Ready to Dispatch
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kitchen Inventory */}
              <div className="space-y-4">
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
                  <h4 className="text-sm font-extrabold text-slate-800 mb-4">
                    Stock &amp; Inventory Requests
                  </h4>
                  <div className="space-y-3.5">
                    {kitchenStock.map((stock, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center py-2 border-b border-slate-100 last:border-b-0"
                      >
                        <div>
                          <span className="text-xs font-bold text-slate-800 block">
                            {stock.name}
                          </span>
                          <span className="text-[9px] text-slate-400 font-bold block">
                            {stock.category} &bull; Min: {stock.min}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-bold text-slate-800 block">
                            {stock.stock}
                          </span>
                          <span
                            className={`text-[8px] font-bold px-2 py-0.5 rounded ${
                              stock.status === 'LOW STOCK'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-emerald-100 text-emerald-800'
                            }`}
                          >
                            {stock.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-sm">
                  <span className="text-[9px] font-bold text-orange-400 uppercase tracking-wider block">
                    AI Kitchen Intelligence
                  </span>
                  <p className="text-xs leading-relaxed mt-2 text-slate-300">
                    Dinner demand spike forecast (+28%). High volume expected for Tandoor &amp;
                    Breads.
                  </p>
                  <div className="mt-3.5 bg-slate-800 rounded-xl p-3 text-[10px] text-orange-200">
                    <strong>Action:</strong> Batch-prep 15kg Naan dough by 17:30 PM.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
