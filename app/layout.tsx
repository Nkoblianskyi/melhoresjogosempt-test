import type React from "react"
import type { Metadata } from "next"
import { Outfit, Cormorant_Garamond } from "next/font/google"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "MelhoresJogosEmPT - Os Melhores Casinos Online em Portugal 2025",
  description:
    "Descubra os melhores casinos online licenciados em Portugal. Análises independentes, comparações de bónus e avaliações de segurança para uma experiência de jogo premium.",
  keywords:
    "melhores casinos portugal, casinos online, melhoresjogosempt, avaliações casino, bónus casino, SRIJ, casinos licenciados",
  openGraph: {
    title: "MelhoresJogosEmPT - Os Melhores Casinos Online em Portugal 2025",
    description: "O seu guia premium para os melhores casinos online licenciados em Portugal.",
    url: "https://melhoresjogosempt.com",
    siteName: "MelhoresJogosEmPT",
    locale: "pt_PT",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${outfit.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <div className="min-h-screen w-full">
          {children}

        </div>
      </body>
    </html>
  )
}
