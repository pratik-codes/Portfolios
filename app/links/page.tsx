"use client";

import { PortfolioData } from "@/app/lib/data";
import Navbar from "@/app/components/navbar";

export default function LinksPage() {
  return (
    <div className="min-h-screen w-full bg-[rgb(0,14,0)] text-green-400 font-mono">

      <div className="flex h-full w-full flex-1 flex-col p-6 pt-0 xl:flex-row xl:p-16 xl:overflow-hidden mx-auto">
        <div className="mb-10 flex flex-col px-4 xl:mb-0 xl:mr-20 xl:w-4/12 xl:px-0">
          <div className="relative xl:sticky animate-on-load animate-fade-in-up animate-delay-100">
            {/* Avatar */}
            <div className="w-[160px] h-[160px] xl:w-[184px] xl:h-[184px] mx-auto xl:mx-0">
              <div className="relative w-full h-full">
                <img
                  src="https://avatars.githubusercontent.com/u/64960569?s=400&u=7895fdab7327511189a670d31846a48ea8f50f95&v=4"
                  alt="Pratik Tiwari"
                  className="mt-10 xl:mt-0 h-full w-full rounded-full object-cover transition-all duration-200 ease-in-out border border-green-400/30"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="h-full w-full rounded-full bg-green-500/20 hidden items-center justify-center border border-green-400/30">
                  <span className="text-green-300 text-4xl xl:text-6xl font-bold">PT</span>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-full" style={{ boxShadow: 'rgba(34, 197, 94, 0.2) 0px 0px 0px 1px inset' }}></div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center xl:text-left xl:ml-2 w-full xl:w-[calc(100%-8px)] max-w-[min(500px,100%-8px)] xl:max-w-[min(500px,calc(100vw_-_1000px))] mt-8">
              {/* Name */}
              <div className="text-[32px] font-bold leading-[120%] tracking-[-1px] xl:text-[44px] xl:tracking-[-2px]">
                <h1 className="text-green-300 font-[900]">Pratik Tiwari</h1>
              </div>

              {/* Bio */}
              <div className="mt-3 text-green-500 xl:mt-3 xl:text-xl">
                <p>cooking at retweet.fun ✧ senior engg ✧ building ideas ✧ tech ✧ internet money</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex-1 xl:w-8/12 xl:flex-none">
          <div className="bento-grid xl:w-10/12 mx-auto">
            {/* What am I currently cooking */}
            <div className="mb-8 animate-on-load animate-fade-in-up animate-delay-200">
              <div className="glass-card border border-green-400/20 rounded-[1.2rem] p-6">
                <h2 className="text-green-300 text-lg font-semibold crt-text mb-4">What am I currently cooking?</h2>
                
                <div>
                  <h3 className="text-green-200 font-medium text-base mb-2 crt-text">retweet.fun</h3>
                  <p className="text-green-400 text-sm leading-relaxed mb-4">
                    A social token trading platform built on Solana. Buy tokens from Twitter influencers and spend them to request specific actions like retweets, custom posts, or follows.
                  </p>
                  <a 
                    href="https://retweet.fun" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600/20 hover:bg-green-600/30 text-green-300 px-4 py-2 rounded-xl text-sm border border-green-500/40 hover:border-green-400/60 transition-all duration-300"
                  >
                    <span>Check it out</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Header */}
            <div className="mb-6 animate-on-load animate-fade-in-up animate-delay-300">
              <div className="glass-card border border-green-400/20 rounded-[1.2rem] p-4 h-[50px] flex items-center">
                <h2 className="text-green-300 text-base font-medium crt-text">Socials</h2>
              </div>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto">

              {/* Twitter Card - spans full width */}
              <div className="col-span-1 md:col-span-2 animate-on-load animate-fade-in-up animate-delay-400">
                <a
                  href="https://x.com/pratikcodes_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full"
                >
                  <div className="glass-card h-[175px] p-6 hover:scale-[1.02] transition-all duration-300 rounded-[1.2rem]">
                    <div className="flex items-start justify-between h-full">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-10 h-10 bg-[#55ACEE] rounded-xl flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-green-300 font-medium text-base mb-1 crt-text">Twitter</div>
                          <div className="text-green-500 text-sm mb-3">@pratikcodes_</div>
                          <div className="text-green-400 text-sm leading-relaxed">
                            cooking @retweetdotfun ✧ senior engg ✧ building ideas ✧ tech ✧ internet money
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#55ACEE]/20 text-[#55ACEE] px-4 py-2 rounded-[1.2rem] text-sm border border-[#55ACEE]/30 shrink-0 font-medium">
                        Follow
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* GitHub Card */}
              <div className="animate-on-load animate-fade-in-up animate-delay-500">
                <a
                  href="https://github.com/pratik-codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full"
                >
                  <div className="glass-card h-[175px] p-6 hover:scale-[1.02] transition-all duration-300 rounded-[1.2rem]">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="text-green-300 font-medium text-sm crt-text">GitHub</div>
                        <div className="text-green-500 text-xs">pratik-codes</div>
                      </div>
                    </div>

                    {/* GitHub Graph */}
                    <div className="grid grid-cols-10 gap-1 mb-2">
                      {Array.from({ length: 70 }, (_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-sm ${Math.random() > 0.8 ? 'bg-green-300' :
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

              {/* Portfolio Website Card - tall */}
              <div className="md:row-span-2 animate-on-load animate-fade-in-up animate-delay-600">
                <a
                  href="https://www.pratik.fyi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full"
                >
                  <div className="glass-card h-[390px] p-6 hover:scale-[1.02] transition-all duration-300 rounded-[1.2rem]">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center border border-green-400/30">
                        <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-green-300 font-medium text-lg crt-text">Portfolio</div>
                        <div className="text-green-500 text-sm">pratik.fyi</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-green-300 font-medium text-base mb-3">
                        Checkout my website to check my projects, blogs, and talks
                      </div>
                    </div>

                    {/* Website Preview Mockup */}
                    <div className="bg-black/30 border border-green-500/30 rounded-xl p-4 h-48 flex flex-col relative overflow-hidden backdrop-blur-sm">
                      <div className="text-green-400 text-xs mb-2 font-mono">~/pratik.fyi</div>
                      <div className="flex-1 bg-gradient-to-br from-green-900/40 to-transparent rounded-xl"></div>
                      <div className="absolute bottom-2 right-2 text-green-500/60 text-xs">✦</div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Discord Card */}
              <div className="animate-on-load animate-fade-in-up animate-delay-700">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText('@pratik.codes');
                    alert('Discord username copied to clipboard!');
                  }}
                  className="group block w-full cursor-pointer"
                >
                  <div className="glass-card h-[175px] p-6 hover:scale-[1.02] transition-all duration-300 rounded-[1.2rem]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#5865F2] rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0188 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-green-300 font-medium text-sm crt-text">Discord</div>
                        <div className="text-green-500 text-xs">@pratik.codes</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-green-400 text-sm leading-relaxed">
                        Let's chat about code, tech, or just hang out in the digital space.
                      </div>
                    </div>

                    <div className="text-green-500 text-xs opacity-60">
                      Click to copy username
                    </div>
                  </div>
                </a>
              </div>

              {/* Email Card */}
              <div className="col-span-1 md:col-span-2 animate-on-load animate-fade-in-up animate-delay-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a
                    href={`mailto:${PortfolioData.contact.email}`}
                    className="group block w-full"
                  >
                    <div className="glass-card h-[175px] p-6 hover:scale-[1.02] transition-all duration-300 rounded-[1.2rem]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-green-300 font-medium text-sm crt-text">Email</div>
                          <div className="text-green-500 text-xs">Professional inquiries</div>
                        </div>
                      </div>

                      <div className="text-green-400 text-sm leading-relaxed">
                        Drop me a line for collaborations, opportunities, or just to say hi.
                      </div>
                    </div>
                  </a>

                  {/* LinkedIn Card */}
                  {/* <a 
                                        href="https://www.linkedin.com/in/pratiktiwari12/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="group block w-full"
                                    >
                                        <div className="glass-card h-[175px] p-6 hover:scale-[1.02] transition-all duration-300">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="text-green-300 font-medium text-sm crt-text">LinkedIn</div>
                                                    <div className="text-green-500 text-xs">Professional network</div>
                                                </div>
                                            </div>
                                            
                                            <div className="text-green-400 text-sm leading-relaxed">
                                                Connect with me on the professional front and see my career journey.
                                            </div>
                                        </div>
                                    </a> */}
                </div>
              </div>

            </div>

            {/* Terminal Footer */}
            <div className="mt-8 glass-card p-6 font-mono text-sm rounded-[1.2rem] animate-on-load animate-fade-in-up animate-delay-600">
              <div className="text-green-400 mb-2">$ whoami</div>
              <div className="text-green-300 mb-2">pratik-codes: fullstack developer, blockchain enthusiast, terminal lover</div>
              <div className="text-green-500">$ echo "Thanks for visiting my links! 🚀"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
