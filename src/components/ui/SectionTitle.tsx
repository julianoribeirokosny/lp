import { useTheme } from '@/hooks';

interface SectionTitleProps {
  lightText?: string;
  highlightText?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  lightFirst?: boolean;
}

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export function SectionTitle({
  lightText = '',
  highlightText = '',
  align = 'left',
  className = '',
  lightFirst = true,
}: SectionTitleProps) {
  const { colors } = useTheme();

  return (
    <h2
      className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mb-16 ${alignClasses[align]} ${className}`}
    >
      {lightFirst ? (
        <>
          <span className="font-light text-black">{lightText} </span>
          <span style={{ color: colors.primary.main }}>{highlightText}</span>
        </>
      ) : (
        <>
          <span style={{ color: colors.primary.main }}>{highlightText} </span>
          <span className="font-light text-black">{lightText}</span>
        </>
      )}
    </h2>
  );
}

