# Guia de Criação de Temas - OABPrev

Este documento explica a estrutura do arquivo `theme.json` e como personalizar ou criar um novo tema para o site.

---

## 📁 Localização do Arquivo

```
src/config/theme.json
```

---

## 🏗️ Estrutura Geral

O arquivo `theme.json` é dividido em **10 seções principais**:

| Seção | Descrição |
|-------|-----------|
| `brand` | Informações da marca (nome, descrição, copyright) |
| `images` | Caminhos das imagens utilizadas no site |
| `imageAlts` | Textos alternativos (acessibilidade) para cada imagem |
| `colors` | Paleta de cores do tema |
| `gradients` | Gradientes CSS pré-definidos |
| `spacing` | Espaçamentos padrão (container, seções) |
| `borderRadius` | Valores de arredondamento de bordas |
| `shadows` | Sombras pré-definidas |
| `typography` | Fonte padrão e tamanhos de texto |
| `contact` | Informações de contato (WhatsApp, email, telefone, endereço) |
| `apps` | Links das lojas de aplicativos |
| `social` | Links das redes sociais |
| `texts` | Todos os textos estáticos do site |
| `content` | Conteúdo dinâmico (listas, FAQs, planos) |

---

## 🎨 Seção: colors

Define toda a paleta de cores do site.

```json
{
  "colors": {
    "primary": {
      "main": "#1b7cb5",      // Cor principal da marca
      "dark": "#121327",      // Versão escura
      "light": "#0c7bc6",     // Versão clara
      "accent": "#5532a1"     // Cor de destaque/acento
    },
    "text": {
      "dark": "#131e35",      // Texto escuro (títulos)
      "light": "#f2eaff",     // Texto claro (sobre fundo escuro)
      "muted": "#717182",     // Texto secundário
      "body": "#212121",      // Texto do corpo
      "gray": "#111010"       // Texto cinza
    },
    "background": {
      "main": "#ffffff",      // Fundo principal
      "alt": "#f0f0f4",       // Fundo alternativo
      "purple": "#f2eaff",    // Fundo roxo claro
      "dark": "#121327"       // Fundo escuro
    },
    "button": {
      "appStore": "#27202c",          // Fundo botão App Store
      "appStoreBorder": "#884eaa"     // Borda botão App Store
    },
    "highlight": {
      "blue": "#0c8bfd",      // Destaque azul
      "purple": "#884eaa"     // Destaque roxo
    }
  }
}
```

### 💡 Dicas para Cores
- Use ferramentas como [Coolors](https://coolors.co) ou [Adobe Color](https://color.adobe.com) para criar paletas harmônicas
- Mantenha contraste adequado entre texto e fundo (use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/))
- A cor `primary.main` é a mais importante - ela define a identidade visual

---

## 🌈 Seção: gradients

Gradientes CSS prontos para uso.

```json
{
  "gradients": {
    "primary": "linear-gradient(to right, #121327, #1b7cb5)",
    "primaryReverse": "linear-gradient(to right, #1b7cb5, #121327)",
    "hero": "linear-gradient(to right, #1b7cb5, #5532a1)",
    "card": "linear-gradient(to right, rgba(27,124,181,0.5), rgba(18,19,39,0.5))"
  }
}
```

### 💡 Dicas para Gradientes
- Use as cores do `colors.primary` para manter consistência
- `rgba()` permite adicionar transparência
- Experimente diferentes direções: `to bottom`, `to top right`, `45deg`

---

## 🖼️ Seção: images e imageAlts

```json
{
  "images": {
    "logo": "/src/assets/logo.png",
    "heroMockup": "/src/assets/hero-mockup.png",
    "appMockupLarge": "/src/assets/app-large.png",
    "appMockupSmall": "/src/assets/app-small.png",
    "differential": "/src/assets/differential.png",
    "planning": "/src/assets/planning.png",
    "contact": "/src/assets/contact.png"
  },
  "imageAlts": {
    "logo": "OABPrev Logo",
    "heroMockup": "Pessoa usando o aplicativo OABPrev",
    "appMockupLarge": "Interface do aplicativo - simulação",
    "appMockupSmall": "Interface do aplicativo - investimentos",
    "differential": "Profissional sorrindo",
    "planning": "Planejamento financeiro",
    "contact": "Atendimento personalizado"
  }
}
```

### 💡 Dicas para Imagens
- Coloque todas as imagens em `src/assets/`
- Use nomes descritivos para os arquivos
- Sempre forneça `alt` descritivo para acessibilidade
- Formatos recomendados: `.png` (transparência), `.webp` (performance)

---

## ✏️ Seção: texts

Todos os textos do site organizados por seção.

### Padrão TextPair

Muitos textos usam o padrão `TextPair` para facilitar estilização:

```json
{
  "title": {
    "light": "Por que escolher a",     // Texto normal
    "highlight": "Previdência Fechada?" // Texto destacado
  }
}
```

Ou:

```json
{
  "cta": {
    "regular": "Fale com um",
    "bold": "Consultor"
  }
}
```

### Tags Especiais

Alguns textos suportam a tag `<bold>` para negrito inline:

