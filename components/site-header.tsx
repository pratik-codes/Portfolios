import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"

import ColorGlow from "./ui/color-glow"

export function SiteHeader() {
  return (
    <header className="sticky top-0 w-full bg-background">
      <div className="container flex h-16 items-center sm:justify-between ">
        <ColorGlow />
        <MainNav />
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center ">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={
                  "p-2 rounded-xl hover:bg-transparent-white transition-all dark:hover:text-neutral-200 flex align-middle"
                }
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={
                  "p-2 rounded-xl hover:bg-transparent-white transition-all dark:hover:text-neutral-200 flex align-middle"
                }
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={
                  "p-2 rounded-xl hover:bg-transparent-white transition-all dark:hover:text-neutral-200 flex align-middle"
                }
              >
                <Icons.linkedin className="h-5 w-5" />
                <span className="sr-only">Linkedin</span>
              </div>
            </Link>

            {/* <ThemeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  )
}
