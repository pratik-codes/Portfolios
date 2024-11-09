'use client'

import { useEffect, useState } from 'react';
import { PortfolioData } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Terminal } from 'lucide-react';

export default function TalkDetails({ params }: { params: { id: string } }) {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typedTitle, setTypedTitle] = useState('');

  const talk = PortfolioData.Talks.find((talk) => talk.id === params.id);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (talk) {
      let i = 0
      const typingInterval = setInterval(() => {
        setTypedTitle(talk.title.slice(0, i))
        i++
        if (i > talk.title.length) clearInterval(typingInterval)
      }, 50)
      return () => clearInterval(typingInterval)
    }
  }, [talk])

  if (!talk) {
    return (
      <div className="min-h-screen p-4 text-green-500 font-mono">
        <div className="max-w-6xl mx-auto my-16">
          <div className="flex items-center space-x-2 text-sm mb-4">
            <span className="text-green-400">$</span>
            <span className="animate-pulse">Error: Talk not found</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 text-green-500 font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-2 text-sm mb-8 mt-16">
          <Link
            href="/talks"
            className="flex items-center hover:text-green-400 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>cd /talks</span>
          </Link>
        </div>

        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm mb-8">
            <span className="text-green-400">$</span>
            <span className="animate-pulse">cat talk_details.txt</span>
          </div>

          <div className="mb-8">
            <h1 className="text-xl mb-4">{typedTitle}{cursorVisible ? '█' : ' '}</h1>

            <div className="border border-green-500 p-4 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={talk.logoImage}
                    alt={`${talk.place} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-bold">{talk.place}</div>
                  <div className="text-green-400">{talk.content_des}</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Terminal size={16} />
                <span className="text-xl">Event Images</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-green-500 p-4">
                {talk.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-full border border-green-500/50"
                    style={{ paddingTop: '56.25%' }}
                  >
                    <Image
                      src={image}
                      alt={`Talk image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {talk.twitter_embeds.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Terminal size={16} />
                  <span className="text-xl">Twitter Highlights</span>
                </div>
                <div className="border border-green-500 p-4">
                  <ul className="space-y-2">
                    {talk.twitter_embeds.map((embedId, index) => (
                      <li key={index}>
                        <span className="text-green-400">$</span>
                        <Link
                          href={`https://twitter.com/i/web/status/${embedId}`}
                          target="_blank"
                          className="ml-2 hover:text-green-400 transition-colors"
                        >
                          open tweet_{index + 1}.url
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="text-sm">
          $ Terminal v2.0.24 {cursorVisible ? '█' : ' '}
        </div>
      </div>
    </div>
  );
}
