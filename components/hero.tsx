"use client"

import { useState, useEffect } from "react"

export function Hero() {
  const [activeCard, setActiveCard] = useState(0)
  const [count, setCount] = useState({ casinos: 0, reviews: 0, players: 0 })

  // Animated counter effect
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)

      setCount({
        casinos: Math.floor(47 * easeOut),
        reviews: Math.floor(1250 * easeOut),
        players: Math.floor(89000 * easeOut),
      })

      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  // Auto-rotate cards
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const cards = [
    { suit: "♠", value: "A", color: "text-foreground" },
    { suit: "♦", value: "K", color: "text-red-500" },
    { suit: "♣", value: "Q", color: "text-foreground" },
    { suit: "♥", value: "J", color: "text-red-500" },
  ]

  return (
    <section className="relative w-full min-h-[280px] md:min-h-[320px] lg:min-h-[90vh] overflow-hidden bg-background">
      <div
        className="absolute inset-0 lg:hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/dark-luxury-poker-cards-scattered-on-velvet-table-.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
      </div>

      {/* Grid pattern overlay - only on desktop */}
      <div
        className="absolute inset-0 opacity-[0.02] hidden lg:block"
        style={{
          backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative container mx-auto max-w-[1400px] px-4 md:px-6 py-6 md:py-8 lg:py-12 h-full">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center h-full lg:min-h-[70vh]">
          {/* Left side - Content */}
          <div className="space-y-4 md:space-y-5 lg:space-y-8 flex flex-col justify-center">
            <div className="space-y-2 lg:space-y-4">
              <p className="hidden lg:block text-primary font-medium tracking-[0.3em] uppercase text-sm">
                Porto, Portugal
              </p>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-serif font-bold leading-tight lg:leading-[0.9] tracking-tight">
                <span className="text-foreground">Top Ranking </span>
                <span className="text-primary">Casinos</span>
                <span className="hidden lg:inline text-muted-foreground text-3xl md:text-5xl"> Portugal</span>
              </h1>

              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
                O seu guia completo para encontrar os{" "}
                <span className="text-primary font-semibold">melhores casinos em Portugal</span>. Análises detalhadas,
                comparações honestas e avaliações independentes dos casinos licenciados pelo SRIJ.
              </p>
            </div>

            {/* Stats - desktop only */}
            <div className="hidden lg:flex flex-wrap gap-8 py-6 border-y border-border/50">
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                  {count.casinos > 0 ? count.casinos : 47}+
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Casinos Analisados</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-serif font-bold text-primary">
                  {count.reviews.toLocaleString("pt-PT")}+
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Avaliações</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-serif font-bold text-foreground">5+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Anos de Experiência</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 md:gap-4 lg:gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs md:text-sm text-foreground font-medium">SRIJ Licenciado</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <span className="text-xs md:text-sm text-foreground font-medium">SSL Seguro</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-xs md:text-sm text-foreground font-medium">100% Independente</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs md:text-sm text-foreground font-medium">Atualizado 2025</span>
              </div>
            </div>
          </div>

          {/* Right side - Cards animation (desktop only) */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Rotating card deck */}
              <div className="absolute inset-0 flex items-center justify-center">
                {cards.map((card, index) => {
                  const isActive = activeCard === index
                  const rotation = (index - activeCard) * 15
                  const scale = isActive ? 1 : 0.9
                  const zIndex = isActive ? 40 : 30 - Math.abs(index - activeCard)
                  const translateY = isActive ? -20 : 0

                  return (
                    <div
                      key={index}
                      className="absolute w-48 h-72 md:w-56 md:h-80 cursor-pointer transition-all duration-500 ease-out"
                      style={{
                        transform: `rotate(${rotation}deg) translateY(${translateY}px) scale(${scale})`,
                        zIndex,
                      }}
                      onClick={() => setActiveCard(index)}
                    >
                      <div
                        className={`w-full h-full rounded-2xl bg-gradient-to-br from-card via-card to-secondary border-2 transition-all duration-500 ${isActive ? "border-primary shadow-2xl shadow-primary/20" : "border-border/50"}`}
                      >
                        <div className="relative w-full h-full p-4 flex flex-col justify-between">
                          <div className={`text-left ${card.color}`}>
                            <p className="text-2xl font-bold leading-none">{card.value}</p>
                            <p className="text-xl">{card.suit}</p>
                          </div>
                          <div className={`text-center ${card.color}`}>
                            <p className="text-7xl md:text-8xl">{card.suit}</p>
                          </div>
                          <div className={`text-right rotate-180 ${card.color}`}>
                            <p className="text-2xl font-bold leading-none">{card.value}</p>
                            <p className="text-xl">{card.suit}</p>
                          </div>
                          {isActive && (
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/50 ring-inset" />
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCard(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${activeCard === index ? "bg-primary w-8" : "bg-border hover:bg-muted-foreground"}`}
                  />
                ))}
              </div>

              <div className="absolute -left-8 top-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 border-4 border-dashed border-primary/30 animate-pulse" />
              <div className="absolute -right-4 bottom-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 border-4 border-dashed border-red-400/30" />
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator - desktop only */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
