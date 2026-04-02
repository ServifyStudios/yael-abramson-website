# Project Context

**Last Updated:** 2026-04-02

## What We've Built So Far
- Full website for Yael Abramson (mental health coach & speaker)
- Sections: Hero, Story, Conversations (YouTube playlist), Who Am I, Contact, Footer
- English / Hebrew language toggle with RTL support
  - Language state lives in `context/LanguageContext.tsx`
  - All strings live in `lib/translations.ts`
  - Toggle button is in `Navbar.tsx`
  - Heebo font loaded for Hebrew text

## Current Focus
[empty for now]

## Key Technical Decisions
- Next.js App Router with TypeScript + Tailwind CSS
- `Conversations.tsx` is an async server component (fetches YouTube RSS); text rendering extracted to `ConversationsContent.tsx` (client component) so it can use language context
- Language switching is client-side only (no URL-based routing); `dir` and `lang` attributes on `<html>` are updated via `useEffect`
- Heebo font used for all Hebrew text (both body and headings, since Playfair Display doesn't support Hebrew)

## Next Steps
- IMPORTANT: Any future text changes must be updated in BOTH `en` and `he` objects inside `lib/translations.ts`
