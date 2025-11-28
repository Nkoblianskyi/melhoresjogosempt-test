import { CasinoSiteCard } from "./casino-site-card"
import { bettingSites } from "@/lib/mock-data"

export function RatingSection() {
  return (
    <section id="ranking" className="py-12 md:py-16 px-4 w-full scroll-mt-20">
      <div className="container mx-auto max-w-[1220px]">
        {/* Section header */}
        <div className="text-center mb-10 hidden md:block">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-3 block">
            Top Classificações
          </span>
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">Casinos Recomendados</h2>
          <div className="gold-accent-line w-24 mx-auto" />
        </div>

        <div className="space-y-4">
          {bettingSites.map((site, index) => (
            <CasinoSiteCard key={site.id} site={site} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
