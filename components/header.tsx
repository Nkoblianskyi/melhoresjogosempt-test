import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto max-w-[1220px] px-4 py-4 md:py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image src="/favicon.ico" alt="Casino Premium Portugal" width={40} height={40} />
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">
                <span className="text-primary">Melhores</span>
                <span className="text-foreground">Jogos</span>
                <span className="text-primary">EmPT</span>
              </h1>
              <span className="text-[10px] md:text-xs text-muted-foreground tracking-widest uppercase hidden sm:block">
                Casinos Premium Portugal
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border">
              <Image src="/srij.svg" alt="SRIJ" width={20} height={20} />
              <span className="text-xs text-muted-foreground">Licenciado</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-destructive/10 border border-destructive/30 flex items-center justify-center">
              <span className="text-destructive font-bold text-xs">18+</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
