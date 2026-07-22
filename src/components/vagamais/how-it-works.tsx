import { Badge } from "@/components/ui/badge"

export default function HowItWorksSection() {
  const steps = [
    { n: 1, title: "Importe a vaga", desc: "Cole o link ou faça upload da descrição da vaga." },
    { n: 2, title: "IA analisa", desc: "Nossa IA compara a vaga com seu perfil, destacando gaps e forças." },
    { n: 3, title: "Match Score", desc: "Receba uma nota de 0 a 100 e entenda sua compatibilidade." },
  ]
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Como funciona</h2>
        <p className="mt-2 text-muted-foreground">Três passos simples do link da vaga ao match.</p>
      </div>
      <ol className="mx-auto mt-8 grid max-w-3xl gap-4">
        {steps.map((s) => (
          <li key={s.n} className="flex items-start gap-3 rounded-2xl border p-4">
            <Badge className="rounded-full">{s.n}</Badge>
            <div>
              <div className="font-medium">{s.title}</div>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
