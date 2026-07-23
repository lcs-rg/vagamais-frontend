"use client"

import { useMemo, useState } from "react"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/shared/ui/dialog"
import { Badge } from "@/shared/ui/badge"
import { cn } from "@/shared/lib/utils"
import { toast } from "sonner"
import {
  Plus,
  Search,
  FileSearch,
  TrendingUp,
  Star,
  Clock,
  CheckCircle2,
  Eye,
  StarIcon,
  type LucideIcon,
} from "lucide-react"

type VagaStatus = "analisando" | "analisado" | "salva"
type Vaga = {
  id: number
  cargo: string
  empresa: string
  status: VagaStatus
  match: number
}

const vagasIniciais: Vaga[] = [
  { id: 1, cargo: "Desenvolvedor React Pleno", empresa: "Nubank", status: "analisado", match: 87 },
  { id: 2, cargo: "UX Designer Sênior", empresa: "Ifood", status: "analisando", match: 72 },
  { id: 3, cargo: "Cientista de Dados", empresa: "Mercado Livre", status: "salva", match: 94 },
  { id: 4, cargo: "Product Manager", empresa: "VTEX", status: "analisando", match: 65 },
]

export function DashboardPreview() {
  const [vagas, setVagas] = useState<Vaga[]>(vagasIniciais)
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const [novaVaga, setNovaVaga] = useState({ cargo: "", empresa: "" })

  const filtered = useMemo(
    () =>
      vagas.filter(
        (v) =>
          v.cargo.toLowerCase().includes(query.toLowerCase()) ||
          v.empresa.toLowerCase().includes(query.toLowerCase()),
      ),
    [vagas, query],
  )

  const stats = useMemo(() => {
    const total = vagas.length
    const analisando = vagas.filter((v) => v.status === "analisando").length
    const analisado = vagas.filter((v) => v.status === "analisado").length
    const salvas = vagas.filter((v) => v.status === "salva").length
    const matchMedio = vagas.length > 0
      ? Math.round(vagas.reduce((acc, v) => acc + v.match, 0) / vagas.length)
      : 0
    return { total, analisando, analisado, salvas, matchMedio }
  }, [vagas])

  function adicionarVaga() {
    if (!novaVaga.cargo.trim() || !novaVaga.empresa.trim()) return
    setVagas((prev) => [
      {
        id: Date.now(),
        cargo: novaVaga.cargo.trim(),
        empresa: novaVaga.empresa.trim(),
        status: "analisando",
        match: Math.floor(Math.random() * 40) + 50,
      },
      ...prev,
    ])
    setNovaVaga({ cargo: "", empresa: "" })
    setOpen(false)
    toast.success("Vaga adicionada", { description: "Sua vaga foi adicionada com sucesso." })
  }

  function alternarStatus(id: number) {
    setVagas((prev) =>
      prev.map((v) => {
        if (v.id !== id) return v
        const ordem: VagaStatus[] = ["analisando", "analisado", "salva"]
        const idx = ordem.indexOf(v.status)
        const next = ordem[(idx + 1) % ordem.length]
        return { ...v, status: next }
      }),
    )
  }

  return (
    <section className="-mt-10">
      <div className={cn("relative mx-auto max-w-5xl overflow-hidden rounded-3xl border bg-white shadow-md")}>
        <div className="flex items-center justify-between gap-3 border-b px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="grid h-6 w-6 place-items-center rounded-full bg-teal-500 text-white text-[10px] font-semibold">
              {"✺"}
            </div>
            <span className="font-semibold">Vaga+</span>
          </div>

          <div className="hidden w-72 items-center gap-2 rounded-full border bg-muted/40 px-3 py-1.5 text-sm sm:flex">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar vagas"
              className="h-6 border-0 bg-transparent p-0 text-sm focus-visible:ring-0"
            />
          </div>

          <div className="flex items-center gap-2">
            <Button size="sm" variant="secondary" className="rounded-full" onClick={() => setOpen(true)}>
              <Plus className="mr-1 h-4 w-4" /> Adicionar vaga
            </Button>
            <div className="h-7 w-7 rounded-full bg-muted" aria-hidden />
          </div>
        </div>

        <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
          <StatCard
            title="Analisando"
            value={String(stats.analisando)}
            icon={FileSearch}
            iconClass="bg-amber-100 text-amber-600"
          />
          <StatCard
            title="Pendentes"
            value={String(stats.analisando)}
            icon={Clock}
            iconClass="bg-slate-100 text-slate-600"
          />
          <StatCard
            title="Total de vagas"
            value={String(stats.total)}
            icon={TrendingUp}
            iconClass="bg-teal-100 text-teal-600"
          />
          <StatCard
            title="Analisadas"
            value={String(stats.analisado)}
            icon={CheckCircle2}
            iconClass="bg-emerald-100 text-emerald-600"
          />
          <StatCard
            title="Match médio"
            value={`${stats.matchMedio}%`}
            icon={Star}
            iconClass="bg-rose-100 text-rose-600"
          />

          <div className="rounded-2xl border bg-muted/30 p-4 text-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-muted-foreground">Vagas recentes</span>
              <Badge variant="secondary">{filtered.length}</Badge>
            </div>

            <div className="mt-2 space-y-2">
              {filtered.length === 0 ? (
                <div className="grid h-24 place-items-center rounded-lg border bg-white text-muted-foreground">
                  Nenhuma vaga
                </div>
              ) : (
                filtered.map((v) => (
                  <div
                    key={v.id}
                    className="flex items-center justify-between rounded-lg border bg-white px-3 py-2"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "h-2.5 w-2.5 rounded-full",
                          v.status === "analisado"
                            ? "bg-emerald-500"
                            : v.status === "analisando"
                              ? "bg-amber-500"
                              : "bg-rose-500",
                        )}
                        aria-hidden
                      />
                      <div className="text-sm">
                        <div className="font-medium">{v.cargo}</div>
                        <div className="text-xs text-muted-foreground">
                          {v.empresa} · {v.status}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "text-xs font-medium",
                          v.match >= 80
                            ? "text-emerald-600"
                            : v.match >= 65
                              ? "text-amber-600"
                              : "text-rose-600",
                        )}
                      >
                        {v.match}%
                      </span>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8"
                        onClick={() => alternarStatus(v.id)}
                        title="Alternar status"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant={v.status === "salva" ? "default" : "outline"}
                        className={cn(
                          "h-8 w-8",
                          v.status === "salva" ? "bg-rose-600 text-white hover:bg-rose-600/90" : "",
                        )}
                        onClick={() => alternarStatus(v.id)}
                        title="Salvar vaga"
                      >
                        <StarIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Adicionar vaga</DialogTitle>
          </DialogHeader>
          <div className="grid gap-3">
            <Input
              value={novaVaga.cargo}
              onChange={(e) => setNovaVaga((prev) => ({ ...prev, cargo: e.target.value }))}
              placeholder="Cargo (ex: Desenvolvedor React)"
              autoFocus
            />
            <Input
              value={novaVaga.empresa}
              onChange={(e) => setNovaVaga((prev) => ({ ...prev, empresa: e.target.value }))}
              placeholder="Empresa (ex: Nubank)"
            />
            <p className="text-xs text-muted-foreground">
              Vagas começam como &quot;analisando&quot;. Você pode alternar o status e ver o match score.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)} className="rounded-full">
              Cancelar
            </Button>
            <Button onClick={adicionarVaga} className="rounded-full">
              <Plus className="mr-1 h-4 w-4" /> Adicionar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}

function StatCard({
  title,
  value,
  icon: Icon,
  iconClass,
}: {
  title: string
  value: string
  icon: LucideIcon
  iconClass?: string
}) {
  return (
    <div className="rounded-2xl border bg-white p-4">
      <div className="mb-2 inline-flex items-center gap-2">
        <div className={cn("grid h-6 w-6 place-items-center rounded-md", iconClass || "bg-teal-100 text-teal-600")}>
          <Icon className="h-4 w-4" />
        </div>
        <span className="text-sm text-muted-foreground">{title}</span>
      </div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  )
}
