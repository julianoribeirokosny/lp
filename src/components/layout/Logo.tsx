import { useTheme } from '@/hooks';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'h-12 w-28',
  md: 'h-16 w-36',
  lg: 'h-20 w-44',
};

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const { images, imageAlts } = useTheme();

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <img
        src={images.logo}
        alt={imageAlts.logo}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
