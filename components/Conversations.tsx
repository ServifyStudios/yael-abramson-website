import ConversationsContent from './ConversationsContent'
import { type Video } from './ConversationsPlayer'

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
  return <ConversationsContent videos={videos} />
}
