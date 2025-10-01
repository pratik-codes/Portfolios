import React from 'react'
import { PortfolioData } from '../lib/data'
import Navbar from '../components/navbar'
import { getAllBlogPosts, BlogPost } from '../lib/blog-utils'
import { Metadata } from 'next'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { BlogListing } from './client-components/BlogListing'

export const metadata: Metadata = {
     title: 'Blog | Pratik',
     description: 'Explore my thoughts and articles on technology, projects, and lifelong learning',
};

// Define blog post interface
interface BlogData {
     title: string;
     description: string;
     url: string;
     imageSrc: string;
     hastags: string[];
     isLocal?: boolean;
     date?: string;
}

// Function to directly load blog posts as a workaround for server component issues
async function getMarkdownBlogPosts(): Promise<BlogData[]> {
     try {
          const blogsDirectory = path.join(process.cwd(), 'content/blogs')
          if (!fs.existsSync(blogsDirectory)) {
               console.error(`Blogs directory does not exist: ${blogsDirectory}`)
               return []
          }

          const fileNames = fs.readdirSync(blogsDirectory)
          const markdownFiles = fileNames.filter(file =>
               file.endsWith('.md') && file !== 'README.md'
          )

          if (markdownFiles.length === 0) {
               console.warn('No markdown blog files found')
               return []
          }

          const posts = markdownFiles.map(fileName => {
               const id = fileName.replace(/\.md$/, '')
               const fullPath = path.join(blogsDirectory, fileName)
               const fileContents = fs.readFileSync(fullPath, 'utf8')
               const matterResult = matter(fileContents)

               return {
                    title: matterResult.data.title || 'Untitled Post',
                    description: matterResult.data.description || 'No description',
                    url: `/blogs/${id}`,
                    imageSrc: '',
                    hastags: matterResult.data.tags || [],
                    isLocal: true,
                    date: matterResult.data.date || 'No date',
               }
          })

          return posts.sort((a, b) => {
               if (a.date < b.date) {
                    return 1
               } else {
                    return -1
               }
          })
     } catch (error) {
          console.error('Error loading blog posts directly:', error)
          return []
     }
}

// Debug information interface
interface DebugInfo {
     markdownCount: number;
     externalCount: number;
     error: string | null;
     markdownFiles: string[];
}

// Server component that fetches blog data
export default async function Blogs() {
     // Debug information
     const debugInfo: DebugInfo = {
          markdownCount: 0,
          externalCount: PortfolioData.Blogs.length,
          error: null,
          markdownFiles: []
     }

     // Check if content/blogs directory exists
     try {
          const contentDir = path.join(process.cwd(), 'content/blogs')
          if (fs.existsSync(contentDir)) {
               const files = fs.readdirSync(contentDir)
               debugInfo.markdownFiles = files.filter(file => file.endsWith('.md'))
          } else {
               debugInfo.error = "The content/blogs directory doesn't exist"
          }
     } catch (err) {
          const error = err as Error
          debugInfo.error = `Error checking content directory: ${error.message}`
     }

     // Try to get local markdown blogs using two methods
     let mdBlogs: BlogPost[] = []
     let combinedBlogs: BlogData[] = []

     try {
          // Method 1: Try using the blog-utils
          mdBlogs = await getAllBlogPosts()
          debugInfo.markdownCount = mdBlogs.length

          const formattedMdBlogs = mdBlogs.map(blog => ({
               title: blog.title,
               description: blog.description,
               url: `/blogs/${blog.id}`,
               imageSrc: '',
               hastags: blog.tags,
               isLocal: true,
               date: blog.date
          }))

          combinedBlogs = [...formattedMdBlogs, ...PortfolioData.Blogs]
     } catch (err) {
          const error = err as Error
          console.error('Error loading blog posts via blog-utils:', error)
          debugInfo.error = `Error loading markdown blogs via blog-utils: ${error.message}`

          try {
               // Method 2: Try direct loading as a fallback
               const directBlogs = await getMarkdownBlogPosts()
               debugInfo.markdownCount = directBlogs.length
               combinedBlogs = [...directBlogs, ...PortfolioData.Blogs]
          } catch (directErr) {
               const directError = directErr as Error
               console.error('Error directly loading blog posts:', directError)
               debugInfo.error += ` | Direct loading error: ${directError.message}`
               combinedBlogs = PortfolioData.Blogs
          }
     }

     return (
          <div>
               <Navbar />
               <div className="min-h-screen p-4 text-green-500">
                    <BlogListing initialBlogs={combinedBlogs} debugInfo={debugInfo} />
               </div>
          </div>
     )
}
