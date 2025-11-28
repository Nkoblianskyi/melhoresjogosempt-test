import { Header } from "@/components/header"
import { Lock, Database, Eye, Users, Shield, Scale, FileCheck } from "lucide-react"

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Política de Privacidade</h1>
            <p className="text-muted-foreground">melhoresjogosempt.com | Última atualização: Janeiro 2025</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Commitment */}
            <section className="luxury-card rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-serif text-primary mb-3">Compromisso com a Privacidade</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    O MelhoresJogosEmPT é um portal independente especializado na análise e comparação imparcial de
                    casinos online licenciados em Portugal. A sua privacidade é fundamental para nós.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Esta Política de Privacidade descreve de forma transparente como recolhemos, utilizamos, armazenamos
                    e protegemos os seus dados pessoais. Não operamos jogos de casino nem processamos transações
                    financeiras.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Collection */}
            <section className="luxury-card rounded-xl p-8">
              <h2 className="text-xl font-serif text-primary mb-6 flex items-center gap-3">
                <Database className="w-6 h-6" />
                Dados que Recolhemos
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Informações Recolhidas Automaticamente</h3>
                  <div className="bg-secondary rounded-xl p-5">
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald mt-1">✓</span>
                        <span>
                          <strong className="text-foreground">Dados Técnicos:</strong> Endereço IP, navegador, sistema
                          operativo
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald mt-1">✓</span>
                        <span>
                          <strong className="text-foreground">Dados de Navegação:</strong> Páginas visitadas, tempo de
                          permanência
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald mt-1">✓</span>
                        <span>
                          <strong className="text-foreground">Geolocalização:</strong> País e região aproximada
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald mt-1">✓</span>
                        <span>
                          <strong className="text-foreground">Origem do Tráfego:</strong> Site de referência, motor de
                          busca
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Informações Voluntárias</h3>
                  <div className="bg-secondary rounded-xl p-5">
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          <strong className="text-foreground">Preferências:</strong> Filtros e comparações guardadas
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          <strong className="text-foreground">Interações:</strong> Avaliações e feedback submetido
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          <strong className="text-foreground">Consentimentos:</strong> Preferências de cookies
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Usage */}
            <section className="luxury-card rounded-xl p-8">
              <h2 className="text-xl font-serif text-primary mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6" />
                Como Utilizamos os Seus Dados
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Análise e Melhoria", desc: "Melhorar continuamente as nossas análises" },
                  { title: "Personalização", desc: "Adaptar conteúdo às suas preferências" },
                  { title: "Estatísticas", desc: "Gerar relatórios sobre tendências do mercado" },
                  { title: "Segurança", desc: "Prevenir fraude e garantir segurança" },
                  { title: "Conformidade Legal", desc: "Cumprir obrigações legais e regulamentares" },
                  { title: "Rastreamento", desc: "Acompanhar referências aos casinos parceiros" },
                ].map((item, index) => (
                  <div key={index} className="bg-secondary rounded-lg p-4">
                    <h4 className="text-foreground font-semibold mb-1 flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald rounded-full"></span>
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Legal Basis */}
            <section className="luxury-card rounded-xl p-8">
              <h2 className="text-xl font-serif text-primary mb-6 flex items-center gap-3">
                <Scale className="w-6 h-6" />
                Base Legal (RGPD)
              </h2>

              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-5 py-2">
                  <h4 className="text-foreground font-semibold mb-1">Interesse Legítimo (Art. 6º, n.º 1, al. f)</h4>
                  <p className="text-sm text-muted-foreground">
                    Análise de tráfego, melhoria do serviço, prevenção de fraude
                  </p>
                </div>
                <div className="border-l-4 border-emerald pl-5 py-2">
                  <h4 className="text-foreground font-semibold mb-1">Consentimento (Art. 6º, n.º 1, al. a)</h4>
                  <p className="text-sm text-muted-foreground">Cookies não essenciais, comunicações de marketing</p>
                </div>
                <div className="border-l-4 border-border pl-5 py-2">
                  <h4 className="text-foreground font-semibold mb-1">Execução de Contrato (Art. 6º, n.º 1, al. b)</h4>
                  <p className="text-sm text-muted-foreground">Fornecimento dos serviços de comparação</p>
                </div>
              </div>
            </section>

            {/* Data Sharing */}
            <section className="luxury-card rounded-xl p-8">
              <h2 className="text-xl font-serif text-primary mb-6 flex items-center gap-3">
                <Users className="w-6 h-6" />
                Partilha de Dados
              </h2>

              <div className="bg-emerald/10 border border-emerald/30 rounded-xl p-5 mb-6">
                <p className="text-emerald font-semibold text-lg mb-2">NÃO VENDEMOS OS SEUS DADOS PESSOAIS</p>
                <p className="text-muted-foreground text-sm">
                  O MelhoresJogosEmPT nunca vende, aluga ou comercializa os seus dados pessoais a terceiros.
                </p>
              </div>

              <p className="text-muted-foreground mb-4">Podemos partilhar informações limitadas com:</p>

              <div className="space-y-3">
                <div className="bg-secondary rounded-lg p-4">
                  <h4 className="text-foreground font-semibold mb-1">Fornecedores Técnicos</h4>
                  <p className="text-sm text-muted-foreground">
                    Hosting, analytics, segurança - sob contratos de confidencialidade
                  </p>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <h4 className="text-foreground font-semibold mb-1">Obrigações Legais</h4>
                  <p className="text-sm text-muted-foreground">Quando requerido por lei ou autoridades competentes</p>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <h4 className="text-foreground font-semibold mb-1">Parceiros de Afiliados</h4>
                  <p className="text-sm text-muted-foreground">Dados anónimos para rastreamento de comissões</p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="luxury-card rounded-xl p-8">
              <h2 className="text-xl font-serif text-primary mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6" />
                Os Seus Direitos (RGPD)
              </h2>

              <p className="text-muted-foreground mb-6">Tem total controlo sobre os seus dados pessoais:</p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: "🔍", title: "Direito de Acesso", desc: "Saber que dados possuímos sobre si" },
                  { icon: "✏️", title: "Direito de Retificação", desc: "Corrigir dados incorretos" },
                  { icon: "🗑️", title: "Direito ao Apagamento", desc: "Solicitar eliminação dos dados" },
                  { icon: "⏸️", title: "Direito à Limitação", desc: "Restringir o processamento" },
                  { icon: "📦", title: "Direito à Portabilidade", desc: "Receber dados em formato estruturado" },
                  { icon: "🚫", title: "Direito de Oposição", desc: "Opor-se ao processamento" },
                ].map((right, index) => (
                  <div key={index} className="bg-secondary rounded-lg p-4">
                    <h4 className="text-primary font-semibold mb-1">
                      {right.icon} {right.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{right.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 bg-secondary rounded-xl">
                <p className="text-muted-foreground text-sm">
                  <strong className="text-foreground">Como exercer os seus direitos:</strong> Contacte-nos através do
                  formulário de contacto ou email. Responderemos no prazo de 30 dias.
                </p>
              </div>
            </section>

            {/* Security */}
            <section className="luxury-card rounded-xl p-8">
              <h2 className="text-xl font-serif text-primary mb-6 flex items-center gap-3">
                <Lock className="w-6 h-6" />
                Segurança dos Dados
              </h2>

              <p className="text-muted-foreground mb-6">
                Implementamos medidas técnicas e organizacionais robustas para proteger os seus dados:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Lock, title: "Encriptação SSL/TLS" },
                  { icon: Shield, title: "Firewalls Avançados" },
                  { icon: Users, title: "Acesso Restrito" },
                  { icon: Eye, title: "Monitorização 24/7" },
                ].map((item, index) => (
                  <div key={index} className="bg-secondary rounded-lg p-4 text-center">
                    <div className="w-10 h-10 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-5 h-5 text-emerald" />
                    </div>
                    <p className="text-foreground text-sm font-medium">{item.title}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Responsible Gaming Notice */}
            <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Jogo Responsável</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    O MelhoresJogosEmPT é um portal independente de análise e comparação. Não operamos casinos online
                    nem processamos apostas. Jogue sempre de forma responsável e apenas com operadores licenciados pelo
                    SRIJ.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center pt-6 border-t border-border">
              <p className="text-muted-foreground text-sm">
                Esta política está em conformidade com o RGPD e a legislação portuguesa aplicável
              </p>
              <p className="text-muted-foreground/60 text-xs mt-2">melhoresjogosempt.com © 2025</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
