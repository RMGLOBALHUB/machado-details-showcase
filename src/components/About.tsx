import { Award, Users, Clock, MapPin } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Excelência",
      description: "Padrão premium em cada detalhe do serviço"
    },
    {
      icon: Users,
      title: "Experiência",
      description: "Anos de expertise em estética automotiva"
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Compromisso com prazos e agendamentos"
    },
    {
      icon: MapPin,
      title: "Localização",
      description: "Campinas-SP, fácil acesso e estacionamento"
    }
  ];

  return (
    <section id="sobre" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Sobre a Machado Details</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Paixão por <span className="text-gradient">Perfeição</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Na <strong className="text-primary">Machado Details</strong>, cada veículo é tratado como uma obra de arte única. 
              Nossa paixão por automóveis e motos nos motiva a entregar sempre o melhor resultado, 
              combinando técnicas avançadas com produtos premium.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Atendimento Individualizado</h4>
                  <p className="text-muted-foreground">Cada cliente recebe atenção personalizada e serviços sob medida para suas necessidades.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Produtos Premium</h4>
                  <p className="text-muted-foreground">Utilizamos apenas os melhores produtos do mercado, garantindo resultados duradouros.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Técnicas Avançadas</h4>
                  <p className="text-muted-foreground">Constantemente atualizados com as mais modernas técnicas de estética automotiva.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary mb-2">5.0</div>
                <div className="text-sm text-muted-foreground">Avaliação Média</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="card-premium p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;