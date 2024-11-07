import React from 'react'
// import { ArrowLeft, ArrowRight, RefreshCw, Share2, Menu } from 'lucide-react'

const BrowserWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='border-[#00ff00] border-0'>
        {/* Browser Chrome */}
        {/* <div className="bg-zinc-900 p-3 border-b border-zinc-800 mb-4 w-screen h-full">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <button className="p-1 hover:bg-zinc-800 rounded">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-zinc-800 rounded">
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-zinc-800 rounded">
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1">
              <div className="bg-zinc-800 rounded px-3 py-1 flex items-center gap-2">
                <span className="text-sm text-zinc-400">tiwaripratik.com</span>
                <Share2 className="w-4 h-4 ml-auto" />
              </div>
            </div>
            <button className="p-1 hover:bg-zinc-800 rounded">
              <Menu className="w-4 h-4 mr-2" />
            </button>
          </div>
      </div> */}
      <div className='mt-[0rem]'>
        {children}
      </div>
    </div>
  )
}

export default BrowserWrapper
