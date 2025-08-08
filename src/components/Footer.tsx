import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, Clock } from 'lucide-react';

const Footer = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "5519981969167";
    const message = "Olá! Gostaria de agendar um serviço na Machado Details.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contato" className="bg-background-elevated border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">MD</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gradient">
                  Machado Details
                </h3>
                <p className="text-xs text-muted-foreground">Estética Automotiva Premium</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transformamos seu veículo em uma obra de arte com técnicas avançadas, 
              produtos premium e atendimento personalizado.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/machadodetails" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/machadodetails" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <button 
                onClick={handleWhatsApp}
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Navegação</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Depoimentos
              </button>
            </nav>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Serviços</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>Limpeza Técnica</p>
              <p>Revestimento Cerâmico</p>
              <p>Correção de Pintura</p>
              <p>Selagem de Pintura</p>
              <p>PPF - Paint Protection Film</p>
              <p>Grid Detail (Motos)</p>
              <p>Pole Position (Motos)</p>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground">Av. Francisco de Angelis, 1417</p>
                  <p className="text-sm text-muted-foreground">Vila Paraíso, Campinas - SP</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a 
                  href="tel:+5519981969167" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (19) 98196-9167
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:contato@machadodetails.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  contato@machadodetails.com
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground">Segunda a sexta: 08h às 18h</p>
                  <p className="text-muted-foreground">Sábado: 08h às 12h</p>
                  <p className="text-muted-foreground">Domingo: Fechado</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              onClick={handleWhatsApp}
              className="btn-primary w-full mt-6"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Agendar Agora
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-background">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Machado Details. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;