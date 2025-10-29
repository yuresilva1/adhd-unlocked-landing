const TestimonialsES = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Madre de niño de 10 años con TDAH",
      text: "Este libro cambió todo para nuestra familia. Por primera vez, entiendo el cerebro de mi hijo y cómo apoyarlo sin batallas constantes. ¡Ahora está prosperando!",
      rating: 5
    },
    {
      name: "Marcus T.",
      role: "Adulto de 25 años con TDAH",
      text: "He leído innumerables libros sobre TDAH, pero este realmente lo entiende. Las estrategias son prácticas, la ciencia es clara, y por primera vez, me siento esperanzado sobre mi futuro.",
      rating: 5
    },
    {
      name: "Jessica R.",
      role: "Profesora de Secundaria",
      text: "Como educadora, este libro me dio perspectivas invaluables sobre mis estudiantes con TDAH. Las estrategias funcionan no solo en casa, sino también en el aula. ¡Lectura obligatoria para maestros!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Lo Que <span className="text-primary">Dicen los Lectores</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Únete a miles que han transformado sus vidas con esta guía revolucionaria
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-md hover:shadow-strong transition-smooth border border-border"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg 
                    key={i}
                    className="w-5 h-5 text-accent fill-current" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsES;
