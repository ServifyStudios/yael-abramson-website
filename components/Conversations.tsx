import ConversationsPlayer, { type Video } from './ConversationsPlayer'

const PLAYLIST_ID = 'PLvStnVh80DPlLkMnOVSMiHnoIRSk09Bo3'

function decodeHtml(str: string) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
}

async function getPlaylistVideos(): Promise<Video[]> {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    const xml = await res.text()

    const entries = xml.match(/<entry>([\s\S]*?)<\/entry>/g) || []

    return entries
      .map((entry) => {
        const videoIdMatch = entry.match(/<yt:videoId>([A-Za-z0-9_-]+)<\/yt:videoId>/)
        const titleMatch =
          entry.match(/<media:title>([^<]+)<\/media:title>/) ||
          entry.match(/<title>([^<]+)<\/title>/)

        const videoId = videoIdMatch?.[1] || ''
        const title = decodeHtml(titleMatch?.[1] || 'Untitled')

        return { videoId, title }
      })
      .filter((v) => v.videoId)
  } catch {
    return []
  }
}

export default async function Conversations() {
  const videos = await getPlaylistVideos()

  return (
    <section id="conversations" className="py-28 md:py-40 px-6" style={{ background: '#F0DFFF' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs tracking-[0.45em] uppercase font-sans mb-6"
            style={{ color: '#7B2FBE' }}
          >
            Conversations
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
            These conversations are close to my heart
          </h2>

          <div className="space-y-5 font-sans text-lg leading-[1.85]" style={{ color: '#3a3a4a' }}>
            <p>
              Over the past while, I've been sitting down with people and having real, unscripted conversations about healing, about mental health, about what it actually means to come back to yourself.
            </p>
            <p>
              I didn't want to create content. I wanted to create real connections. So that's what these are. Two people talking honestly about things that most of us have been taught to keep quiet.
            </p>
            <p>
              Watch one. Or watch them all. And if something lands — maybe a question, a feeling, something that makes you stop and think — reach out and let me know. I believe these kinds of conversations are exactly how we start to heal.
            </p>
          </div>
        </div>

        {/* Player */}
        <ConversationsPlayer videos={videos} />

      </div>
    </section>
  )
}
