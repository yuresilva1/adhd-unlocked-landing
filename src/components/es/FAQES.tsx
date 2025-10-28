import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQES = () => {
  const faqs = [
    {
      question: "¿Para quién es este libro?",
      answer: "Este libro es para padres de niños con TDAH, adolescentes que luchan con el enfoque y la organización, y adultos que quieren entender y aprovechar su cerebro único. Ya sea que te hayan diagnosticado recientemente o hayas vivido con TDAH durante años, esta guía proporciona información valiosa y estrategias prácticas."
    },
    {
      question: "¿Qué formato tiene el libro?",
      answer: "El libro se entrega como un archivo PDF descargable instantáneamente. Tiene 82 páginas y es compatible con todos los dispositivos: Kindle, tablets, teléfonos inteligentes y computadoras. Puedes leerlo en cualquier lugar, en cualquier momento."
    },
    {
      question: "¿Cómo recibo el libro después de la compra?",
      answer: "¡Inmediatamente después de completar tu pago, recibirás un correo electrónico con tu enlace de descarga! Puedes comenzar a leer en cuestión de minutos."
    },
    {
      question: "¿Este libro está respaldado por investigación científica?",
      answer: "¡Absolutamente! La Dra. Elara Vance es una neuropsicóloga con más de 15 años de experiencia en investigación y tratamiento del TDAH. El libro se basa en ciencia comprobada y las mejores prácticas clínicas."
    },
    {
      question: "¿Qué pasa si no me ayuda?",
      answer: "Estamos tan seguros de que amarás este libro que ofrecemos una garantía de devolución del 100% por 30 días. Si no encuentras el libro valioso, simplemente contáctanos y te devolveremos tu compra completa. Sin preguntas."
    },
    {
      question: "¿Puedo compartir el libro con miembros de la familia?",
      answer: "Sí, recomendamos compartir el libro con miembros de la familia que puedan beneficiarse de entender el TDAH mejor. Es particularmente útil para padres, cónyuges y hermanos."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Preguntas <span className="text-primary">Frecuentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            ¿Tienes preguntas? Tenemos respuestas.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            ¿Todavía tienes preguntas?
          </p>
          <a 
            href="mailto:support@adhdbook.com" 
            className="text-primary font-semibold hover:underline"
          >
            Contáctanos y estaremos encantados de ayudarte
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQES;
