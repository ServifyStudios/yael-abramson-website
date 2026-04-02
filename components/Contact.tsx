'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 px-6 overflow-hidden"
      style={{ background: '#1E0A35' }}
    >
      {/* Bottom glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 110%, rgba(92, 29, 158, 0.55) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">

        <p
          className="text-xs tracking-[0.45em] uppercase font-sans mb-8"
          style={{ color: '#9B4FD8' }}
        >
          {t.contact.label}
        </p>

        <h2
          className="font-serif text-white mb-8"
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
          }}
        >
          {t.contact.heading}
        </h2>

        <div
          className="space-y-5 font-sans text-lg leading-[1.85] mb-14"
          style={{ color: 'rgba(203, 150, 247, 0.8)' }}
        >
          {t.contact.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <p className="text-white font-medium">
            {t.contact.emphasis}
          </p>
        </div>

        <a
          href="mailto:YaelAbramson83@gmail.com"
          className="font-sans text-lg transition-colors duration-200"
          style={{ color: 'rgba(203, 150, 247, 0.9)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(203, 150, 247, 0.9)')}
        >
          YaelAbramson83@gmail.com
        </a>

      </div>
    </section>
  )
}
