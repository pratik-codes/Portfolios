'use client';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';

interface MarkdownContentProps {
     content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
     return (
          <ReactMarkdown
               rehypePlugins={[rehypeRaw, rehypeHighlight]}
               components={{
                    h1: ({ node, ...props }) => <h1 className="text-2xl font-bold mt-8 mb-4 text-green-300" {...props} />,
                    h2: ({ node, ...props }) => <h2 className="text-xl font-bold mt-6 mb-3 text-green-300" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="text-lg font-bold mt-5 mb-2 text-green-300" {...props} />,
                    p: ({ node, ...props }) => <p className="my-4 leading-relaxed" {...props} />,
                    a: ({ node, ...props }) => <a className="text-green-400 hover:underline" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-disc pl-6 my-4" {...props} />,
                    ol: ({ node, ...props }) => <ol className="list-decimal pl-6 my-4" {...props} />,
                    li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                    blockquote: ({ node, ...props }) => (
                         <blockquote className="border-l-4 border-green-500/50 pl-4 italic my-4" {...props} />
                    ),
                    code: ({ node, className, children, ...props }: any) => {
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
                    img: ({ node, ...props }) => (
                         <div className="my-6">
                              <div className="image-container">
                                   <img className="grayscale-image rounded-md max-w-full h-auto" {...props} alt={props.alt || ''} />
                                   <div className="green-overlay rounded-md"></div>
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
