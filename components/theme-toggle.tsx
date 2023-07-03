"use client"

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  console.log({ theme })

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <Icons.moon /> : <Icons.sun />}
      {/* <Icons.sun /> */}
      {/* <Icons.moon /> */}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
