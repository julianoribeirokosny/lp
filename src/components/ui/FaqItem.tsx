import { useTheme } from '@/hooks';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  const { colors } = useTheme();

  return (
    <div
      className="rounded-2xl p-6 cursor-pointer hover:opacity-95 transition-opacity"
      style={{ backgroundColor: colors.primary.dark }}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
    >
      {/* Question Header */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-white flex-1">{question}</h3>
        <div className="flex-shrink-0 mt-1">
          <svg
            className={`w-6 h-6 text-white transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        <p
          className="font-light leading-relaxed"
          style={{ color: colors.text.light }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

