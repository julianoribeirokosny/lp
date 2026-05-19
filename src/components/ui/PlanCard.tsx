import { useTheme } from '@/hooks';

interface PlanCardProps {
  contribution: string;
  patrimony: string;
  insurance: string;
  highlighted?: boolean;
  ctaHref: string;
}

export function PlanCard({
  contribution,
  patrimony,
  insurance,
  highlighted = false,
  ctaHref,
}: PlanCardProps) {
  const { colors, texts } = useTheme();

  const textColor = highlighted ? 'white' : colors.text.gray;
  const valueColor = highlighted ? 'white' : colors.primary.main;
  const bgColor = highlighted ? colors.primary.main : 'white';
  const buttonBgColor = highlighted ? 'white' : colors.primary.main;
  const buttonTextColor = highlighted ? colors.highlight.blue : 'white';

  return (
    <div
      className="rounded-3xl p-8 text-center space-y-4"
      style={{ backgroundColor: bgColor }}
    >
      {/* Contribution Header */}
      <div className="border-b border-gray-200 pb-4">
        <p className="text-3xl font-medium" style={{ color: textColor }}>
          {texts.pricing.cardLabels.contributionPrefix.split(' ').slice(0, 2).join(' ')}
          <br />
          {texts.pricing.cardLabels.contributionPrefix.split(' ').slice(2).join(' ')}
        </p>
        <p className="text-4xl font-extrabold mt-4" style={{ color: valueColor }}>
          {contribution}
        </p>
      </div>

      {/* Details */}
      <div className="space-y-4 py-4">
        <p className="text-lg font-medium" style={{ color: textColor }}>
          {texts.pricing.cardLabels.patrimonyPrefix}
        </p>
        <p className="text-4xl font-extrabold" style={{ color: valueColor }}>
          {patrimony}
        </p>

        <p className="text-lg font-medium pt-4" style={{ color: textColor }}>
          {texts.pricing.cardLabels.insurancePrefix}
        </p>
        <p className="text-4xl font-extrabold" style={{ color: valueColor }}>
          {insurance}
        </p>
      </div>

      {/* CTA Button */}
      <a
        href={"https://adesao-smartprev-stage.web.app/OABPrev-PR/2020096011"}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-3 px-6 rounded-2xl text-lg font-medium transition-opacity hover:opacity-90 cursor-pointer"
        style={{
          backgroundColor: buttonBgColor,
          color: buttonTextColor,
        }}
      >
        {texts.pricing.ctaButton}
      </a>
    </div>
  );
}
