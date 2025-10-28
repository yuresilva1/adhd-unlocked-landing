import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Who is this book for?",
      answer: "This book is designed for parents of children with ADHD, teenagers navigating school and social challenges, and adults who want to finally understand and harness their ADHD brain. Whether you're newly diagnosed or have lived with ADHD for years, you'll find practical strategies tailored to your situation."
    },
    {
      question: "What format is the e-book?",
      answer: "The e-book is delivered as a PDF file that's compatible with all devices - computers, tablets, smartphones, and e-readers including Kindle. You'll get instant access after purchase and can read it anywhere, anytime."
    },
    {
      question: "How long is the book?",
      answer: "The book is 82 pages of actionable content - long enough to be comprehensive, but concise enough to respect your time and attention. No fluff, just proven strategies and insights you can implement immediately."
    },
    {
      question: "Is this book only about medication?",
      answer: "Absolutely not. While medication can be part of ADHD management, this book focuses on understanding your brain, building effective systems, developing emotional regulation skills, and leveraging your unique strengths - with or without medication."
    },
    {
      question: "How quickly will I see results?",
      answer: "Many readers report 'aha moments' within the first few chapters. The book includes actionable strategies you can implement immediately. However, lasting transformation comes with consistent application of the techniques over time."
    },
    {
      question: "What if the book doesn't help me?",
      answer: "We offer a 30-day, 100% money-back guarantee. If you don't find the book valuable, simply email us and we'll refund your purchase in full. No questions asked. We're that confident in the life-changing content inside."
    },
    {
      question: "Do I need to read it in order?",
      answer: "While the book is designed to build progressively, each chapter can stand alone. Feel free to jump to the sections most relevant to your immediate needs. The book is structured to work with your ADHD brain, not against it."
    },
    {
      question: "Is this book evidence-based?",
      answer: "Yes! Dr. Vance combines the latest neuroscience research with 15+ years of clinical experience. Every strategy is grounded in scientific evidence and proven effective through real-world application with thousands of patients."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know before starting your transformation
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a 
            href="mailto:support@adhdbook.com" 
            className="text-primary hover:text-primary/80 font-semibold underline"
          >
            Contact us directly
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
