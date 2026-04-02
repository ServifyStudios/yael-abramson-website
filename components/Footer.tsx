'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer
      className="py-10 px-6 text-center"
      style={{ background: '#0D0118' }}
    >
      <p className="font-serif text-lg text-white mb-2">{t.footer.name}</p>
      <p
        className="text-xs font-sans"
        style={{ color: 'rgba(155, 79, 216, 0.45)' }}
      >
        © {new Date().getFullYear()} {t.footer.name}. {t.footer.allRights}
      </p>
      <p className="text-xs font-sans mt-1" style={{ color: 'rgba(155, 79, 216, 0.3)' }}>
        ✓ GitHub connection test
      </p>
    </footer>
  )
}
