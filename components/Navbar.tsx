'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  const navLinks = [
    { label: t.nav.story, href: '#story' },
    { label: t.nav.conversations, href: '#conversations' },
    { label: t.nav.whoAmI, href: '#who-am-i' },
    { label: t.nav.reachOut, href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'shadow-2xl shadow-black/30'
          : ''
      }`}
      style={{
        background:
          scrolled || menuOpen
            ? 'rgba(13, 1, 24, 0.96)'
            : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="font-serif text-lg text-white tracking-wide">
          {t.nav.brand}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-brand-300 hover:text-white transition-colors duration-200 text-xs tracking-[0.2em] uppercase font-sans"
            >
              {label}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'he' : 'en')}
            className="text-brand-300 hover:text-white transition-colors duration-200 text-xs tracking-[0.2em] font-sans border border-brand-700 hover:border-brand-400 px-3 py-1 rounded-full"
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'עב' : 'EN'}
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className="block w-6 h-px bg-white transition-all duration-300"
            style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}
          />
          <span
            className="block w-6 h-px bg-white transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-px bg-white transition-all duration-300"
            style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? '340px' : '0px' }}
      >
        <nav className="px-6 pb-8 flex flex-col gap-5">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-brand-300 hover:text-white text-sm tracking-[0.2em] uppercase font-sans transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}

          {/* Language toggle — mobile */}
          <button
            onClick={() => { setLang(lang === 'en' ? 'he' : 'en'); setMenuOpen(false) }}
            className="self-start text-brand-300 hover:text-white text-sm tracking-[0.2em] font-sans transition-colors border border-brand-700 hover:border-brand-400 px-3 py-1 rounded-full"
          >
            {lang === 'en' ? 'עברית' : 'English'}
          </button>
        </nav>
      </div>
    </header>
  )
}
