"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "Como funciona o sistema de classificação do MelhoresJogosEmPT?",
    answer:
      "Utilizamos uma metodologia rigorosa baseada em mais de 60 critérios de avaliação. Testamos cada casino pessoalmente com depósitos reais, analisamos segurança (35%), variedade de jogos (25%), qualidade de bónus (25%) e suporte ao cliente (15%). Todas as classificações são atualizadas mensalmente.",
  },
  {
    question: "Todos os casinos listados são legais em Portugal?",
    answer:
      "Sim, absolutamente. Apenas incluímos no nosso ranking casinos que possuem licença válida emitida pelo SRIJ (Serviço de Regulação e Inspeção de Jogos). Verificamos regularmente o estatuto de cada licença para garantir total conformidade com a legislação portuguesa.",
  },
  {
    question: "Qual é o melhor método de pagamento para casinos online?",
    answer:
      "MB Way é a opção mais popular entre jogadores portugueses pela conveniência e rapidez. Carteiras digitais como Neteller e Skrill oferecem levantamentos rápidos (24h). Cartões bancários são universalmente aceites mas levantamentos demoram 3-5 dias. A escolha depende das suas prioridades: velocidade vs disponibilidade.",
  },
  {
    question: "Os bónus de boas-vindas valem realmente a pena?",
    answer:
      "Depende dos termos e condições. Bónus com requisitos de apostas (wagering) abaixo de x35 e prazo de validade acima de 30 dias são vantajosos. Analise sempre as condições: jogos elegíveis, aposta máxima permitida e percentagem de contribuição. No MelhoresJogosEmPT destacamos apenas ofertas com termos justos.",
  },
  {
    question: "Quanto tempo demora a verificação de conta?",
    answer:
      "Normalmente entre 24-72 horas após submissão dos documentos. Aconselhamos fazer a verificação logo após o registo, mesmo antes do primeiro depósito, para evitar atrasos no levantamento de ganhos. Documentos necessários: ID válido, comprovativo de morada (máx. 3 meses) e confirmação de método de pagamento.",
  },
  {
    question: "Existem estratégias para aumentar hipóteses de ganhar?",
    answer:
      "Não existem estratégias garantidas para ganhar em jogos de sorte. No entanto, pode otimizar a sua experiência: escolha jogos com RTP alto (acima de 96%), gerencie adequadamente a banca, aproveite bónus com termos favoráveis e conheça bem as regras do jogo. Lembre-se: a casa sempre tem vantagem a longo prazo.",
  },
  {
    question: "Posso jogar em vários casinos simultaneamente?",
    answer:
      "Sim, é perfeitamente legal e muitos jogadores fazem-no para aproveitar diferentes bónus e promoções. No entanto, certifique-se de gerir bem o orçamento entre plataformas e respeite os termos de cada casino, especialmente regras sobre múltiplas contas na mesma plataforma.",
  },
  {
    question: "Como sei se um casino é seguro?",
    answer:
      "Verifique: 1) Licença SRIJ válida, 2) Encriptação SSL (cadeado no navegador), 3) Fornecedores de jogos reconhecidos, 4) Política de privacidade clara, 5) Métodos de pagamento seguros, 6) Reputação positiva online. Todos os casinos no MelhoresJogosEmPT já passaram por esta verificação rigorosa.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 px-4 w-full bg-card/50">
      <div className="container mx-auto max-w-[1220px]">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-3 block">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <div className="gold-accent-line w-24 mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Respostas às questões mais comuns sobre casinos online em Portugal
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="luxury-card rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-foreground font-medium pr-4">{faq.question}</span>
                <div
                  className={`
                  flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center
                  transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}
                `}
                >
                  <ChevronDown className="w-4 h-4 text-primary" />
                </div>
              </button>
              <div
                className={`
                overflow-hidden transition-all duration-300
                ${openIndex === index ? "max-h-96" : "max-h-0"}
              `}
              >
                <div className="px-5 pb-5 border-t border-border pt-4">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
