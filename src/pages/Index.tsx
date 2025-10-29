import { useState } from "react";
import Hero from "@/components/Hero";
import HeroES from "@/components/es/HeroES";
import Problem from "@/components/Problem";
import ProblemES from "@/components/es/ProblemES";
import Solution from "@/components/Solution";
import SolutionES from "@/components/es/SolutionES";
import Benefits from "@/components/Benefits";
import BenefitsES from "@/components/es/BenefitsES";
import Author from "@/components/Author";
import AuthorES from "@/components/es/AuthorES";
import Testimonials from "@/components/Testimonials";
import TestimonialsES from "@/components/es/TestimonialsES";
import Pricing from "@/components/Pricing";
import PricingES from "@/components/es/PricingES";
import FAQ from "@/components/FAQ";
import FAQES from "@/components/es/FAQES";
import Footer from "@/components/Footer";
import FooterES from "@/components/es/FooterES";
import LanguageSelector from "@/components/LanguageSelector";

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <LanguageSelector 
          currentLanguage={language} 
          onLanguageChange={setLanguage} 
        />
      </div>
      
      {language === 'en' ? (
        <>
          <Hero />
          <Problem />
          <Solution />
          <Benefits />
          <Author />
          <Testimonials />
          <Pricing />
          <FAQ />
          <Footer />
        </>
      ) : (
        <>
          <HeroES />
          <ProblemES />
          <SolutionES />
          <BenefitsES />
          <AuthorES />
          <TestimonialsES />
          <PricingES />
          <FAQES />
          <FooterES />
        </>
      )}
    </div>
  );
};

export default Index;
