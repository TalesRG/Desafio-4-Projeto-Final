## Organização de Componentes no Next.js

Este documento descreve a organização dos componentes do projeto Next.js no repositório [`Desafio-4-Projeto-Final`](https://github.com/TalesRG/Desafio-4-Projeto-Final), especificamente na pasta `detran-front/src/app/ui`.

## Estrutura da Pasta `ui/`
A pasta `ui/` contém componentes reutilizáveis e organizados de forma modular para facilitar a manutenção e escalabilidade do projeto. Abaixo está a estrutura atual:

```
ui/
├── home/
│   ├── proprietario/cadastro/
│   │   ├── cpf-button.tsx
│   │   ├── phone-button.tsx
│   │   ├── sex-button.tsx
│   │   └── states-button.tsx
│   ├── types/
│   │   ├── CardLinkProps.ts
│   │   └── SidebarItemProps.ts
│   ├── card-link.tsx
│   ├── dropdown-api.tsx
│   ├── logout-button.tsx
│   └── navegation-link.tsx
├── button.tsx
├── detran-logo.tsx
├── generic-form.tsx
├── fonts.ts
└── toast.ts
```

## Descrição das Pastas e Arquivos

### `home/`
Contém componentes específicos da tela inicial.

#### `home/proprietario/cadastro/`
Componentes relacionados ao cadastro de proprietários:

- **`cpf-button.tsx`**: Botão específico para entrada de CPF.
- **`phone-button.tsx`**: Botão específico para entrada de telefone.
- **`sex-button.tsx`**: Botão para seleção de gênero.
- **`states-button.tsx`**: Botão para seleção de estado.

#### `home/types/`
Define tipos e interfaces utilizados em componentes dentro de `home/`:

- **`CardLinkProps.ts`**: Define a tipagem das propriedades do componente `card-link.tsx`.
- **`SidebarItemProps.ts`**: Define a tipagem dos itens da barra lateral.

#### Outros componentes em `home/`

- **`card-link.tsx`**: Componente para exibição de um link no formato de cartão.
- **`dropdown-api.tsx`**: Componente para um dropdown dinâmico baseado em dados de API.
- **`logout-button.tsx`**: Botão de logout.
- **`navegation-link.tsx`**: Componente para links de navegação.

### Componentes Gerais (`ui/`)

- **`button.tsx`**: Componente genérico de botão reutilizável.
- **`detran-logo.tsx`**: Componente de exibição do logo do Detran.
- **`generic-form.tsx`**: Formulário genérico para reaproveitamento em diferentes telas.
- **`fonts.ts`**: Definições de fontes utilizadas no projeto.
- **`toast.ts`**: Implementação de notificações (toasts) para feedback ao usuário.

## Padrões de Organização

- **Modularização**: Componentes são organizados por funcionalidade, reduzindo a complexidade do código.
- **Reutilização**: Componentes genéricos (como `button.tsx` e `toast.ts`) são centralizados para evitar duplicação de código.
- **Tipagem Estrita**: Uso de arquivos `*.ts` para definir interfaces e garantir tipagem consistente.
- **Hierarquia Clara**: A estrutura reflete as seções da aplicação, facilitando a navegação no código.

## Conclusão
Essa organização permite maior **escalabilidade**, **reutilização de código** e **facilidade de manutenção**.