"use client"

import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import type { BettingSite } from "@/lib/mock-data"

interface CasinoSiteCardProps {
  site: BettingSite
  rank: number
}

function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

function StarRating({ rating, reviews, size = "md" }: { rating: number; reviews: number; size?: "sm" | "md" }) {
  // Rating is 0-10, convert to 0-5 stars with 0.2 increments
  const starRating = rating / 2 // e.g., 9.4 -> 4.7 stars
  const starSize = size === "sm" ? "w-4 h-4" : "w-4 h-4"
  const textSize = size === "sm" ? "text-[10px]" : "text-xs"

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => {
          const fillPercentage = Math.min(Math.max((starRating - i) * 100, 0), 100)

          return (
            <div key={i} className="relative">
              {/* Empty star background */}
              <Star className={`${starSize} text-primary/20`} />
              {/* Filled portion */}
              {fillPercentage > 0 && (
                <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
                  <Star className={`${starSize} fill-primary text-primary`} />
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div className={`text-muted-foreground ${textSize}`}>({formatNumber(reviews)} avaliações)</div>
    </div>
  )
}

export function CasinoSiteCard({ site, rank }: CasinoSiteCardProps) {
  const isFirstItem = rank === 1

  const handleVisit = () => {
    window.open(site.url, "_blank")
  }

  // Rating is 0-10, convert to 0-5 for mobile stars display
  const starRating = site.rating / 2

  return (
    <div
      onClick={handleVisit}
      className={`
        relative group cursor-pointer
        rounded-xl transition-all duration-300
        ${isFirstItem ? "luxury-card-highlight" : "luxury-card hover:border-primary/30"}
      `}
    >
      {/* Top choice badge */}
      {isFirstItem && (
        <div className="absolute -top-3 left-6 px-4 py-1 bg-primary rounded-full">
          <span className="text-xs font-semibold text-primary-foreground uppercase tracking-wide">Melhor Escolha</span>
        </div>
      )}

      <div className="p-5 md:p-6">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {/* Rank */}
          <div
            className={`
            w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold flex-shrink-0
            ${
              isFirstItem
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                : "bg-secondary text-primary border border-border"
            }
          `}
          >
            {rank}
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 p-3">
            <img
              src={site.logo || "/placeholder.svg"}
              alt={site.name}
              className="w-[130px] h-[78px] lg:w-[150px] lg:h-[90px] object-contain"
            />
          </div>

          {/* Bonus */}
          <div className="flex-1 text-center px-4">
            <div className="text-primary/70 text-xs font-medium uppercase tracking-wider mb-1">
              Bónus de Boas-Vindas
            </div>
            <p className="text-foreground font-semibold text-xl lg:text-2xl leading-tight">{site.bonus}</p>
          </div>

          {/* Rating */}
          <div className="text-center flex-shrink-0 px-4">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">{site.rating.toFixed(1)}</div>
            <StarRating rating={site.rating} reviews={site.reviews} />
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <Button
              onClick={(e) => {
                e.stopPropagation()
                handleVisit()
              }}
              className="btn-luxury text-primary-foreground font-semibold px-6 py-5 text-sm uppercase tracking-wide"
            >
              Jogar Agora
            </Button>
          </div>
        </div>

        {/* Mobile Layout - Bigger logo, bigger bonus, centered, proper stars */}
        <div className="md:hidden space-y-3">
          {/* Row 1: Rank + Logo + Bonus centered */}
          <div className="flex items-center gap-3">
            {/* Rank badge */}
            <div
              className={`
              w-9 h-9 rounded-lg flex items-center justify-center text-base font-bold flex-shrink-0
              ${isFirstItem ? "bg-primary text-primary-foreground" : "bg-secondary text-primary border border-border"}
            `}
            >
              {rank}
            </div>

            {/* Logo - bigger */}
            <div className="flex-shrink-0 p-2">
              <img src={site.logo || "/placeholder.svg"} alt={site.name} className="w-[120px] h-[96px] object-contain" />
            </div>

            {/* Bonus - bigger and centered */}
            <div className="flex-1 min-w-0 text-center">
              <div className="text-primary/70 text-[11px] uppercase tracking-wide mb-0.5">Bónus</div>
              <p className="text-foreground font-bold text-sm leading-tight">{site.bonus}</p>
            </div>
          </div>

          {/* Row 2: Rating + Stars with 0.2 precision + Button */}
          <div className="flex items-center justify-between gap-2">
            {/* Rating with proper star fill */}
            <div className="flex items-center gap-2">
              <div className="text-xl font-bold text-primary">{site.rating.toFixed(1)}</div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => {
                  const fillPercentage = Math.min(Math.max((starRating - i) * 100, 0), 100)
                  return (
                    <div key={i} className="relative">
                      <Star className="w-4 h-4 text-primary/20" />
                      {fillPercentage > 0 && (
                        <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
                          <Star className="w-4 h-4 fill-primary text-primary" />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
              <span className="text-muted-foreground text-[10px]">({formatNumber(site.reviews)})</span>
            </div>

            {/* CTA Button */}
            <Button
              onClick={(e) => {
                e.stopPropagation()
                handleVisit()
              }}
              className="btn-luxury text-primary-foreground font-semibold px-5 py-2 text-xs uppercase"
            >
              Jogar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
