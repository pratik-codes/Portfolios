"use client";

import { Terminal } from "lucide-react";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";

type Skill = {
     category: string;
     items: string[];
};

const skills: Skill[] = [
     {
          category: "Programming Languages",
          items: ["Go", "Rust", "TypeScript", "JavaScript", "Python"],
     },
     {
          category: "Frontend",
          items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
     },
     {
          category: "Backend",
          items: ["Gin", "Node.js", "Django", "FastAPI", "Langchain", "ai-agents"],
     },
     {
          category: "Databases",
          items: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
     },
     {
          category: "DevOps & Tools",
          items: ["Git", "Docker", "Kubernetes", "AWS", "CI/CD", "Webpack"],
     },
];

export default function Skills() {
     const [cursorVisible, setCursorVisible] = useState(true);
     const [typedDescription, setTypedDescription] = useState("");
     const [isLoaded, setIsLoaded] = useState(false);

     useEffect(() => {
          const interval = setInterval(() => {
               setCursorVisible((v) => !v);
          }, 500);
          return () => clearInterval(interval);
     }, []);

     useEffect(() => {
          const description =
               "Welcome to my portfolio. Here's a showcase of my skills and expertise.";
          let i = 0;
          const typingInterval = setInterval(() => {
               setTypedDescription(description.slice(0, i));
               i++;
               if (i > description.length) {
                    clearInterval(typingInterval);
                    setTimeout(() => setIsLoaded(true), 500);
               }
          }, 50);
          return () => clearInterval(typingInterval);
     }, []);

     if (!skills || skills.length === 0) {
          return null;
     }

     return (
          <>
               <Navbar />
               <div className="mb-8 text-glow max-w-6xl mx-auto text-green-400 mt-6 p-4 md:p-0">
                    <div className="max-w-6xl mx-auto">
                         <div className="flex items-center space-x-2 text-sm mb-8 fade-in">
                              <span className="text-green-400">$</span>
                              <span className="terminal-loading">cat skills.txt</span>
                         </div>

                         <div className="mb-8 fade-in" style={{ animationDelay: "0.2s" }}>
                              <p className="text-lg mb-4">
                                   {typedDescription}
                                   {cursorVisible ? "█" : " "}
                              </p>
                         </div>
                    </div>
                    <div className={`mb-8 text-glow ${isLoaded ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.4s" }}>
                         <h1 className="text-2xl mb-4 text-green-400">SKILLS</h1>
                         <div className="border-[0.5px] border-green-500 scan-lines vignette rounded-lg scan-line-effect">
                              <table className="w-full">
                                   <tbody className="stagger-fade-in">
                                        {skills.map((skillCategory, index) => (
                                             <tr
                                                  key={index}
                                                  className={`terminal-card ${index !== skills.length - 1
                                                            ? "border-b-[0.5px] border-green-500"
                                                            : ""
                                                       }`}
                                             >
                                                  <td className="p-2 border-r-[0.5px] border-green-500 align-top w-6">
                                                       <Terminal size={16} className="text-green-400" />
                                                  </td>
                                                  <td className="p-2">
                                                       <div className="block hover:bg-green-900/20 rounded-md glitch-hover">
                                                            <div className="font-bold text-green-500">
                                                                 {skillCategory.category}
                                                            </div>
                                                            <div className="mt-2 flex flex-wrap">
                                                                 {skillCategory.items.map((skill) => (
                                                                      <span
                                                                           key={skill}
                                                                           className="text-xs mr-2 mb-2 px-2 py-1 bg-green-900 text-green-300 rounded-md skill-tag"
                                                                      >
                                                                           {skill}
                                                                      </span>
                                                                 ))}
                                                            </div>
                                                       </div>
                                                  </td>
                                             </tr>
                                        ))}
                                   </tbody>
                              </table>
                         </div>
                    </div>
               </div>
          </>
     );
}
