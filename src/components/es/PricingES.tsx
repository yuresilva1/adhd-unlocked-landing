import { Button } from "@/components/ui/button";
import { trackInitiateCheckout } from "@/lib/fbPixel";
import { trackGoogleAdsConversion } from "@/lib/googleAds";

const PricingES = () => {
  const features = [
    "Descarga instantánea en PDF - comienza a leer en minutos",
    "82 páginas de estrategias transformadoras",
    "Compatible con Kindle, tablets y todos los dispositivos",
    "Acceso de por vida - léelo cuando quieras, donde quieras",
    "Bonus: Plantillas de plan de acción personalizado",
    "Garantía de devolución del 100% por 60 días"
  ];

  const handlePurchase = () => {
    trackInitiateCheckout();
    trackGoogleAdsConversion('https://pay.hotmart.com/Q102656094B');
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Deja de Simplemente Sobrevivir al TDAH.
            <span className="block mt-2 text-accent">¡Comienza a Prosperar!</span>
          </h2>
          <p className="text-xl text-white/90">
            Tu transformación comienza hoy por menos que el costo de una sola sesión de terapia.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-strong p-8 md:p-12">
          {/* Price */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              OFERTA POR TIEMPO LIMITADO
            </div>
            <div className="mb-2">
              <div className="mb-2">
                <span className="text-2xl md:text-3xl text-muted-foreground line-through">$29.90</span>
              </div>
              <span className="text-5xl md:text-6xl font-bold text-foreground">$9.97</span>
              <span className="ml-3 inline-block bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
                Ahorra 67%
              </span>
            </div>
            <p className="text-lg text-muted-foreground">
              Pago único • Acceso instantáneo • Sin suscripción
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <svg 
                    className="w-4 h-4 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-foreground font-medium">{feature}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            onClick={() => window.open("https://pay.hotmart.com/X102633957N", "_blank")}
            size="lg"
            className="w-full bg-gradient-cta hover:opacity-90 text-accent-foreground font-bold text-xl py-8 shadow-strong transition-smooth"
          >
            Obtén Acceso Instantáneo Ahora - $9.97
          </Button>

          {/* Guarantee */}
          <div className="mt-8 p-6 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl border-l-4 border-accent">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" />
              </svg>
              <div>
                <p className="font-bold text-foreground text-lg mb-2">
                  ¡Tu Satisfacción Está 100% Garantizada!
                </p>
                <p className="text-muted-foreground">
                  Prueba el libro sin riesgo por 60 días. Si no lo encuentras valioso, 
                  te reembolsaremos cada centavo. Sin preguntas.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8">
            <div className="flex justify-center items-center gap-8 text-muted-foreground text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" />
                </svg>
                <span>Pago Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" />
                </svg>
                <span>Entrega Instantánea</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final Push */}
        <div className="text-center mt-12 text-white">
          <p className="text-lg text-white/80">
            La pregunta no es "¿Puedo permitirme este libro?" 
            <br />
            Es "¿Puedo permitirme NO desbloquear mi potencial completo?"
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingES;
