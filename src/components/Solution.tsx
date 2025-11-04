import bookDesk from "@/assets/book-desk.png";
import bookLogo from "@/assets/book-logo.png";

const Solution = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative">
              <img 
                src={bookDesk} 
                alt="ADHD: Chaos or Superpower? book on desk - Professional guide for unlocking your full potential" 
                className="w-full rounded-2xl shadow-strong"
              />
              <img 
                src={bookLogo} 
                alt="ADHD Book Logo" 
                className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 drop-shadow-lg"
              />
            </div>
            <p className="text-center text-muted-foreground text-sm mt-3 italic">
              * Digital Product - PDF E-book
            </p>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Stop Fighting Yourself.
              <span className="block mt-2 text-secondary">Start Harnessing Your Power.</span>
            </h2>
            
            <p className="text-xl text-primary font-semibold">
              Introducing "ADHD: Chaos or Superpower?"
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              This isn't just another book about managing symptoms or "coping" with ADHD. 
              This is your blueprint for transformation—a guide to understanding your ADHD brain, 
              unlocking its hidden strengths, and turning what the world calls "chaos" into your greatest superpower.
            </p>

            <div className="bg-gradient-to-r from-accent/10 to-secondary/10 border-l-4 border-accent p-6 rounded-lg">
              <p className="text-foreground font-medium text-lg italic">
                "What if ADHD wasn't a disorder to overcome, but a unique operating system waiting to be understood?"
              </p>
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              Whether you're a parent desperately seeking answers, a teenager struggling to fit in, 
              or an adult ready to finally thrive—this book meets you where you are and guides you to where you want to be.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
