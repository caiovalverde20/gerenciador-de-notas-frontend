# Gerenciador de Notas – Frontend

Este é o repositório do **Gerenciador de Notas Frontend**, uma aplicação Next.js que serve como interface de usuário para o gerenciamento de notas. Ela se integra ao backend (deploy disponível em [Render](https://notas-backend-wa1c.onrender.com)) e permite que usuários autenticados criem, editem, excluam e visualizem suas notas de forma prática e responsiva.

## Funcionalidades

- **Autenticação**: Login e registro de usuários com JWT.
- **Gerenciamento de Notas**: Criação, listagem, atualização, exclusão e marcação de notas como favoritas.
- **Busca**: Filtro dinâmico de notas por título ou descrição.
- **Interface Responsiva**: Design otimizado para dispositivos móveis e desktops.
- **Feedback Visual**: Indicadores de carregamento, mensagens de erro e uma UI intuitiva.

## Tecnologias Utilizadas

- **Next.js** – Framework React para renderização server-side e geração de sites estáticos.
- **React** – Biblioteca para construção de interfaces de usuário.
- **Tailwind CSS** – Framework CSS para estilização rápida e responsiva.
- **Axios** – Cliente HTTP para comunicação com o backend.
- **ESLint & TypeScript** – Garantia de qualidade e tipagem do código.

## Gerenciador de Notas – Backend
  O backend do projeto pode ser encontrado nesse repositorio:
  [https://github.com/caiovalverde20/gerenciador-de-notas-backend](https://github.com/caiovalverde20/gerenciador-de-notas-backend)

## Deploy

A aplicação está implantada no Vercel e integrada com o backend:

- **Frontend**: [https://gerenciador-de-notas-frontend.vercel.app](https://gerenciador-de-notas-frontend.vercel.app)
- **Backend**: [https://notas-backend-wa1c.onrender.com](https://notas-backend-wa1c.onrender.com)

## Variáveis de Ambiente
   O projeto possui apenas uma variável NEXT_PUBLIC_API_URL para o backend. Se não definido, usará localhost:3000.

## Como Executar o Projeto Localmente

### Passos

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/caiovalverde20/gerenciador-de-notas-frontend.git
   cd gerenciador-de-notas-frontend
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie a aplicação em modo de desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Acesse a aplicação:**

   Abra o navegador e vá para [http://localhost:3001](http://localhost:3001)


## Estrutura do Projeto

- **src/app/**: Páginas e rotas da aplicação (ex.: `/login`, `/notes`, `/register`).
- **src/components/**: Componentes reutilizáveis (ex.: Input, Button, Header, NoteCard, SearchBar).
- **src/hooks/**: Hooks customizados (ex.: useUser).
- **src/services/**: Comunicação com o backend usando Axios.
