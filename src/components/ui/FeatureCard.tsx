import { LucideIcon } from 'lucide-react';
import { useTheme } from '@/hooks';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'light' | 'dark';
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  variant = 'dark',
}: FeatureCardProps) {
  const { colors } = useTheme();

  const textColor = variant === 'dark' ? colors.text.light : colors.text.body;

  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center">
        <Icon className="w-12 h-12 text-white" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold" style={{ color: textColor }}>
        {title}
      </h3>
      <p className="font-light" style={{ color: textColor }}>
        {description}
      </p>
    </div>
  );
}

