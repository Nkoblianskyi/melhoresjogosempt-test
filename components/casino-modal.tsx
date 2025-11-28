"use client"

import { X, Trophy, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "@/lib/mock-data"
import { StarRating } from "./star-rating"
import { useEffect, useState } from "react"
import { bettingSites } from "@/lib/mock-data"

interface CasinoModalProps {
  site?: BettingSite
  rank?: number
  isOpen?: boolean
  onClose?: () => void
}

export function CasinoModal({ site: propSite, rank: propRank, isOpen: propIsOpen = false, onClose }: CasinoModalProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const [autoOpenSite, setAutoOpenSite] = useState<BettingSite | null>(null)

  useEffect(() => {
    if (!propSite) {
      const hasShown = sessionStorage.getItem("promo-modal-shown")
      if (!hasShown) {
        const timer = setTimeout(() => {
          setAutoOpenSite(bettingSites[0])
          setInternalOpen(true)
          sessionStorage.setItem("promo-modal-shown", "true")
        }, 10000)
        return () => clearTimeout(timer)
      }
    }
  }, [propSite])

  useEffect(() => {
    if (propSite) {
      setInternalOpen(propIsOpen)
    }
  }, [propIsOpen, propSite])

  const handleClose = () => {
    setInternalOpen(false)
    setAutoOpenSite(null)
    onClose?.()
  }

  const site = propSite || autoOpenSite
  const rank = propRank || 1

  if (!internalOpen || !site) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative z-10 w-full max-w-md">
        <button
          onClick={handleClose}
          className="absolute right-2 top-2 z-20 rounded-full p-2 bg-black/50 hover:bg-black/70 transition-colors"
        >
          <X className="w-4 h-4 text-white" />
        </button>

        <div className="rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/20">
          <div className="bg-gradient-to-r from-primary via-amber-500 to-primary p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMEwwIDIwbDIwIDIwIDIwLTIwTDIwIDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')] opacity-30"></div>
            <div className="relative flex items-center justify-center gap-3">
              <div className="text-center">
                <div className="text-black font-bold text-lg uppercase tracking-wide">Oferta Exclusiva</div>
                <div className="text-black/70 text-xs">Top #{rank} Casino Portugal</div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6">
            <div className="flex flex-col items-center gap-5">
              {/* Logo */}
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-[140px] h-[70px] object-contain"
                />
              </div>

              {/* Bonus */}
              <div className="text-center w-full border-t border-b border-primary/20 py-5">
                <div className="text-primary text-xs font-medium uppercase tracking-wider mb-2">
                  Bónus de Boas-Vindas
                </div>
                <p className="text-foreground font-bold text-3xl">{site.bonus}</p>
              </div>

              {/* Rating */}
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground mb-2">
                  {site.rating.toFixed(1)}
                  <span className="text-base text-muted-foreground">/10</span>
                </div>
                <div className="flex items-center justify-center mb-2">
                  <StarRating rating={site.rating / 2} size="lg" showHover />
                </div>
                <div className="text-muted-foreground text-xs">({site.reviews.toLocaleString()} avaliações)</div>
              </div>

              {/* CTA */}
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(site.url, "_blank")
                }}
                className="w-full bg-gradient-to-r from-primary via-amber-500 to-primary hover:from-primary/90 hover:via-amber-400 hover:to-primary/90 text-black font-bold py-5 text-base uppercase tracking-wide rounded-xl transition-all shadow-lg shadow-primary/30"
              >
                Jogar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
