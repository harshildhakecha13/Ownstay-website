import Header from '@/components/Header';
import Footer from '@/components/Footer';


const posts = [
  {
    slug: 'ai-receptionist-vs-human-front-desk',
    category: 'Industry',
    date: 'August 12, 2026',
    readTime: '6 min read',
    title: 'AI Receptionist vs. Human Front Desk: What Hotels Are Actually Choosing',
    excerpt: 'The debate isn\'t AI vs. humans — it\'s about where each excels. We analyzed 500 hotels to find out how the best properties are blending both.',
  },
  {
    slug: 'multilingual-guest-communication',
    category: 'Product',
    date: 'July 28, 2026',
    readTime: '4 min read',
    title: 'Why Multilingual Guest Communication Is No Longer Optional',
    excerpt: 'International travel is back. Guests expect to communicate in their language. Here\'s how Ownstay handles 40+ languages without losing context.',
  },
  {
    slug: 'voice-ai-hotel-calls',
    category: 'Product',
    date: 'July 14, 2026',
    readTime: '5 min read',
    title: 'How Voice AI Is Transforming Hotel Phone Calls',
    excerpt: 'Phone calls are still the #1 guest touchpoint. Ownstay Voice AI answers every call instantly, routes requests intelligently, and never puts guests on hold.',
  },
  {
    slug: 'reducing-front-desk-workload',
    category: 'Operations',
    date: 'June 30, 2026',
    readTime: '7 min read',
    title: '5 Ways Hotels Are Using AI to Reduce Front Desk Workload by 60%',
    excerpt: 'From check-in FAQs to room service requests, repetitive tasks eat up staff time. Here\'s how smart hotels are automating the routine.',
  },
  {
    slug: 'whatsapp-hotel-guest-communication',
    category: 'Industry',
    date: 'June 15, 2026',
    readTime: '5 min read',
    title: 'WhatsApp Is Now the #1 Guest Communication Channel. Is Your Hotel Ready?',
    excerpt: 'Over 70% of hotel guests prefer messaging over calling. WhatsApp integration with Ownstay means every message gets an instant, intelligent reply.',
  },
  {
    slug: 'hotel-ai-roi',
    category: 'Business',
    date: 'May 28, 2026',
    readTime: '8 min read',
    title: 'The Real ROI of AI in Hotels: A Data-Driven Analysis',
    excerpt: 'We crunched the numbers from 200 hotels using Ownstay. The results: average 40% reduction in front desk queries, 28% increase in upsell revenue.',
  },
];

const categories = ['All', 'Industry', 'Product', 'Operations', 'Business'];

export default function BlogPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-bold tracking-widest uppercase text-primary">Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Insights for modern hoteliers
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AI, hospitality, and the future of guest experience — from the team building it.
            </p>
          </div>
        </div>
      </section>
      {/* Category Filter */}
      <section className="pb-12 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {categories?.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === 'All' ? 'bg-primary text-white' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Posts Grid */}
      <section className="pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured Post */}
          <div className="mb-10 bg-muted/30 rounded-3xl border border-border overflow-hidden hover:border-primary/30 transition-colors group">
            <div className="p-8 md:p-10">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">{posts?.[0]?.category}</span>
                <span className="text-xs text-muted-foreground">{posts?.[0]?.date}</span>
                <span className="text-xs text-muted-foreground">{posts?.[0]?.readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors">
                {posts?.[0]?.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">{posts?.[0]?.excerpt}</p>
              <span className="inline-flex items-center text-sm font-semibold text-primary gap-1">
                Read article <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts?.slice(1)?.map((post) => (
              <article key={post?.slug} className="bg-muted/20 rounded-2xl border border-border p-6 hover:border-primary/30 transition-colors group cursor-pointer">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-full">{post?.category}</span>
                  <span className="text-xs text-muted-foreground">{post?.readTime}</span>
                </div>
                <h3 className="font-semibold text-foreground text-base mb-2 leading-snug group-hover:text-primary transition-colors">
                  {post?.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post?.excerpt}</p>
                <span className="text-xs text-muted-foreground">{post?.date}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Newsletter */}
      <section className="py-16 bg-primary/5 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3 tracking-tight">Stay in the loop</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">Get the latest hospitality AI insights delivered to your inbox. No spam, ever.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@hotel.com"
              className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button className="px-5 py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
