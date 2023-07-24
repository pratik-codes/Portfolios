"use client";

import Image from "next/image";
import { useState } from "react";

const Courousel = ({title, place, content_des, images}: {title: string, place: string, content_des: string, images: Array<string>}) => {
  const [open, setOpen] = useState(false);


  return <div onClick={() => setOpen(!open)} className={`flex justify-center flex-col space-y-2 hover:bg-transparent-white p-4 border-white hover:border cursor-pointer rounded-xl transition-all duration-150 my-4 ${open && " bg-transparent-white border"}`}>
    <div className="flex">
    <div className="w-11/12">
    <div className="text-2xl font-bold">{title}</div>
    <div className="mt-2 font-bold text-gray-300 bg-transparent-white border border-white rounded-2xl w-28 text-center py-1 px-2">{place}</div>
    </div>
    <div className="w-1/12 flex justify-center items-center transition-all duration-200">
      <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 transition-all duration-300 ${open ? " rotate-180" : ""}`} viewBox="0 0 24 24" fill="currentColor" >
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z" clipRule="evenodd" />
      </svg>
    </div>
    </div>
    {open &&
    <div>
        <div className="pt-6 text-gray-400">{content_des}</div>
        <div className="mt-6 ml-1 text-xl font-extrabold">Pictures</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 mt-4">
          {images.map((image: string) => {
            return <Image className="rounded-xl border-6 border-gray-900 mb-4" src={image} alt="" width="330" height={100}/>
          })}
        </div>
    <div className="mt-6 ml-1 text-xl font-extrabold">Twitter</div>
    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">. <a href="https://twitter.com/pratikk_tiwari?ref_src=twsrc%5Etfw">@pratikk_tiwari</a> with a live coding demo! <a href="https://t.co/KyaPOsxxrQ">pic.twitter.com/KyaPOsxxrQ</a></p>&mdash; ReactJSPune (@ReactPune) <a href="https://twitter.com/ReactPune/status/1682638222206316545?ref_src=twsrc%5Etfw">July 22, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
    </div>

    }

    </div>

}

export default Courousel;

