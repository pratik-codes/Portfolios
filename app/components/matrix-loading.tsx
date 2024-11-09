'use client'

import { useEffect, useRef, useState } from 'react'

export default function MatrixLoading() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hackingComplete, setHackingComplete] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*'
    const charSize = 14
    const columns = canvas.width / charSize
    const drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = 'rgba(0, 255, 0, 0.8)'
      ctx.font = `${charSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(char, i * charSize, drops[i] * charSize)

        if (drops[i] * charSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setHackingComplete(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative h-screen w-screen z-[100] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          {!hackingComplete ? (
            <>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-400 mb-4 tracking-wider uppercase relative z-10">
                <span className="block transform hover:scale-110 transition-transform duration-300 glitch-text">
                  Hold tight
                </span>
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white relative z-10">
                <span className="inline-block transform hover:skew-x-12 transition-transform duration-300 glitch-text-small">
                  I&apos;m hacking into the matrix...
                </span>
              </p>
            </>
          ) : (
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-green-400 tracking-wider uppercase relative z-10">
              <span className="block transform scale-110 transition-transform duration-300 glitch-text">
                WE ARE IN!
              </span>
            </h1>
          )}
        </div>
      </div>
      <style jsx>{`
        .glitch-text {
          text-shadow: 
            0.05em 0 0 rgba(255, 0, 0, 0.75),
            -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
            0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          animation: glitch 500ms infinite;
        }
        .glitch-text-small {
          text-shadow: 
            0.025em 0 0 rgba(255, 0, 0, 0.75),
            -0.0125em -0.025em 0 rgba(0, 255, 0, 0.75),
            0.0125em 0.025em 0 rgba(0, 0, 255, 0.75);
          animation: glitch 500ms infinite;
        }
        @keyframes glitch {
          0% {
            text-shadow: 
              0.05em 0 0 rgba(255, 0, 0, 0.75),
              -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
              0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          14% {
            text-shadow: 
              0.05em 0 0 rgba(255, 0, 0, 0.75),
              -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
              0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          15% {
            text-shadow: 
              -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
              0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
              -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          49% {
            text-shadow: 
              -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
              0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
              -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          50% {
            text-shadow: 
              0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
              0.05em 0 0 rgba(0, 255, 0, 0.75),
              0 -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          99% {
            text-shadow: 
              0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
              0.05em 0 0 rgba(0, 255, 0, 0.75),
              0 -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          100% {
            text-shadow: 
              -0.025em 0 0 rgba(255, 0, 0, 0.75),
              -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
              -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
        }
      `}</style>
    </div>
  )
}
