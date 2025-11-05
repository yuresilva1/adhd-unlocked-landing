const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-accent">
              ADHD: Chaos or Superpower?
            </h3>
            <p className="text-background/80 leading-relaxed">
              Unlock your brain's full potential with evidence-based strategies 
              from Dr. Elara Vance. Transform ADHD from challenge to superpower.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <p className="text-background/80">
              egdigital-suporte@proton.me
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <p className="text-background/80 space-y-2">
              Privacy Policy<br/>
              Terms of Service<br/>
              Refund Policy: 60-Day Money-Back Guarantee
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 text-center text-background/60">
          <p>
            © {currentYear} Dr. Elara Vance. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Disclaimer: This book is for informational purposes only and is not a substitute 
            for professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
