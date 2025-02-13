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
        <div className="flex items-center space-x-2 text-sm mb-12 mt-8">
          <Link
            href="/talks"
            className="flex items-center px-4 py-2 rounded-lg backdrop-blur-sm bg-green-500/10 hover:bg-green-500/20 transition-all border border-green-500/20 hover:border-green-500/40"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>cd /talks</span>
          </Link>
        </div>

        <div className="mb-12">
          <div className="flex items-center space-x-2 text-sm mb-8">
            <span className="text-green-400">$</span>
            <span className="animate-pulse">cat talk_details.txt</span>
          </div>

          <div className="space-y-10">
            <h1 className="text-2xl font-bold tracking-tight">{typedTitle}{cursorVisible ? '█' : ' '}</h1>

            <div className="border-[0.5px] border-green-500/40 p-6 rounded-lg backdrop-blur-sm bg-green-500/5 hover:bg-green-500/10 transition-all">
              <div className="flex items-start gap-6">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={talk.logoImage}
                    alt={`${talk.place} logo`}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                <div>
                  <div className="font-bold text-xl mb-2">{talk.place}</div>
                  <div className="text-green-400/90 leading-relaxed">{talk.content_des}</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Terminal size={18} className="text-green-400" />
                <span className="text-xl font-semibold">Event Images</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-[0.5px] border-green-500/40 p-6 rounded-lg backdrop-blur-sm bg-green-500/5">
                {talk.images.map((image, index) => (
                  <div
                    key={index}
                    className="group relative w-full border-[0.5px] border-green-500/30 rounded-lg overflow-hidden transition-all hover:border-green-500/60"
                    style={{ paddingTop: '56.25%' }}
                  >
                    <Image
                      src={image}
                      alt={`Talk image ${index + 1}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

            {talk.twitter_embeds.length > 0 && (
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Terminal size={18} className="text-green-400" />
                  <span className="text-xl font-semibold">Twitter Highlights</span>
                </div>
                <div className="border-[0.5px] border-green-500/40 p-6 rounded-lg backdrop-blur-sm bg-green-500/5">
                  <ul className="space-y-3">
                    {talk.twitter_embeds.map((embedId, index) => (
                      <li key={index} className="group">
                        <span className="text-green-400">$</span>
                        <Link
                          href={`https://twitter.com/i/web/status/${embedId}`}
                          target="_blank"
                          className="ml-2 hover:text-green-400 transition-colors inline-flex items-center group-hover:underline"
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
