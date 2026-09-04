'use client';
import { motion } from 'framer-motion';

const metrics = [
  {
    value: '55%',
    label: 'increase in direct bookings',
    brand: 'The Grand Pacific',
  },
  {
    value: '39%',
    label: 'increase in RevPAR',
    brand: 'Cloud Nine Resort',
  },
  {
    value: '93%',
    label: 'reduction in desk calls',
    brand: 'Continental Hotels',
  },
  {
    value: '100%',
    label: 'automated fulfillment',
    brand: 'Skyline Boutique',
  },
];

export default function MetricsSection() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:flex justify-between items-end border-b border-white/20 pb-10"
        >
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-primary mb-4">
              Proven Results
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Measurable impact across every metric that matters.
            </h2>
          </div>
          <p className="text-white/60 font-medium max-w-xs mt-6 md:mt-0 text-lg">
            See how top-tier hospitality teams are transforming operations with Ownstay AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative border-l-2 border-primary pl-6 hover:border-white transition-colors duration-300"
            >
              <h3 className="text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-4">
                {metric.value}
              </h3>
              <p className="text-lg md:text-xl font-semibold text-white/90 mb-4 leading-tight max-w-[200px]">
                {metric.label}
              </p>
              <p className="text-sm font-bold text-primary uppercase tracking-widest mt-auto">
                {metric.brand}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
