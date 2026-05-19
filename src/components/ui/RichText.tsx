import { useTheme } from '@/hooks';
import { CSSProperties, ReactNode } from 'react';

interface RichTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'div';
}

/**
 * Componente para renderizar texto com tags <bold> e <br/>
 */
export function RichText({ text, className = '', style, as: Tag = 'span' }: RichTextProps) {
  const { parseText } = useTheme();
  
  // Processar quebras de linha primeiro
  const lines = text.split('<br/>');
  
  const renderLine = (line: string, lineIndex: number): ReactNode[] => {
    const { segments } = parseText(line);
    return segments.map((segment, i) => (
      segment.bold ? (
        <span key={`${lineIndex}-${i}`} className="font-bold">{segment.text}</span>
      ) : (
        <span key={`${lineIndex}-${i}`}>{segment.text}</span>
      )
    ));
  };
  
  return (
    <Tag className={className} style={style}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex}>
          {renderLine(line, lineIndex)}
          {lineIndex < lines.length - 1 && <br />}
        </span>
      ))}
    </Tag>
  );
}

