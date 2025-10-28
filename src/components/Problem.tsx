import audienceStages from "@/assets/audience-stages.png";

const Problem = () => {
  const problems = [
    "Constant battles to stay focused, finish tasks, or keep your life organized?",
    "Feeling misunderstood, judged, or labeled as 'lazy' or 'irresponsible'?",
    "Watching your child struggle in school despite their obvious intelligence and creativity?",
    "Overwhelmed by emotional ups and downs that seem impossible to control?",
    "Wondering if you'll ever find a strategy, system, or solution that actually works for your unique brain?",
    "Feeling exhausted from trying to fit into a world that wasn't designed for you?"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Do Any of These <span className="text-primary">Resonate With You?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            You're not broken. You're not alone. And you're definitely not without hope.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problems List */}
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-smooth border border-border"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg 
                    className="w-5 h-5 text-primary" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-foreground leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={audienceStages} 
              alt="ADHD affects children, teenagers, and adults - Young minds, teenage struggles, adult triumphs" 
              className="w-full rounded-2xl shadow-strong"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
