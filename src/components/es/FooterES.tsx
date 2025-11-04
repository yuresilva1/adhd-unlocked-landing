const FooterES = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-accent">
              TDAH: ¿Caos o Superpoder?
            </h3>
            <p className="text-background/80 leading-relaxed">
              Desbloquea el potencial completo de tu cerebro con estrategias basadas en evidencia 
              de la Dra. Elara Vance. Transforma el TDAH de desafío a superpoder.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#benefits" className="text-background/80 hover:text-accent transition-smooth">
                  Lo Que Aprenderás
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-background/80 hover:text-accent transition-smooth">
                  Obtener el Libro
                </a>
              </li>
              <li>
                <a href="#author" className="text-background/80 hover:text-accent transition-smooth">
                  Sobre la Autora
                </a>
              </li>
              <li>
                <a href="#faq" className="text-background/80 hover:text-accent transition-smooth">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="text-background/80 hover:text-accent transition-smooth">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-background/80 hover:text-accent transition-smooth">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="/refund-policy" className="text-background/80 hover:text-accent transition-smooth">
                  Política de Reembolso
                </a>
              </li>
              <li>
                <a href="mailto:support@adhdbook.com" className="text-background/80 hover:text-accent transition-smooth">
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 text-center text-background/60">
          <p>
            © {currentYear} Dra. Elara Vance. Todos los derechos reservados.
          </p>
          <p className="mt-2 text-sm">
            Descargo: Este libro es solo para fines informativos y no es un sustituto 
            de consejo, diagnóstico o tratamiento médico profesional.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterES;
