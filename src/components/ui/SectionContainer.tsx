import { ReactNode, CSSProperties } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  as?: 'section' | 'div' | 'article';
  id?: string;
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
};

export function SectionContainer({
  children,
  className = '',
  style,
  maxWidth = '7xl',
  as: Component = 'section',
  id,
}: SectionContainerProps) {
  return (
    <Component className={`py-16 md:py-24 ${className}`} style={style} id={id}>
      <div className={`container mx-auto px-4 ${maxWidthClasses[maxWidth]}`}>
        {children}
      </div>
    </Component>
  );
}

