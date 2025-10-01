import Link from "next/link";
import { PortfolioData } from "../lib/data";
import Navbar from "../components/navbar";

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen text-green-500 font-light">
        <div className="max-w-2xl mx-auto px-6 pb-12 pt-28">
          <div className="space-y-12">
            <div>
              <h1 className="text-2xl font-medium mb-2">Projects</h1>
              <p className="mb-6">Here&apos;s a list of my projects:</p>
            </div>

            <div className="space-y-12">
              <div>
                <div>
                <h2 className="text-xl font-medium mb-6">Professional</h2>
                </div>
                <div className="space-y-6">
                  {PortfolioData.ProfessionalExperience.map((project, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="font-medium text-lg">
                         <Link href={project.link} target="_blank" className="underline decoration-green-500/50 decoration-1 underline-offset-[2.5px] hover:decoration-green-300 transition-colors hover:text-green-300">
                          {project.title}
                        </Link>
                      </h3>
                      <div className="leading-relaxed">
                        {project.description.map((line, i) => (
                          <p key={i} dangerouslySetInnerHTML={{ __html: line }} className="mb-2" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-medium mb-6">Personal</h2>
                <div className="space-y-6">
                  {PortfolioData.PersonalProjects.map((project, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="font-medium text-lg">
                        <Link href={project.link} target="_blank" className="underline decoration-green-500/50 decoration-1 underline-offset-[2.5px] hover:decoration-green-300 transition-colors hover:text-green-300">
                          {project.title}
                        </Link>
                      </h3>
                      <div className="leading-relaxed">
                        {project.description.map((line, i) => (
                          <p key={i} dangerouslySetInnerHTML={{ __html: line }} className="mb-2" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
