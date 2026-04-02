'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0D0118' }}
    >
      {/* Deep radial glow — like light at the end of a tunnel */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(92, 29, 158, 0.38) 0%, rgba(30, 10, 53, 0.75) 45%, #0D0118 100%)',
        }}
      />

      {/* Subtle secondary bloom */}
      <div
        className="absolute rounded-full blur-[180px]"
        style={{
          width: '700px',
          height: '450px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(155, 79, 216, 0.07)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <p
          className="text-xs tracking-[0.5em] uppercase font-sans mb-10"
          style={{ color: '#9B4FD8' }}
        >
          {t.hero.label}
        </p>

        <h1
          className="font-serif text-white mb-8"
          style={{
            fontSize: 'clamp(4rem, 11vw, 9.5rem)',
            lineHeight: '1.02',
            letterSpacing: '-0.025em',
          }}
        >
          {t.hero.headingLine1}
          <br />
          {t.hero.headingLine2}
        </h1>

        <p
          className="font-serif italic max-w-lg mx-auto mb-14 leading-relaxed"
          style={{
            color: 'rgba(203, 150, 247, 0.72)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.375rem)',
          }}
        >
          {t.hero.subtext}
        </p>

        <a
          href="#contact"
          className="inline-block bg-white text-brand-800 hover:bg-brand-200 px-10 py-4 rounded-full text-xs font-sans font-semibold tracking-[0.22em] uppercase transition-colors duration-300 mb-24"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  )
}
