// Logo
import logo from './862b686b7022387c2b66db359d7e8af55f1ee2c6.png';
import logoWhite from './oab-vetor.png';

// Hero e App Section
import heroMockup from './7a3dc56e4c9bd356e647e2ed890252de8608f02e1.png';
import appMockupSmall from './7758aee6cafaf8c13402dc6e0615c2e9cde8d637.png';
import appMockupLarge from './fa54e66dc0b2ae97c0f0484e7ec991487f1cd570.png';

// Seções de conteúdo
import differential from './54e1b043acbadeebe4fb52a439d235639a82c559.png';
import planning from './c77fab5598ce9ce0b5ee2a121520fcc7b0b81bb9.png';
import contact from './a0da09feec648c1e7ff31a1c8f8757a208b8e94f.png';

/**
 * Objeto com todas as imagens do projeto
 * Centraliza importações para uso dinâmico
 */
export const themeImages = {
  logo,
  logoWhite,
  heroMockup,
  appMockupLarge,
  appMockupSmall,
  differential,
  planning,
  contact,
} as const;

export type ThemeImageKey = keyof typeof themeImages;

