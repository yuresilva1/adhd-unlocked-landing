const TestimonialsES = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Madre de un niño de 10 años con TDAH",
      rating: 5,
      text: "Este libro cambió completamente cómo veo el TDAH de mi hijo. Finalmente entiendo su cerebro y tenemos estrategias que realmente funcionan. ¡No puedo agradecerle lo suficiente a la Dra. Vance!"
    },
    {
      name: "Michael T.",
      role: "Adulto con TDAH, 34 años",
      rating: 5,
      text: "Durante años luché pensando que algo estaba mal conmigo. Este libro me ayudó a entender que mi cerebro no está roto, solo funciona de manera diferente. Ahora estoy prosperando en mi carrera y relaciones."
    },
    {
      name: "Jessica L.",
      role: "Adolescente, 16 años",
      rating: 5,
      text: "Finalmente un libro que me habla y no me trata como si estuviera rota. Las estrategias realmente funcionan y me están ayudando mucho en la escuela. ¡Gracias!"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Lo Que Dicen Los <span className="text-primary">Lectores</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Únete a más de 10,000+ personas que han transformado su viaje con el TDAH
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-smooth border border-border"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg 
                    key={i}
                    className="w-5 h-5 text-accent" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-border pt-4">
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
