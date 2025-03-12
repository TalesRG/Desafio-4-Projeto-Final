## Organização de Rotas no Next.js

Este documento descreve a organização das rotas no projeto Next.js presente no repositório [`Desafio-4-Projeto-Final`](https://github.com/TalesRG/Desafio-4-Projeto-Final), utilizando a estrutura **App Router** (`app/`).

## Estrutura da Pasta `src/app/`
O projeto adota a arquitetura modular do **App Router**, garantindo maior organização e escalabilidade. Abaixo está a estrutura de rotas definida:

```
.
├── public/
│   └── assets/               # Arquivos estáticos (imagens, ícones, etc.)
└── src/
    ├── app/
    │   ├── home/
    │   │   ├── carro/
    │   │   │   ├── cadastro/
    │   │   │   │   └── page.tsx  # Página de cadastro de carro
    │   │   │   └── page.tsx       # Página principal da seção de carros
    │   │   ├── multa/
    │   │   │   ├── cadastro/
    │   │   │   │   └── page.tsx  # Página de cadastro de multas
    │   │   │   └── page.tsx       # Página principal da seção de multas
    │   │   ├── proprietário/
    │   │   │   ├── cadastro/
    │   │   │   │   └── page.tsx  # Página de cadastro de proprietários
    │   │   │   └── page.tsx       # Página principal da seção de proprietários
    │   │   ├── layout.tsx         # Estrutura de layout da seção "home"
    │   │   └── page.tsx           # Página inicial
    │   ├── register/
    │   │   └── page.tsx           # Página de cadastro de usuários
    │   ├── ui/
    │   │   ├── home/
    │   │   │   ├── types/
    │   │   │   │   ├── CardLinkProps.ts
    │   │   │   │   └── SidebarItemProps.ts
    │   │   │   ├── card-link.tsx
    │   │   │   ├── logout-button.tsx
    │   │   │   └── navegation-link.tsx
    │   │   ├── button.tsx
    │   │   ├── detran-logo.tsx
    │   │   ├── fonts.ts
    │   │   └── generic-form.tsx
    │   ├── global.css              # Estilos globais
    │   ├── layout.tsx              # Layout global do projeto
    │   └── page.tsx                # Página principal
    ├── service/
    │   ├── api.ts                  # Configuração de API 
    │   └── user.ts                  # Interações com usuários
    └── type/
        ├── UsuarioLogin.ts          # Tipagem para login de usuários
        └── UsuarioRegister.ts       # Tipagem para registro de usuários
```

## Descrição das Rotas

### `home/`
A pasta `home/` contém as principais páginas da aplicação:

- `carro/`: Página principal `page.tsx` e rota de cadastro `cadastro/page.tsx`
- `multa/`: Página principal `page.tsx` e rota de cadastro `cadastro/page.tsx`
- `proprietário/`: Página principal `page.tsx` e rota de cadastro `cadastro/page.tsx`
- `layout.tsx`: Define a estrutura visual da seção `home`
- `page.tsx`: Página inicial do aplicativo

### `register/`

- Contém `page.tsx`, a página destinada ao cadastro de novos usuários.

### `ui/` (Componentes Reutilizáveis)

- Contém componentes como:
    - `card-link.tsx`, `logout-button.tsx`, `navegation-link.tsx`
    - Tipos TypeScript (`CardLinkProps.ts`, `SidebarItemProps.ts`)

### `global.css`

- Contém os estilos globais do projeto e estilização específica do `input` e `button`.

### `layout.tsx`

- Define o layout geral do aplicativo.

### `service/`

- `api.ts`: Gerencia chamadas para a API (provavelmente configurado com **Axios**).
- `user.ts`: Lida com interações e dados do usuário.

### `type/`

- `UsuarioLogin.ts` e `UsuarioRegister.ts`: Definem a tipagem para autenticação e registro de usuários.

## Padrões Seguidos

- **Arquitetura Modular**: O uso do App Router permite separar rotas por contexto.
- **Organização Escalável**: Estrutura clara e bem definida para fácil manutenção.
- **Reutilização de Código**: Componentes na pasta `ui/` evitam duplicação.
- **Tipagem Estrita**: Uso de TypeScript para maior segurança no desenvolvimento.

## Conclusão
A estrutura de rotas do projeto facilita a organização, garantindo um desenvolvimento escalável e modular. 
