import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import SocialProofSection from '@/app/components/SocialProofSection';
import ProblemSection from '@/app/components/ProblemSection';
import SolutionSection from '@/app/components/SolutionSection';
import FeaturesSection from '@/app/components/FeaturesSection';
import GuestJourneySection from '@/app/components/GuestJourneySection';
import HowItWorksSection from '@/app/components/HowItWorksSection';
import HotelTypesSection from '@/app/components/HotelTypesSection';
import MultilingualSection from '@/app/components/MultilingualSection';
import AiHumanSection from '@/app/components/AiHumanSection';
import TrustSection from '@/app/components/TrustSection';
import MetricsSection from '@/app/components/MetricsSection';
import VideoDemoSection from '@/app/components/VideoDemoSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import FaqSection from '@/app/components/FaqSection';
import FinalCtaSection from '@/app/components/FinalCtaSection';

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <SocialProofSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <HotelTypesSection />
      <MetricsSection />
      <GuestJourneySection />
      <HowItWorksSection />
      <MultilingualSection />
      <AiHumanSection />
      <TrustSection />
      <VideoDemoSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}