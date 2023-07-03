import { NavItem } from "@/types/nav"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <div className="text-blue-700 flex flex-row space-x-0 pr-10">
        <a
          className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle"
          href="/"
        >
          <span className="relative py-1 px-2">
            home
            <div className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"></div>
          </span>
        </a>
        <a
          className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle text-neutral-500"
          href="https://blogs.tiwaripratik.com/"
        >
          <span className="relative py-1 px-2">blog</span>
        </a>
      </div>
    </div>
  )
}
