import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ricardo Silva",
      role: "Proprietário BMW M3",
      avatar: "RS",
      rating: 5,
      comment: "Minha BMW ficou como nova. O atendimento é impecável! A atenção aos detalhes é impressionante. Recomendo para quem busca qualidade premium.",
      service: "Polimento Completo + Enceramento"
    },
    {
      name: "Marina Costa",
      role: "Proprietária Audi A4",
      avatar: "MC",
      rating: 5,
      comment: "Profissionalismo exemplar! O carro ficou impecável, tanto por fora quanto por dentro. O Machado é um verdadeiro artista no que faz. Voltarei sempre!",
      service: "Lavagem Premium + Tratamento Interno"
    },
    {
      name: "Carlos Eduardo",
      role: "Motociclista - Kawasaki Ninja",
      avatar: "CE",
      rating: 5,
      comment: "O serviço Grid Detail foi perfeito! Cada peça da minha moto foi tratada com cuidado especial. Resultado incrível e duradouro. Vale cada centavo investido.",
      service: "Grid Detail para Motos"
    },
    {
      name: "Ana Paula",
      role: "Proprietária Mercedes C180",
      avatar: "AP",
      rating: 5,
      comment: "Superou todas as expectativas! O carro ficou com um brilho espetacular e o cheiro do interior está maravilhoso. Atendimento nota 10 do início ao fim.",
      service: "Tratamento Completo"
    },
    {
      name: "Roberto Machado",
      role: "Proprietário Porsche 911",
      avatar: "RM",
      rating: 5,
      comment: "Trabalho impecável! Confiaria meu Porsche apenas ao Machado Details. A qualidade dos produtos e técnicas utilizadas é incomparável em Campinas.",
      service: "Pole Position Premium"
    },
    {
      name: "Juliana Santos",
      role: "Proprietária Honda Civic",
      avatar: "JS",
      rating: 5,
      comment: "Primeira vez que uso o serviço e já virei cliente fiel! O cuidado com cada detalhe é notável. Preço justo para a qualidade entregue. Parabéns!",
      service: "Lavagem Detalhada"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Depoimentos</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja alguns depoimentos de quem já experimentou a qualidade Machado Details.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-premium p-6 hover:scale-105 transition-all duration-300">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-current" />
                ))}
              </div>

              {/* Comment */}
              <blockquote className="text-muted-foreground mb-4 leading-relaxed italic">
                "{testimonial.comment}"
              </blockquote>

              {/* Service */}
              <div className="border-t border-border pt-4">
                <span className="text-xs text-primary bg-primary/10 rounded-full px-3 py-1">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-primary mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-primary mb-2">5.0</div>
            <div className="text-sm text-muted-foreground">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-primary mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Anos de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;