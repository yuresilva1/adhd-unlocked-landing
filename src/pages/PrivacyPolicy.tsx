const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="leading-relaxed">
              We collect information you provide directly to us when you purchase our digital products, 
              including your name, email address, and payment information processed securely through Digistore24.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="leading-relaxed">
              We use the information we collect to process your orders, send you the digital products you purchase, 
              and communicate with you about your purchase. We may also use your information to send you marketing 
              communications if you have opted in to receive them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
            <p className="leading-relaxed">
              We do not sell or rent your personal information to third parties. We share your information only 
              with service providers who assist us in operating our business, such as payment processors (Digistore24).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at support@adhdbook.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
