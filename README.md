# 🛍️ Spiritual Shop E-commerce

Um e-commerce moderno e responsivo desenvolvido com Next.js 15, React 19 e Tailwind CSS, focado em produtos espirituais e bem-estar.

## ✨ Funcionalidades

- 🏪 **Catálogo de Produtos**: Navegação por categorias (Acessórios, Camisetas, Calças)
- 🔍 **Busca Inteligente**: Sistema de busca por nome e categoria
- 📱 **Design Responsivo**: Interface adaptável para todos os dispositivos
- 🎨 **UI Moderna**: Componentes estilizados com Tailwind CSS e shadcn/ui
- 🚀 **Performance Otimizada**: Built com Next.js 15 e App Router
- 🌙 **Dark Mode**: Suporte a tema escuro
- 📊 **Animações**: Transições suaves com tw-animate-css
- 🛒 **Carrossel de Produtos**: Navegação fluida com Embla Carousel

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 15.4.6** - Framework React com App Router
- **React 19.1.0** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Tailwind CSS 4** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI reutilizáveis

### Bibliotecas e Dependências
- **@radix-ui/react-dropdown-menu** - Componentes de menu dropdown acessíveis
- **@radix-ui/react-select** - Componente de select customizável
- **@radix-ui/react-slot** - Composição de componentes
- **class-variance-authority** - Gerenciamento de variantes CSS
- **clsx** - Utilitário para classes condicionais
- **embla-carousel-react** - Carrossel responsivo
- **lucide-react** - Biblioteca de ícones
- **tailwind-merge** - Merge inteligente de classes Tailwind
- **tw-animate-css** - Animações CSS

### Ferramentas de Desenvolvimento
- **ESLint** - Linting e análise de código
- **Prettier** - Formatação de código
- **prettier-plugin-tailwindcss** - Plugin para organizar classes Tailwind

## 🏗️ Estrutura do Projeto

```
spiritual-shop-ecommerce/
├── src/
│   ├── app/                    # App Router do Next.js
│   │   ├── categoria/[slug]/   # Páginas dinâmicas de categoria
│   │   ├── produtos/           # Listagem e detalhes dos produtos
│   │   ├── globals.css         # Estilos globais
│   │   ├── layout.tsx          # Layout principal
│   │   └── page.tsx           # Página inicial
│   ├── components/            # Componentes reutilizáveis
│   │   ├── common/           # Componentes comuns
│   │   ├── footer/           # Componentes do rodapé
│   │   ├── header/           # Componentes do cabeçalho
│   │   ├── layout/           # Componentes de layout
│   │   ├── logo/             # Componente do logo
│   │   ├── product-item/     # Componente de item de produto
│   │   ├── product-list/     # Componente de lista de produtos
│   │   ├── search-product-input/ # Componente de busca
│   │   └── ui/               # Componentes UI (shadcn/ui)
│   ├── data/                 # Dados estáticos
│   │   └── products.ts       # Base de dados dos produtos
│   ├── lib/                  # Utilitários e configurações
│   ├── sections/             # Seções das páginas
│   │   ├── FeaturesSection/  # Seção de características
│   │   └── HeroSection/      # Seção hero da homepage
│   ├── types/                # Definições de tipos TypeScript
│   └── utils/                # Funções utilitárias
├── public/                   # Arquivos estáticos
└── ...arquivos de configuração
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm, yarn ou pnpm

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/albertoaraujoo/spiritual-shop-ecommerce.git
cd spiritual-shop-ecommerce
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Acesse a aplicação**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📝 Scripts Disponíveis

```bash
npm run dev        # Inicia o servidor de desenvolvimento
npm run build      # Cria build de produção
npm start          # Inicia servidor de produção
npm run lint       # Executa linting do código
npm run format     # Formata o código com Prettier
npm run format:check # Verifica formatação do código
```

## 🎨 Características do Design

- **Interface Moderna**: Design limpo e profissional
- **Responsividade**: Adaptável a todos os tamanhos de tela
- **Acessibilidade**: Componentes acessíveis com Radix UI
- **Performance**: Otimizado para carregamento rápido
- **SEO Friendly**: Estrutura otimizada para mecanismos de busca

## 📦 Produtos

O projeto inclui um catálogo diversificado com:
- **Acessórios**: Mochilas, meias, bonés e mais
- **Camisetas**: Diversos modelos e estampas
- **Calças**: Variados estilos e tamanhos

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests
- Melhorar a documentação

## 👨‍💻 Desenvolvedor

**Alberto Araújo**
- 💼 LinkedIn: [albertoaraujoo](https://www.linkedin.com/in/albertoaraujoo/)
- 🐱 GitHub: [albertoaraujoo](https://github.com/albertoaraujoo)
- 📧 Contato: [Via LinkedIn](https://www.linkedin.com/in/albertoaraujoo/)

## 📄 Licença

Este projeto é privado e todos os direitos são reservados ao autor.

## 🔗 Links Úteis

- [Repositório GitHub](https://github.com/albertoaraujoo/spiritual-shop-ecommerce)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)

---

⭐ Se você gostou do projeto, não esqueça de dar uma estrela no repositório!
