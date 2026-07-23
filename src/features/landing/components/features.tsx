import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"

export default function FeaturesSection() {
  const features = [
    { title: "Análise com IA", desc: "Nossa IA analisa cada vaga e mostra a compatibilidade com seu perfil." },
    { title: "Recomendações inteligentes", desc: "Receba vagas personalizadas baseadas nas suas habilidades." },
    { title: "Match Score", desc: "Nota de 0 a 100 mostrando o quanto você combina com cada vaga." },
  ]
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Funcionalidades</h2>
        <p className="mt-2 text-muted-foreground">
          Tudo que você precisa para encontrar a vaga ideal — sem perder tempo.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {features.map((f) => (
          <Card key={f.title} className="rounded-2xl">
            <CardHeader>
              <CardTitle>{f.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{f.desc}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
