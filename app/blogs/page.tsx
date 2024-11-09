import React from 'react'
import Navbar from '../components/navbar'
import { PortfolioData } from '../lib/data'
import Link from 'next/link'

const Blogs = () => {
  return (
    <div className='overflow-y-auto h-screen'>
      <Navbar />
      {/* Professional */}
      <div className='p-3 mb-[20rem]'>
      <p className="text-[#00ff00] crt-text text-3xl font-bold mt-[4rem]">BLOGS</p>
      <hr className="border border-[#00ff00] mb-4" />
      <div className="border border-[#00ff00]">
        {PortfolioData.Blogs.map((blog, index: number) => (
          <div key={index} className="w-full hover:bg-zinc-900 p-0 border border-[#008800]">
            <Link target="_blank" href={blog.url} key={index}>
              <div className="crt-text font-bold text-[#00ff00]">{blog.title}</div>
              <div className="crt-text font-bold text-[#008800]">{blog.description}</div>
            </Link>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Blogs
