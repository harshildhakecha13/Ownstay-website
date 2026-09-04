import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductHero from '@/app/product/components/ProductHero';
import ProductVoice from '@/app/product/components/ProductVoice';
import ProductChat from '@/app/product/components/ProductChat';
import ProductRequests from '@/app/product/components/ProductRequests';
import ProductKnowledge from '@/app/product/components/ProductKnowledge';
import ProductIntegrations from '@/app/product/components/ProductIntegrations';
import ProductModulesDirectory from '@/app/product/components/ProductModulesDirectory';
import ProductCta from '@/app/product/components/ProductCta';

export const metadata: Metadata = {
  title: 'Product — Ownstay AI Receptionist Capabilities',
  description:
    'Explore all Ownstay AI capabilities: Voice AI, Guest Chat, WhatsApp, Guest Requests, Multilingual support, and Hotel Knowledge Base.',
};

export default function ProductPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <ProductHero />
      <ProductModulesDirectory />
      <ProductVoice />
      <ProductChat />
      <ProductRequests />
      <ProductKnowledge />
      <ProductIntegrations />
      <ProductCta />
      <Footer />
    </main>
  );
}
