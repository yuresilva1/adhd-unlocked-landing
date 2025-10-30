import { Button } from "@/components/ui/button";
import bookTabletHero from "@/assets/book-tablet-hero.png";
import { trackInitiateCheckout } from "@/lib/fbPixel";
import { trackGoogleAdsConversion } from "@/lib/googleAds";

const Hero = () => {
  const scrollToPricing = () => {
    trackInitiateCheckout();
    trackGoogleAdsConversion();
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary px-4 py-12 md:py-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            ADHD: Chaos or Superpower?
            <span className="block mt-2 text-accent">Your Brain's Full Potential Awaits!</span>
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium">
            For Exhausted Parents, Frustrated Teens, and Adults Who Know There's More.
          </h2>
          
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Do you or your child live in a whirlwind of ideas, energy, and endless distractions? 
            Does the world call it chaos, but you sense there's something powerful hiding beneath the surface?
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 justify-center lg:justify-start pt-4">
            <Button 
              onClick={scrollToPricing}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-strong transition-smooth w-full sm:w-auto"
            >
              <span className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
                <span>Get Your Copy Now - Only</span>
                <span className="line-through">$29.90</span>
                <span className="font-extrabold">$9.97</span>
              </span>
            </Button>
            <Button 
              onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 hover:border-white/60 font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 backdrop-blur-sm transition-smooth w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-0">
          <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img 
              src={bookTabletHero} 
              alt="ADHD: Chaos or Superpower? - Unlock Your Brain's Full Potential by Dr. Elara Vance" 
              className="w-full drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
