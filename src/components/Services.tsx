import { Car, Bike, Sparkles, Shield, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import serviceImage from '@/assets/service-detail.jpg';
import motoImage from '@/assets/moto-service.jpg';

const Services = () => {
  const handleWhatsApp = (service: string) => {
    const phoneNumber = "5519999999999";
    const message = `Olá! Gostaria de saber mais sobre o serviço: ${service}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const carServices = [
    {
      title: "Lavagem Detalhada Premium",
      description: "Lavagem completa com produtos premium, incluindo shampoo técnico, cera de carnaúba e proteção UV.",
      price: "A partir de R$ 80",
      duration: "2h",
      features: ["Shampoo técnico", "Cera de carnaúba", "Proteção UV", "Limpeza interna completa"]
    },
    {
      title: "Enceramento e Polimento",
      description: "Remoção de micro riscos, polimento técnico e aplicação de cera premium para brilho duradouro.",
      price: "A partir de R$ 150",
      duration: "4h",
      features: ["Polimento técnico", "Remoção de riscos", "Cera premium", "Proteção duradoura"]
    },
    {
      title: "Tratamento Interno Completo",
      description: "Higienização profunda do interior, couro, plásticos e tecidos com produtos específicos.",
      price: "A partir de R$ 120",
      duration: "3h",
      features: ["Higienização profunda", "Tratamento de couro", "Limpeza de tecidos", "Aromatização"]
    }
  ];

  const motoServices = [
    {
      title: "Grid Detail",
      description: "Serviço específico para motos esportivas, focado em cada detalhe das peças e componentes.",
      price: "A partir de R$ 90",
      duration: "2.5h",
      features: ["Limpeza detalhada", "Proteção de plásticos", "Brilho em cromados", "Cuidado especial com eletrônicos"]
    },
    {
      title: "Pole Position",
      description: "O mais completo serviço para motos, incluindo polimento, enceramento e proteção total.",
      price: "A partir de R$ 180",
      duration: "4h",
      features: ["Polimento completo", "Enceramento premium", "Proteção total", "Inspeção técnica"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nossos Serviços</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Serviços <span className="text-gradient">Premium</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços especializados para carros e motos, 
            sempre com o mais alto padrão de qualidade e atenção aos detalhes.
          </p>
        </div>

        {/* Car Services */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <Car className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-display font-bold">Serviços para Carros</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {carServices.map((service, index) => (
              <div key={index} className="card-service p-6 h-full flex flex-col">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-display font-bold text-lg">{service.title}</h4>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm text-primary">{service.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="w-3 h-3 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{service.price}</span>
                    <Button 
                      onClick={() => handleWhatsApp(service.title)}
                      className="btn-primary"
                      size="sm"
                    >
                      Agendar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Car Image */}
          <div className="rounded-2xl overflow-hidden shadow-premium mb-12">
            <img 
              src={serviceImage} 
              alt="Premium car detailing service"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Moto Services */}
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <Bike className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-display font-bold">Serviços para Motos</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {motoServices.map((service, index) => (
              <div key={index} className="card-service p-6 h-full flex flex-col">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-display font-bold text-lg">{service.title}</h4>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm text-primary">{service.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="w-3 h-3 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{service.price}</span>
                    <Button 
                      onClick={() => handleWhatsApp(service.title)}
                      className="btn-primary"
                      size="sm"
                    >
                      Agendar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Moto Image */}
          <div className="rounded-2xl overflow-hidden shadow-premium">
            <img 
              src={motoImage} 
              alt="Premium motorcycle detailing service"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 text-center">
          <div className="card-premium p-8 max-w-2xl mx-auto">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold mb-4">Garantia de Qualidade</h3>
            <p className="text-muted-foreground leading-relaxed">
              Todos os nossos serviços incluem garantia de satisfação. Se não ficar 100% satisfeito, 
              refazemos o serviço sem custo adicional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;