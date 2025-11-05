import womanReading from "@/assets/woman-reading.png";

const Benefits = () => {
  const benefits = [
    {
      title: "The Hidden Strengths of ADHD",
      description: "Discover the creativity, hyperfocus, and out-of-the-box thinking that makes your brain extraordinary."
    },
    {
      title: "Practical Strategies for Every Age",
      description: "Tailored tools for children, teens, and adults to manage challenges and maximize strengths."
    },
    {
      title: "Understanding the ADHD Brain",
      description: "Learn the science behind ADHD in a way that's easy to understand and empowering to apply."
    },
    {
      title: "Emotional Regulation Techniques",
      description: "Master your emotions without medication—proven strategies for managing overwhelm and frustration."
    },
    {
      title: "Building Systems That Work",
      description: "Forget one-size-fits-all advice. Create routines and systems designed for how your brain actually works."
    },
    {
      title: "Thriving in School, Work & Relationships",
      description: "Transform your ADHD into an asset in education, career success, and meaningful connections."
    },
    {
      title: "Real Stories, Real Results",
      description: "Be inspired by journeys from chaos to triumph—proof that thriving with ADHD is possible."
    },
    {
      title: "Your Personalized Action Plan",
      description: "Walk away with a clear roadmap to implement immediately—no more guessing or overwhelm."
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Inside This <span className="text-primary">Revolutionary Guide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            You'll discover everything you need to transform ADHD from a daily struggle into your greatest advantage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-md hover:shadow-strong transition-smooth border border-border group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="mt-16 relative">
          <img 
            src={womanReading} 
            alt="Woman reading ADHD book in a comfortable cafe setting - Start your transformation today" 
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-strong"
          />
          <p className="text-center text-muted-foreground text-sm mt-3 italic">
            * Digital Product - PDF E-book
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
