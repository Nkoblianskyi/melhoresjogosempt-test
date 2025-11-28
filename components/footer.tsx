import Link from "next/link"
import Image from "next/image"
export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 md:py-16 w-full">
      <div className="container mx-auto max-w-[1220px] px-4">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
               <Image src="/favicon.ico" alt="Casino Premium Portugal" width={40} height={40} />
              <div>
                <h2 className="text-lg font-semibold">
                  <span className="text-primary">Melhores</span>
                  <span className="text-foreground">Jogos</span>
                  <span className="text-primary">EmPT</span>
                </h2>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Portal independente de análise e comparação de casinos online licenciados em Portugal.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Informações Legais</h3>
            <div className="space-y-2">
              <Link
                href="/politica-privacidade"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/politica-cookies"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Política de Cookies
              </Link>
            </div>
          </div>

          {/* 18+ Warning */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="w-16 h-16 rounded-xl bg-destructive/10 border border-destructive/30 flex items-center justify-center">
              <span className="text-destructive font-bold text-xl">18+</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-foreground font-semibold">Jogo Responsável</p>
              <p className="text-muted-foreground text-sm">Proibido a menores</p>
              <p className="text-muted-foreground/60 text-xs mt-1">O jogo pode causar dependência</p>
            </div>
          </div>
        </div>

        {/* Support organizations */}
        <div className="border-t border-border pt-10 mb-10">
          <h4 className="text-center text-sm text-muted-foreground mb-6">Organizações de Apoio</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <Link
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              className="bg-white hover:bg-gray-50 rounded-lg p-4 flex items-center justify-center transition-colors"
            >
              <img src="/srij.svg" alt="SRIJ" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.icad.pt"
              target="_blank"
              className="bg-white hover:bg-gray-50 rounded-lg p-4 flex items-center justify-center transition-colors"
            >
              <img src="/icad.png" alt="SICAD" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              className="bg-white hover:bg-gray-50 rounded-lg p-4 flex items-center justify-center transition-colors"
            >
              <img src="/gamecare.svg" alt="GamCare" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              className="bg-white hover:bg-gray-50 rounded-lg p-4 flex items-center justify-center transition-colors"
            >
              <img src="/gamble.webp" alt="GambleAware" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.jogoresponsavel.pt"
              target="_blank"
              className="bg-card hover:bg-secondary rounded-lg p-4 flex items-center justify-center transition-colors col-span-2 md:col-span-1 border border-border"
            >
              <img src="/jogo2.png" alt="Jogo Responsável" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-primary font-semibold mb-2">&copy; 2025 melhoresjogosempt.com</p>
          <p className="text-muted-foreground text-sm">
            Apenas para maiores de 18 anos. O jogo pode causar dependência.
          </p>
        </div>
      </div>
    </footer>
  )
}
