import { PortfolioData } from "@/app/lib/data";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex justify-center items-center min-h-screen text-green-500 max-w-2xl mx-auto px-6 pb-12 font-light">
      <div className="space-y-4">
        <h1 className="text-2xl font-medium">
          {PortfolioData.greeting}
        </h1>
        
        <div className="space-y-4 leading-relaxed text-lg">
          {PortfolioData.about.map((line, index) => (
            <p key={index}>
              {line}
            </p>
          ))}
        </div>

        <div className="pt-4 text-lg">
          <p className="mb-2">You can</p>
          <ul className="space-y-1">
            <li>
              • <Link target="_blank" href="https://x.com/pratikcodes_" className="underline decoration-green-500/50 decoration-1 underline-offset-[2.5px] hover:decoration-green-300 transition-colors hover:text-green-300">Follow me on X</Link>
            </li>
            <li>
              • <Link target="_blank" href="https://github.com/pratik-codes/" className="underline decoration-green-500/50 decoration-1 underline-offset-[2.5px] hover:decoration-green-300 transition-colors hover:text-green-300">Follow me on GitHub</Link>
            </li>
            <li>
              • <Link href="/projects" className="underline decoration-green-500/50 decoration-1 underline-offset-[2.5px] hover:decoration-green-300 transition-colors hover:text-green-300">View my projects</Link>
            </li>
            <li>
              • <Link href="/blogs" className="underline decoration-green-500/50 decoration-1 underline-offset-[2.5px] hover:decoration-green-300 transition-colors hover:text-green-300">Read my writing</Link>
            </li>
            <li>
              • <Link href="/talks" className="underline decoration-green-500/50 decoration-1 underline-offset-[2.5px] hover:decoration-green-300 transition-colors hover:text-green-300">Watch my talks</Link>
            </li>
            <li>
              • <Link target="_blank" href={`mailto:${PortfolioData.contact.email}`} className="underline decoration-green-500/50 decoration-1 underline-offset-[2.5px] hover:decoration-green-300 transition-colors hover:text-green-300">Reach out via email</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
