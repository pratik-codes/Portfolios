"use client"
import Link from "next/link"
import * as React from "react"

export default function Navbar() {
     return (
          <nav className="p-4 font-mono text-lg font-bold mb-2">
               <div className="mx-auto flex items-center gap-2">
                    <div className="lg:flex items-center gap-4">
                         <NavItem href="/home" number={0} blank={false}>
                              _home
                         </NavItem>
                         <NavItem href="/blogs" number={1} blank={false}>
                            Projects
                         </NavItem>
                         <NavItem href="/blogs" number={2} blank={false}>
                              _blogs
                         </NavItem>
                         <NavItem href="talks" number={3} blank={false}>
                              _talks
                         </NavItem>
                         <NavItem href="https://tiwaripratik.com/" number={4} blank={false}>
                              _cool mode
                         </NavItem>
                    </div>
               </div>
          </nav>
     )
}

function NavItem({
     children,
     href,
     number,
     blank = false,
}: {
     children: React.ReactNode
     href: string
     number: number
     blank: boolean
}) {
     return (
          <Link
               target={blank ? "_blank" : "_self"}
               href={href}
               className={"flex items-center gap-1 text-[#0ff] transition-colors hover:text-[#b4f9f8] hover:underline"}
          >
               <span className="opacity-50">{number}.</span>
               {children}
          </Link>
     )
}
