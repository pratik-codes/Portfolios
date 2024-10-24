import { ExternalLink, Link2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const BaseCard = (props: any) => {
  return (
    <div>
      <div className='flex justify-end items-center'>
        <div className="hover:text-gray-500 transition delay-75 font-bold text-gray-300 base-card bottom-0 right-0 mb-2 mr-2 rounded-2xl w-fit text-center py-1 px-3 text-sm flex justify-center items-center p-1">
          {props.blockName}
        </div>

        <Link href={props.codeLink || ""} target="_blank" className="hover:text-gray-500 transition delay-75 font-bold text-gray-300 base-card bottom-0 right-0 mb-2 rounded-2xl w-fit text-center py-1 px-3 text-sm flex justify-center items-center p-1">
          <Link2 size={16} className="mr-1" />
          code
        </Link>
      </div>
      <div className='base-card bg-opacity-50 backdrop-blur-md rounded-3xl p-3 w-full h-[300px]'>
        {props.children}
      </div>

    </div>
  )
}

export default BaseCard
