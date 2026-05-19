import { CheckCircle2 } from 'lucide-react';
import { useTheme } from '@/hooks';

interface ChecklistItemProps {
  title: string;
  description?: string;
}

export function ChecklistItem({ title, description }: ChecklistItemProps) {
  const { colors } = useTheme();

  return (
    <div className="flex items-start gap-3">
      <CheckCircle2
        className="w-6 h-6 flex-shrink-0 mt-1"
        style={{ color: colors.primary.main }}
        aria-hidden="true"
      />
      <div>
        <h3
          className="text-xl md:text-2xl font-bold"
          style={{ color: colors.text.body }}
        >
          {title}
        </h3>
        {description && (
          <p
            className="text-lg md:text-xl font-light"
            style={{ color: colors.text.body }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

