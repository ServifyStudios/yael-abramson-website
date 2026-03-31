'use client'

import { useState } from 'react'

export interface Video {
  videoId: string
  title: string
}

export default function ConversationsPlayer({ videos }: { videos: Video[] }) {
  const [activeId, setActiveId] = useState(videos[0]?.videoId || '')

  if (videos.length === 0) {
    // Fallback if RSS fetch fails
    return (
      <div
        className="relative w-full rounded-2xl overflow-hidden"
        style={{ paddingBottom: '56.25%', boxShadow: '0 40px 80px rgba(59, 16, 102, 0.2)' }}
      >
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/videoseries?list=PLvStnVh80DPlLkMnOVSMiHnoIRSk09Bo3&rel=0&modestbranding=1"
          title="Yael Abramson — Conversations on Healing"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">

      {/* Main video — left, large */}
      <div
        className="w-full lg:flex-1 rounded-2xl overflow-hidden bg-black"
        style={{ boxShadow: '0 30px 70px rgba(59, 16, 102, 0.25)' }}
      >
        <div className="relative w-full aspect-video">
          <iframe
            key={activeId}
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${activeId}?rel=0&modestbranding=1&autoplay=0`}
            title="Video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Sidebar — right, scrollable */}
      <div
        className="w-full lg:w-72 xl:w-80 flex-shrink-0 rounded-2xl overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.55)' }}
      >
        {/* Sidebar header */}
        <div
          className="px-4 py-3 border-b"
          style={{ borderColor: 'rgba(180, 112, 240, 0.2)' }}
        >
          <p className="text-xs tracking-[0.25em] uppercase font-sans font-medium" style={{ color: '#7B2FBE' }}>
            All Conversations
          </p>
        </div>

        {/* Scrollable list */}
        <div
          className="overflow-y-auto"
          style={{
            maxHeight: '420px',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(155, 79, 216, 0.3) transparent',
          }}
        >
          {videos.map((video) => {
            const isActive = video.videoId === activeId
            return (
              <button
                key={video.videoId}
                onClick={() => setActiveId(video.videoId)}
                className="w-full text-left flex gap-3 px-3 py-3 transition-all duration-200 border-b"
                style={{
                  borderColor: 'rgba(180, 112, 240, 0.12)',
                  background: isActive ? 'rgba(155, 79, 216, 0.1)' : 'transparent',
                  borderLeft: isActive ? '3px solid #7B2FBE' : '3px solid transparent',
                }}
              >
                {/* Thumbnail */}
                <div className="flex-shrink-0 w-20 rounded-lg overflow-hidden" style={{ aspectRatio: '16/9', alignSelf: 'flex-start' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${video.videoId}/mqdefault.jpg`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <p
                  className="text-sm font-sans leading-snug flex-1 pt-0.5"
                  style={{
                    color: isActive ? '#3B1066' : '#3a3a4a',
                    fontWeight: isActive ? 600 : 400,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {video.title}
                </p>
              </button>
            )
          })}
        </div>
      </div>

    </div>
  )
}
