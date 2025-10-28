const FooterES = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Acerca del Libro</h3>
            <p className="text-background/80 leading-relaxed">
              "TDAH: ¿Caos o Superpoder?" es una guía revolucionaria para entender y 
              aprovechar el cerebro único con TDAH.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#benefits" className="text-background/80 hover:text-background transition-smooth">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-background/80 hover:text-background transition-smooth">
                  Precios
                </a>
              </li>
              <li>
                <a href="/" className="text-background/80 hover:text-background transition-smooth">
                  English Version
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-smooth">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-smooth">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-smooth">
                  Política de Reembolso
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80 text-sm">
            © {new Date().getFullYear()} TDAH: ¿Caos o Superpoder? Todos los derechos reservados.
          </p>
          <p className="text-background/60 text-xs mt-2">
            Descargo de responsabilidad: Este libro es solo para fines educativos y no sustituye 
            el consejo médico profesional, diagnóstico o tratamiento.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterES;
