import { Button } from '@/components/ui/button';
import { Phone, Star, Award, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-car.jpg';

const Hero = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "5519999999999";
    const message = "Olá! Gostaria de agendar um serviço na Machado Details.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury car detailing at Machado Details"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Estética Automotiva Premium</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="text-gradient animate-glow">MACHADO</span>
            <br />
            <span className="text-foreground">DETAILS</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Transformamos seu veículo em uma obra de arte. 
            <span className="text-primary font-semibold"> Estética automotiva premium</span> 
            para carros e motos em Campinas-SP.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-foreground font-medium">Atendimento Personalizado</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-foreground font-medium">Produtos Premium</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-foreground font-medium">Garantia de Qualidade</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              onClick={handleWhatsApp}
              className="btn-hero group"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Agendar pelo WhatsApp
            </Button>
            <Button 
              variant="outline"
              className="btn-outline px-8 py-4 text-lg"
              onClick={() => {
                const element = document.getElementById('servicos');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Conheça os Serviços
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-current" />
                ))}
              </div>
              <span className="text-muted-foreground">5.0 • 200+ clientes satisfeitos</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">100% Garantido</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating animation elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;