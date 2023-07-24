import { NavItem } from "@/types/nav";
import Link from "next/link";

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <div className="flex flex-row space-x-0 pr-10">
        <Link
          className="px-3 py-1 rounded-xl hover:text-gray-600 hover:bg-transparent-white transition-all dark:hover:text-neutral-200 flex align-middle"
          href="/"
        >
          home
        </Link>
        <Link
          className="px-3 py-1 rounded-xl hover:text-gray-600 hover:bg-transparent-white transition-all dark:hover:text-neutral-200 flex align-middle"
          href="/blogs"
        >
          blogs
        </Link>
        <Link
          className="px-3 py-1 rounded-xl hover:text-gray-600 hover:bg-transparent-white transition-all dark:hover:text-neutral-200 flex align-middle"
          href="/talks"
        >
         talks
        </Link>
  </div>
    </div>
  )
}
