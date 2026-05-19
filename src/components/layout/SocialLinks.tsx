import { useTheme } from '@/hooks';

export function SocialLinks() {
  const { social } = useTheme();

  const links = [
    { name: 'LinkedIn', href: social.linkedin },
    { name: 'Instagram', href: social.instagram },
    { name: 'YouTube', href: social.youtube },
    { name: 'Facebook', href: social.facebook },
  ];

  return (
    <nav className="space-y-2 text-right" aria-label="Redes sociais">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-2xl font-medium hover:opacity-80 transition-opacity cursor-pointer"
        >
          {link.name} →
        </a>
      ))}
    </nav>
  );
}

