"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="luxury-card rounded-xl p-6 border border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-foreground text-sm leading-relaxed">
                Este site utiliza cookies para melhorar a sua experiência. Ao continuar, concorda com a nossa{" "}
                <Link href="/politica-privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </Link>{" "}
                e{" "}
                <Link href="/politica-cookies" className="text-primary hover:underline">
                  Política de Cookies
                </Link>
                .
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={rejectCookies}
                variant="outline"
                size="sm"
                className="border-border text-foreground hover:bg-secondary bg-transparent"
              >
                Recusar
              </Button>
              <Button onClick={acceptCookies} size="sm" className="btn-luxury text-primary-foreground">
                Aceitar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
