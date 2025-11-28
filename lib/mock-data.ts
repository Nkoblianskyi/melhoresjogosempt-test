export interface BettingSite {
  id: number
  rank: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  reviews: number
  features: string[]
  isTopChoice?: boolean
  badge?: string
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    rank: 1,
    name: "Betclic",
    logo: "/betclic.svg",
    rating: 9.8,
    bonus: "100% Até 20€",
    features: ["Popular", "Apostas Desportivas", "Casino ao Vivo"],
    url: "https://www.betclic.pt/",
    reviews: 2978,
    badge: "MELHOR ESCOLHA",
    isTopChoice: true,
  },
  {
    id: 2,
    rank: 2,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    rating: 9.7,
    bonus: "Aposta Grátis de 2€ Atualmente",
    features: ["Casino Oficial", "Jogos Exclusivos", "Pagamentos Rápidos"],
    badge: "RECOMENDADO",
    url: "https://www.casinoportugal.pt/",
    reviews: 2486,
  },

  {
    id: 3,
    rank: 3,
    name: "Luckia",
    logo: "/luckia.svg",
    rating: 9.4,
    bonus: "Aposta Grátis de Atualmente",
    features: ["Melhor Avaliado", "Oferta Exclusiva", "App Móvel"],
    badge: "MAIS POPULAR",
    url: "https://www.luckia.pt/",
    reviews: 2351,
  },

  {
    id: 4,
    rank: 4,
    name: "Lebull",
    logo: "/lebull.svg",
    rating: 9.1,
    bonus: "250% até 400€ + 50€ de Aposta Grátis",
    features: ["Bónus Generoso", "Variedade de Jogos", "Suporte Português"],
    url: "https://www.lebull.pt/",
    reviews: 3527,
  },
  {
    id: 5,
    rank: 5,
    name: "Solverde",
    logo: "/solverde.svg",
    rating: 8.8,
    bonus: "300% até 30€ em Aposta Grátis",
    features: ["Licenciado SRIJ", "Casino Português", "Suporte 24/7"],


    url: "https://www.solverde.pt/",
    reviews: 3217,
  },
]
