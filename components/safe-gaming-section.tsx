export function SafeGamingSection() {
  return (
    <section className="py-16 md:py-24 px-4 w-full">
      <div className="container mx-auto max-w-[1220px]">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-destructive text-sm font-medium tracking-widest uppercase mb-3 block">Importante</span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Jogo <span className="text-destructive">Responsável</span>
          </h2>
          <div className="w-24 h-px bg-destructive mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A sua segurança e bem-estar são a nossa prioridade absoluta
          </p>
        </div>

        {/* Warning banner */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 mb-12 max-w-3xl mx-auto text-center">
          <p className="text-foreground text-xl font-semibold mb-2">O jogo pode causar dependência</p>
          <p className="text-muted-foreground text-lg">Proibido para menores de 18 anos</p>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          <div className="luxury-card rounded-xl p-8 border-l-4 border-l-emerald">
            <h3 className="text-xl text-emerald mb-6 font-serif">Práticas Saudáveis de Jogo</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-emerald mt-1">•</span>
                Defina limites claros de tempo e orçamento antes de começar a jogar
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald mt-1">•</span>
                Encare o jogo como entretenimento, não como fonte de rendimento
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald mt-1">•</span>
                Respeite rigorosamente os limites estabelecidos
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald mt-1">•</span>
                Nunca tente recuperar perdas aumentando apostas
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald mt-1">•</span>
                Faça pausas regulares e mantenha equilíbrio com outras atividades
              </li>
            </ul>
          </div>

          <div className="luxury-card rounded-xl p-8 border-l-4 border-l-destructive">
            <h3 className="text-xl text-destructive mb-6 font-serif">Sinais de Alerta</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-destructive mt-1">•</span>
                Gastar mais tempo ou dinheiro do que inicialmente planeado
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive mt-1">•</span>
                Ocultar hábitos de jogo ou perdas de familiares e amigos
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive mt-1">•</span>
                Negligenciar trabalho, estudos ou relações devido ao jogo
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive mt-1">•</span>
                Sentir irritabilidade ou ansiedade quando não está a jogar
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive mt-1">•</span>
                Pedir dinheiro emprestado especificamente para jogar
              </li>
            </ul>
          </div>
        </div>

        {/* Support resources */}
        <div className="border-t border-border pt-12">
          <h3 className="text-2xl text-primary text-center mb-8 font-serif">Recursos de Apoio em Portugal</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="luxury-card rounded-xl p-6 text-center hover:border-primary/30 transition-all">
              <p className="text-foreground font-semibold mb-2">Linha Vida</p>
              <p className="text-primary text-2xl font-bold mb-3">213 950 840</p>
              <p className="text-muted-foreground text-sm">Apoio especializado gratuito</p>
              <p className="text-muted-foreground/60 text-xs mt-2">Seg-Sex: 10h00-20h00</p>
            </div>

            <div className="luxury-card rounded-xl p-6 text-center hover:border-primary/30 transition-all">
              <p className="text-foreground font-semibold mb-2">Portal SICAD</p>
              <p className="text-primary text-xl font-bold mb-3">www.icad.pt</p>
              <p className="text-muted-foreground text-sm">Informação e recursos</p>
              <p className="text-muted-foreground/60 text-xs mt-2">Acesso 24/7</p>
            </div>

            <div className="luxury-card rounded-xl p-6 text-center hover:border-primary/30 transition-all">
              <p className="text-foreground font-semibold mb-2">Auto-Exclusão</p>
              <p className="text-primary text-xl font-bold mb-3">RNP - Registo</p>
              <p className="text-muted-foreground text-sm">Bloqueio nacional</p>
              <p className="text-muted-foreground/60 text-xs mt-2">Todos os operadores</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