```json
{
  "description": "Construa um <bold>Projeto de Vida</bold> sólido com os benefícios..."
}
```

### Estrutura Completa

```json
{
  "texts": {
    "header": {
      "portalButton": { "light": "Portal", "bold": "Corretor" }
    },
    "hero": {
      "title": { "regular": "Seu futuro financeiro", "highlight": "começa hoje!" },
      "description": "Texto com <bold>negrito</bold>...",
      "ctaSimulation": { "regular": "Faça aqui uma", "bold": "simulação" },
      "ctaConsultant": { "regular": "Fale com um", "bold": "Consultor" }
    },
    "whyChoose": {
      "title": { "light": "Por que escolher a", "highlight": "Previdência Fechada?" },
      "cta": { "regular": "Fazer", "bold": "minha simulação agora" }
    },
    "appSection": {
      "title": "Já tem o plano?",
      "description": "Baixe agora o <bold>App</bold>...",
      "subdescription": "Você pode simular...",
      "storeLabels": {
        "availableOn": "Disponível na",
        "googlePlay": "Google Play",
        "appStore": "App Store"
      }
    },
    "differential": {
      "title": { "light": "O nosso", "highlight": "diferencial" }
    },
    "planning": {
      "title": { "light": "Um planejamento", "highlight": "completo" }
    },
    "howItWorks": {
      "title": { "light": "Como funciona a", "highlight": "Previdência Fechada?" }
    },
    "pricing": {
      "intro": "Com <bold>menos</bold> do que imagina...",
      "cardLabels": {
        "contributionPrefix": "Com uma contribuição de",
        "patrimonyPrefix": "seu patrimônio pode chegar a",
        "insurancePrefix": "e você ainda pode ter uma cobertura..."
      },
      "ctaButton": "Faça uma simulação",
      "disclaimer": "Cálculo realizado considerando..."
    },
    "contact": {
      "title": { "regular": "Atendimento com pessoas reais que", "highlight": "valorizam o seu tempo" },
      "description": "Fale com quem está disposto...",
      "cta": { "regular": "Converse com", "bold": "um especialista" }
    },
    "faq": {
      "title": { "light": "Perguntas", "highlight": "Frequentes" }
    },
    "footer": {
      "labels": {
        "address": "Endereço:",
        "cep": "CEP:",
        "phone": "Telefone:",
        "email": "E-mail:"
      }
    }
  }
}
```

---

## 📋 Seção: content

Conteúdo dinâmico que popula listas e componentes repetitivos.

### whyChooseFeatures (Cards de Diferenciais)

```json
{
  "whyChooseFeatures": [
    {
      "icon": "Shield",           // Nome do ícone (Lucide Icons)
      "title": "MÁXIMA SEGURANÇA",
      "description": "Regulamentada pela PREVIC..."
    },
    {
      "icon": "TrendingUp",
      "title": "MAIOR RENTABILIDADE",
      "description": "Estrutura sem fins lucrativos..."
    },
    {
      "icon": "DollarSign",
      "title": "MENORES TAXAS",
      "description": "Sem visão comercial..."
    }
  ]
}
```

