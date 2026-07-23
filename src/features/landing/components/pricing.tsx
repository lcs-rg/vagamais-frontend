import Link from "next/link"
import { Button } from "@/shared/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"

export default function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Preços</h2>
        <p className="mt-2 text-muted-foreground">Comece grátis. Faça upgrade quando precisar de mais.</p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Plan title="Grátis" price="R$0" features={["5 análises por mês", "Match score básico", "Recomendações limitadas"]} />
        <Plan
          title="Pro"
          price="R$29"
          highlight
          features={["Análises ilimitadas", "Match score avançado", "Recomendações personalizadas", "Suporte prioritário"]}
        />
        <Plan
          title="Business"
          price="R$59"
          features={["Tudo do Pro", "Dashboard em equipe", "Relatórios em PDF", "API de integração"]}
        />
      </div>
    </section>
  )
}

function Plan({
  title,
  price,
  features,
  highlight,
}: {
  title: string
  price: string
  features: string[]
  highlight?: boolean
}) {
  return (
    <Card className={highlight ? "border-teal-300" : ""}>
      <CardHeader>
        <CardTitle className="flex items-baseline justify-between">
          <span>{title}</span>
          <span className="text-3xl font-semibold">{price}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="mb-4 space-y-2 text-sm">
          {features.map((f) => (
            <li key={f} className="text-muted-foreground">
              • {f}
            </li>
          ))}
        </ul>
        <Button asChild className="w-full rounded-full">
          <Link href="/cadastro">Começar</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
