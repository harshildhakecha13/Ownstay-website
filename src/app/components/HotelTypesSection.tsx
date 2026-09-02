'use client';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { motion } from 'framer-motion';

interface HotelType {
  icon: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const hotelTypes: HotelType[] = [
  {
    icon: 'StarIcon',
    title: 'Boutique Hotels',
    description: 'Give guests personalized assistance without increasing front-desk workload. Maintain your unique voice at scale.',
    image: "https://images.unsplash.com/photo-1542314831-c6a4d142104d",
    imageAlt: 'Elegant boutique hotel lobby'
  },
  {
    icon: 'BuildingOffice2Icon',
    title: 'Hotel Groups & Chains',
    description: 'Deploy consistent, on-brand guest communication across every property in your portfolio.',
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    imageAlt: 'Premium hotel group lobby'
  },
  {
    icon: 'HomeModernIcon',
    title: 'Independent Hotels',
    description: 'Automate repetitive guest communication so your smaller team can focus on what truly matters.',
    image: "https://images.unsplash.com/photo-1517840901100-8179e982acb7",
    imageAlt: 'Modern independent hotel exterior'
  },
  {
    icon: 'SunIcon',
    title: 'Resorts & Extended Stays',
    description: 'Handle high volumes of guest questions and requests during peak season without adding headcount.',
    image: "https://images.unsplash.com/photo-1525713156986-c8e790e9cb98",
    imageAlt: 'Tropical resort pool'
  }
];

export default function HotelTypesSection() {
  return (
    <section className="py-24 bg-background" id="hotel-types" aria-labelledby="hotel-types-heading">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 id="hotel-types-heading" className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
            See what Ownstay can do for you.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From intimate boutique properties to massive global chains, our AI architecture scales perfectly to meet your operational demands.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {hotelTypes.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative aspect-[4/3] md:aspect-[16/11] rounded-[2rem] overflow-hidden cursor-pointer"
            >
              {/* Image Background */}
              <AppImage
                src={type.image}
                alt={type.imageAlt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw" 
              />
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon name={type.icon as Parameters<typeof Icon>[0]['name']} size={20} className="text-white" variant="solid" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{type.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {type.description}
                  </p>
                  
                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-primary group-hover:text-white transition-colors duration-300">
                    Explore Solutions <Icon name="ArrowRightIcon" size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}