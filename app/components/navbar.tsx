"use client";
import Link from "next/link";
import * as React from "react";

export default function Navbar() {
  return (
    <nav className="p-4 lg:px-0 font-mono mb-2 max-w-6xl mx-auto">
      <div className="mx-auto flex items-center gap-2">
        <div className="lg:flex items-center gap-4">
          <NavItem href="/home" blank={false}>
            home
          </NavItem>
          <NavItem href="/skills" blank={false}>
            skills
          </NavItem>
          <NavItem href="/projects" blank={false}>
            projects
          </NavItem>
          <NavItem href="/blogs" blank={false}>
            blogs
          </NavItem>
          <NavItem href="talks" blank={false}>
            talks
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
