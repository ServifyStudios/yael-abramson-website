'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Story() {
  const { t } = useLanguage()

  return (
    <section id="story" style={{ background: '#FAF8F5' }} className="py-28 md:py-40 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Label */}
        <p className="text-xs tracking-[0.45em] uppercase font-sans mb-6" style={{ color: '#9B4FD8' }}>
          {t.story.label}
        </p>

        {/* Opening headline */}
        <h2
          className="font-serif mb-16"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.25rem)',
            lineHeight: '1.22',
            letterSpacing: '-0.015em',
            color: '#1E0A35',
          }}
        >
          {t.story.heading}
        </h2>

        {/* Story body — part 1 */}
        <div className="space-y-7 font-sans text-lg leading-[1.9]" style={{ color: '#3a3a4a' }}>
          {t.story.body1.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Pull quote */}
        <blockquote
          className="my-16 pl-8 py-2"
          style={{ borderLeft: '2px solid #B470F0' }}
        >
          <p
            className="font-serif italic"
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              lineHeight: '1.55',
              color: '#3B1066',
            }}
          >
            {t.story.pullQuote}
          </p>
        </blockquote>

        {/* Story body — part 2 */}
        <div className="space-y-7 font-sans text-lg leading-[1.9]" style={{ color: '#3a3a4a' }}>
          {t.story.body2.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

      </div>
    </section>
  )
}
