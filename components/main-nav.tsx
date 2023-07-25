"use client"

import { NavItem } from "@/types/nav"

import TabsComponent from "./ui/TabsComponent"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const tabsProps = [
    {
      id: "",
      label: "home",
    },
    {
      id: "blogs",
      label: "blogs",
    },
    {
      id: "talks",
      label: "talks",
    },
  ]

  return (
    <div className="flex gap-6 md:gap-10">
      <div className="flex flex-row space-x-0 pr-10">
        <TabsComponent tabs={tabsProps} />
      </div>
    </div>
  )
}
