import Header from '@/components/Header';
import Footer from '@/components/Footer';


const openRoles = [
  {
    title: 'Senior AI Engineer',
    team: 'Engineering',
    location: 'Bangalore / Remote',
    type: 'Full-time',
    description: 'Build and improve the NLP models powering Ownstay\'s multilingual AI Receptionist. Work with LLMs, fine-tuning pipelines, and real-time inference systems.',
  },
  {
    title: 'Full-Stack Engineer (Next.js + Node)',
    team: 'Engineering',
    location: 'Bangalore / Remote',
    type: 'Full-time',
    description: 'Own features end-to-end on the Ownstay hotel dashboard and guest-facing interfaces. Strong TypeScript and API design skills required.',
  },
  {
    title: 'Customer Success Manager',
    team: 'Customer Success',
    location: 'Dubai / Remote',
    type: 'Full-time',
    description: 'Help hotels in the Middle East and Europe onboard and get maximum value from Ownstay. You\'ll be the face of the company for our fastest-growing region.',
  },
  {
    title: 'Product Designer',
    team: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Design intuitive experiences for hotel operators and their guests. You\'ll work across the dashboard, mobile interfaces, and AI conversation flows.',
  },
  {
    title: 'Sales Development Representative',
    team: 'Sales',
    location: 'Bangalore',
    type: 'Full-time',
    description: 'Identify and qualify hotel prospects across India and Southeast Asia. You\'ll be the first point of contact for hundreds of hotels discovering Ownstay.',
  },
];

const perks = [
  { emoji: '🌍', title: 'Remote-first', desc: 'Work from anywhere. We have team members in 8 countries.' },
  { emoji: '📈', title: 'Equity', desc: 'Meaningful equity for all full-time employees.' },
  { emoji: '🏥', title: 'Health coverage', desc: 'Comprehensive health insurance for you and your family.' },
  { emoji: '📚', title: 'Learning budget', desc: '₹50,000/year for courses, conferences, and books.' },
  { emoji: '🏖️', title: 'Unlimited PTO', desc: 'Take the time you need. We trust you.' },
  { emoji: '🍽️', title: 'Hotel stays', desc: 'Annual credit to stay at Ownstay partner hotels worldwide.' },
];

export default function CareersPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">We're hiring</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6 leading-tight">
              Build the future of<br />
              <span className="text-primary">hotel hospitality.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Join a small, ambitious team making AI work for the world's hotels. We're remote-first, move fast, and care deeply about the product and the people who use it.
            </p>
          </div>
        </div>
      </section>
      {/* Perks */}
      <section className="py-16 bg-muted/20 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-foreground mb-8 tracking-tight">Why Ownstay</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks?.map((perk) => (
              <div key={perk?.title} className="bg-background rounded-2xl p-5 border border-border">
                <div className="text-2xl mb-3">{perk?.emoji}</div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{perk?.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{perk?.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Open Roles */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-foreground mb-3 tracking-tight">Open roles</h2>
          <p className="text-muted-foreground mb-10">
            Don't see a fit? Email us at <a href="mailto:careers@ownstay.ai" className="text-primary hover:underline">careers@ownstay.ai</a> — we're always looking for exceptional people.
          </p>
          <div className="flex flex-col gap-4">
            {openRoles?.map((role) => (
              <div key={role?.title} className="group bg-muted/30 hover:bg-muted/50 rounded-2xl p-6 border border-border hover:border-primary/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full">{role?.team}</span>
                      <span className="text-xs font-medium bg-muted text-muted-foreground px-2.5 py-1 rounded-full">{role?.location}</span>
                      <span className="text-xs font-medium bg-muted text-muted-foreground px-2.5 py-1 rounded-full">{role?.type}</span>
                    </div>
                    <h3 className="font-semibold text-foreground text-base mb-2">{role?.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{role?.description}</p>
                  </div>
                  <a
                    href={`mailto:careers@ownstay.ai?subject=Application: ${role?.title}`}
                    className="flex-shrink-0 inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
                  >
                    Apply
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-16 bg-primary/5 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3 tracking-tight">Not seeing your role?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">We're always open to hearing from talented people. Send us your story.</p>
          <a href="mailto:careers@ownstay.ai" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
            Get in touch
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
