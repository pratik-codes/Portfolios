import React from 'react'
import Navbar from '../components/navbar'
import { PortfolioData } from '../lib/data'
import Link from 'next/link'

const Talks = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen text-green-500 font-light">
        <div className="max-w-2xl mx-auto px-6 pb-12 pt-28">
          <div className="space-y-12">
            <div>
              <h1 className="text-2xl font-medium mb-2">Talks</h1>
              <p className="mb-6">Here&apos;s a list of my talks:</p>
            </div>

            <div className="space-y-6">
              {PortfolioData.Talks.map((talk, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-medium">
                    <Link href={`/talks/${talk.id}`} className="underline decoration-green-500/50 decoration-1 underline-offset-[2.5px] hover:decoration-green-300 transition-colors hover:text-green-300 text-lg">
                      {talk.title}
                    </Link>
                  </h3>
                  <div className="leading-relaxed">
                    <p>{talk.content_des}</p>
                    <p className="text-sm mt-2 opacity-80">{talk.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Talks
