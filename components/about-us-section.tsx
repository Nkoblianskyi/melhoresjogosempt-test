export function AboutUsSection() {
  return (
    <section className="py-16 md:py-24 px-4 w-full bg-card/50">
      <div className="container mx-auto max-w-[1220px]">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-3 block">Quem Somos</span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Sobre o <span className="text-primary">MelhoresJogosEmPT</span>
          </h2>
          <div className="gold-accent-line w-24 mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A referência portuguesa em análise independente de casinos online
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          <div className="luxury-card rounded-xl p-8 hover:border-primary/30 transition-all duration-300">
            <h3 className="text-xl text-primary mb-4 font-serif">A Nossa Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser a referência número um em Portugal para jogadores que procuram informação fidedigna, análises
              imparciais e recomendações transparentes sobre casinos online licenciados e seguros.
            </p>
          </div>

          <div className="luxury-card rounded-xl p-8 hover:border-primary/30 transition-all duration-300">
            <h3 className="text-xl text-primary mb-4 font-serif">Compromisso com Qualidade</h3>
            <p className="text-muted-foreground leading-relaxed">
              Cada casino é rigorosamente testado pela nossa equipa de especialistas. Avaliamos segurança, variedade de
              jogos, bónus, métodos de pagamento e qualidade do suporte ao cliente.
            </p>
          </div>

          <div className="luxury-card rounded-xl p-8 hover:border-primary/30 transition-all duration-300">
            <h3 className="text-xl text-primary mb-4 font-serif">Independência Editorial</h3>
            <p className="text-muted-foreground leading-relaxed">
              Mantemos completa independência editorial. As nossas classificações baseiam-se exclusivamente em critérios
              objetivos e experiência real, nunca em parcerias comerciais.
            </p>
          </div>

          <div className="luxury-card rounded-xl p-8 hover:border-primary/30 transition-all duration-300">
            <h3 className="text-xl text-primary mb-4 font-serif">Experiência Comprovada</h3>
            <p className="text-muted-foreground leading-relaxed">
              Com mais de uma década na indústria do jogo online, a nossa equipa combina conhecimento técnico,
              experiência prática e paixão pelo jogo responsável.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-border pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground text-sm">Casinos Analisados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">12+</div>
              <div className="text-muted-foreground text-sm">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100K+</div>
              <div className="text-muted-foreground text-sm">Leitores Mensais</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground text-sm">Avaliações Honestas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
