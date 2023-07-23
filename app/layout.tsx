import "@/styles/globals.css";
import { Metadata } from "next";

import SpaceWarpCanvas from "@/components/SpaceWarpCanvas";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

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
export const GlowClass =
  "before:absolute before:right-0 before:top-0 before:left-0 before:h-full before:w-full before:animate-image-glow before:bg-hero-glow before:opacity-0 after:opacity-90 before:[filter:blur(120px)]";


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
          {/* <div className={'gradient-1'} ></div> */}
        <SpaceWarpCanvas />
        <head />
         <div className="relative flex min-h-screen flex-col ">
            <SiteHeader />
            <div className="flex-1">{children}</div>
          </div>
          <TailwindIndicator />
        </body>
      </html>
    </>
  )
}


export default RootLayout;
