import HeroES from "@/components/es/HeroES";
import ProblemES from "@/components/es/ProblemES";
import SolutionES from "@/components/es/SolutionES";
import BenefitsES from "@/components/es/BenefitsES";
import AuthorES from "@/components/es/AuthorES";
import TestimonialsES from "@/components/es/TestimonialsES";
import PricingES from "@/components/es/PricingES";
import FAQES from "@/components/es/FAQES";
import FooterES from "@/components/es/FooterES";

const IndexES = () => {
  return (
    <div className="min-h-screen">
      <HeroES />
      <ProblemES />
      <SolutionES />
      <BenefitsES />
      <AuthorES />
      <TestimonialsES />
      <PricingES />
      <FAQES />
      <FooterES />
    </div>
  );
};

export default IndexES;
