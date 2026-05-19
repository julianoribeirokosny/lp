import { useState } from 'react';

// Hook do tema
import { useTheme } from '@/hooks';

// Componentes
import {
  Header,
  Footer,
  SectionContainer,
  SectionTitle,
  CTAButton,
  FeatureCard,
  ChecklistItem,
  StepCard,
  AppStoreButton,
  PlanCard,
  FaqItem,
  RichText,
  getIcon,
} from '@/components';

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const { colors, gradients, apps, texts, content, images, imageAlts, getWhatsAppLink } = useTheme();

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background.purple }}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              {texts.hero.title.regular}{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: gradients.hero }}
              >
                {texts.hero.title.highlight}
              </span>
            </h1>
            <p className="text-xl md:text-2xl" style={{ color: colors.text.body }}>
              <RichText text={texts.hero.description} />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <CTAButton href={texts.hero.ctaSimulation.url} external={true} variant="primary">
                {texts.hero.ctaSimulation.regular} <span className="font-bold">{texts.hero.ctaSimulation.bold}</span>
              </CTAButton>
              <CTAButton href={getWhatsAppLink('consultor')} variant="primaryReverse">
                {texts.hero.ctaConsultant.regular} <span className="font-extrabold">{texts.hero.ctaConsultant.bold}</span>
              </CTAButton>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src={images.heroMockup}
              alt={imageAlts.heroMockup}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <SectionContainer style={{ background: gradients.primary }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-12 text-white">
          <span className="font-light">{texts.whyChoose.title.light} </span>
          <span style={{ color: colors.text.light }}>{texts.whyChoose.title.highlight}</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
          {content.whyChooseFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={getIcon(feature.icon)}
              title={feature.title}
              description={feature.description}
              variant="dark"
            />
          ))}
          </div>

          <div className="flex justify-center mt-12">
          <CTAButton
            href={texts.whyChoose.cta.url}  
            external={true}
            variant="primary"
            style={{ color: colors.text.light }}
          >
            {texts.whyChoose.cta.regular} <span className="font-extrabold">{texts.whyChoose.cta.bold}</span>
          </CTAButton>
        </div>
      </SectionContainer>

      {/* App Section */}
      <section
        className="py-16 md:py-20 relative overflow-hidden"
        style={{ backgroundColor: colors.primary.main }}
      >
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold">{texts.appSection.title}</h2>
              <div className="space-y-4">
                <p className="text-base md:text-lg">
                  <RichText text={texts.appSection.description} />
                </p>
                <p className="text-base">
                  {texts.appSection.subdescription}
                </p>
              </div>
              
              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <AppStoreButton store="google" href={apps.googlePlay} />
                <AppStoreButton store="apple" href={apps.appStore} />
              </div>
            </div>

            {/* Right - Phone Mockups */}
            <div className="hidden md:block relative h-[450px] lg:h-[550px]">
              <div className="absolute left-0 top-0 w-[240px] lg:w-[300px] h-[400px] lg:h-[500px]">
                <img 
                  src={images.appMockupLarge}
                  alt={imageAlts.appMockupLarge}
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="absolute right-0 top-[80px] lg:top-[100px] w-[200px] lg:w-[250px] h-[320px] lg:h-[400px]">
                <img 
                  src={images.appMockupSmall}
                  alt={imageAlts.appMockupSmall}
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom decorative bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[27px]"
          style={{ backgroundColor: colors.primary.main }}
        />
      </section>

      {/* Differential Section */}
      <SectionContainer style={{ backgroundColor: colors.background.purple }}>
        <SectionTitle lightText={texts.differential.title.light} highlightText={texts.differential.title.highlight} />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
            {content.differentials.map((item, index) => (
              <ChecklistItem key={index} title={item.title} description={item.description} />
              ))}
            </div>
            <div className="hidden md:block">
            <img
              src={images.differential}
              alt={imageAlts.differential}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Complete Planning Section */}
      <SectionContainer className="bg-white">
        <SectionTitle lightText={texts.planning.title.light} highlightText={texts.planning.title.highlight} align="right" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:block order-2 md:order-1">
            <img
              src={images.planning}
              alt={imageAlts.planning}
              className="w-full h-auto rounded-2xl"
            />
            </div>
            <div className="space-y-6 order-1 md:order-2">
            {content.planning.map((item, index) => (
              <ChecklistItem key={index} title={item.title} description={item.description} />
              ))}
          </div>
        </div>
      </SectionContainer>

      {/* How It Works Section */}
      <SectionContainer style={{ backgroundColor: colors.primary.dark }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-16">
          <span className="font-light text-white">{texts.howItWorks.title.light} </span>
          <span style={{ color: colors.primary.main }}>{texts.howItWorks.title.highlight}</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.steps.map((item, index) => (
            <StepCard
              key={index}
              number={item.number}
              icon={getIcon(item.icon)}
              title={item.title}
              description={item.description}
              badge={item.badge}
            />
            ))}
        </div>
      </SectionContainer>

      {/* Pricing Section */}
      <SectionContainer style={{ background: gradients.primary }}>
          <div className="text-center mb-12">
            <p className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-8">
            <RichText text={texts.pricing.intro} />
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
          {content.plans.map((plan, index) => (
            <PlanCard
                key={index}
              contribution={plan.contribution}
              patrimony={plan.patrimony}
              insurance={plan.insurance}
              highlighted={plan.highlighted}
              ctaHref={getWhatsAppLink('simulacao')}
            />
            ))}
          </div>

          <p className="text-center text-white mt-12 opacity-80">
          <RichText text={texts.pricing.disclaimer} />
          </p>
      </SectionContainer>

      {/* Contact Section */}
      <SectionContainer style={{ backgroundColor: colors.background.purple }}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:block">
            <img
              src={images.contact}
              alt={imageAlts.contact}
              className="w-full h-auto rounded-2xl"
            />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              {texts.contact.title.regular}{' '}
              <span style={{ color: colors.primary.main }}>{texts.contact.title.highlight}</span>
              </h2>
            <p className="text-xl md:text-2xl font-light" style={{ color: colors.text.body }}>
              {texts.contact.description}
            </p>

            <CTAButton
              href={getWhatsAppLink('especialista')}
              variant="primary"
              style={{ color: colors.text.light }}
            >
              {texts.contact.cta.regular} <span className="font-extrabold">{texts.contact.cta.bold}</span>
            </CTAButton>
          </div>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer style={{ backgroundColor: colors.background.purple }} maxWidth="4xl">
          {/* Decorative Separator */}
          <div className="w-full mb-16">
          <div
            className="h-[3px] rounded-full"
            style={{
              background: `linear-gradient(to right, ${colors.primary.main}33, ${colors.primary.main}, ${colors.primary.main}33)`,
            }}
          />
          </div>
          
        <SectionTitle lightText={texts.faq.title.light} highlightText={texts.faq.title.highlight} align="center" />
          
          <div className="space-y-4">
          {content.faqs.map((faq, index) => (
            <FaqItem
                key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaqIndex === index}
              onToggle={() => toggleFaq(index)}
            />
            ))}
        </div>
      </SectionContainer>

      {/* Footer */}
      <Footer />
    </div>
  );
}
