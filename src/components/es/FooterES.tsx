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

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <p className="text-background/80">
              support@adhdbook.com
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <p className="text-background/80 space-y-2">
              Política de Privacidad<br/>
              Términos de Servicio<br/>
              Política de Reembolso: Garantía de 60 Días
            </p>
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
