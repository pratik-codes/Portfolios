"use client";

import { PortfolioData } from "@/app/lib/data";
import Image from "next/image";
import React from "react";

export default function LinksPage() {
  return (
    <div className="min-h-screen w-full bg-[rgb(0,14,0)] text-green-400 font-mono overflow-auto">
        <div className="w-full max-w-4xl mx-auto px-4 py-6 space-y-8">
        
        {/* Profile Section - Music Player Style */}
        <div className="animate-on-load animate-fade-in-up animate-delay-100">
          <div className="border border-green-500/30 p-6 bg-[rgb(0,14,0)]">
            <div className="flex gap-6">
              {/* Avatar - Square like album cover */}
              <div className="w-32 h-32 shrink-0">
                <div className="relative w-full h-full">
                  <Image
                    src="https://avatars.githubusercontent.com/u/64960569?s=400&u=7895fdab7327511189a670d31846a48ea8f50f95&v=4"
                    alt="Pratik Tiwari"
                    width={128}
                    height={128}
                    className="h-full w-full object-cover transition-all duration-200 ease-in-out border border-green-400/30"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="h-full w-full bg-green-500/20 hidden items-center justify-center border border-green-400/30">
                    <span className="text-green-300 text-2xl font-bold">PT</span>
                  </div>
                  <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'rgba(34, 197, 94, 0.2) 0px 0px 0px 1px inset' }}></div>
                </div>
              </div>

              {/* Profile Details - Track Info Style */}
              <div className="flex-1 min-w-0">
                <div className="text-sm text-green-500 crt-text mb-1">MY LINKS</div>
                <div className="text-lg font-bold text-green-300 crt-text mb-1">PRATIK TIWARI</div>
                <div className="text-green-400 text-sm crt-text mb-4">
                  cooking at retweet.fun ✧ senior engg ✧ building ideas ✧ tech ✧ internet money
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-green-900/40 h-1 mb-4">
                  <div className="bg-green-400 h-full w-3/4"></div>
                </div>
              </div>
            </div>
            
         
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <div className="w-full max-w-4xl mx-auto">
            
            {/* What am I currently cooking - Terminal styled */}
            <div className="mb-8 animate-on-load animate-fade-in-up animate-delay-200">
              <div className="border border-green-500/30 p-6 bg-[rgb(0,14,0)]">
                <h2 className="text-green-300 text-lg font-semibold crt-text mb-4 border-b border-green-500/30 pb-2">&gt;&gt;&gt; WHAT_AM_I_COOKING.EXE</h2>
                
                <div>
                  <h3 className="text-green-200 font-medium text-base mb-2 crt-text">RETWEET.FUN</h3>
                  <p className="text-green-400 text-sm leading-relaxed mb-4 crt-text">
                    A social token trading platform built on Solana. Buy tokens from Twitter influencers and spend them to request specific actions like retweets, custom posts, or follows.
                  </p>
                  <a 
                    href="https://retweet.fun" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600/20 hover:bg-green-600/30 text-green-300 px-4 py-2 border border-green-500/40 hover:border-green-400/60 transition-all duration-300 crt-text cursor-pointer relative z-20"
                  >
                    <span>[EXECUTE]</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Header - Terminal styled */}
            <div className="mb-6 animate-on-load animate-fade-in-up animate-delay-300">
              <div className="border border-green-500/30 p-4 h-[50px] flex items-center bg-green-400 text-black">
                <h2 className="text-black text-base font-bold">SOCIAL_NETWORKS.DIR</h2>
              </div>
            </div>

            {/* Bento Grid Layout with terminal styling - Single Column */}
            <div className="grid grid-cols-1 gap-4 h-auto">

              {/* Twitter Card - Terminal styled */}
              <div className="animate-on-load animate-fade-in-up animate-delay-400">
                <a
                  href="https://x.com/pratikcodes_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full relative z-20"
                >
                  <div className="border border-green-500/30 h-[175px] p-6 hover:bg-green-900/20 transition-all duration-300 bg-[rgb(0,14,0)] cursor-pointer">
                    <div className="flex items-start justify-between h-full">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-10 h-10 bg-[#55ACEE] border border-green-500/30 flex items-center justify-center shrink-0">
                          <span className="text-white text-xs font-bold">X</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-green-300 font-medium text-base mb-1 crt-text">TWITTER.EXE</div>
                          <div className="text-green-500 text-sm mb-3 crt-text">@pratikcodes_</div>
                          <div className="text-green-400 text-sm leading-relaxed crt-text">
                            cooking @retweetdotfun ✧ senior engg ✧ building ideas ✧ tech ✧ internet money
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#55ACEE]/20 text-[#55ACEE] px-4 py-2 border border-[#55ACEE]/30 text-sm shrink-0 font-medium crt-text">
                        [FOLLOW]
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* GitHub Card - Terminal styled */}
              <div className="animate-on-load animate-fade-in-up animate-delay-500">
                <a
                  href="https://github.com/pratik-codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full relative z-20"
                >
                  <div className="border border-green-500/30 h-[175px] p-6 hover:bg-green-900/20 transition-all duration-300 bg-[rgb(0,14,0)] cursor-pointer">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-black border border-green-500/30 flex items-center justify-center">
                        <span className="text-green-300 text-xs font-bold">GH</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-green-300 font-medium text-sm crt-text">GITHUB.GIT</div>
                        <div className="text-green-500 text-xs crt-text">pratik-codes</div>
                      </div>
                    </div>

                    {/* GitHub Graph - Terminal styled */}
                    <div className="grid grid-cols-10 gap-1 mb-2">
                      {Array.from({ length: 70 }, (_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 border border-green-500/30 ${Math.random() > 0.8 ? 'bg-green-300' :
                            Math.random() > 0.6 ? 'bg-green-400' :
                              Math.random() > 0.4 ? 'bg-green-500' :
                                Math.random() > 0.2 ? 'bg-green-600/50' : 'bg-green-900/40'
                            }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </a>
              </div>

              {/* Portfolio Website Card - Terminal styled */}
              <div className="animate-on-load animate-fade-in-up animate-delay-600">
                <a
                  href="https://www.pratik.fyi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full relative z-20"
                >
                  <div className="border border-green-500/30 h-[175px] p-6 hover:bg-green-900/20 transition-all duration-300 bg-[rgb(0,14,0)] cursor-pointer">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-green-400/20 border border-green-400/30 flex items-center justify-center">
                        <span className="text-green-300 text-xs font-bold">WEB</span>
                      </div>
                      <div>
                        <div className="text-green-300 font-medium text-lg crt-text">PORTFOLIO.HTML</div>
                        <div className="text-green-500 text-sm crt-text">pratik.fyi</div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="text-green-300 font-medium text-base crt-text">
                        Checkout my website to check my projects, blogs, and talks
                      </div>
                      <div className="text-green-500 text-sm mt-2 crt-text">
                        Portfolio • Projects • Blog • Talks
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Discord Card - Terminal styled */}
              <div className="animate-on-load animate-fade-in-up animate-delay-700">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText('@pratik.codes');
                    alert('Discord username copied to clipboard!');
                  }}
                  className="group block w-full cursor-pointer relative z-20"
                >
                  <div className="border border-green-500/30 h-[175px] p-6 hover:bg-green-900/20 transition-all duration-300 bg-[rgb(0,14,0)] cursor-pointer">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#5865F2] border border-green-500/30 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">DC</span>
                      </div>
                      <div>
                        <div className="text-green-300 font-medium text-sm crt-text">DISCORD.VOICE</div>
                        <div className="text-green-500 text-xs crt-text">@pratik.codes</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-green-400 text-sm leading-relaxed crt-text">
                        Let&apos;s chat about code, tech, or just hang out in the digital space.
                      </div>
                    </div>

                    <div className="text-green-500 text-xs opacity-60 crt-text">
                      [CLICK_TO_COPY]
                    </div>
                  </div>
                </a>
              </div>

              {/* Email Card - Terminal styled */}
              <div className="animate-on-load animate-fade-in-up animate-delay-500">
                <a
                  href={`mailto:${PortfolioData.contact.email}`}
                  className="group block w-full relative z-20"
                >
                  <div className="border border-green-500/30 h-[175px] p-6 hover:bg-green-900/20 transition-all duration-300 bg-[rgb(0,14,0)] cursor-pointer">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-orange-600 border border-green-500/30 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">@</span>
                      </div>
                      <div>
                        <div className="text-green-300 font-medium text-sm crt-text">EMAIL.MSG</div>
                        <div className="text-green-500 text-xs crt-text">Professional inquiries</div>
                      </div>
                    </div>

                    <div className="text-green-400 text-sm leading-relaxed crt-text">
                      Drop me a line for collaborations, opportunities, or just to say hi.
                    </div>
                  </div>
                </a>
              </div>

            </div>

            {/* Terminal Footer */}
            <div className="mt-8 border border-green-500/30 p-6 font-mono text-sm animate-on-load animate-fade-in-up animate-delay-600 bg-[rgb(0,14,0)]">
              <div className="text-green-400 mb-2 crt-text">$ whoami</div>
              <div className="text-green-300 mb-2 crt-text">pratik-codes: fullstack developer, blockchain enthusiast, terminal lover</div>
              <div className="text-green-500 crt-text">$ echo &quot;Thanks for visiting my links! 🚀&quot;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
