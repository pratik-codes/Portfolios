import React from 'react';
import Navbar from '../components/navbar';
import { PortfolioData } from '../lib/data';
import Link from 'next/link';
import Image from 'next/image';

const Talks = () => {
  return (
    <div className='mb-[5rem] overflow-y-auto h-screen'>
      <Navbar />
      {/* Professional */}
      <div className='p-3 mb-[3rem]'>
        <p className="text-[#00ff00] crt-text text-3xl font-bold mt-[4rem]">TALKS</p>
        <hr className="border border-[#00ff00] mb-4" />
        
        {/* Grid Container */}
        <div className="gap-4 border border-[#00ff00]">
          {PortfolioData.Talks.map((talk, index) => (
            <div key={index} className="lg:flex space-x-2 w-full hover:bg-zinc-900 p-2 border border-[#008800]">
              <Image src={talk.logoImage} alt={talk.title} width={50} height={50} />
              <Link href={`/talks/${talk.id}`}>
                <div className="crt-text font-bold text-[#00ff00]">{talk.title}</div>
                <div className="crt-text font-bold text-[#008800]">{talk.content_des}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Talks;
