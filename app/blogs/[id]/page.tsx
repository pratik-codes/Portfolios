/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { getBlogData, getAllBlogIds } from '../../lib/blog-utils';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MarkdownContent } from '../client-components/MarkdownContent';
import { AudioPlayer } from '../client-components/AudioPlayer';

// Define the type for params
interface BlogPageParams {
     id: string;
}

// Generate static paths for all blog posts
export async function generateStaticParams(): Promise<BlogPageParams[]> {
     const paths = await getAllBlogIds();
     return paths;
}

// Generate metadata for the page
export async function generateMetadata({
     params
}: {
     params: any
}): Promise<Metadata> {
     try {
          const blogData = await getBlogData(params.id);

          return {
               title: `${blogData.title} | Pratik's Blog`,
               description: blogData.description,
          };
     } catch (error) {
          return {
               title: 'Blog Not Found',
               description: 'The requested blog post could not be found',
          };
     }
}

// Estimate reading time for the blog post
function estimateReadingTime(content: string): number {
     const wordsPerMinute = 200;
     const words = content.trim().split(/\s+/).length;
     return Math.ceil(words / wordsPerMinute);
}

// Using a simpler approach with 'any' type
export default function BlogPost(props: any) {
     // Use async/await inside the function body instead of making the function async
     const getBlogContent = async () => {
          try {
               const blogData = await getBlogData(props.params.id);
               const readingTime = estimateReadingTime(blogData.content);

               // Determine if external links should be shown
               const hasDevToLink = blogData.devto && blogData.devto.trim() !== '';
               const hasMediumLink = blogData.medium && blogData.medium.trim() !== '';
               const hasExternalLinks = hasDevToLink || hasMediumLink;

               // Return the JSX from this inner async function
               return (
                    <div className="min-h-screen text-green-500 font-light">
                         <div className="max-w-2xl mx-auto px-6 pt-28 pb-12">
                              <div className="space-y-12">
                                   <div className="space-y-6">
                                        <Link
                                             href="/blogs"
                                             className="underline decoration-green-500/50 decoration-1 underline-offset-[2.5px] hover:decoration-green-300 transition-colors hover:text-green-300"
                                        >
                                             ← Back to writing
                                        </Link>

                                        <h1 className="text-2xl font-medium">{blogData.title}</h1>

                                        <div className="text-sm opacity-80">
                                             {blogData.date} · {readingTime} min read
                                        </div>

                                        {hasExternalLinks && (
                                             <div className="flex flex-wrap gap-4 text-sm">
                                                  {hasDevToLink && (
                                                       <a
                                                            href={blogData.devto}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="underline decoration-green-500/50 decoration-1 underline-offset-[2.5px] hover:decoration-green-300 transition-colors hover:text-green-300"
                                                       >
                                                            Read on Dev.to
                                                       </a>
                                                  )}
                                                  {hasMediumLink && (
                                                       <a
                                                            href={blogData.medium}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="underline decoration-green-500/50 decoration-1 underline-offset-[2.5px] hover:decoration-green-300 transition-colors hover:text-green-300"
                                                       >
                                                            Read on Medium
                                                       </a>
                                                  )}
                                             </div>
                                        )}
                                   </div>

                                   {/* Audio Player */}
                                   <div className="space-y-4">
                                        <h3 className="text-lg font-medium">Listen to this article</h3>
                                        <p className="text-sm opacity-80">You can customize the voice and reading speed with the settings button.</p>
                                        <AudioPlayer content={blogData.content} />
                                   </div>

                                   <div className="prose prose-invert prose-green max-w-none leading-relaxed">
                                        <MarkdownContent content={blogData.content} />
                                   </div>
                              </div>
                         </div>
                    </div>
               );
          } catch (error) {
               notFound();
          }
     };

     // Use the React.use() API to unwrap the Promise
     return React.use(getBlogContent());
}
