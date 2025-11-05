import drElaraVance from "@/assets/dr-elara-vance.png";

const AuthorES = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conoce a la <span className="text-secondary">Dra. Elara Vance</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tu guía para desbloquear tu superpoder TDAH
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-2xl opacity-30"></div>
              <img 
                src={drElaraVance} 
                alt="Dra. Elara Vance - Autora de TDAH: ¿Caos o Superpoder? - Experta en investigación y tratamiento del TDAH" 
                className="relative w-full max-w-md rounded-2xl shadow-strong"
              />
              <p className="text-center text-muted-foreground text-sm mt-3 italic">
                * Imagen ilustrativa
              </p>
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p>
                La Dra. Elara Vance es una experta líder en investigación y tratamiento del TDAH, con más de 15 años 
                de experiencia ayudando a individuos y familias a transformar su relación con el TDAH.
              </p>
              
              <p>
                Como psicóloga clínica y defensora de la neurodiversidad, la Dra. Vance ha dedicado 
                su carrera a desafiar narrativas obsoletas sobre el TDAH. Su trabajo innovador se enfoca en 
                enfoques basados en fortalezas que empoderan a las personas a prosperar en lugar de simplemente sobrevivir.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border-l-4 border-primary">
                <p className="font-semibold text-primary mb-2">Misión de la Dra. Vance:</p>
                <p className="italic">
                  "Escribí este libro porque he visto de primera mano cómo el TDAH puede ser tanto un desafío como un regalo. 
                  Mi objetivo es ayudarte a desbloquear el regalo mientras dominas el desafío."
                </p>
              </div>

              <p>
                Su enfoque combina neurociencia de vanguardia con estrategias prácticas del mundo real que 
                funcionan para niños, adolescentes y adultos. A través de su investigación, práctica clínica y ahora este 
                libro, la Dra. Vance ha ayudado a miles a descubrir su verdadero potencial.
              </p>

              <div className="pt-4 space-y-2">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <span className="text-muted-foreground">Ph.D. en Psicología Clínica</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <span className="text-muted-foreground">15+ años tratando pacientes con TDAH</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <span className="text-muted-foreground">Investigadora publicada y conferencista</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorES;
