const steps = [
  {
    number: "1",
    title: "Preencha o Formulário",
    description: "Forneça-nos informações básicas sobre suas preferências e experiência com casinos online.",
  },
  {
    number: "2",
    title: "Confirmação Rápida",
    description: "Receberá um email de confirmação em até 24 horas com opções de horários disponíveis.",
  },
  {
    number: "3",
    title: "Consulta Personalizada",
    description: "Sessão de 30 minutos por videochamada ou telefone com um dos nossos especialistas.",
  },
  {
    number: "4",
    title: "Relatório Detalhado",
    description: "Após a consulta, enviamos um relatório com recomendações personalizadas por email.",
  },
]

export function ConsultationProcess() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">Como Funciona</h2>
        <div className="w-16 h-1 bg-secondary" />
      </div>

      <div className="space-y-6 pt-4">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4 group">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full border-2 border-secondary bg-secondary/10 flex items-center justify-center font-serif text-xl font-bold text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                {step.number}
              </div>
              {index < steps.length - 1 && <div className="w-px h-12 bg-border mx-auto mt-2" />}
            </div>
            <div className="pb-8 space-y-1">
              <h3 className="font-serif text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
