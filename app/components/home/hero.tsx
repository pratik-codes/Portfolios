"use client";

import { useState, useEffect } from "react";
import { PortfolioData } from "@/app/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Component() {
  const [typedGreeting, setTypedGreeting] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setTypedGreeting(PortfolioData.greeting.slice(0, i));
      i++;
      if (i > PortfolioData.greeting.length) clearInterval(typingInterval);
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="text-green-500 font-mono flex justify-center max-w-4xl mx-auto px-4 py-12 md:px-0">
      <div className="mt-6 w-full">
        <div className="mb-4 flex items-center space-x-2 text-sm">
          <span className="text-green-400">$</span>
          <span className="animate-pulse">whoami</span>
        </div>

        <div className="flex-row gap-8 lg:items-center">
          <div className="w-48 h-48 relative flex-shrink-0 image-container">
            <Image
              // src={AsciImage}
              src="https://avatars.githubusercontent.com/u/64960569?s=400&u=7895fdab7327511189a670d31846a48ea8f50f95&v=4"
              alt="Profile avatar"
              width={100}
              height={100}
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
                <div className="flex flex-wrap gap-4 text-sm">
                  <span>
                    [x:{" "}
                    <Link
                      target="_blank"
                      href="https://x.com/pratikcodes_"
                      className="hover:text-green-400 hover:underline"
                    >
                      {PortfolioData.contact.twitter}
                    </Link>
                    ]
                  </span>
                  <span>[discord: {PortfolioData.contact.discord}]</span>
                  <span>
                    [github:{" "}
                    <Link
                      target="_blank"
                      href="https://github.com/pratik-codes/"
                      className="hover:text-green-400 hover:underline"
                    >
                      {PortfolioData.contact.github}]
                    </Link>
                  </span>
                  <span>
                    [email:{" "}
                    <Link
                      target="_blank"
                      href="mailto:example@domain.com"
                      className="hover:text-green-400 hover:underline"
                    >
                      {PortfolioData.contact.email}
                    </Link>
                    ]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 mt-8 border-t border-green-500/20 pt-6">
          <div className="mb-4 flex items-center space-x-2 text-sm">
            <span className="text-green-400">$</span>
            <span className="animate-pulse">cat about.txt</span>
          </div>
          {PortfolioData.about.map((line, index) => (
            <p key={index} className="leading-relaxed">
              {line}
            </p>
          ))}
        </div>

        <div className="mt-8 border-t border-green-500/20 pt-6">
          <p>thanks for visiting!</p>
        </div>

        <div className="mt-4 text-sm">
          <span className="text-green-400">$</span> Terminal v2.0.24
          <span className={cursorVisible ? "opacity-100" : "opacity-0"}>█</span>
        </div>
      </div>
    </div>
  );
}
