import { LucideIcon } from 'lucide-react';
import { useTheme } from '@/hooks';

interface StepCardProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
}

export function StepCard({
  number,
  icon: Icon,
  title,
  description,
  badge,
}: StepCardProps) {
  const { colors, gradients } = useTheme();

  return (
    <div
      className="relative rounded-xl p-6 text-center flex flex-col h-full min-h-[420px]"
      style={{
        backgroundColor: 'rgba(217,217,217,0.1)',
        border: `1px solid ${colors.primary.main}`,
      }}
    >
      {/* Number Badge */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
        <div
          className="rounded-full w-16 h-16 flex items-center justify-center"
          style={{ backgroundColor: colors.primary.main }}
        >
          <span className="text-3xl font-extrabold text-white">{number}</span>
        </div>
      </div>

      {/* Icon */}
      <div className="mt-12 mb-4 flex justify-center">
        <Icon
          className="w-12 h-12"
          style={{ color: colors.primary.main }}
          aria-hidden="true"
        />
      </div>

      {/* Title */}
      <h3
        className="text-xl font-bold mb-3"
        style={{ color: colors.text.light }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="font-light flex-grow" style={{ color: colors.text.light }}>
        {description}
      </p>

      {/* Badge */}
      <div
        className="mt-6 backdrop-blur-sm rounded-lg py-2 px-4"
        style={{ background: gradients.card }}
      >
        <span className="text-sm font-bold text-white">{badge}</span>
      </div>
    </div>
  );
}

