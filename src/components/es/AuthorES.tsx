import drElaraVance from "@/assets/dr-elara-vance.png";

const AuthorES = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conoce a <span className="text-primary">La Experta</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Dra. Elara Vance, Ph.D. en Neuropsicología
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img 
              src={drElaraVance} 
              alt="Dra. Elara Vance - Experta en TDAH y autora de TDAH: ¿Caos o Superpoder?" 
              className="w-full max-w-md rounded-2xl shadow-strong"
            />
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-accent/10 to-secondary/10 border-l-4 border-primary p-6 rounded-lg">
              <p className="text-lg text-foreground leading-relaxed italic">
                "Mi misión es simple: ayudar a las personas con TDAH a verse a sí mismas no como rotas, sino como brillantes."
              </p>
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              La <strong>Dra. Elara Vance</strong> es una neuropsicóloga de renombre con más de 15 años de experiencia 
              especializada en investigación y tratamiento del TDAH. Ha trabajado con miles de familias, ayudándolas 
              a transformar sus luchas en fortalezas.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Después de presenciar los efectos que cambian vidas de replantear el TDAH, la Dra. Vance se dedicó a 
              hacer que su experiencia fuera accesible para todos a través de este libro innovador.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-foreground"><strong>Ph.D. en Neuropsicología</strong> de la Universidad de Stanford</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-foreground"><strong>Más de 15 años</strong> trabajando con pacientes con TDAH</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-foreground"><strong>Conferencista destacada</strong> en conferencias nacionales sobre TDAH</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-foreground"><strong>Autora</strong> de numerosos artículos de investigación revisados por pares</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorES;
