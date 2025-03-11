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
               if (i > description.length) clearInterval(typingInterval);
          }, 50);
          return () => clearInterval(typingInterval);
     }, []);

     if (!skills || skills.length === 0) {
          return null;
     }

     return (
          <>
               <Navbar />
               <div className="min-h-screen p-4 text-green-500 font-mono">
                    <div className="max-w-6xl mx-auto">
                         <div className="flex items-center space-x-2 text-sm mb-8">
                              <span className="text-green-400">$</span>
                              <span className="animate-pulse">cat skills.txt</span>
                         </div>

                         <div className="mb-8">
                              <p className="text-lg mb-4 h-[56px] md:h-[28px]">
                                   {typedDescription}
                                   <span className="inline-block w-[8px]">{cursorVisible ? "█" : " "}</span>
                              </p>
                         </div>

                         <div className="mb-8">
                              <h1 className="text-2xl mb-4">SKILLS</h1>

                              {/* Skills Cards Grid */}
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                   {skills.map((skillCategory, index) => (
                                        <div
                                             key={index}
                                             className="h-full border border-green-500/30 rounded-lg p-4 bg-black/20 backdrop-blur-sm hover:bg-green-900/20 transition-colors flex flex-col"
                                        >
                                             <div className="flex items-center mb-3">
                                                  <Terminal size={16} className="mr-2 text-green-400" />
                                                  <div className="font-bold text-green-300">
                                                       {skillCategory.category}
                                                  </div>
                                             </div>

                                             <div className="flex flex-wrap gap-1 mt-2">
                                                  {skillCategory.items.map((skill) => (
                                                       <span
                                                            key={skill}
                                                            className="text-xs px-2 py-1 bg-green-900/40 text-green-300 rounded inline-flex items-center"
                                                       >
                                                            <Terminal size={10} className="mr-1" />
                                                            {skill}
                                                       </span>
                                                  ))}
                                             </div>
                                        </div>
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
