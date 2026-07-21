# Vaga+ Frontend

Aplicação web do Vaga+ — plataforma de análise de vagas com inteligência artificial.

## Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- shadcn/ui
- TypeScript
- lucide-react

## Como rodar

```bash
npm install
cp .env.example .env.local
npm run dev
```

Acesse `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Estrutura

```
src/
├── app/                      # App Router (páginas e layouts)
│   ├── (app)/                # Layout protegido (navbar + conteúdo)
│   ├── login/                # Página de login
│   ├── cadastro/             # Página de cadastro
│   ├── confirmar-email/      # Confirmação de email
│   └── oauth/callback/       # Callback OAuth
├── components/
│   ├── ui/                   # shadcn/ui
│   └── vagamais/             # Componentes do projeto
├── hooks/                    # React hooks (useAuth)
├── lib/                      # Serviços (auth, utils)
├── types/                    # Tipos TypeScript
└── proxy.ts                  # Middleware de proteção de rotas
```

## Variáveis de ambiente

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_API_URL` | URL da API backend |
