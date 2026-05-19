import { useTheme } from '@/hooks';
import { Logo } from './Logo';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  const { gradients, contact, texts, getEmailLink, getCopyright } = useTheme();

  return (
    <footer className="py-12" style={{ background: gradients.primary }}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 text-white">
          {/* Contact Info */}
          <div className="space-y-4">
            <Logo size="md" />
            <address className="space-y-2 text-lg font-light not-italic">
              <p>{texts.footer.labels.address} {contact.address.street}</p>
              <p>
                {texts.footer.labels.cep} {contact.address.cep} - {contact.address.city} -{' '}
                {contact.address.state}.
              </p>
              <p>{texts.footer.labels.phone} {contact.phone}</p>
              <p>
                {texts.footer.labels.email}{' '}
                <a
                  href={getEmailLink(contact.emailSubject, contact.emailBody)}
                  className="hover:underline hover:opacity-80 transition-opacity cursor-pointer"
                >
                  {contact.email}
                </a>
              </p>
            </address>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-end justify-center space-y-4">
            <SocialLinks />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/30 mt-8 pt-8 text-center">
          <p className="text-white text-lg">{getCopyright()}</p>
        </div>
      </div>
    </footer>
  );
}
