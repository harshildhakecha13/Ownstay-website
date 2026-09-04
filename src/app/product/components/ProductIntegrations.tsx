import Icon from '@/components/ui/AppIcon';

const integrationCategories = [
  {
    icon: 'BuildingOfficeIcon',
    title: 'Enterprise PMS Gateway',
    description:
      'Native 2-way integration with Opera, Amadeus, Cloudbeds, and major systems. Sync reservations, verify identity, and post charges in real-time.',
    tag: 'Universal Sync',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: 'CalendarDaysIcon',
    title: 'Booking Engine',
    description: 'Assist guests with booking queries and availability questions.',
    tag: 'Bookings',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: 'GlobeAltIcon',
    title: 'Hotel Website',
    description: 'Embed Ownstay chat directly on your property website.',
    tag: 'Web',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: 'DevicePhoneMobileIcon',
    title: 'WhatsApp Business',
    description: 'Handle guest conversations on WhatsApp automatically.',
    tag: 'Messaging',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: 'MicrophoneIcon',
    title: 'Voice / Phone',
    description: 'Answer hotel phone calls with AI voice capabilities.',
    tag: 'Voice',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: 'UsersIcon',
    title: 'CRM',
    description: 'Log guest interactions and preferences to your CRM system.',
    tag: 'CRM',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
];

export default function ProductIntegrations() {
  return (
    <section
      className="section-pad bg-secondary"
      id="integrations"
      aria-labelledby="integrations-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
            Integrations
          </p>
          <h2
            id="integrations-heading"
            className="text-section-xl font-bold text-foreground tracking-tight mb-5"
          >
            Works with your hotel ecosystem.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Ownstay is designed to fit precisely into your hotel ecosystem. Built to integrate
            seamlessly with leading PMS platforms, our AI agents securely leverage your live PMS
            data to perform real-time resolution.
          </p>
        </div>

        {/* Ecosystem diagram */}
        <div className="flex flex-col items-center gap-4 mb-14">
          {/* Guest */}
          <div className="bg-card border border-border rounded-2xl px-8 py-4 shadow-card flex items-center gap-3">
            <Icon name="UserGroupIcon" size={20} className="text-muted-foreground" />
            <span className="text-sm font-bold text-foreground">Hotel Guests</span>
          </div>
          <div className="w-0.5 h-8 bg-border" aria-hidden="true" />
          {/* Ownstay */}
          <div className="bg-primary rounded-2xl px-10 py-5 shadow-orange flex items-center gap-3">
            <Icon
              name="SparklesIcon"
              size={22}
              className="text-primary-foreground"
              variant="solid"
            />
            <span className="text-base font-bold text-primary-foreground">Ownstay AI</span>
          </div>
          <div className="w-0.5 h-8 bg-border" aria-hidden="true" />
          {/* Hotel Systems */}
          <div className="bg-card border border-border rounded-2xl px-8 py-4 shadow-card flex items-center gap-3 border-blue-200 bg-blue-50/30">
            <Icon name="BuildingOfficeIcon" size={20} className="text-blue-600" />
            <span className="text-sm font-bold text-foreground">Enterprise PMS Gateway</span>
          </div>
          <div className="w-0.5 h-8 bg-border" aria-hidden="true" />
          {/* Hotel Team */}
          <div className="bg-card border border-border rounded-2xl px-8 py-4 shadow-card flex items-center gap-3">
            <Icon name="UserCircleIcon" size={20} className="text-muted-foreground" />
            <span className="text-sm font-bold text-foreground">Hotel Team</span>
          </div>
        </div>

        {/* Integration cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {integrationCategories.map((int) => (
            <div
              key={int.title}
              className="card-hover bg-card border border-border rounded-2xl p-6 shadow-card"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl ${int.bg} flex items-center justify-center`}>
                  <Icon
                    name={int.icon as Parameters<typeof Icon>[0]['name']}
                    size={20}
                    className={int.color}
                  />
                </div>
                <span
                  className={`text-[11px] font-bold tracking-wider uppercase ${int.color} px-2.5 py-1 rounded-full ${int.bg}`}
                >
                  {int.tag}
                </span>
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{int.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{int.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 italic">
          Contact our team to confirm specific integration availability for your hotel technology
          stack.
        </p>
      </div>
    </section>
  );
}
