# 📋 Padrões de Desenvolvimento - OABPrev-PR

Este documento define os padrões e melhores práticas para o projeto **Landing Page OABPrev-PR**.

---

## 🗂️ Estrutura de Pastas

```
src/
├── assets/              # Imagens e recursos estáticos
│   └── index.ts         # Exportação centralizada das imagens
├── components/          # Componentes reutilizáveis
│   ├── ErrorBoundary.tsx    # Tratamento de erros React
│   ├── layout/              # Componentes de estrutura
│   │   ├── Footer.tsx       # Rodapé
│   │   ├── Header.tsx       # Cabeçalho
│   │   ├── Logo.tsx         # Logo da marca
│   │   ├── SocialLinks.tsx  # Links de redes sociais
│   │   └── index.ts
│   ├── ui/                  # Componentes de interface
│   │   ├── AppStoreButton.tsx   # Botões de download (Play/App Store)
│   │   ├── ChecklistItem.tsx    # Item de checklist com ícone
│   │   ├── CTAButton.tsx        # Botão de chamada para ação
│   │   ├── FaqItem.tsx          # Item de FAQ acordeão
│   │   ├── FeatureCard.tsx      # Card de funcionalidade
│   │   ├── iconMap.ts           # Mapeamento de ícones Lucide
│   │   ├── PlanCard.tsx         # Card de plano/preço
│   │   ├── RichText.tsx         # Texto com suporte a <bold>
│   │   ├── SectionContainer.tsx # Container de seção
│   │   ├── SectionTitle.tsx     # Título de seção
│   │   ├── StepCard.tsx         # Card de passo/etapa
│   │   └── index.ts
│   └── index.ts             # Barrel file principal
├── config/              # Configurações
│   ├── theme.json       # Tema dinâmico (cores, textos, conteúdo)
│   └── index.ts         # Types e helpers do tema
├── hooks/               # Custom hooks
│   ├── useTheme.ts      # Hook para acessar o tema
│   └── index.ts
├── layouts/             # Layouts de página
│   ├── MainLayout.tsx   # Layout com Toaster e Skip Link
│   └── index.ts
├── pages/               # Páginas
│   ├── Home.tsx         # Landing page principal
│   └── index.ts
├── styles/              # Estilos globais
│   └── globals.css      # Tailwind + variáveis CSS
├── App.tsx              # Componente raiz
├── main.tsx             # Entry point
└── index.css            # Importação do Tailwind
```

---

## 1. 🏗️ Arquitetura

### Entry Point (`main.tsx`)

```typescript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

### App.tsx - Componente Raiz

```typescript
import { ErrorBoundary } from '@/components';
import { MainLayout } from '@/layouts';
import { Home } from '@/pages';

export default function App() {
  return (
    <ErrorBoundary>
      <MainLayout>
        <Home />
      </MainLayout>
    </ErrorBoundary>
  );
}
```

### MainLayout - Layout Principal

```typescript
import { ReactNode } from 'react';
import { Toaster } from 'sonner';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Sistema de notificações */}
      <Toaster position="top-center" richColors />

      <main id="main-content" className="min-h-screen">
        {children}
      </main>
    </>
  );
}
```

---

## 2. 🎨 Sistema de Tema Dinâmico

O projeto utiliza um sistema de tema centralizado em `theme.json` que permite configurar cores, textos, imagens e conteúdo de forma dinâmica.

### Estrutura do `theme.json`

```json
{
  "brand": {
    "name": "OABPrev-PR",
    "description": "Plano de Previdência para Advogados",
    "copyright": "© {year} OABPrev-PR. Todos os direitos reservados."
  },
  "colors": {
    "primary": { "main": "#1b7cb5", "dark": "#121327", "light": "#0c7bc6" },
    "text": { "dark": "#131e35", "light": "#f2eaff", "muted": "#717182" },
    "background": { "main": "#ffffff", "purple": "#f2eaff", "dark": "#121327" }
  },
  "gradients": {
    "primary": "linear-gradient(to right, #121327, #1b7cb5)",
    "primaryReverse": "linear-gradient(to right, #1b7cb5, #121327)"
  },
  "texts": { ... },
  "content": { ... },
  "contact": { ... },
  "social": { ... },
  "apps": { ... }
}
```

### Hook `useTheme`

```typescript
import { useTheme } from '@/hooks';

function MyComponent() {
  const { 
    colors, 
    gradients, 
    texts, 
    content,
    images,
    imageAlts,
    getWhatsAppLink,
    getEmailLink,
    getCopyright,
  } = useTheme();

  return (
    <div style={{ background: gradients.primary }}>
      <h1 style={{ color: colors.primary.main }}>
        {texts.hero.title.regular}
      </h1>
      <a href={getWhatsAppLink('simulacao')}>WhatsApp</a>
    </div>
  );
}
```

### Helpers Disponíveis

```typescript
// Gerar link do WhatsApp com mensagem pré-definida
const link = getWhatsAppLink('simulacao'); // ou 'consultor', 'especialista'

