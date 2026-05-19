import { useTheme } from '@/hooks';

interface AppStoreButtonProps {
  store: 'google' | 'apple';
  href: string;
}

function GooglePlayIcon() {
  return (
    <svg
      className="w-9 h-10 flex-shrink-0"
      viewBox="0 0 36 42"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0.9375 0.890625C0.65625 1.17188 0.5 1.59375 0.5 2.15625V39.8438C0.5 40.4062 0.65625 40.8281 0.9375 41.1094L1.07812 41.25L21.3594 21V20.7188V20.4375L1.07812 0.75L0.9375 0.890625Z"
        fill="#00CEFF"
      />
      <path
        d="M28.125 27.7969L21.3594 21V20.7188V20.4375L28.125 13.6875L28.2656 13.7656L36.0938 18.1875C38.3438 19.4688 38.3438 21.5156 36.0938 22.7969L28.2656 27.2188L28.125 27.7969Z"
        fill="#FFCD00"
      />
      <path
        d="M28.2656 27.2188L21.3594 20.4375L0.9375 41.1094C1.64062 41.8125 2.76562 41.9531 4.03125 41.25L28.2656 27.2188Z"
        fill="#FB3746"
      />
      <path
        d="M28.2656 13.7656L4.03125 -0.265625C2.76562 -0.96875 1.64062 -0.828125 0.9375 -0.125L21.3594 20.4375L28.2656 13.7656Z"
        fill="#00FF00"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg
      className="w-8 h-10 flex-shrink-0"
      viewBox="0 0 33 43"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M28.0312 22.7969C28.0312 19.7969 29.4531 17.6094 32.2969 16.2344C30.7344 14.0469 28.4062 12.8594 25.3125 12.6719C22.3594 12.4844 19.2188 14.5312 17.9375 14.5312C16.5625 14.5312 13.7656 12.7656 11.5312 12.7656C7.40625 12.8594 3 16.0938 3 22.6562C3 24.8438 3.4375 27.1094 4.3125 29.4531C5.5 32.5 9.34375 40.5156 13.3281 40.375C15.4219 40.3281 16.9375 38.75 19.5938 38.75C22.1562 38.75 23.5781 40.375 25.9062 40.375C29.9375 40.3281 33.4531 33.0312 34.5938 29.9375C29.5938 27.5 28.0312 22.8906 28.0312 22.7969ZM24.0938 9.71875C26.0469 7.39062 25.9062 5.25 25.8594 4.4375C24.0469 4.57812 21.9531 5.76562 20.7188 7.34375C19.3906 8.98438 18.5625 11.0312 18.75 13.2188C20.75 13.3594 22.6562 12.2188 24.0938 9.71875Z"
        fill="white"
      />
    </svg>
  );
}

export function AppStoreButton({ store, href }: AppStoreButtonProps) {
  const { colors, texts } = useTheme();

  const storeConfig = {
    google: {
      icon: GooglePlayIcon,
      label: texts.appSection.storeLabels.googlePlay,
    },
    apple: {
      icon: AppleIcon,
      label: texts.appSection.storeLabels.appStore,
    },
  };

  const { icon: Icon, label } = storeConfig[store];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-[13px] px-4 py-3 flex items-center gap-3 hover:opacity-90 transition-opacity w-fit"
      style={{
        backgroundColor: colors.button.appStore,
        border: `1px solid ${colors.button.appStoreBorder}`,
        boxShadow: 'inset 0px 0px 18px 0px rgba(136,78,170,0.5)',
      }}
    >
      <Icon />
      <div className="text-left">
        <p className="text-sm leading-tight" style={{ color: '#bcb5bf' }}>
          {texts.appSection.storeLabels.availableOn}
        </p>
        <p className="text-white font-medium text-base">{label}</p>
      </div>
    </a>
  );
}
