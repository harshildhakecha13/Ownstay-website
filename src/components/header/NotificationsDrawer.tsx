'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export interface NotificationItem {
  id: string;
  type: 'guest_request' | 'voice_call' | 'pms_sync' | 'vip_alert' | 'ai_insight';
  title: string;
  message: string;
  time: string;
  unread: boolean;
  link?: string;
  actionText?: string;
}

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: '1',
    type: 'guest_request',
    title: 'Late Checkout Request (Room 402)',
    message:
      'AI approved 1:00 PM late checkout based on occupancy policies and updated Opera PMS folio.',
    time: '2 mins ago',
    unread: true,
    link: '/demo/admin',
    actionText: 'View Admin Suite',
  },
  {
    id: '2',
    type: 'voice_call',
    title: 'Incoming Call Resolved (Voice AI)',
    message:
      'Guest called requesting airport shuttle schedule in Spanish. AI provided live timetable & booked seat #4.',
    time: '14 mins ago',
    unread: true,
    link: '/product/ai-voice-receptionist',
    actionText: 'Review Call Transcript',
  },
  {
    id: '3',
    type: 'vip_alert',
    title: 'VIP Arrival: Sophia Sterling',
    message: 'Executive Suite 501 assigned. Welcome amenity pack dispatched to Housekeeping queue.',
    time: '45 mins ago',
    unread: false,
    link: '/demo/guest',
    actionText: 'Check Guest Profile',
  },
  {
    id: '4',
    type: 'pms_sync',
    title: 'Kitchen Order #108 Fulfilled',
    message: 'Club Sandwich & Sparkling Water delivered to Room 314 in 6m 40s (Target: <15m).',
    time: '1 hour ago',
    unread: false,
    link: '/demo/kitchen',
    actionText: 'Open Kitchen KDS',
  },
  {
    id: '5',
    type: 'ai_insight',
    title: 'Weekly Occupancy Forecast AI Alert',
    message:
      'Weekend occupancy projected at 94%. Recommended dynamic rate bump of +$35/night on King Deluxe.',
    time: '3 hours ago',
    unread: false,
    link: '/product/booking-assistance',
    actionText: 'Explore Rate Engine',
  },
];

interface NotificationsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationsDrawer({ isOpen, onClose }: NotificationsDrawerProps) {
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Popover / Panel */}
      <div className="fixed top-16 right-6 lg:right-12 z-[100] w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-slate-50/80">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-sm text-foreground">Hotel AI Live Alerts</h3>
            {unreadCount > 0 && (
              <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-primary text-white">
                {unreadCount} new
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-xs font-semibold text-primary hover:underline"
              >
                Mark all read
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-slate-100 transition-colors"
            >
              <Icon name="XMarkIcon" size={16} />
            </button>
          </div>
        </div>

        {/* List */}
        <div className="max-h-[420px] overflow-y-auto divide-y divide-border/50">
          {notifications.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">
              <Icon name="BellSlashIcon" size={32} className="mx-auto mb-2 opacity-30" />
              <p className="text-sm font-semibold">No alerts right now</p>
              <p className="text-xs mt-1 text-muted-foreground">
                All guest requests and AI events are running smoothly.
              </p>
            </div>
          ) : (
            notifications.map((n) => (
              <div
                key={n.id}
                className={`p-4 transition-colors ${
                  n.unread ? 'bg-primary/[0.03]' : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-xl shrink-0 mt-0.5 ${
                      n.type === 'guest_request'
                        ? 'bg-orange-100 text-orange-600'
                        : n.type === 'voice_call'
                          ? 'bg-blue-100 text-blue-600'
                          : n.type === 'vip_alert'
                            ? 'bg-amber-100 text-amber-600'
                            : n.type === 'pms_sync'
                              ? 'bg-emerald-100 text-emerald-600'
                              : 'bg-purple-100 text-purple-600'
                    }`}
                  >
                    <Icon
                      name={
                        n.type === 'guest_request'
                          ? 'SparklesIcon'
                          : n.type === 'voice_call'
                            ? 'PhoneIcon'
                            : n.type === 'vip_alert'
                              ? 'StarIcon'
                              : n.type === 'pms_sync'
                                ? 'FireIcon'
                                : 'ArrowTrendingUpIcon'
                      }
                      size={16}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <div className="font-semibold text-xs text-foreground truncate">
                        {n.title}
                      </div>
                      <span className="text-[10px] text-muted-foreground shrink-0">{n.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                      {n.message}
                    </p>
                    {n.link && (
                      <Link
                        href={n.link}
                        onClick={onClose}
                        className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                      >
                        {n.actionText || 'View details'} →
                      </Link>
                    )}
                  </div>
                  {n.unread && <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1" />}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-border bg-slate-50 flex items-center justify-between text-xs">
          <Link
            href="/demo"
            onClick={onClose}
            className="font-semibold text-primary hover:underline"
          >
            Launch Live Interactive Demos →
          </Link>
          {notifications.length > 0 && (
            <button
              onClick={clearAll}
              className="text-muted-foreground hover:text-foreground font-medium"
            >
              Clear all
            </button>
          )}
        </div>
      </div>
    </>
  );
}
