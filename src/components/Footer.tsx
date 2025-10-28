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

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#benefits" className="text-background/80 hover:text-accent transition-smooth">
                  What You'll Learn
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-background/80 hover:text-accent transition-smooth">
                  Get the Book
                </a>
              </li>
              <li>
                <a href="#author" className="text-background/80 hover:text-accent transition-smooth">
                  About the Author
                </a>
              </li>
              <li>
                <a href="#faq" className="text-background/80 hover:text-accent transition-smooth">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/80 hover:text-accent transition-smooth">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-accent transition-smooth">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-accent transition-smooth">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="mailto:support@adhdbook.com" className="text-background/80 hover:text-accent transition-smooth">
                  Contact Us
                </a>
              </li>
            </ul>
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
