import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import ColorGlow from "@/components/ui/color-glow"
import SpaceWarpCanvas from "@/components/SpaceWarpCanvas"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { FloatingNav } from "@/components/floating-nav"

import "@/styles/globals.css"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <head />
          <div className="relative flex min-h-screen flex-col ">
            <ColorGlow />
            <SpaceWarpCanvas />
            <FloatingNav addClass="fixed inset-x-0 bottom-0" />
            <div className="z-[10]">{children}</div>
          </div>
          <TailwindIndicator />
        </body>
      </html>
    </>
  )
}

export default RootLayout
