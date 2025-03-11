'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import { PortfolioData } from '../lib/data'
import Link from 'next/link'
import Image from 'next/image'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Terminal, Calendar, ArrowRight } from 'lucide-react'

const Talks = () => {
     const [typedDescription, setTypedDescription] = useState('')
     const [cursorVisible, setCursorVisible] = useState(true)

     useEffect(() => {
          const interval = setInterval(() => {
               setCursorVisible(v => !v)
          }, 500)
          return () => clearInterval(interval)
     }, [])

     useEffect(() => {
          const description = "Explore my talks: insights and presentations on technology, innovation, and lifelong learning"
          let i = 0
          const typingInterval = setInterval(() => {
               setTypedDescription(description.slice(0, i))
               i++
               if (i > description.length) clearInterval(typingInterval)
          }, 50)
          return () => clearInterval(typingInterval)
     }, [])

     return (
          <div>
               <Navbar />
               <div className="min-h-screen p-4 text-green-500 font-mono">
                    <div className="max-w-6xl mx-auto">
                         <div className="mb-8">
                              <div className="flex items-center space-x-2 text-sm mb-8">
                                   <span className="text-green-400">$</span>
                                   <span className="animate-pulse">cat talks.txt</span>
                              </div>

                              <div className="mb-8">
                                   <p className="text-lg mb-4 h-[56px] md:h-[28px]">{typedDescription}<span className="inline-block w-[8px]">{cursorVisible ? '█' : ' '}</span></p>
                              </div>

                              <h1 className="text-2xl mb-4">TALKS</h1>

                              {/* Talks Cards Grid */}
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                   {PortfolioData.Talks.map((talk, index) => (
                                        <Link
                                             key={index}
                                             href={`/talks/${talk.id}`}
                                             className="block h-full"
                                        >
                                             <div className="h-full border border-green-500/30 rounded-lg p-4 bg-black/20 backdrop-blur-sm hover:bg-green-900/20 transition-colors flex flex-col">
                                                  <div className="flex items-center mb-3">
                                                       <div className="h-8 w-8 relative mr-2 flex-shrink-0">
                                                            <Image
                                                                 src={talk.logoImage}
                                                                 alt={talk.title}
                                                                 fill
                                                                 className="object-contain rounded"
                                                            />
                                                       </div>
                                                       <div className="text-xs text-green-400/70">
                                                            Talk
                                                       </div>
                                                  </div>

                                                  <h2 className="font-bold text-lg mb-2 text-green-300">{talk.title}</h2>

                                                  <p className="text-sm text-green-400 mb-3 line-clamp-2">
                                                       {talk.content_des}
                                                  </p>

                                                  <div className="flex items-center mt-2 mb-3">
                                                       <Calendar size={14} className="mr-1 text-green-400" />
                                                       <span className="text-xs text-green-400">{talk.place}</span>
                                                  </div>

                                                  <div className="mt-auto pt-2 flex justify-between items-center border-t border-green-500/20 text-green-400">
                                                       <span className="text-xs">View talk</span>
                                                       <ArrowRight size={12} />
                                                  </div>
                                             </div>
                                        </Link>
                                   ))}
                              </div>
                         </div>

                         <div className="text-sm">
                              $ Terminal v2.0.24 {cursorVisible ? '█' : ' '}
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Talks
