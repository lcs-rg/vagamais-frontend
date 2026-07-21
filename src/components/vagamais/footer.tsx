import Link from "next/link"
import { VagaMaisLogo } from "./logo"

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-sky-100 pt-8 sm:flex-row">
        <Link href="/" className="flex items-center gap-2">
          <VagaMaisLogo />
        </Link>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Vaga+. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-sky-600 transition-colors">
            Privacidade
          </a>
          <a href="#" className="hover:text-sky-600 transition-colors">
            Termos
          </a>
          <a href="#" className="hover:text-sky-600 transition-colors">
            Contato
          </a>
        </div>
      </div>
    </footer>
  )
}
