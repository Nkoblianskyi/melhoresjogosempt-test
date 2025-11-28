import { Header } from "@/components/header"
import { Cookie, Settings, Eye, FileText, Shield } from "lucide-react"

export default function PoliticaCookiesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Política de Cookies</h1>
            <p className="text-muted-foreground">melhoresjogosempt.com | Última atualização: Janeiro 2025</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Introduction */}
            <section className="luxury-card rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-serif text-primary mb-3">Introdução</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    O MelhoresJogosEmPT utiliza cookies e tecnologias similares para proporcionar uma experiência de
                    navegação otimizada e personalizada. Esta política explica de forma transparente como utilizamos
                    cookies no nosso portal de avaliação e comparação de casinos online em Portugal.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookie Types */}
            <section className="luxury-card rounded-xl p-8">
              <h2 className="text-xl font-serif text-primary mb-6 flex items-center gap-3">
                <Settings className="w-6 h-6" />
                Tipos de Cookies que Utilizamos
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-emerald pl-6 py-2">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cookies Estritamente Necessários</h3>
                  <p className="text-muted-foreground mb-2">
                    Essenciais para o funcionamento básico do site. Estes cookies não podem ser desativados.
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    Exemplos: sessão de navegação, preferências de idioma, segurança
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cookies Analíticos</h3>
                  <p className="text-muted-foreground mb-2">
                    Permitem-nos analisar o comportamento dos visitantes para melhorar continuamente a qualidade das
                    nossas análises e comparações de casinos.
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    Exemplos: Google Analytics, páginas mais vistas, tempo de permanência
                  </p>
                </div>

                <div className="border-l-4 border-border pl-6 py-2">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cookies Funcionais</h3>
                  <p className="text-muted-foreground mb-2">
                    Guardam as suas preferências e personalizam a experiência no nosso portal.
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    Exemplos: preferências de visualização, filtros aplicados
                  </p>
                </div>

                <div className="border-l-4 border-border pl-6 py-2">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cookies de Marketing</h3>
                  <p className="text-muted-foreground mb-2">
                    Utilizados para apresentar conteúdo relevante baseado nos seus interesses.
                  </p>
                  <p className="text-sm text-muted-foreground/70">Exemplos: rastreamento de afiliados, remarketing</p>
                </div>
              </div>
            </section>

            {/* How to Manage */}
            <section className="luxury-card rounded-xl p-8">
              <h2 className="text-xl font-serif text-primary mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6" />
                Como Gerir os Seus Cookies
              </h2>

              <p className="text-muted-foreground mb-6">
                Tem total controlo sobre os cookies através do banner de cookies ou das configurações do seu navegador.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-secondary rounded-lg p-4">
                  <h4 className="text-foreground font-semibold mb-2">Google Chrome</h4>
                  <p className="text-sm text-muted-foreground">Definições → Privacidade e segurança → Cookies</p>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <h4 className="text-foreground font-semibold mb-2">Mozilla Firefox</h4>
                  <p className="text-sm text-muted-foreground">Opções → Privacidade e Segurança → Cookies</p>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <h4 className="text-foreground font-semibold mb-2">Safari</h4>
                  <p className="text-sm text-muted-foreground">Preferências → Privacidade → Gerir dados</p>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <h4 className="text-foreground font-semibold mb-2">Microsoft Edge</h4>
                  <p className="text-sm text-muted-foreground">Definições → Cookies e permissões</p>
                </div>
              </div>
            </section>

            {/* Retention */}
            <section className="luxury-card rounded-xl p-8">
              <h2 className="text-xl font-serif text-primary mb-4">Período de Retenção</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-secondary rounded-lg p-4">
                  <p className="text-foreground font-semibold mb-1">Cookies de Sessão</p>
                  <p className="text-sm text-muted-foreground">Eliminados ao fechar o navegador</p>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <p className="text-foreground font-semibold mb-1">Cookies Persistentes</p>
                  <p className="text-sm text-muted-foreground">Até 24 meses</p>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <p className="text-foreground font-semibold mb-1">Cookies Analíticos</p>
                  <p className="text-sm text-muted-foreground">Máximo de 26 meses</p>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <p className="text-foreground font-semibold mb-1">Cookies de Marketing</p>
                  <p className="text-sm text-muted-foreground">Até 12 meses</p>
                </div>
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
