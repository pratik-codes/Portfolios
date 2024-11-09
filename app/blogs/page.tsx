'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { PortfolioData } from '../lib/data'
import { Terminal } from 'lucide-react'
import Navbar from '../components/navbar'

export default function Blogs() {
  const [typedDescription, setTypedDescription] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const description = "Journey through my thoughts: explore articles on technology, projects, and lifelong learning"
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
              <span className="animate-pulse">cat blogs.txt</span>
            </div>

            <div className="mb-8">
              <p className="text-lg mb-4">{typedDescription}{cursorVisible ? '█' : ' '}</p>
            </div>

            <h1 className="text-2xl mb-4">BLOGS</h1>
            <div className="border border-green-500">
              <table className="w-full">
                <tbody>
                  {PortfolioData.Blogs.map((blog, index) => (
                    <tr key={index} className={index !== PortfolioData.Blogs.length - 1 ? 'border-b border-green-500' : ''}>
                      <td className="p-2 border-r border-green-500 align-top">
                        <Terminal size={16} />
                      </td>
                      <td className="p-2">
                        <Link href={blog.url} target="_blank" className="block hover:bg-green-900/20">
                          <div className="font-bold">{blog.title}</div>
                          <div className="text-sm text-green-400">{blog.description}</div>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
