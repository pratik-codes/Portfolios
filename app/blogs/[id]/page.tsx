/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { getBlogData, getAllBlogIds } from '../../lib/blog-utils';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag, Book, ExternalLink } from 'lucide-react';
import { MarkdownContent } from '../client-components/MarkdownContent';

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
        <div className="min-h-screen p-4 text-green-500 font-mono">
          <div className="max-w-6xl mx-auto mt-8">
            {/* Back button and external links */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-3">
              <Link
                href="/blogs"
                className="flex items-center bg-green-900/30 hover:bg-green-800/50 text-green-400 hover:text-green-300 px-4 py-2 rounded-md transition-colors border border-green-500/30"
              >
                <ArrowLeft className="mr-2" size={16} />
                Back to blogs
              </Link>

              {hasExternalLinks && (
                <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                  {hasDevToLink && (
                    <a
                      href={blogData.devto}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-green-900/30 hover:bg-green-800/50 text-green-400 hover:text-green-300 px-3 py-2 rounded-md transition-colors border border-green-500/30"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Read on Dev.to
                    </a>
                  )}
                  {hasMediumLink && (
                    <a
                      href={blogData.medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-green-900/30 hover:bg-green-800/50 text-green-400 hover:text-green-300 px-3 py-2 rounded-md transition-colors border border-green-500/30"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Read on Medium
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center space-x-2 text-sm mb-4">
              <span className="text-green-400">$</span>
              <span className="animate-pulse">cat blogs/{props.params.id}.md</span>
            </div>

            {/* Blog Header Card */}
            <div className="border border-green-500/30 rounded-lg p-6 mb-6 bg-black/20 backdrop-blur-sm">
              <h1 className="text-3xl font-bold mb-4 text-green-300">{blogData.title}</h1>

              <p className="text-green-400 mb-4 italic">{blogData.description}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-green-400 mb-2">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <span>{blogData.date}</span>
                </div>

                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  <span>{readingTime} min read</span>
                </div>

                <div className="flex items-center">
                  <Book size={14} className="mr-1" />
                  <span>Blog</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {blogData.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="flex items-center bg-green-900/40 px-2 py-1 rounded text-xs"
                  >
                    <Tag size={12} className="mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Blog Content Card */}
            <div className="border border-green-500/30 rounded-lg p-6 bg-black/20 backdrop-blur-sm">
              <div className="prose prose-invert prose-green max-w-none">
                <MarkdownContent content={blogData.content} />
              </div>

              <div className="mt-8 pt-4 border-t border-green-500/20 flex justify-center">
                <Link
                  href="/blogs"
                  className="flex items-center bg-green-900/30 hover:bg-green-800/50 text-green-400 hover:text-green-300 px-4 py-2 rounded-md transition-colors border border-green-500/30"
                >
                  <ArrowLeft className="mr-2" size={16} />
                  Back to all blogs
                </Link>
              </div>
            </div>

            <div className="mt-8 text-sm">
              $ Terminal v2.0.24 <span className="animate-pulse">█</span>
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
