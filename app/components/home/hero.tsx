import { PortfolioData } from "@/app/lib/data"
import Link from "next/link"

export default function Home() {

  return (
    <div className="w-full text-[#00ff00] font-mono relative overflow-hidden p-2 mb-10">
      {/* Header */}
      <header className="mt-[4rem]">
        <h1 className="text-4xl lg:text-4xl font-bold crt-text">PRATIK TIWARI</h1>
        <p className="crt-text text-xl">Fullstack Software Engineer</p>
        <div className="mb-4 flex space-x-2 text-[0.1rem]">
          {PortfolioData.links.map((social, index) => (
            <Link target="_blank" href={social.url} key={index} className="text-[1.02rem] crt-text text-[#0ff] underline text-lg hover:text-[#b4f9f8]">{social.name}<br /></Link>
          ))
          }
        </div>
        <div className="crt-text text-lg">
          {PortfolioData.about.map((line, index) => (
            <p key={index} className="mb-1">{line}<br /></p>
          ))}
        </div>
     </header>

      {/* Professional */}
      <p className="crt-text text-3xl font-bold mt-[4rem]">PROFESSIONAL PROJECTS</p>
      <hr className="border border-[#00ff00] mb-4" />
      <div className="border border-[#00ff00]">
        {PortfolioData.ProfessionalExperience.map((project, index: number) => (
          <div key={index} className="w-full hover:bg-zinc-900 p-0 border border-[#008800] p-2">
            <Link target="_blank" href={project.link} key={index}>
              <div className="crt-text font-bold">{project.title}</div>
              <div className="crt-text text-[#008800]">
                {project.description.map((line, index) => (
                  <p key={index} className="">{line}<br /></p>
                ))}
              </div>
              <div className="crt-text text-[#00ff00] flex gap-2">
                {project.stack.map((stack, index) => (
                  <span key={index} className="">#{stack}<br /></span>
                ))}
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Personal */}
      <p className="crt-text text-3xl font-bold mt-[4rem]">PERSONAL PROJECTS</p>
      <hr className="border border-[#00ff00] mb-4" />
      <div className="border border-[#00ff00]">
        {PortfolioData.PersonalProjects.map((project, index: number) => (
          <div key={index} className="w-full hover:bg-zinc-900 p-0 border border-[#00ff00] p-2">
            <Link target="_blank" href={project.link} key={index}>
              <div className="crt-text font-bold">{project.title}</div>
              <div className="crt-text text-[#008800]">
                {project.description.map((line, index) => (
                  <p key={index} className="">{line}<br /></p>
                ))}
              </div>
              <div className="crt-text text-[#00ff00] flex gap-2">
                {project.stack.map((stack, index) => (
                  <span key={index} className="">#{stack}<br /></span>
                ))}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
