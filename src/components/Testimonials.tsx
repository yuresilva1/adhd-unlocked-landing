const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Parent of 10-year-old with ADHD",
      text: "This book changed everything for our family. For the first time, I understand my son's brain and how to support him without constant battles. He's thriving now!",
      rating: 5
    },
    {
      name: "Marcus T.",
      role: "25-year-old Adult with ADHD",
      text: "I've read countless ADHD books, but this one actually gets it. The strategies are practical, the science is clear, and for the first time, I feel hopeful about my future.",
      rating: 5
    },
    {
      name: "Jessica R.",
      role: "High School Teacher",
      text: "As an educator, this book gave me invaluable insights into my ADHD students. The strategies work not just at home, but in the classroom too. A must-read for teachers!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What <span className="text-primary">Readers Are Saying</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands who have transformed their lives with this revolutionary guide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-md hover:shadow-strong transition-smooth border border-border"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg 
                    key={i}
                    className="w-5 h-5 text-accent fill-current" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