// Gerar link de email
const emailLink = getEmailLink('Assunto', 'Corpo do email');

// Obter copyright com ano atual
const copyright = getCopyright(); // "© 2025 OABPrev-PR..."

// Processar texto com tags <bold>
const { segments } = parseText('Texto com <bold>negrito</bold>');
```

> 📚 Consulte `docs/THEME_GUIDE.md` para documentação completa do sistema de temas.

---

## 3. 🧩 Componentes

### Componentes de Layout

| Componente | Descrição | Uso |
|------------|-----------|-----|
| `Header` | Cabeçalho com logo e botão Portal | Topo da página |
| `Footer` | Rodapé com contato e redes sociais | Base da página |
| `Logo` | Logo da OABPrev | Header, Footer |
| `SocialLinks` | Ícones de redes sociais | Footer |

### Componentes de UI

| Componente | Descrição | Props Principais |
|------------|-----------|------------------|
| `SectionContainer` | Container padrão de seções | `className`, `style`, `maxWidth` |
| `SectionTitle` | Título com texto light + highlight | `lightText`, `highlightText`, `align` |
| `CTAButton` | Botão de ação principal | `href`, `variant`, `size`, `children` |
| `FeatureCard` | Card com ícone e descrição | `icon`, `title`, `description`, `variant` |
| `ChecklistItem` | Item de lista com check | `title`, `description` |
| `StepCard` | Card numerado de etapa | `number`, `icon`, `title`, `description`, `badge` |
| `PlanCard` | Card de plano/preços | `contribution`, `patrimony`, `insurance`, `highlighted` |
| `FaqItem` | Acordeão de pergunta/resposta | `question`, `answer`, `isOpen`, `onToggle` |
| `AppStoreButton` | Botão de loja de apps | `store`, `href` |
| `RichText` | Renderiza texto com `<bold>` | `text`, `className` |

### Exemplo de Uso

```tsx
import { 
  SectionContainer, 
  SectionTitle, 
  CTAButton, 
  FeatureCard,
  getIcon,
} from '@/components';
import { useTheme } from '@/hooks';

function MySection() {
  const { colors, gradients, texts, content, getWhatsAppLink } = useTheme();

  return (
    <SectionContainer style={{ background: gradients.primary }}>
      <SectionTitle 
        lightText={texts.whyChoose.title.light}
        highlightText={texts.whyChoose.title.highlight}
      />

      <div className="grid md:grid-cols-3 gap-8">
        {content.whyChooseFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={getIcon(feature.icon)}
            title={feature.title}
            description={feature.description}
            variant="dark"
          />
        ))}
      </div>

      <CTAButton href={getWhatsAppLink('simulacao')} variant="primary">
        {texts.whyChoose.cta.regular} <span className="font-bold">{texts.whyChoose.cta.bold}</span>
      </CTAButton>
    </SectionContainer>
  );
}
```

### Mapeamento de Ícones (`iconMap.ts`)

Os ícones são da biblioteca [Lucide Icons](https://lucide.dev/icons) e são mapeados dinamicamente:

```typescript
import { getIcon } from '@/components';

// Ícones disponíveis:
// Shield, TrendingUp, DollarSign, CheckCircle2, Users, Wallet, LineChart, CreditCard

const Icon = getIcon('Shield'); // Retorna o componente <Shield />
```

---

## 4. 🖼️ Assets e Imagens

As imagens são centralizadas em `src/assets/index.ts`:

```typescript
// src/assets/index.ts
import logo from './862b686b7022387c2b66db359d7e8af55f1ee2c6.png';
import heroMockup from './7a3dc56e4c9bd356e647e2ed890252de8608f02e1.png';
// ...

export const themeImages = {
  logo,
  heroMockup,
  appMockupLarge,
  appMockupSmall,
  differential,
  planning,
  contact,
} as const;
```

### Uso via `useTheme`

```typescript
const { images, imageAlts } = useTheme();

<img src={images.heroMockup} alt={imageAlts.heroMockup} />
```

---

## 5. 🎨 Estilos (Tailwind CSS v4)

### Configuração (`globals.css`)

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

:root {
  /* Base sizing */
  --font-size: 16px;
  --radius: 0.625rem;
  
  /* Cores do Sistema */
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --primary: #1b7cb5;
  --primary-foreground: #ffffff;
  --muted: #ececf0;
  --muted-foreground: #717182;
  
  /* OABPrev Brand Colors */
  --oab-primary: #1b7cb5;
  --oab-primary-dark: #121327;
  --oab-background-purple: #f2eaff;
}

@layer base {
  body {
    @apply bg-background text-foreground;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
}
```

### Classes Utilitárias Customizadas