#### Ícones Disponíveis
Os ícones são da biblioteca [Lucide Icons](https://lucide.dev/icons):
- `Shield` - Escudo
- `TrendingUp` - Gráfico subindo
- `DollarSign` - Cifrão
- `Users` - Pessoas
- `Wallet` - Carteira
- `LineChart` - Gráfico de linha
- `CreditCard` - Cartão de crédito
- `CheckCircle2` - Check circular

### differentials (Lista de Diferenciais)

```json
{
  "differentials": [
    { "title": "Aqui a previdência é segura", "description": "O dinheiro é seu do início ao fim." },
    { "title": "O lucro é seu!", "description": "Somos sem fins lucrativos." },
    { "title": "E muito mais!", "description": "" }
  ]
}
```

### planning (Lista de Planejamentos)

```json
{
  "planning": [
    { "title": "Planejamento na Longevidade", "description": "Você merece viver melhor..." },
    { "title": "Planejamento Tributário", "description": "Pague menos IR..." },
    { "title": "E muito mais!", "description": "" }
  ]
}
```

### steps (Passos do Processo)

```json
{
  "steps": [
    {
      "number": "1",
      "icon": "Users",
      "title": "CADASTRO E ADESÃO",
      "description": "Cadastre-se em nossa plataforma...",
      "badge": "Processo 100% digital"
    },
    {
      "number": "2",
      "icon": "Wallet",
      "title": "CONTRIBUIÇÕES MENSAIS",
      "description": "Defina o valor das suas contribuições...",
      "badge": "Flexibilidade Total"
    }
  ]
}
```

### plans (Planos/Preços)

```json
{
  "plans": [
    {
      "contribution": "R$ 150,00",
      "patrimony": "R$ 250.000,00",
      "insurance": "R$ 85.000,00",
      "highlighted": false         // Plano destacado?
    },
    {
      "contribution": "R$ 300,00",
      "patrimony": "R$ 550.000,00",
      "insurance": "R$ 150.000,00",
      "highlighted": true          // Este é o plano recomendado
    }
  ]
}
```

### faqs (Perguntas Frequentes)

```json
{
  "faqs": [
    {
      "question": "O que é previdência fechada?",
      "answer": "A previdência fechada (também chamada de fundo de pensão) é..."
    },
    {
      "question": "Quais são as vantagens fiscais?",
      "answer": "Você pode deduzir até 12% da sua renda bruta..."
    }
  ]
}
```

---

## 📞 Seção: contact

```json
{
  "contact": {
    "whatsapp": {
      "number": "5541999999999",    // Número com código do país (sem +)
      "messages": {
        "simulacao": "Olá! Gostaria de fazer uma simulação...",
        "consultor": "Olá! Gostaria de falar com um consultor...",
        "especialista": "Olá! Gostaria de falar com um especialista..."
      }
    },
    "email": "contato@empresa.com.br",
    "emailSubject": "Contato via Site",
    "emailBody": "Olá, gostaria de mais informações...",
    "phone": "(41) 3513-2829",
    "address": {
      "street": "Rua Exemplo, 123 - Centro",
      "cep": "80.000-000",
      "city": "Curitiba",
      "state": "PR"
    }
  }
}
```

---

## 🔗 Seções: apps e social

```json
{
  "apps": {
    "googlePlay": "https://play.google.com/store/apps/details?id=...",
    "appStore": "https://apps.apple.com/br/app/..."
  },
  "social": {
    "linkedin": "https://www.linkedin.com/company/...",
    "instagram": "https://www.instagram.com/...",
    "youtube": "https://www.youtube.com/@...",
    "facebook": "https://www.facebook.com/..."
  }
}
```

---

## 🏢 Seção: brand

```json
{
  "brand": {
    "name": "OABPrev-PR",
    "description": "Plano de Previdência para Advogados",
    "copyright": "© {year} OABPrev-PR. Todos os direitos reservados."
  }
}
```

> ⚠️ Use `{year}` para inserir o ano atual automaticamente.

---

## 🚀 Como Criar um Novo Tema

### Passo 1: Copie o arquivo base

```bash
cp src/config/theme.json src/config/theme-novo.json
```

### Passo 2: Edite as cores

Comece alterando a seção `colors` com sua nova paleta:

```json
{
  "colors": {
    "primary": {
      "main": "#SUA_COR_PRINCIPAL",
      "dark": "#VERSAO_ESCURA",
      "light": "#VERSAO_CLARA",
      "accent": "#COR_ACENTO"
    }
  }
}
```

### Passo 3: Atualize os gradientes

Ajuste os gradientes para usar suas novas cores:

```json
{
  "gradients": {
    "primary": "linear-gradient(to right, #COR_ESCURA, #COR_PRINCIPAL)"
  }
}
```

### Passo 4: Substitua textos e conteúdo

Atualize todas as seções `texts` e `content` com seu conteúdo.

### Passo 5: Adicione suas imagens

1. Coloque as imagens em `src/assets/`
2. Atualize os caminhos em `images`
3. Atualize os textos alternativos em `imageAlts`

### Passo 6: Configure informações de contato

Atualize `contact`, `apps` e `social` com suas informações.

### Passo 7: Teste

```bash
npm run dev
```

---

## ✅ Checklist de Validação

Antes de finalizar seu tema, verifique:

- [ ] Todas as cores têm contraste adequado
- [ ] Gradientes usam cores da paleta
- [ ] Todas as imagens existem nos caminhos especificados
- [ ] Todos os `imageAlts` estão preenchidos
- [ ] Número do WhatsApp está no formato correto (código país + número)
- [ ] Links das redes sociais estão funcionando
- [ ] Links das lojas de apps estão corretos
- [ ] Todos os textos foram revisados
- [ ] FAQs respondem às dúvidas mais comuns
- [ ] Planos têm valores realistas

---

## 📚 Arquivos Relacionados

| Arquivo | Descrição |
|---------|-----------|
| `src/config/theme.json` | Arquivo de configuração do tema |
| `src/config/index.ts` | Tipos TypeScript e helpers |
| `src/hooks/useTheme.ts` | Hook para consumir o tema nos componentes |
| `src/components/ui/RichText.tsx` | Componente para renderizar texto com `<bold>` |

---

## 🛠️ Helpers Disponíveis

```typescript
import { getWhatsAppLink, getEmailLink, getCopyright, parseText } from '@/config';

// Gerar link do WhatsApp
const link = getWhatsAppLink('simulacao');
// Resultado: "https://wa.me/5541999999999?text=..."

// Gerar link de email
const emailLink = getEmailLink('Assunto', 'Corpo do email');
// Resultado: "mailto:email@empresa.com?subject=Assunto&body=..."

// Obter copyright com ano atual
const copyright = getCopyright();
// Resultado: "© 2025 OABPrev-PR. Todos os direitos reservados."

// Processar texto com tags <bold>
const { segments } = parseText('Texto com <bold>negrito</bold>');
// Resultado: [{ text: 'Texto com ', bold: false }, { text: 'negrito', bold: true }]
```

---

*Última atualização: Dezembro 2025*

