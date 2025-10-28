import drElaraVance from "@/assets/dr-elara-vance.png";

const Author = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet <span className="text-secondary">Dr. Elara Vance</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Your guide to unlocking your ADHD superpower
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-2xl opacity-30"></div>
              <img 
                src={drElaraVance} 
                alt="Dr. Elara Vance - Author of ADHD: Chaos or Superpower? - Expert in ADHD research and treatment" 
                className="relative w-full max-w-md rounded-2xl shadow-strong"
              />
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p>
                Dr. Elara Vance is a leading expert in ADHD research and treatment, with over 15 years 
                of experience helping individuals and families transform their relationship with ADHD.
              </p>
              
              <p>
                As both a clinical psychologist and an advocate for neurodiversity, Dr. Vance has dedicated 
                her career to challenging outdated narratives about ADHD. Her groundbreaking work focuses on 
                strengths-based approaches that empower people to thrive rather than merely survive.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border-l-4 border-primary">
                <p className="font-semibold text-primary mb-2">Dr. Vance's Mission:</p>
                <p className="italic">
                  "I wrote this book because I've seen firsthand how ADHD can be both a challenge and a gift. 
                  My goal is to help you unlock the gift while mastering the challenge."
                </p>
              </div>

              <p>
                Her approach combines cutting-edge neuroscience with practical, real-world strategies that 
                work for children, teens, and adults. Through her research, clinical practice, and now this 
                book, Dr. Vance has helped thousands discover their true potential.
              </p>

              <div className="pt-4 space-y-2">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <span className="text-muted-foreground">Ph.D. in Clinical Psychology</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <span className="text-muted-foreground">15+ years treating ADHD patients</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <span className="text-muted-foreground">Published researcher and speaker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
