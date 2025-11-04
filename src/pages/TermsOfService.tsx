const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Digital Product</h2>
            <p className="leading-relaxed">
              "ADHD: Chaos or Superpower?" is a digital product delivered as a PDF e-book. 
              Upon purchase, you will receive immediate access to download the e-book.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">License</h2>
            <p className="leading-relaxed">
              Your purchase grants you a personal, non-transferable license to use the e-book for your own personal use. 
              You may not reproduce, distribute, or share the e-book with others.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
            <p className="leading-relaxed">
              We offer a 60-day money-back guarantee. If you are not satisfied with your purchase for any reason, 
              contact us within 60 days of purchase for a full refund. No questions asked.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p className="leading-relaxed">
              This e-book is for informational purposes only and is not a substitute for professional medical advice, 
              diagnosis, or treatment. Always seek the advice of qualified health providers with any questions you may have.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="leading-relaxed">
              For any questions regarding these terms, please contact us at support@adhdbook.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
