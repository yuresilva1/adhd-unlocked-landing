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
      answer: "Este libro está diseñado para padres de niños con TDAH, adolescentes navegando desafíos escolares y sociales, y adultos que quieren finalmente entender y aprovechar su cerebro TDAH. Ya sea que estés recién diagnosticado o hayas vivido con TDAH por años, encontrarás estrategias prácticas adaptadas a tu situación."
    },
    {
      question: "¿En qué formato es el e-book?",
      answer: "El e-book se entrega como archivo PDF compatible con todos los dispositivos - computadoras, tablets, smartphones y lectores electrónicos incluyendo Kindle. Tendrás acceso instantáneo después de la compra y podrás leerlo en cualquier lugar, en cualquier momento."
    },
    {
      question: "¿Cuánto mide el libro?",
      answer: "El libro tiene 82 páginas de contenido accionable - suficientemente largo para ser completo, pero lo suficientemente conciso para respetar tu tiempo y atención. Sin relleno, solo estrategias probadas y perspectivas que puedes implementar inmediatamente."
    },
    {
      question: "¿Este libro es solo sobre medicación?",
      answer: "Absolutamente no. Aunque la medicación puede ser parte del manejo del TDAH, este libro se enfoca en entender tu cerebro, construir sistemas efectivos, desarrollar habilidades de regulación emocional y aprovechar tus fortalezas únicas - con o sin medicación."
    },
    {
      question: "¿Qué tan rápido veré resultados?",
      answer: "Muchos lectores reportan momentos 'ajá' dentro de los primeros capítulos. El libro incluye estrategias accionables que puedes implementar inmediatamente. Sin embargo, la transformación duradera viene con la aplicación consistente de las técnicas a lo largo del tiempo."
    },
    {
      question: "¿Qué pasa si el libro no me ayuda?",
      answer: "Ofrecemos una garantía de devolución del 100% por 30 días. Si no encuentras el libro valioso, simplemente envíanos un email y reembolsaremos tu compra completamente. Sin preguntas. Estamos tan seguros del contenido que cambia vidas dentro."
    },
    {
      question: "¿Necesito leerlo en orden?",
      answer: "Aunque el libro está diseñado para construir progresivamente, cada capítulo puede funcionar solo. Siéntete libre de saltar a las secciones más relevantes para tus necesidades inmediatas. El libro está estructurado para trabajar con tu cerebro TDAH, no contra él."
    },
    {
      question: "¿Este libro está basado en evidencia?",
      answer: "¡Sí! La Dra. Vance combina la última investigación en neurociencia con 15+ años de experiencia clínica. Cada estrategia está fundamentada en evidencia científica y comprobada efectiva a través de aplicación real con miles de pacientes."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Preguntas <span className="text-primary">Frecuentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Todo lo que necesitas saber antes de comenzar tu transformación
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
          <p className="text-muted-foreground mb-4">¿Todavía tienes preguntas?</p>
          <a 
            href="mailto:support@adhdbook.com" 
            className="text-primary hover:text-primary/80 font-semibold underline"
          >
            Contáctanos directamente
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQES;
