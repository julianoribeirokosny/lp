import {
  theme,
  brand,
  imageAlts,
  colors,
  gradients,
  contact,
  social,
  apps,
  texts,
  content,
  getWhatsAppLink,
  getEmailLink,
  getCopyright,
  parseText,
} from '@/config';

import { themeImages } from '@/assets';

/**
 * Hook para acessar as configurações de tema
 * Centraliza acesso a cores, gradientes, textos e conteúdo dinâmico
 */
export function useTheme() {
  return {
    // Tema completo
    theme,

    // Seções específicas
    brand,
    images: themeImages, // Usa imagens importadas ao invés de paths do JSON
    imageAlts,
    colors,
    gradients,
    contact,
    social,
    apps,
    texts,
    content,

    // Helpers
    getWhatsAppLink,
    getEmailLink,
    getCopyright,
    parseText,
  };
}
