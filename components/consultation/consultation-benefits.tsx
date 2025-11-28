import { Card } from "@/components/ui/card"

const benefits = [
  {
    icon: "🎯",
    title: "Análise Personalizada",
    description:
      "Avaliamos o seu perfil de jogador e recomendamos as plataformas que melhor se adequam às suas preferências e estilo de jogo.",
  },
  {
    icon: "🔒",
    title: "Segurança Garantida",
    description:
      "Orientamos sobre licenças SRIJ, métodos de pagamento seguros e proteção de dados pessoais nas plataformas certificadas.",
  },
  {
    icon: "💰",
    title: "Maximização de Bónus",
    description:
      "Explicamos as melhores estratégias para aproveitar bónus de boas-vindas e promoções sem cair em armadilhas de requisitos.",
  },
  {
    icon: "📊",
    title: "Comparação Detalhada",
    description:
      "Apresentamos comparações lado a lado das plataformas top, destacando vantagens e desvantagens de cada uma.",
  },
]

export function ConsultationBenefits() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
          Por que Agendar uma Consulta?
        </h2>
        <div className="w-16 h-1 bg-secondary" />
      </div>

      <p className="text-muted-foreground text-lg leading-relaxed">
        Nossa equipa de especialistas está pronta para ajudá-lo a navegar no mundo dos casinos online em Portugal com
        confiança e segurança.
      </p>

      <div className="grid gap-4 pt-4">
        {benefits.map((benefit, index) => (
          <Card key={index} className="elegant-card p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-2xl">
                {benefit.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
