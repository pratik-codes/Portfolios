'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Terminal, Calendar, Tag, ArrowRight, AlertCircle } from 'lucide-react'

interface BlogListingProps {
     initialBlogs: any[]
     debugInfo: {
          markdownCount: number
          externalCount: number
          error: string | null
          markdownFiles: string[]
     }
}

export function BlogListing({ initialBlogs, debugInfo }: BlogListingProps) {
     const [typedDescription, setTypedDescription] = useState('')
     const [cursorVisible, setCursorVisible] = useState(true)
     const [selectedTag, setSelectedTag] = useState<string | null>(null)
     const [localBlogs] = useState<any[]>(initialBlogs)
     const [showDebug, setShowDebug] = useState(false)

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

     const uniqueTags = Array.from(new Set(localBlogs.flatMap(blog => blog.hastags)))

     const filteredBlogs = selectedTag
          ? localBlogs.filter(blog => blog.hastags.includes(selectedTag))
          : localBlogs

     return (
          <div className="max-w-6xl mx-auto">
               <div className="mb-8">
                    <div className="flex items-center space-x-2 text-sm mb-8">
                         <span className="text-green-400">$</span>
                         <span className="animate-pulse">cat blogs.txt</span>
                    </div>

                    <div className="mb-8">
                         <p className="text-lg mb-4">{typedDescription}{cursorVisible ? '█' : ' '}</p>
                    </div>

                    {/* Debug info */}
                    {/* <button
                         onClick={() => setShowDebug(!showDebug)}
                         className="mb-4 flex items-center text-yellow-400 hover:text-yellow-300"
                    >
                         <AlertCircle size={16} className="mr-2" />
                         {showDebug ? "Hide debug info" : "Show debug info"}
                    </button>
 */}
                    {showDebug && (
                         <div className="mb-4 p-4 border border-yellow-500/30 bg-black/30 rounded-lg">
                              <h3 className="text-yellow-400 mb-2 font-bold">Debug Information:</h3>
                              <ul className="list-disc pl-5 text-yellow-300 text-sm">
                                   <li>Markdown posts found: {debugInfo.markdownCount}</li>
                                   <li>External posts found: {debugInfo.externalCount}</li>
                                   <li>Total posts: {initialBlogs.length}</li>
                                   {debugInfo.error && <li className="text-red-400">Error: {debugInfo.error}</li>}
                              </ul>
                              {debugInfo.markdownFiles.length > 0 && (
                                   <>
                                        <h4 className="text-yellow-400 mt-3 mb-1">Markdown files detected:</h4>
                                        <ul className="list-disc pl-5 text-yellow-300 text-sm">
                                             {debugInfo.markdownFiles.map((file, i) => (
                                                  <li key={i}>{file}</li>
                                             ))}
                                        </ul>
                                   </>
                              )}
                              {debugInfo.markdownFiles.length === 0 && (
                                   <p className="text-red-400 mt-2">No markdown files detected in content/blogs directory</p>
                              )}
                         </div>
                    )}

                    <h1 className="text-2xl mb-4">BLOGS</h1>

                    <div className="mb-6 flex flex-wrap">
                         {uniqueTags.map((tag: string) => (
                              <button
                                   key={tag}
                                   onClick={() => setSelectedTag(tag)}
                                   className={`text-xs mr-2 mb-2 px-2 py-1 flex items-center rounded ${selectedTag === tag
                                        ? 'bg-green-700 text-green-100'
                                        : 'bg-green-900/40 text-green-300'
                                        }`}
                              >
                                   <Tag size={10} className="mr-1" />
                                   {tag}
                              </button>
                         ))}
                         {selectedTag && (
                              <button
                                   onClick={() => setSelectedTag(null)}
                                   className="text-xs mr-2 mb-2 px-2 py-1 bg-red-700 text-red-100 rounded"
                              >
                                   Clear Filter
                              </button>
                         )}
                    </div>

                    {/* Blog Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                         {filteredBlogs.map((blog, index) => (
                              <Link
                                   key={index}
                                   href={blog.url}
                                   target={blog.isLocal ? "_self" : "_blank"}
                                   className="block h-full"
                              >
                                   <div className="h-full border border-green-500/30 rounded-lg p-4 bg-black/20 backdrop-blur-sm hover:bg-green-900/20 transition-colors flex flex-col">
                                        <div className="flex items-center mb-3">
                                             <Terminal size={16} className="mr-2 text-green-400" />
                                             <div className="text-xs text-green-400/70">
                                                  {blog.isLocal ? 'Local Markdown' : 'External Link'}
                                             </div>
                                        </div>

                                        <h2 className="font-bold text-lg mb-2 text-green-300">{blog.title}</h2>

                                        <p className="text-sm text-green-400 mb-3 line-clamp-2">
                                             {blog.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1 mb-3">
                                             {blog.hastags.map((tag: string) => (
                                                  <span
                                                       key={tag}
                                                       className="text-xs px-2 py-1 bg-green-900/40 text-green-300 rounded inline-flex items-center"
                                                  >
                                                       <Tag size={10} className="mr-1" />
                                                       {tag}
                                                  </span>
                                             ))}
                                        </div>

                                        <div className="mt-auto pt-2 flex justify-between items-center border-t border-green-500/20 text-green-400">
                                             <span className="text-xs">Read more</span>
                                             <ArrowRight size={12} />
                                        </div>
                                   </div>
                              </Link>
                         ))}
                    </div>

                    {filteredBlogs.length === 0 && (
                         <div className="border border-yellow-500/30 rounded-lg p-4 bg-black/20 backdrop-blur-sm text-center">
                              <p className="text-yellow-400 mb-2">No blogs found for the selected tag.</p>
                              <button
                                   onClick={() => setSelectedTag(null)}
                                   className="text-xs px-2 py-1 bg-yellow-900/40 text-yellow-300 rounded"
                              >
                                   Clear Filter
                              </button>
                         </div>
                    )}
               </div>

               <div className="text-sm mt-8">
                    $ Terminal v2.0.24 {cursorVisible ? '█' : ' '}
               </div>
          </div>
     )
}
