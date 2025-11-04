const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">Refund Policy</h1>
        
        <div className="space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">60-Day Money-Back Guarantee</h2>
            <p className="leading-relaxed">
              We stand behind the quality of our digital e-book "ADHD: Chaos or Superpower?" 
              and offer a full 60-day money-back guarantee from the date of purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Request a Refund</h2>
            <p className="leading-relaxed mb-4">
              If you are not completely satisfied with your purchase, you can request a full refund within 
              60 days of your purchase date. Simply:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Email us at support@adhdbook.com with your order number</li>
              <li>Include "Refund Request" in the subject line</li>
              <li>We will process your refund within 3-5 business days</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">No Questions Asked</h2>
            <p className="leading-relaxed">
              We believe in making this process simple and hassle-free. We won't ask you for lengthy explanations 
              or put you through complicated procedures. If you're not happy, we want to make it right.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Processing Time</h2>
            <p className="leading-relaxed">
              Refunds are processed through Digistore24, our payment processor. Once approved, refunds typically 
              appear in your account within 5-10 business days, depending on your financial institution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
            <p className="leading-relaxed">
              If you have any questions about our refund policy, please don't hesitate to contact us at 
              support@adhdbook.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
