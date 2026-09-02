'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  fullName: string;
  workEmail: string;
  hotel: string;
  jobTitle: string;
  country: string;
  rooms: string;
  phone: string;
  message: string;
}

const initialData: FormData = {
  fullName: '',
  workEmail: '',
  hotel: '',
  jobTitle: '',
  country: '',
  rooms: '',
  phone: '',
  message: '',
};

const countries = [
  'Singapore', 'Vietnam', 'Thailand', 'Indonesia', 'Malaysia',
  'Philippines', 'Japan', 'South Korea', 'China', 'India',
  'United Arab Emirates', 'United Kingdom', 'United States',
  'Australia', 'Germany', 'France', 'Other',
];

const roomRanges = [
  'Under 20 rooms', '20–50 rooms', '51–100 rooms',
  '101–200 rooms', '201–500 rooms', '500+ rooms',
];

const jobTitles = [
  'Hotel Owner', 'General Manager', 'Hotel Manager',
  'Director of Operations', 'Revenue Manager', 'Front Desk Manager',
  'Technology Manager', 'Investor', 'Consultant', 'Other',
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
    // API-ready: replace with actual form submission endpoint
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-card border border-border rounded-3xl p-12 text-center shadow-card">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircleIcon" size={32} className="text-green-600" variant="solid" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-3">Thank you!</h2>
        <p className="text-base text-muted-foreground leading-relaxed max-w-sm mx-auto">
          Our team will review your request and be in touch shortly to schedule your demo.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-card space-y-5"
      aria-label="Book a demo form"
      noValidate
    >
      {/* Row 1: Full Name + Work Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-1.5">
            Full Name <span className="text-primary" aria-hidden="true">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="James Nguyen"
            className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label htmlFor="workEmail" className="block text-sm font-semibold text-foreground mb-1.5">
            Work Email <span className="text-primary" aria-hidden="true">*</span>
          </label>
          <input
            id="workEmail"
            name="workEmail"
            type="email"
            required
            value={formData.workEmail}
            onChange={handleChange}
            placeholder="james@grandhotel.com"
            className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Hotel + Job Title */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="hotel" className="block text-sm font-semibold text-foreground mb-1.5">
            Hotel / Company <span className="text-primary" aria-hidden="true">*</span>
          </label>
          <input
            id="hotel"
            name="hotel"
            type="text"
            required
            value={formData.hotel}
            onChange={handleChange}
            placeholder="Grand Pacific Hotel"
            className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label htmlFor="jobTitle" className="block text-sm font-semibold text-foreground mb-1.5">
            Job Title <span className="text-primary" aria-hidden="true">*</span>
          </label>
          <select
            id="jobTitle"
            name="jobTitle"
            required
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          >
            <option value="">Select your role</option>
            {jobTitles.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 3: Country + Rooms */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="country" className="blocktext-sm font-semibold text-foreground mb-1.5">
            Country <span className="text-primary" aria-hidden="true">*</span>
          </label>
          <select
            id="country"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          >
            <option value="">Select country</option>
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="rooms" className="block text-sm font-semibold text-foreground mb-1.5">
            Number of Rooms
          </label>
          <select
            id="rooms"
            name="rooms"
            value={formData.rooms}
            onChange={handleChange}
            className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          >
            <option value="">Select range</option>
            {roomRanges.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-1.5">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+65 9123 4567"
          className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
        />
      </div>

      {/* Row 5: Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your hotel and what you're looking to achieve with Ownstay..."
          className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-base px-8 py-4 rounded-xl hover:opacity-90 transition-all shadow-orange disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Icon name="ArrowPathIcon" size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Request a Demo
            <Icon name="ArrowRightIcon" size={18} />
          </>
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center leading-relaxed">
        By submitting this form you agree to our privacy policy. We will never share your information.
      </p>
    </form>
  );
}