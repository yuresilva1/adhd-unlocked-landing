import { Button } from "@/components/ui/button";

const Pricing = () => {
  const features = [
    "Instant PDF download - start reading in minutes",
    "82 pages of transformative strategies",
    "Compatible with Kindle, tablets, and all devices",
    "Lifetime access - read it anytime, anywhere",
    "Bonus: Personalized action plan templates",
    "30-day 100% money-back guarantee"
  ];

  const handlePurchase = () => {
    // This would integrate with your payment processor
    window.open('https://your-payment-link.com', '_blank');
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Stop Merely Surviving ADHD.
            <span className="block mt-2 text-accent">Start Thriving!</span>
          </h2>
          <p className="text-xl text-white/90">
            Your transformation begins today for less than the cost of a single therapy session.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-strong p-8 md:p-12">
          {/* Price */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              LIMITED TIME OFFER
            </div>
            <div className="mb-2">
              <span className="text-5xl md:text-6xl font-bold text-foreground">$9.97</span>
            </div>
            <p className="text-lg text-muted-foreground">
              One-time payment • Instant access • No subscription
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <svg 
                    className="w-4 h-4 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-foreground font-medium">{feature}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            onClick={handlePurchase}
            size="lg"
            className="w-full bg-gradient-cta hover:opacity-90 text-accent-foreground font-bold text-xl py-8 shadow-strong transition-smooth"
          >
            Get Instant Access Now - $9.97
          </Button>

          {/* Guarantee */}
          <div className="mt-8 p-6 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl border-l-4 border-accent">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" />
              </svg>
              <div>
                <p className="font-bold text-foreground text-lg mb-2">
                  Your Satisfaction is 100% Guaranteed!
                </p>
                <p className="text-muted-foreground">
                  Try the book risk-free for 30 days. If you don't find it valuable, 
                  we'll refund every penny. No questions asked.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex justify-center items-center gap-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" />
              </svg>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" />
              </svg>
              <span>Instant Delivery</span>
            </div>
          </div>
        </div>

        {/* Final Push */}
        <div className="text-center mt-12 text-white">
          <p className="text-xl mb-4">
            🎯 <strong>Join over 10,000+ readers</strong> who have transformed their ADHD journey
          </p>
          <p className="text-lg text-white/80">
            The question isn't "Can I afford this book?" 
            <br />
            It's "Can I afford NOT to unlock my full potential?"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
