import audienceStages from "@/assets/audience-stages.png";
import bookLogo from "@/assets/book-logo.png";

const ProblemES = () => {
  const problems = [
    "¿Batallas constantes para mantenerte enfocado, terminar tareas o mantener tu vida organizada?",
    "¿Te sientes incomprendido, juzgado o etiquetado como 'perezoso' o 'irresponsable'?",
    "¿Ves a tu hijo luchar en la escuela a pesar de su obvia inteligencia y creatividad?",
    "¿Abrumado por altibajos emocionales que parecen imposibles de controlar?",
    "¿Te preguntas si alguna vez encontrarás una estrategia, sistema o solución que realmente funcione para tu cerebro único?",
    "¿Te sientes exhausto de intentar encajar en un mundo que no fue diseñado para ti?"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ¿Algo de Esto <span className="text-primary">Resuena Contigo?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No estás roto. No estás solo. Y definitivamente no estás sin esperanza.
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
              alt="El TDAH afecta a niños, adolescentes y adultos - Mentes jóvenes, luchas adolescentes, triunfos adultos" 
              className="w-full rounded-2xl shadow-strong"
            />
            <img 
              src={bookLogo} 
              alt="ADHD Book Logo" 
              className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 drop-shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemES;
