# Project Context

**Last Updated:** 2026-04-02

## What We've Built So Far
- Full website for Yael Abramson (mental health coach & speaker)
- Sections: Hero, Story, Conversations (YouTube playlist), Who Am I, Contact, Footer
- English / Hebrew language toggle with RTL support
  - All strings in `lib/translations.ts` (both `en` and `he` objects)
  - Language state in `context/LanguageContext.tsx` — updates `html[dir]` and `html[lang]` on toggle
  - Toggle button in `Navbar.tsx` (desktop: EN/עב, mobile: English/עברית)
  - Heebo font loaded for Hebrew text (Playfair Display doesn't support Hebrew)
  - `Conversations.tsx` stays async server component; text extracted to `ConversationsContent.tsx` (client) to access language context

## What Works
- Language toggle switches all on-page text between English and Hebrew instantly
- RTL layout applies automatically when Hebrew is selected
- YouTube playlist fetches and renders correctly in both languages
- All components use `useLanguage()` from context — no hardcoded strings

## What Should Be Done Next
- Deploy to Vercel (CLI needs `vercel login`, or connect repo via Vercel dashboard for auto-deploys)
- Verify Hebrew RTL layout looks correct on mobile
- Review Hebrew translations with a native speaker if needed

## Key Rule
**Any future text change must be updated in BOTH `en` and `he` inside `lib/translations.ts`.**
