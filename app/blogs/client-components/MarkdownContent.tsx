'use client';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from 'next/image';

interface MarkdownContentProps {
     content: string;
}

// Types for the component props
interface ComponentProps {
     [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
     node?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
     children?: React.ReactNode;
     className?: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
     return (
          <ReactMarkdown
               rehypePlugins={[rehypeRaw, rehypeHighlight]}
               components={{
                    h1: (props: ComponentProps) => <h1 className="text-2xl font-bold mt-8 mb-4 text-green-300" {...props} />,
                    h2: (props: ComponentProps) => <h2 className="text-xl font-bold mt-6 mb-3 text-green-300" {...props} />,
                    h3: (props: ComponentProps) => <h3 className="text-lg font-bold mt-5 mb-2 text-green-300" {...props} />,
                    p: (props: ComponentProps) => <p className="my-4 leading-relaxed" {...props} />,
                    a: (props: ComponentProps) => <a className="text-green-400 hover:underline" {...props} />,
                    ul: (props: ComponentProps) => <ul className="list-disc pl-6 my-4" {...props} />,
                    ol: (props: ComponentProps) => <ol className="list-decimal pl-6 my-4" {...props} />,
                    li: (props: ComponentProps) => <li className="mb-1" {...props} />,
                    blockquote: (props: ComponentProps) => (
                         <blockquote className="border-l-4 border-green-500/50 pl-4 italic my-4" {...props} />
                    ),
                    code: ({ className, children, ...props }: ComponentProps) => {
                         const isInline = !className;
                         if (isInline) {
                              return (
                                   <code className="bg-green-900/20 text-green-300 px-1 py-0.5 rounded" {...props}>
                                        {children}
                                   </code>
                              );
                         }
                         return (
                              <div className="bg-black/40 rounded-md p-4 my-4 overflow-x-auto border border-green-500/20">
                                   <code className="text-green-300" {...props}>
                                        {children}
                                   </code>
                              </div>
                         );
                    },
                    // For img tags, we'll use a div with styling since Next.js Image component
                    // requires width/height which we don't have from markdown
                    img: (props: ComponentProps) => (
                         <div className="my-6">
                              <div className="image-container">
                                   <div className="relative w-full h-auto min-h-[200px]">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                             className="grayscale-image rounded-md max-w-full h-auto"
                                             src={props.src || ''}
                                             alt={props.alt || ''}
                                        />
                                        <div className="green-overlay rounded-md"></div>
                                   </div>
                              </div>
                              {props.alt && <p className="text-center text-sm mt-2 text-green-400">{props.alt}</p>}
                         </div>
                    ),
               }}
          >
               {content}
          </ReactMarkdown>
     );
}
