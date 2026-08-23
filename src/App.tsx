import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProblemSection } from '@/components/ProblemSection';
import { ValueProposition } from '@/components/ValueProposition';
import { ProductCatalog } from '@/components/ProductCatalog';
import { SocialProof } from '@/components/SocialProof';
import { PricingPackages } from '@/components/PricingPackages';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ValueProposition />
        <ProductCatalog />
        <SocialProof />
        {/* <PricingPackages /> */}
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
