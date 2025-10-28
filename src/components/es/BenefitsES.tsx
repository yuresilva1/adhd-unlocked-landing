import womanReading from "@/assets/woman-reading.png";

const BenefitsES = () => {
  const benefits = [
    {
      title: "Comprende Tu Cerebro Único",
      description: "Aprende exactamente cómo funciona el cerebro con TDAH y por qué no está roto, solo es diferente."
    },
    {
      title: "Convierte el Caos en Creatividad",
      description: "Descubre cómo aprovechar tu energía y pensamientos dispersos en ventajas poderosas."
    },
    {
      title: "Construye Sistemas Que Funcionan",
      description: "Estrategias prácticas y comprobadas diseñadas específicamente para mentes con TDAH."
    },
    {
      title: "Mejora las Relaciones",
      description: "Herramientas de comunicación para ayudarte a ti y a tus seres queridos a entenderse mejor."
    },
    {
      title: "Aumenta el Enfoque y la Productividad",
      description: "Técnicas para mantener la concentración sin sentirte agotado o abrumado."
    },
    {
      title: "Recupera Tu Confianza",
      description: "Deja de dudar de ti mismo y comienza a abrazar tus fortalezas únicas."
    },
    {
      title: "Estrategias para Todas las Edades",
      description: "Orientación específica para niños, adolescentes y adultos viviendo con TDAH."
    },
    {
      title: "Apoyo Emocional",
      description: "Aprende a gestionar los altibajos emocionales que vienen con el TDAH."
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Dentro de Esta Guía Revolucionaria, <span className="text-primary">Descubrirás</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Todo lo que necesitas para transformar el TDAH de un obstáculo en tu mayor fortaleza
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-smooth border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="relative max-w-3xl mx-auto">
          <img 
            src={womanReading} 
            alt="Mujer leyendo y disfrutando el libro TDAH: ¿Caos o Superpoder?" 
            className="w-full rounded-2xl shadow-strong"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsES;
