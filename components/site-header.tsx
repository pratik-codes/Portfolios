import Link from "next/link"

import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { siteConfig } from "@/config/site"

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 bottom-0 z-[100] w-11/12 md:w-3/12 mx-auto mb-4 bg-black border border-emerald-300  rounded-full">
      <div className="mx-2 my-1 flex items-center sm:justify-between">
        <MainNav />
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center">
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
