"use client"

import { useState, useEffect } from 'react'
import { Loader2 } from 'lucide-react'

interface NotionRendererProps {
  url: string
}

export default function NotionRenderer({ url }: NotionRendererProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      new URL(url)
    } catch (e) {
      setError('Invalid URL provided')
      setLoading(false)
      return
    }

    // Simulate loading time (remove this in production)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [url])

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-50 text-red-500">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="w-full h-screen bg-gray-100 p-4">
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
        </div>
      ) : (
        <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={url}
            title="Notion Page"
            className="w-full h-full border-0"
            style={{
              '--notion-font': 'Inter, sans-serif',
              '--notion-bg': '#ffffff',
              '--notion-text': '#37352f',
              '--notion-link': '#0000ff',
            } as React.CSSProperties}
          />
        </div>
      )}
      <style jsx global>{`
        iframe {
          font-family: var(--notion-font);
          background-color: var(--notion-bg);
          color: var(--notion-text);
        }
        iframe a {
          color: var(--notion-link);
        }
        /* Add more custom styles here */
      `}</style>
    </div>

  )
}
