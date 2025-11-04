import bookDesk from "@/assets/book-desk.png";
import bookLogo from "@/assets/book-logo.png";

const SolutionES = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative">
              <img 
                src={bookDesk} 
                alt="TDAH: ¿Caos o Superpoder? libro en escritorio - Guía profesional para desbloquear tu potencial completo" 
                className="w-full rounded-2xl shadow-strong"
              />
              <img 
                src={bookLogo} 
                alt="ADHD Book Logo" 
                className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 drop-shadow-lg"
              />
            </div>
            <p className="text-center text-muted-foreground text-sm mt-3 italic">
              * Producto Digital - E-book en PDF
            </p>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Deja de Luchar Contra Ti Mismo.
              <span className="block mt-2 text-secondary">Comienza a Aprovechar Tu Poder.</span>
            </h2>
            
            <p className="text-xl text-primary font-semibold">
              Presentamos "TDAH: ¿Caos o Superpoder?"
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Este no es solo otro libro sobre manejar síntomas o "lidiar" con el TDAH. 
              Este es tu plan de transformación—una guía para entender tu cerebro TDAH, 
              desbloquear sus fortalezas ocultas y convertir lo que el mundo llama "caos" en tu mayor superpoder.
            </p>

            <div className="bg-gradient-to-r from-accent/10 to-secondary/10 border-l-4 border-accent p-6 rounded-lg">
              <p className="text-foreground font-medium text-lg italic">
                "¿Y si el TDAH no fuera un trastorno a superar, sino un sistema operativo único esperando ser comprendido?"
              </p>
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              Ya seas un padre buscando respuestas desesperadamente, un adolescente luchando por encajar, 
              o un adulto listo para finalmente prosperar—este libro te encuentra donde estás y te guía hacia donde quieres estar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionES;