```css
/* Screen reader only */
.sr-only { ... }

/* Animação de fade */
.animate-fadeIn { animation: fadeIn 0.2s ease-out; }
```

---

## 6. 🛡️ Error Boundary

Componente de classe que captura erros de renderização:

```typescript
export class ErrorBoundary extends Component<Props, State> {
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary capturou um erro:', error, errorInfo);
    // Aqui pode enviar para Sentry, LogRocket, etc.
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <DefaultFallback onRetry={this.handleRetry} />;
    }
    return this.props.children;
  }
}
```

---

## 7. 📐 Configuração de Projeto

### Vite (`vite.config.ts`)

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

### TypeScript (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

### Dependências (`package.json`)

```json
{
  "dependencies": {
    "lucide-react": "^0.487.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "sonner": "^2.0.3"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react-swc": "^3.10.2",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.39",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.5.3",
    "vite": "^6.3.5"
  }
}
```

---

## 8. 📝 Convenções de Código

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| Componentes | PascalCase | `FeatureCard.tsx` |
| Páginas | PascalCase | `Home.tsx` |
| Layouts | PascalCase | `MainLayout.tsx` |
| Hooks | camelCase + "use" | `useTheme.ts` |
| Config | camelCase | `theme.json` |
| Barrel files | index.ts | `index.ts` |
| Assets | hash ou kebab-case | `logo.png` |

### Estrutura de Componente

```typescript
// 1. Imports externos
import { useState } from 'react';

// 2. Imports internos (@/)
import { useTheme } from '@/hooks';

// 3. Types locais
interface Props {
  title: string;
  onClick?: () => void;
}

// 4. Component
export function MyComponent({ title, onClick }: Props) {
  const { colors } = useTheme();
  const [state, setState] = useState('');

  const handleClick = () => {
    onClick?.();
  };

  return (
    <div style={{ color: colors.primary.main }}>
      <h2>{title}</h2>
      <button onClick={handleClick}>Ação</button>
    </div>
  );
}
```

### Imports com Path Aliases

```typescript
// ✅ CORRETO - Usar path alias
import { useTheme } from '@/hooks';
import { CTAButton, Header } from '@/components';
import { theme } from '@/config';

// ❌ EVITAR - Imports relativos profundos
import { useTheme } from '../../../hooks/useTheme';
```

---

## 9. ♿ Acessibilidade (ARIA)

### Skip Link

```tsx
<main id="main-content">
  {children}
</main>
```

### Imagens

```tsx
<img src={images.heroMockup} alt={imageAlts.heroMockup} />
```

### Links Externos

```tsx
<a href={url} target="_blank" rel="noopener noreferrer">
  Link externo
</a>
```

### Botões com Ícones

```tsx
<button aria-label="Fechar modal">
  <X aria-hidden="true" />
</button>
```

---

## 10. ✅ Checklist de Melhores Práticas

### Estrutura & Organização
- [x] Estrutura de pastas organizada
- [x] Path aliases configurados (`@/*`)
- [x] Barrel files (`index.ts`) em cada pasta
- [x] Separação: layout, ui, pages
- [x] Tema dinâmico centralizado (`theme.json`)

### Qualidade de Código
- [x] TypeScript com tipos definidos
- [x] Componentes tipados
- [x] Convenções de nomenclatura
- [x] Custom hooks para lógica compartilhada

### Tratamento de Erros
- [x] ErrorBoundary global
- [x] Fallback UI para erros

### UI/UX
- [x] Tailwind CSS v4 configurado
- [x] Variáveis CSS definidas
- [x] Sistema de cores consistente
- [x] Animações suaves

### Acessibilidade (a11y)
- [x] Skip link para navegação
- [x] Alt text em imagens via tema
- [x] Links externos seguros
- [x] Screen reader utilities

---

## 11. 🚀 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint          # Verificar erros
npm run lint:fix      # Corrigir erros
```

---

## 12. 📁 Arquivos de Configuração

```
raiz/
├── .eslintrc.cjs         # Configuração ESLint (se existir)
├── .prettierrc           # Configuração Prettier (se existir)
├── index.html            # HTML principal
├── package.json          # Dependências e scripts
├── Patterns.md           # Este documento
├── README.md             # Documentação do projeto
├── tsconfig.json         # Configuração TypeScript
├── tsconfig.node.json    # TypeScript para Node
├── vite.config.ts        # Configuração Vite
├── docs/
│   └── THEME_GUIDE.md    # Guia de criação de temas
└── public/
    ├── robots.txt        # Configuração para crawlers
    └── sitemap.xml       # Mapa do site para SEO
```

---

## 13. 📚 Documentação Adicional

| Documento | Descrição |
|-----------|-----------|
| `docs/THEME_GUIDE.md` | Guia completo para criação e personalização de temas |
| `README.md` | Visão geral do projeto e instruções de setup |

---

*Última atualização: Dezembro 2025*
