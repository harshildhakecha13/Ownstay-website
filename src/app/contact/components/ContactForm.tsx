'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface FormData {
  fullName: string;
  workEmail: string;
  hotel: string;
  jobTitle: string;
  country: string;
  rooms: string;
  pms: string;
  phone: string;
  preferredDate: string;
  preferredTimeSlot: string;
  message: string;
}

const initialData: FormData = {
  fullName: '',
  workEmail: '',
  hotel: '',
  jobTitle: '',
  country: 'United States',
  rooms: '51–100 rooms',
  pms: 'Oracle Opera Cloud',
  phone: '',
  preferredDate: 'Tomorrow',
  preferredTimeSlot: '10:00 AM EST',
  message: '',
};

const countries = [
  'United States',
  'United Kingdom',
  'United Arab Emirates',
  'Singapore',
  'India',
  'Indonesia',
  'Thailand',
  'Vietnam',
  'Japan',
  'Australia',
  'Germany',
  'France',
  'Spain',
  'Italy',
  'Other',
];

const roomRanges = [
  'Under 20 rooms (Boutique)',
  '20–50 rooms (Boutique/Lodge)',
  '51–100 rooms (Mid-scale)',
  '101–200 rooms (Full Service)',
  '201–500 rooms (Resort/Luxury)',
  '500+ rooms (Mega Resort / Chain)',
];

const pmsOptions = [
  'Oracle Opera (Cloud / v5)',
  'Amadeus',
  'Cloudbeds',
  'StayNTouch',
  'Maestro PMS',
  'Infor HMS',
  'WebRezPro',
  'Other / Custom API',
];

const timeSlots = [
  '09:00 AM EST',
  '10:30 AM EST',
  '01:00 PM EST',
  '03:30 PM EST',
  '06:00 PM EST',
  '08:00 PM EST',
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-border rounded-3xl p-10 md:p-12 text-center shadow-lg animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircleIcon" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Demo Session Reserved!</h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto mb-6">
          A calendar invitation and sandbox login credentials have been dispatched to{' '}
          <strong className="text-foreground">{formData.workEmail || 'your email'}</strong> for{' '}
          <strong className="text-foreground">
            {formData.preferredDate} at {formData.preferredTimeSlot}
          </strong>
          .
        </p>

        <div className="p-5 rounded-2xl bg-slate-50 border border-border max-w-md mx-auto text-left text-xs space-y-2 mb-8">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Property:</span>
            <span className="font-bold text-foreground">{formData.hotel || 'Grand Azure'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">PMS Integration:</span>
            <span className="font-bold text-primary">{formData.pms}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Lead Specialist:</span>
            <span className="font-bold text-foreground">
              Harshil Dhankecha (Co-Founder &amp; COO)
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/product/ownstay-platform"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors shadow-sm"
          >
            Explore Our Product Platform →
          </Link>
          <button
            onClick={() => setSubmitted(false)}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-border text-xs font-semibold text-foreground hover:bg-slate-50"
          >
            Schedule Another Property
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-border rounded-3xl p-8 md:p-10 shadow-lg space-y-6"
    >
      {/* Row 1: Full Name + Work Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-foreground mb-1.5">
            Full Name <span className="text-primary">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Alexandra Vance"
            className="w-full bg-slate-50 border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="workEmail" className="block text-xs font-bold text-foreground mb-1.5">
            Work Email <span className="text-primary">*</span>
          </label>
          <input
            id="workEmail"
            name="workEmail"
            type="email"
            required
            value={formData.workEmail}
            onChange={handleChange}
            placeholder="alexandra@azurehotel.com"
            className="w-full bg-slate-50 border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Row 2: Hotel + Property Keys */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="hotel" className="block text-xs font-bold text-foreground mb-1.5">
            Hotel / Property Name <span className="text-primary">*</span>
          </label>
          <input
            id="hotel"
            name="hotel"
            type="text"
            required
            value={formData.hotel}
            onChange={handleChange}
            placeholder="Grand Azure Resort & Spa"
            className="w-full bg-slate-50 border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="rooms" className="block text-xs font-bold text-foreground mb-1.5">
            Number of Rooms
          </label>
          <select
            id="rooms"
            name="rooms"
            value={formData.rooms}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            {roomRanges.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 3: Current PMS + Country */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="pms" className="block text-xs font-bold text-foreground mb-1.5">
            Current Hotel PMS
          </label>
          <select
            id="pms"
            name="pms"
            value={formData.pms}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            {pmsOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="country" className="block text-xs font-bold text-foreground mb-1.5">
            Country / Region
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Preferred Live Demo Time Slot */}
      <div className="p-5 rounded-2xl bg-orange-50/60 border border-orange-200/60 space-y-3">
        <label className="block text-xs font-bold text-orange-950">
          Select Preferred Demo Time Slot
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {timeSlots.map((slot) => (
            <button
              type="button"
              key={slot}
              onClick={() => setFormData((prev) => ({ ...prev, preferredTimeSlot: slot }))}
              className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                formData.preferredTimeSlot === slot
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white border border-orange-200 text-orange-900 hover:bg-orange-100'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      {/* Row 5: Notes */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold text-foreground mb-1.5">
          Specific questions or workflows you want to test (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="e.g. We want to automate WhatsApp check-in and reduce phone calls during our 3 PM rush..."
          className="w-full bg-slate-50 border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold text-sm px-8 py-4 rounded-xl hover:bg-primary/90 transition-all shadow-md shadow-primary/20 disabled:opacity-60"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
            Locking in calendar slot...
          </>
        ) : (
          <>
            Confirm 20-Min Live Walkthrough
            <Icon name="ArrowRightIcon" size={16} />
          </>
        )}
      </button>

      <p className="text-[11px] text-muted-foreground text-center">
        No credit card required. Includes a 14-day zero-risk live pilot for qualified hotels.
      </p>
    </form>
  );
}
