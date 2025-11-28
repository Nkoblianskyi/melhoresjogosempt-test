import { Button } from "@/components/ui/button"
import { bettingSites } from "@/lib/mock-data"
import { Star } from "lucide-react"

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  const fullStars = Math.floor(rating / 2)
  const partialStar = (rating / 2) % 1
  const emptyStars = 5 - Math.ceil(rating / 2)

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="w-6 h-6 fill-accent text-accent" />
        ))}
        {partialStar > 0 && (
          <div className="relative">
            <Star className="w-6 h-6 text-accent/20" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${partialStar * 100}%` }}>
              <Star className="w-6 h-6 fill-accent text-accent" />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="w-6 h-6 text-accent/20" />
        ))}
      </div>
      <div className="text-muted-foreground text-sm">({reviews} avaliações)</div>
    </div>
  )
}

export function OurChoiceSection() {
  const ourChoice = bettingSites[0]

  return (
    <section className="py-12 px-4 w-full">
      <div className="container mx-auto max-w-[1220px]">
        <div className="bg-black/40 border-2 border-primary rounded-lg shadow-[0_0_40px_rgba(220,38,38,0.3)]">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="h-1 w-32 bg-accent mx-auto mb-6"></div>
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-accent">A Nossa</span> <span className="text-primary">Escolha</span>
              </h2>
              <p className="text-gray-300 text-xl">
                Após análise rigorosa, este é o nosso casino recomendado para jogadores portugueses
              </p>
            </div>

            <div className="border-2 border-primary rounded-lg p-8 mb-8 bg-black/60">
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent to-transparent mb-6"></div>

              <div className="text-center mb-6">
                <div className="bg-accent text-black px-6 py-3 rounded font-bold text-lg inline-block shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                  ESCOLHA DA REDAÇÃO
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Logo */}
                <div className="text-center">
                  <div className="bg-white p-6 rounded-lg border-2 border-gray-700 mb-4 inline-block">
                    <img
                      src={ourChoice.logo || "/placeholder.svg"}
                      alt={ourChoice.name}
                      className="w-[200px] h-[120px] object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{ourChoice.name}</h3>
                </div>

                {/* Informações Principais */}
                <div className="text-center">
                  <div className="mb-6">
                    <div className="text-accent font-bold text-xl mb-3 uppercase">Bónus</div>
                    <p className="text-white font-bold text-2xl">{ourChoice.bonus}</p>
                  </div>

                  <div className="mb-6">
                    <div className="text-5xl font-bold text-accent mb-3">{ourChoice.rating.toFixed(1)}</div>
                    <StarRating rating={ourChoice.rating} reviews={ourChoice.reviews} />
                  </div>
                </div>

                {/* Botão de Ação */}
                <div className="text-center">
                  <Button
                    asChild
                    className="bg-accent hover:bg-accent/90 text-black font-bold px-8 py-6 text-xl mb-4 uppercase tracking-wide shadow-[0_0_25px_rgba(234,179,8,0.4)]"
                  >
                    <a href={ourChoice.url} target="_blank" rel="noopener noreferrer">
                      Jogar Agora
                    </a>
                  </Button>
                  <p className="text-gray-400 text-base">Registo em 2 minutos</p>
                  <p className="text-emerald-500 font-semibold text-sm">Licenciado SRIJ</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-700 rounded-lg p-8 bg-black/40">
              <h3 className="text-3xl font-bold text-white text-center mb-8">
                <span className="text-accent">Porquê</span> <span className="text-primary">a Nossa Escolha?</span>
              </h3>

              <div className="grid md:grid-cols-2 gap-8 text-gray-300">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-bold mb-3 text-xl">Máxima Segurança</h4>
                    <p className="text-base">
                      Licença SRIJ válida, encriptação SSL 256-bit e fundos dos jogadores totalmente protegidos.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-3 text-xl">Melhor Seleção</h4>
                    <p className="text-base">
                      Mais de 1000 slots, jogos de mesa e casino ao vivo dos melhores fornecedores mundiais.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-3 text-xl">Pagamentos Rápidos</h4>
                    <p className="text-base">
                      MB WAY, Multibanco, cartões. Levantamentos processados em menos de 2 horas.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-bold mb-3 text-xl">Suporte 24/7</h4>
                    <p className="text-base">
                      Atendimento em português por chat, email e telefone. Resposta em menos de 1 minuto.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-3 text-xl">Melhores Bónus</h4>
                    <p className="text-base">Bónus generosos com requisitos justos e promoções semanais exclusivas.</p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-3 text-xl">100% Português</h4>
                    <p className="text-base">Interface em português, suporte local e métodos de pagamento nacionais.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 border-2 border-primary rounded-lg text-center bg-primary/10">
                <p className="text-primary text-xl font-semibold mb-2">Jogue com responsabilidade</p>
                <p className="text-gray-300 text-base">
                  Apenas maiores de 18 anos. O jogo pode causar dependência. Defina sempre limites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
