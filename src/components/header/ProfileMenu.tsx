'use client';
import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface ProfileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileMenu({ isOpen, onClose }: ProfileMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[90] bg-black/20 backdrop-blur-2xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />
      <div className="fixed top-16 right-6 lg:right-8 z-[100] w-72 bg-white rounded-2xl shadow-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200">
        {/* User / Hotel Header */}
        <div className="p-4 border-b border-border bg-gradient-to-br from-slate-50 to-orange-50/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary text-sm">
              OS
            </div>
            <div>
              <div className="font-bold text-sm text-foreground">Grand Azure Resort</div>
              <div className="text-[11px] text-muted-foreground">Demo Hotel Property #408</div>
            </div>
          </div>
          <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            AI Receptionist Active
          </div>
        </div>

        {/* Quick Links */}
        <div className="p-2">
          <Link
            href="/docs"
            onClick={onClose}
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-slate-50 transition-colors"
          >
            <Icon name="DocumentTextIcon" size={16} className="text-muted-foreground" />
            <span>API Documentation</span>
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-slate-50 transition-colors"
          >
            <Icon name="CalendarDaysIcon" size={16} className="text-muted-foreground" />
            <span>Book a Custom Demo</span>
          </Link>
          <Link
            href="/blog"
            onClick={onClose}
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-slate-50 transition-colors"
          >
            <Icon name="BookOpenIcon" size={16} className="text-muted-foreground" />
            <span>Hospitality AI Blog</span>
          </Link>
        </div>
      </div>
    </>
  );
}
