import { PortfolioData } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { ArrowLeft } from 'lucide-react';

interface TalksPageProps {
     params: {
          id: string;
     };
}

const TalkDetails: React.FC<TalksPageProps> = ({ params }) => {
     const talk = PortfolioData.Talks.find((talk) => talk.id === params.id);

     if (!talk) {
          return (
               <div className="min-h-screen text-[#00ff00] overflow-y-auto">
                    <main className="p-4 md:p-6 max-w-4xl mx-auto mt-[4rem]">
                         <div className="crt-text text-[#008800]">Talk not found</div>
                    </main>
               </div>
          );
     }

     return (
          <div className="min-h-screen text-[#00ff00] overflow-y-auto h-screen">
               <main className="p-4 md:p-6 mx-auto mt-[4rem]">
                    {/* Back Button */}
                    <Link
                         href="/talks"
                         className="mb-8 inline-flex items-center crt-text hover:text-[#008800] mb-6"
                    >
                         <ArrowLeft className="mr-2 h-4 w-4" />
                         <span>Back to Talks</span>
                    </Link>

                    {/* Title Section */}
                    <div className="mb-8">
                         <h1 className="lg:text-2xl md:text-3xl font-bold crt-text mb-4">{talk.title}</h1>
                         <hr className="border border-[#00ff00] mb-4" />
                         <div className="lg:flex items-center gap-4 mb-4">
                              <Image
                                   src={talk.logoImage}
                                   alt={`${talk.place} logo`}
                                   width={50}
                                   height={50}
                              />
                              <div>
                                   <span className="crt-text text-[#008800]">{talk.place}</span>
                                   <p className="crt-text text-[#008800]">{talk.content_des}</p>
                              </div>
                         </div>
                    </div>


{/* Images Grid */}
<div className="mb-8">
     <h2 className="text-xl font-bold crt-text mb-4">Event Images</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 border border-[#00ff00]">
          {talk.images.map((image, index) => (
               <div 
                    key={index} 
                    className="relative w-full overflow-hidden border border-[#008800] p-5"
                    style={{ paddingTop: '56.25%' }} // 16:9 aspect ratio
               >
                    <Image
                         src={image}
                         alt={`Talk image ${index + 1}`}
                         layout="fill"
                         objectFit="cover"
                         className="absolute top-0 left-0 w-full h-full"
                    />
               </div>
          ))}
     </div>
</div>

                   {/* Twitter Embeds */}
                    {talk.twitter_embeds.length > 0 && (
                         <div className="mb-8">
                              <h2 className="text-xl font-bold crt-text mb-4">Twitter Highlights</h2>
                         <hr className="border border-[#00ff00] mb-4" />
                              <div className="">
                                   {talk.twitter_embeds.map((embedId, index) => (
                                        <div key={index}>
                                             <li className="crt-text">https://twitter.com/i/web/status/${embedId}</li>
                                             <Link target={"_blank"}  href={`https://twitter.com/i/web/status/${embedId}`} key={index} className="mb-4 last:mb-0 p-2">
                                             </Link>
                                             </div>
                                   ))}
                              </div>
                         </div>
                    )}



                    {/* External Link
                    <div className="border border-[#00ff00] p-4">
                         <h2 className="text-xl font-bold crt-text mb-4">Resources</h2>
                         <Link
                              href={talk.link}
                              target="_blank"
                              className="crt-text hover:text-[#008800] underline"
                         >
                              View presentation slides and materials
                         </Link>
                    </div> */}
               </main>
          </div>
     )
}

export default TalkDetails