import { ReactNode, CSSProperties } from 'react';
import { useTheme } from '@/hooks';

interface CTAButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'primaryReverse' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: CSSProperties;
  external?: boolean;
  fullWidth?: boolean;
}

export function CTAButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'lg',
  className = '',
  style,
  external = true,
  fullWidth = false,
}: CTAButtonProps) {
  const { colors, gradients } = useTheme();

  const sizeClasses = {
    sm: 'px-4 py-2 text-base',
    md: 'px-6 py-3 text-lg',
    lg: 'px-8 py-4 text-xl',
  };

  const variantStyles: Record<string, CSSProperties> = {
    primary: {
      background: gradients.primary,
      color: 'white',
    },
    primaryReverse: {
      background: gradients.primaryReverse,
      color: 'white',
    },
    outline: {
      background: 'transparent',
      border: `2px solid ${colors.primary.main}`,
      color: colors.primary.main,
    },
  };

  const baseClasses = `
    rounded-xl 
    hover:scale-105 
    transition-all 
    duration-300 
    cursor-pointer 
    text-center 
    whitespace-nowrap
    inline-block
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();

  const combinedStyle = { ...variantStyles[variant], ...style };

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={baseClasses}
        style={combinedStyle}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses} style={combinedStyle}>
      {children}
    </button>
  );
}

