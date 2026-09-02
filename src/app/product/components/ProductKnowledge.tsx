import Icon from '@/components/ui/AppIcon';

const knowledgeCategories = [
  {
    icon: 'HomeModernIcon',
    title: 'Rooms & Suites',
    items: ['Room types', 'Bed configurations', 'Floor plans', 'Room amenities', 'View types'],
  },
  {
    icon: 'SparklesIcon',
    title: 'Facilities',
    items: ['Swimming pool', 'Fitness center', 'Spa & wellness', 'Business center', 'Parking'],
  },
  {
    icon: 'BuildingStorefrontIcon',
    title: 'Food & Beverage',
    items: ['Restaurant hours', 'Menu highlights', 'Bar & lounge', 'Room service', 'Dietary options'],
  },
  {
    icon: 'CalendarDaysIcon',
    title: 'Policies',
    items: ['Check-in / check-out', 'Cancellation policy', 'Pet policy', 'Smoking policy', 'Payment methods'],
  },
  {
    icon: 'MapPinIcon',
    title: 'Local Information',
    items: ['Nearby attractions', 'Transport options', 'Airport directions', 'Shopping', 'Dining nearby'],
  },
  {
    icon: 'ArrowRightOnRectangleIcon',
    title: 'Arrival & Departure',
    items: ['Early check-in', 'Late checkout', 'Luggage storage', 'Transport booking', 'Taxi services'],
  },
];

export default function ProductKnowledge() {
  return (
    <section className="section-pad bg-background" id="knowledge" aria-labelledby="knowledge-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-full px-3 py-1.5 mb-6">
            <Icon name="BuildingOffice2Icon" size={14} className="text-amber-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-amber-600">Hotel Knowledge</span>
          </div>
          <h2 id="knowledge-heading" className="text-section-xl font-bold text-foreground tracking-tight mb-5">
            Ownstay knows your hotel inside out.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Configure Ownstay with your hotel&apos;s specific information. Guests always get accurate, up-to-date answers about your property.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {knowledgeCategories.map((cat) => (
            <div
              key={cat.title}
              className="card-hover bg-card border border-border rounded-2xl p-6 shadow-card"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                <Icon name={cat.icon as Parameters<typeof Icon>[0]['name']} size={20} className="text-amber-600" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-3">{cat.title}</h3>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}