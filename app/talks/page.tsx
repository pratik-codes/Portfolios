'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import { PortfolioData } from '../lib/data'
import Link from 'next/link'
import Image from 'next/image'

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
              <p className="text-lg mb-4">{typedDescription}{cursorVisible ? '█' : ' '}</p>
            </div>

            <h1 className="text-2xl mb-4">TALKS</h1>
            <div className="border border-green-500">
              <div className="w-full">
                {PortfolioData.Talks.map((talk, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-2 p-2 ${index !== PortfolioData.Talks.length - 1 ? 'border-b border-green-500' : ''} hover:bg-green-900/20`}
                  >
                    <div className="flex-shrink-0">
                      <Image src={talk.logoImage} alt={talk.title} width={50} height={50} />
                    </div>
                    <div>
                      <Link href={`/talks/${talk.id}`} className="block">
                        <div className="font-bold text-green-500">{talk.title}</div>
                        <div className="text-sm text-green-400">{talk.content_des}</div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
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
