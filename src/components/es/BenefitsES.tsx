import womanReading from "@/assets/woman-reading.png";
import bookLogo from "@/assets/book-logo.png";

const BenefitsES = () => {
  const benefits = [
    {
      title: "Las Fortalezas Ocultas del TDAH",
      description: "Descubre la creatividad, hiperfoco y pensamiento innovador que hace extraordinario a tu cerebro."
    },
    {
      title: "Estrategias Prácticas para Cada Edad",
      description: "Herramientas adaptadas para niños, adolescentes y adultos para manejar desafíos y maximizar fortalezas."
    },
    {
      title: "Entendiendo el Cerebro TDAH",
      description: "Aprende la ciencia detrás del TDAH de manera fácil de entender y empoderante de aplicar."
    },
    {
      title: "Técnicas de Regulación Emocional",
      description: "Domina tus emociones sin medicación—estrategias probadas para manejar el agobio y la frustración."
    },
    {
      title: "Construyendo Sistemas que Funcionan",
      description: "Olvida los consejos universales. Crea rutinas y sistemas diseñados para cómo funciona realmente tu cerebro."
    },
    {
      title: "Prosperando en Escuela, Trabajo y Relaciones",
      description: "Transforma tu TDAH en un activo en educación, éxito profesional y conexiones significativas."
    },
    {
      title: "Historias Reales, Resultados Reales",
      description: "Inspírate con viajes del caos al triunfo—prueba de que prosperar con TDAH es posible."
    },
    {
      title: "Tu Plan de Acción Personalizado",
      description: "Sal con un mapa claro para implementar inmediatamente—no más adivinar ni agobio."
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Dentro de Esta <span className="text-primary">Guía Revolucionaria</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubrirás todo lo que necesitas para transformar el TDAH de una lucha diaria a tu mayor ventaja.
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
          <div className="relative">
            <img 
              src={womanReading} 
              alt="Mujer leyendo libro de TDAH en un café cómodo - Comienza tu transformación hoy" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-strong"
            />
            <img 
              src={bookLogo} 
              alt="ADHD Book Logo" 
              className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsES;
