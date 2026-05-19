import { useTheme } from '@/hooks';
import { Logo } from './Logo';

export function Header() {
  const { gradients, texts } = useTheme();

  return (
    <header className="container mx-auto px-4 py-6 flex items-center justify-between max-w-7xl">
      <Logo size="md" className="md:h-20 md:w-44" />
      <button
        type="button"
        className="text-white px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer"
        style={{ background: gradients.primaryReverse }}
        onClick={() => window.open(texts.header.portalButton.url, '_blank')}
      >
        <span className="font-light">{texts.header.portalButton.light} </span>
        <span className="font-bold">{texts.header.portalButton.bold}</span>
      </button>
    </header>
  );
}
