'use client'

import { PortfolioData } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function TalkDetails({ params }: { params: { id: string } }) {
     const talk = PortfolioData.Talks.find((talk) => talk.id === params.id);

     if (!talk) {
          return (
               <div className="min-h-screen text-green-500 font-light">
                    <div className="max-w-2xl mx-auto px-6 pt-28 pb-12">
                         <p>Talk not found</p>
                         <Link href="/talks" className="underline decoration-green-500/50 decoration-1 underline-offset-[2.5px] hover:decoration-green-300 transition-colors hover:text-green-300">
                              Back to talks
                         </Link>
                    </div>
               </div>
          );
     }

     return (
          <div className="min-h-screen text-green-500 font-light">
               <div className="max-w-2xl mx-auto px-6 pt-28 pb-12">
                    <div className="space-y-12">
                         <div className="space-y-6">
                              <Link href="/talks" className="underline decoration-green-500/50 decoration-1 underline-offset-[2.5px] hover:decoration-green-300 transition-colors hover:text-green-300">
                                   ← Back to talks
                              </Link>
                              
                              <h1 className="text-2xl font-medium">{talk.title}</h1>
                              
                              <div className="space-y-4">
                                   <p className="leading-relaxed">{talk.content_des}</p>
                                   <p className="opacity-80">{talk.place}</p>
                              </div>
                         </div>

                         {/* Event Images Section */}
                         {talk.images.length > 0 && (
                              <div className="space-y-6">
                                   <h2 className="text-xl font-medium">Event Images</h2>
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {talk.images.map((image, index) => (
                                             <div
                                                  key={index}
                                                  className="relative w-full"
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
                         )}

                         {/* Twitter Highlights Section */}
                         {talk.twitter_embeds.length > 0 && (
                              <div className="space-y-6">
                                   <h2 className="text-xl font-medium">Twitter Highlights</h2>
                                   <ul className="space-y-2">
                                        {talk.twitter_embeds.map((embedId, index) => (
                                             <li key={index}>
                                                  • <Link
                                                       href={`https://twitter.com/i/web/status/${embedId}`}
                                                       target="_blank"
                                                       className="underline decoration-green-500/50 decoration-1 underline-offset-[2.5px] hover:decoration-green-300 transition-colors hover:text-green-300"
                                                  >
                                                       Twitter Post {index + 1}
                                                  </Link>
                                             </li>
                                        ))}
                                   </ul>
                              </div>
                         )}
                    </div>
               </div>
          </div>
     );
}
