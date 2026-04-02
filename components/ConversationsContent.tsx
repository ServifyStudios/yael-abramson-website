'use client'

import { useLanguage } from '@/context/LanguageContext'
import ConversationsPlayer, { type Video } from './ConversationsPlayer'

export default function ConversationsContent({ videos }: { videos: Video[] }) {
  const { t } = useLanguage()

  return (
    <section id="conversations" className="py-28 md:py-40 px-6" style={{ background: '#F0DFFF' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs tracking-[0.45em] uppercase font-sans mb-6"
            style={{ color: '#7B2FBE' }}
          >
            {t.conversations.label}
          </p>

          <h2
            className="font-serif mb-8"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              lineHeight: '1.22',
              letterSpacing: '-0.015em',
              color: '#1E0A35',
            }}
          >
            {t.conversations.heading}
          </h2>

          <div className="space-y-5 font-sans text-lg leading-[1.85]" style={{ color: '#3a3a4a' }}>
            {t.conversations.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Player */}
        <ConversationsPlayer videos={videos} />

      </div>
    </section>
  )
}
