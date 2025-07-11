'use client'

import { useEffect, useState } from 'react';
import { PortfolioData } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Terminal, ExternalLink, ArrowRight } from 'lucide-react';

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
                              className="flex items-center bg-green-900/30 hover:bg-green-800/50 text-green-400 hover:text-green-300 px-4 py-2 rounded-md transition-colors border border-green-500/30"
                         >
                              <ArrowLeft className="mr-2 h-4 w-4" />
                              <span>Back to talks</span>
                         </Link>
                    </div>

                    <div className="mb-12">
                         <div className="flex items-center space-x-2 text-sm mb-8">
                              <span className="text-green-400">$</span>
                              <span className="animate-pulse">cat talk_details.txt</span>
                         </div>

                         <div className="space-y-10">
                              <h1 className="text-2xl font-bold text-green-300 tracking-tight min-h-[40px]">{typedTitle}<span className="inline-block w-[12px]">{cursorVisible ? '█' : ' '}</span></h1>

                              {/* Talk info card */}
                              <div className="border border-green-500/30 rounded-lg p-6 bg-black/20 backdrop-blur-sm">
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
                                             <h2 className="font-bold text-xl mb-2 text-green-300">{talk.place}</h2>
                                             <p className="text-green-400 leading-relaxed">{talk.content_des}</p>
                                        </div>
                                   </div>
                              </div>

                              {/* Event Images Section */}
                              <div>
                                   <div className="flex items-center space-x-3 mb-4">
                                        <Terminal size={18} className="text-green-400" />
                                        <h2 className="text-xl font-semibold text-green-300">Event Images</h2>
                                   </div>
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {talk.images.map((image, index) => (
                                             <div
                                                  key={index}
                                                  className="group relative w-full border border-green-500/30 rounded-lg overflow-hidden transition-all hover:border-green-500/60 bg-black/20"
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

                              {/* Twitter Highlights Section */}
                              {talk.twitter_embeds.length > 0 && (
                                   <div>
                                        <div className="flex items-center space-x-3 mb-4">
                                             <Terminal size={18} className="text-green-400" />
                                             <h2 className="text-xl font-semibold text-green-300">Twitter Highlights</h2>
                                        </div>
                                        <div className="border border-green-500/30 rounded-lg p-6 bg-black/20 backdrop-blur-sm">
                                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                  {talk.twitter_embeds.map((embedId, index) => (
                                                       <Link
                                                            key={index}
                                                            href={`https://twitter.com/i/web/status/${embedId}`}
                                                            target="_blank"
                                                            className="border border-green-500/30 rounded-lg p-4 bg-black/20 backdrop-blur-sm hover:bg-green-900/20 transition-colors flex flex-col"
                                                       >
                                                            <div className="flex items-center mb-2">
                                                                 <ExternalLink size={14} className="mr-2 text-green-400" />
                                                                 <span className="text-green-300">Twitter Post {index + 1}</span>
                                                            </div>
                                                            <div className="mt-auto pt-2 flex justify-between items-center border-t border-green-500/20 text-green-400">
                                                                 <span className="text-xs">View tweet</span>
                                                                 <ArrowRight size={12} />
                                                            </div>
                                                       </Link>
                                                  ))}
                                             </div>
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
