"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";
import { PortfolioData } from "../lib/data";
import Navbar from "../components/navbar";

export default function Projects() {
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
      "Welcome to my projects page. Here you'll find a curated list of my professional and personal endeavors.";
    let i = 0;
    const typingInterval = setInterval(() => {
      setTypedDescription(description.slice(0, i));
      i++;
      if (i > description.length) clearInterval(typingInterval);
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-4 text-green-500 font-mono">
        <div className="max-w-6xl mx-auto">
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

          <div className="mb-8">
            <h1 className="text-2xl mb-2">PROFESSIONAL PROJECTS</h1>
            <div className="border border-green-500">
              <table className="w-full">
                <tbody>
                  {PortfolioData.ProfessionalExperience.map(
                    (project, index) => (
                      <tr
                        key={index}
                        className={
                          index !==
                          PortfolioData.ProfessionalExperience.length - 1
                            ? "border-b border-green-500"
                            : ""
                        }
                      >
                        <td className="p-2 border-r border-green-500 align-top">
                          <Terminal size={16} />
                        </td>
                        <td className="p-2">
                          <Link
                            href={project.link}
                            target="_blank"
                            className="block hover:bg-green-900/20"
                          >
                            <div className="font-bold">{project.title}</div>
                            <div className="text-sm text-green-400">
                              {project.description.map((line, i) => (
                                <p key={i}>{line}</p>
                              ))}
                            </div>
                            <div className="mt-1">
                              {project.stack.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs mr-2 mb-2 px-2 py-1 bg-green-900 text-green-300"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </Link>
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl mb-2">PERSONAL PROJECTS</h1>
            <div className="border border-green-500">
              <table className="w-full">
                <tbody>
                  {PortfolioData.PersonalProjects.map((project, index) => (
                    <tr
                      key={index}
                      className={
                        index !== PortfolioData.PersonalProjects.length - 1
                          ? "border-b border-green-500"
                          : ""
                      }
                    >
                      <td className="p-2 border-r border-green-500 align-top">
                        <Terminal size={16} />
                      </td>
                      <td className="p-2">
                        <Link
                          href={project.link}
                          target="_blank"
                          className="block hover:bg-green-900/20"
                        >
                          <div className="font-bold">{project.title}</div>
                          <div className="text-sm text-green-400">
                            {project.description.map((line, i) => (
                              <p key={i}>{line}</p>
                            ))}
                          </div>
                          <div className="mt-1">
                            {project.stack.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs mr-2 mb-2 px-2 py-1 bg-green-900 text-green-300"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
