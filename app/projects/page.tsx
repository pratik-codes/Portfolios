"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";
import { PortfolioData } from "../lib/data";
import Navbar from "../components/navbar";

export default function Projects() {
     const [cursorVisible, setCursorVisible] = useState(true);
     const [typedDescription, setTypedDescription] = useState("");
     const [selectedTag, setSelectedTag] = useState<string | null>(null);

     useEffect(() => {
          const interval = setInterval(() => {
               setCursorVisible((v) => !v);
          }, 500);
          return () => clearInterval(interval);
     }, []);

     useEffect(() => {
          const description =
               "Welcome to my projects page. Here you'll find a curated list of my professional and personal endeavors.";
          let i = 0;
          const typingInterval = setInterval(() => {
               setTypedDescription(description.slice(0, i));
               i++;
               if (i > description.length) clearInterval(typingInterval);
          }, 50);
          return () => clearInterval(typingInterval);
     }, []);

     const uniqueTags = Array.from(new Set([
          ...PortfolioData.ProfessionalExperience.flatMap(project => project.stack),
          ...PortfolioData.PersonalProjects.flatMap(project => project.stack)
     ]));

     const filteredProfessionalProjects = selectedTag
          ? PortfolioData.ProfessionalExperience.filter(project => project.stack.includes(selectedTag))
          : PortfolioData.ProfessionalExperience;

     const filteredPersonalProjects = selectedTag
          ? PortfolioData.PersonalProjects.filter(project => project.stack.includes(selectedTag))
          : PortfolioData.PersonalProjects;

     return (
          <>
               <Navbar />
               <div className="min-h-screen p-4 text-green-500 font-mono">
                    <div className="max-w-4xl mx-auto">
                         <div className="flex items-center space-x-2 text-sm mb-8">
                              <span className="text-green-400">$</span>
                              <span className="animate-pulse">cat projects.txt</span>
                         </div>

                         <div className="mb-8">
                              <p className="text-lg mb-4">
                                   {typedDescription}
                                   {cursorVisible ? "█" : " "}
                              </p>
                         </div>

                         <div className="mb-4 flex flex-wrap">
                              {uniqueTags.map(tag => (
                                   <button
                                        key={tag}
                                        onClick={() => setSelectedTag(tag)}
                                        className={`text-xs mr-2 mb-2 px-2 py-1 rounded flex items-center ${selectedTag === tag
                                             ? 'bg-green-700 text-green-100'
                                             : 'bg-green-900/40 text-green-300'
                                             }`}
                                   >
                                        <Terminal size={10} className="mr-1" />
                                        {tag}
                                   </button>
                              ))}
                              {selectedTag && (
                                   <button
                                        onClick={() => setSelectedTag(null)}
                                        className="text-xs mr-2 mb-2 px-2 py-1 bg-red-700 text-red-100 rounded"
                                   >
                                        Clear Filter
                                   </button>
                              )}
                         </div>

                         <div className="mb-8">
                              <h1 className="text-2xl mb-4">PROFESSIONAL PROJECTS</h1>

                              {/* Cards Grid for Professional Projects */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                   {filteredProfessionalProjects.map((project, index) => (
                                        <Link
                                             key={index}
                                             href={project.link}
                                             target="_blank"
                                             className="block h-full"
                                        >
                                             <div className="h-full border border-green-500/30 rounded-lg p-4 bg-black/20 backdrop-blur-sm hover:bg-green-900/20 transition-colors flex flex-col">
                                                  <div className="flex items-center mb-3">
                                                       <Terminal size={16} className="mr-2 text-green-400" />
                                                       <div className="text-xs text-green-400/70">
                                                            Professional
                                                       </div>
                                                  </div>

                                                  <h2 className="font-bold text-lg mb-2 text-green-300">{project.title}</h2>

                                                  <div className="text-sm text-green-400 mb-4">
                                                       {project.description.map((line, i) => (
                                                            <p
                                                                 key={i}
                                                                 className="mb-1"
                                                                 dangerouslySetInnerHTML={{ __html: line }}
                                                            />
                                                       ))}
                                                  </div>

                                                  <div className="flex flex-wrap gap-1 mb-3">
                                                       {project.stack.map((tag) => (
                                                            <span
                                                                 key={tag}
                                                                 className="text-xs px-2 py-1 bg-green-900/40 text-green-300 rounded inline-flex items-center"
                                                            >
                                                                 <Terminal size={10} className="mr-1" />
                                                                 {tag}
                                                            </span>
                                                       ))}
                                                  </div>

                                                  <div className="mt-auto pt-2 flex justify-between items-center border-t border-green-500/20 text-green-400">
                                                       <span className="text-xs">View details</span>
                                                       <span>→</span>
                                                  </div>
                                             </div>
                                        </Link>
                                   ))}
                              </div>
                         </div>

                         <div className="mb-8">
                              <h1 className="text-2xl mb-4">PERSONAL PROJECTS</h1>

                              {/* Cards Grid for Personal Projects */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                   {filteredPersonalProjects.map((project, index) => (
                                        <Link
                                             key={index}
                                             href={project.link}
                                             target="_blank"
                                             className="block h-full"
                                        >
                                             <div className="h-full border border-green-500/30 rounded-lg p-4 bg-black/20 backdrop-blur-sm hover:bg-green-900/20 transition-colors flex flex-col">
                                                  <div className="flex items-center mb-3">
                                                       <Terminal size={16} className="mr-2 text-green-400" />
                                                       <div className="text-xs text-green-400/70">
                                                            Personal
                                                       </div>
                                                  </div>

                                                  <h2 className="font-bold text-lg mb-2 text-green-300">{project.title}</h2>

                                                  <div className="text-sm text-green-400 mb-4">
                                                       {project.description.map((line, i) => (
                                                            <p
                                                                 key={i}
                                                                 className="mb-1"
                                                                 dangerouslySetInnerHTML={{ __html: line }}
                                                            />
                                                       ))}
                                                  </div>

                                                  <div className="flex flex-wrap gap-1 mb-3">
                                                       {project.stack.map((tag) => (
                                                            <span
                                                                 key={tag}
                                                                 className="text-xs px-2 py-1 bg-green-900/40 text-green-300 rounded inline-flex items-center"
                                                            >
                                                                 <Terminal size={10} className="mr-1" />
                                                                 {tag}
                                                            </span>
                                                       ))}
                                                  </div>

                                                  <div className="mt-auto pt-2 flex justify-between items-center border-t border-green-500/20 text-green-400">
                                                       <span className="text-xs">View details</span>
                                                       <span>→</span>
                                                  </div>
                                             </div>
                                        </Link>
                                   ))}
                              </div>
                         </div>

                         <div className="text-sm">
                              $ Terminal v2.0.24 {cursorVisible ? "█" : " "}
                         </div>
                    </div>
               </div>
          </>
     );
}
