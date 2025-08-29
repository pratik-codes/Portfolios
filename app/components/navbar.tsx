"use client";

import Link from "next/link";
import * as React from "react";

export default function Navbar() {
     const [isScrolled, setIsScrolled] = React.useState(false);

     React.useEffect(() => {
          const handleScroll = () => {
               setIsScrolled(window.scrollY > 0);
          };

          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     return (
          <nav className={`md:mt-4 sticky top-0 z-50 p-4 lg:px-0 font-mono mb-2 max-w-4xl mx-auto border-green-500/20 ${isScrolled ? 'backdrop-blur-md' : ''}`}>
               <div className="mx-auto flex items-center gap-2">
                    <div className="lg:flex items-center gap-4">
                         <NavItem href="/" blank={false}>
                              home
                         </NavItem>
                         {/* <NavItem href="/skills" blank={false}>
                              skills
                         </NavItem> */}
                         <NavItem href="/projects" blank={false}>
                              projects
                         </NavItem>
                         <NavItem href="/blogs" blank={false}>
                              blogs
                         </NavItem>
                         <NavItem href="/talks" blank={false}>
                              talks
                         </NavItem>
                         <NavItem href="/links" blank={false}>
                              links
                         </NavItem>
                    </div>
               </div>
          </nav>
     );
}

function NavItem({
     children,
     href,
     blank = false,
}: {
     children: React.ReactNode;
     href: string;
     blank: boolean;
}) {
     return (
          <Link
               target={blank ? "_blank" : "_self"}
               href={href}
               className={
                    "flex items-center gap-1 text-green-400 transition-colors hover:text-green-500"
               }
          >
               <span className="opacity-50">cd</span>
               <div className="hover:underline">/{children}</div>
          </Link>
     );
}
