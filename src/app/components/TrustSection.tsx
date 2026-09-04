import Icon from '@/components/ui/AppIcon';

const trustItems = [
  {
    icon: 'LockClosedIcon',
    title: 'Secure architecture',
    description: 'Ownstay is built with security as a foundation — not an afterthought.',
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Data protection',
    description: 'Guest data is handled with care. Access is controlled and auditable.',
  },
  {
    icon: 'BuildingOffice2Icon',
    title: 'Hotel-specific knowledge',
    description: "Your hotel's knowledge base stays private and specific to your property.",
  },
  {
    icon: 'UserCircleIcon',
    title: 'Human escalation',
    description: 'Guests can always reach a human team member when needed.',
  },
  {
    icon: 'AdjustmentsHorizontalIcon',
    title: 'Controlled access',
    description: 'Manage who can configure and update Ownstay for your property.',
  },
  {
    icon: 'EyeSlashIcon',
    title: 'Privacy-first',
    description: 'Ownstay is designed to respect guest privacy throughout every interaction.',
  },
];

export default function TrustSection() {
  return (
    <section className="section-pad bg-secondary" id="trust" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
            Trust & Security
          </p>
          <h2
            id="trust-heading"
            className="text-section-xl font-bold text-foreground tracking-tight mb-5"
          >
            Built for businesses that care about trust.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Hotels trust Ownstay with their most important asset — their guests. We take that
            seriously.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon
                  name={item.icon as Parameters<typeof Icon>[0]['name']}
                  size={20}
                  className="text-primary"
                />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
