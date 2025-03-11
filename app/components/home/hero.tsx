"use client";

import { useState, useEffect } from "react";
import { PortfolioData } from "@/app/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Component() {
     const [typedGreeting, setTypedGreeting] = useState("");
     const [cursorVisible, setCursorVisible] = useState(true);
     const [commandVisible, setCommandVisible] = useState(false);
     const [aboutVisible, setAboutVisible] = useState(false);

     useEffect(() => {
          let i = 0;
          const typingInterval = setInterval(() => {
               setTypedGreeting(PortfolioData.greeting.slice(0, i));
               i++;
               if (i > PortfolioData.greeting.length) {
                    clearInterval(typingInterval);
                    setTimeout(() => setCommandVisible(true), 500);
               }
          }, 100);

          return () => clearInterval(typingInterval);
     }, []);

     useEffect(() => {
          if (commandVisible) {
               setTimeout(() => setAboutVisible(true), 1500);
          }
     }, [commandVisible]);

     useEffect(() => {
          const cursorInterval = setInterval(() => {
               setCursorVisible((v) => !v);
          }, 500);

          return () => clearInterval(cursorInterval);
     }, []);

     return (
          <div className="text-green-500 font-mono flex justify-center max-w-6xl mx-auto min-h-full p-4">
               <div className="mt-6 w-full">
                    <div className="mb-4 flex items-center space-x-2 text-sm terminal-command">
                         <span className="terminal-command-text">whoami</span>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 lg:items-center">
                         <div className="w-48 h-48 relative flex-shrink-0 image-container terminal-pulse">
                              <Image
                                   src="https://avatars.githubusercontent.com/u/64960569?s=400&u=7895fdab7327511189a670d31846a48ea8f50f95&v=4"
                                   alt="Profile avatar"
                                   width={150}
                                   height={150}
                                   className="w-full h-full object-cover grayscale-image"
                              />
                              <div className="green-overlay"></div>
                         </div>

                         <div className="flex-1">
                              <h1 className="text-2xl mt-4">
                                   {typedGreeting}
                                   <span
                                        className={cursorVisible ? "opacity-100 ml-1" : "opacity-0"}
                                   >
                                        █
                                   </span>
                              </h1>
                              <div className="mb-6 space-y-2">
                                   <div className="mt-4 ">
                                        <div className="space-y-2">
                                             <p className="hover:text-green-300 transition-colors duration-300">
                                                  [x:{" "}
                                                  <Link
                                                       target="_blank"
                                                       href="https://x.com/pratikcodes_"
                                                       className="hover:text-green-400 hover:underline"
                                                  >
                                                       {PortfolioData.contact.twitter}
                                                  </Link>
                                                  ]
                                             </p>
                                             <p className="hover:text-green-300 transition-colors duration-300">[discord: {PortfolioData.contact.discord}]</p>
                                             <p className="hover:text-green-300 transition-colors duration-300">
                                                  [github:{" "}
                                                  <Link
                                                       target="_blank"
                                                       href="https://github.com/pratik-codes/"
                                                       className="hover:text-green-400 hover:underline"
                                                  >
                                                       {PortfolioData.contact.github}]
                                                  </Link>
                                             </p>
                                             <p className="hover:text-green-300 transition-colors duration-300">
                                                  [email:{" "}
                                                  <Link
                                                       target="_blank"
                                                       href="mailto:example@domain.com"
                                                       className="hover:text-green-400 hover:underline"
                                                  >
                                                       {PortfolioData.contact.email}
                                                  </Link>
                                                  ]
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="space-y-6 mt-8 border-t border-green-500/20 pt-6">
                         <div className={`mb-4 flex items-center space-x-2 text-sm terminal-command ${commandVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                              <span className="terminal-command-text">cat about.txt</span>
                         </div>
                         <div className={`space-y-4 ${aboutVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
                              {PortfolioData.about.map((line, index) => (
                                   <p key={index} className="leading-relaxed">
                                        {line}
                                   </p>
                              ))}
                         </div>
                    </div>

                    <div className="mt-8 border-t border-green-500/20 pt-6">
                         <p className="text-green-300">thanks for visiting!</p>
                    </div>

                    <div className="mt-4 text-sm">
                         <span className="text-green-400">$</span> Terminal v2.0.24
                         <span className={cursorVisible ? "opacity-100" : "opacity-0"}>█</span>
                    </div>
               </div>
          </div>
     );
}
