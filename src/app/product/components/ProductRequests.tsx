import Icon from '@/components/ui/AppIcon';

interface RequestItem {
  icon: string;
  text: string;
  routed: string;
  status: string;
  statusColor: string;
  statusBg: string;
  iconColor: string;
  iconBg: string;
}

const requests: RequestItem[] = [
  {
    icon: 'ArchiveBoxIcon',
    text: 'Extra towels for Room 214',
    routed: 'Housekeeping',
    status: 'Dispatched',
    statusColor: 'text-green-700',
    statusBg: 'bg-green-50',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
  },
  {
    icon: 'MoonIcon',
    text: 'Late checkout request — 1:00 PM',
    routed: 'Front Desk',
    status: 'Pending approval',
    statusColor: 'text-amber-700',
    statusBg: 'bg-amber-50',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50',
  },
  {
    icon: 'BuildingStorefrontIcon',
    text: 'Dinner reservation — 7:30 PM, 4 guests',
    routed: 'Restaurant',
    status: 'Confirmed',
    statusColor: 'text-green-700',
    statusBg: 'bg-green-50',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
  },
  {
    icon: 'WrenchScrewdriverIcon',
    text: 'Air conditioning issue — Room 412',
    routed: 'Maintenance',
    status: 'In progress',
    statusColor: 'text-rose-700',
    statusBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-50',
  },
  {
    icon: 'TruckIcon',
    text: 'Airport transfer — tomorrow 8:00 AM',
    routed: 'Concierge',
    status: 'Scheduled',
    statusColor: 'text-blue-700',
    statusBg: 'bg-blue-50',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-50',
  },
];

export default function ProductRequests() {
  return (
    <section className="section-pad bg-secondary" id="requests" aria-labelledby="requests-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5 mb-6">
              <Icon name="ClipboardDocumentListIcon" size={14} className="text-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">Guest Requests</span>
            </div>
            <h2 id="requests-heading" className="text-section-xl font-bold text-foreground tracking-tight mb-5">
              Every request, routed to the right team.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Guests request services through Ownstay. Each request is understood, logged, and automatically routed to housekeeping, maintenance, concierge, or front desk — with zero manual effort.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: 'ArchiveBoxIcon', label: 'Housekeeping' },
                { icon: 'WrenchScrewdriverIcon', label: 'Maintenance' },
                { icon: 'BuildingStorefrontIcon', label: 'Restaurant' },
                { icon: 'TruckIcon', label: 'Concierge' },
                { icon: 'UserGroupIcon', label: 'Front Desk' },
                { icon: 'BellIcon', label: 'Management' },
              ].map((dept) => (
                <div key={dept.label} className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 shadow-card">
                  <Icon name={dept.icon as Parameters<typeof Icon>[0]['name']} size={16} className="text-primary" />
                  <span className="text-sm font-semibold text-foreground">{dept.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Request list */}
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-bold text-foreground">Live Request Feed</p>
              <span className="flex items-center gap-1.5 text-xs text-green-600 font-semibold">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                Live
              </span>
            </div>
            {requests.map((req, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl px-4 py-4 shadow-card flex items-center gap-4"
              >
                <div className={`w-10 h-10 rounded-xl ${req.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <Icon name={req.icon as Parameters<typeof Icon>[0]['name']} size={18} className={req.iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{req.text}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">→ {req.routed}</p>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${req.statusBg} ${req.statusColor} flex-shrink-0`}>
                  {req.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}