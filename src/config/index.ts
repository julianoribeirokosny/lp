import themeConfig from './theme.json';

// Tipos para imagens
export interface ThemeImages {
  logo: string;
  heroMockup: string;
  appMockupLarge: string;
  appMockupSmall: string;
  differential: string;
  planning: string;
  contact: string;
}

export interface ThemeImageAlts {
  logo: string;
  heroMockup: string;
  appMockupLarge: string;
  appMockupSmall: string;
  differential: string;
  planning: string;
  contact: string;
}

// Tipos para cores
export interface ThemeColors {
  primary: {
    main: string;
    dark: string;
    light: string;
    accent: string;
  };
  text: {
    dark: string;
    light: string;
    muted: string;
    body: string;
    gray: string;
  };
  background: {
    main: string;
    alt: string;
    purple: string;
    dark: string;
  };
  button: {
    appStore: string;
    appStoreBorder: string;
  };
  highlight: {
    blue: string;
    purple: string;
  };
}

export interface ThemeGradients {
  primary: string;
  primaryReverse: string;
  hero: string;
  card: string;
}

export interface ThemeContact {
  whatsapp: {
    number: string;
    messages: {
      simulacao: string;
      consultor: string;
      especialista: string;
    };
  };
  email: string;
  emailSubject: string;
  emailBody: string;
  phone: string;
  address: {
    street: string;
    cep: string;
    city: string;
    state: string;
  };
}

export interface ThemeSocial {
  linkedin: string;
  instagram: string;
  youtube: string;
  facebook: string;
}

export interface ThemeApps {
  googlePlay: string;
  appStore: string;
}

// Tipos para textos
export interface TextPair {
  light?: string;
  regular?: string;
  bold?: string;
  highlight?: string;
}

export interface TextPairWithUrl extends TextPair {
  url: string;
}

export interface ThemeTexts {
  header: {
    portalButton: TextPairWithUrl;
  };
  hero: {
    title: TextPair;
    description: string;
    ctaSimulation: TextPairWithUrl;
    ctaConsultant: TextPair;
  };
  whyChoose: {
    title: TextPair;
    cta: TextPairWithUrl;
  };
  appSection: {
    title: string;
    description: string;
    subdescription: string;
    storeLabels: {
      availableOn: string;
      googlePlay: string;
      appStore: string;
    };
  };
  differential: {
    title: TextPair;
  };
  planning: {
    title: TextPair;
  };
  howItWorks: {
    title: TextPair;
  };
  pricing: {
    intro: string;
    cardLabels: {
      contributionPrefix: string;
      patrimonyPrefix: string;
      insurancePrefix: string;
    };
    ctaButton: string;
    disclaimer: string;
  };
  contact: {
    title: TextPair;
    description: string;
    cta: TextPair;
  };
  faq: {
    title: TextPair;
  };
  footer: {
    labels: {
      address: string;
      cep: string;
      phone: string;
      email: string;
    };
  };
}

// Tipos para conteúdo
export interface WhyChooseFeature {
  icon: string;
  title: string;
  description: string;
}

export interface PlanItem {
  contribution: string;
  patrimony: string;
  insurance: string;
  highlighted: boolean;
}

export interface ListItem {
  title: string;
  description: string;
}

export interface StepItem {
  number: string;
  icon: string;
  title: string;
  description: string;
  badge: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ThemeContent {
  whyChooseFeatures: WhyChooseFeature[];
  plans: PlanItem[];
  differentials: ListItem[];
  planning: ListItem[];
  steps: StepItem[];
  faqs: FaqItem[];
}

export interface ThemeBrand {
  name: string;
  description: string;
  copyright: string;
}

export interface Theme {
  brand: ThemeBrand;
  images: ThemeImages;
  imageAlts: ThemeImageAlts;
  colors: ThemeColors;
  gradients: ThemeGradients;
  spacing: {
    container: string;
    section: {
      paddingY: string;
      paddingYMobile: string;
    };
  };
  borderRadius: Record<string, string>;
  shadows: Record<string, string>;
  typography: {
    fontFamily: string;
    sizes: Record<string, string>;
  };
  contact: ThemeContact;
  apps: ThemeApps;
  social: ThemeSocial;
  texts: ThemeTexts;
  content: ThemeContent;
}

// Exporta o tema tipado
export const theme = themeConfig as Theme;

// Atalhos para seções específicas
export const brand = theme.brand;
export const images = theme.images;
export const imageAlts = theme.imageAlts;
export const colors = theme.colors;
export const gradients = theme.gradients;
export const contact = theme.contact;
export const social = theme.social;
export const apps = theme.apps;
export const texts = theme.texts;
export const content = theme.content;

// Helper para gerar link do WhatsApp
export function getWhatsAppLink(messageType: keyof typeof theme.contact.whatsapp.messages): string {
  const message = theme.contact.whatsapp.messages[messageType];
  return `https://wa.me/${theme.contact.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

// Helper para gerar link de email
export function getEmailLink(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const queryString = params.toString();
  return `mailto:${theme.contact.email}${queryString ? '?' + queryString : ''}`;
}

// Helper para substituir {year} no copyright
export function getCopyright(): string {
  return theme.brand.copyright.replace('{year}', new Date().getFullYear().toString());
}

// Helper para processar texto com tags <bold>
export function parseText(text: string): { segments: Array<{ text: string; bold: boolean }> } {
  const segments: Array<{ text: string; bold: boolean }> = [];
  const regex = /<bold>(.*?)<\/bold>/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ text: text.slice(lastIndex, match.index), bold: false });
    }
    segments.push({ text: match[1], bold: true });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    segments.push({ text: text.slice(lastIndex), bold: false });
  }

  return { segments };
}
