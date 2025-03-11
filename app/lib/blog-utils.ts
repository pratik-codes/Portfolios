'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

export interface BlogPost {
     id: string;
     title: string;
     date: string;
     description: string;
     tags: string[];
     content: string;
     devto?: string;
     medium?: string;
}

export async function getAllBlogIds() {
     console.log("Checking blogs directory:", blogsDirectory);

     // Ensure the directory exists
     if (!fs.existsSync(blogsDirectory)) {
          console.error(`Blogs directory does not exist: ${blogsDirectory}`);
          return [];
     }

     const fileNames = fs.readdirSync(blogsDirectory);
     console.log("Files in blogs directory:", fileNames);

     // Filter out non-markdown files and README.md
     const markdownFiles = fileNames.filter(file =>
          file.endsWith('.md') && file !== 'README.md'
     );

     console.log("Markdown files found:", markdownFiles);

     return markdownFiles.map(fileName => {
          return {
               id: fileName.replace(/\.md$/, '')
          };
     });
}

export async function getBlogData(id: string): Promise<BlogPost> {
     const fullPath = path.join(blogsDirectory, `${id}.md`);
     console.log("Attempting to read blog file:", fullPath);

     if (!fs.existsSync(fullPath)) {
          console.error(`Blog file does not exist: ${fullPath}`);
          throw new Error(`Blog post not found: ${id}`);
     }

     const fileContents = fs.readFileSync(fullPath, 'utf8');

     // Use gray-matter to parse the post metadata section
     try {
          const matterResult = matter(fileContents);
          console.log(`Successfully parsed frontmatter for ${id}:`, matterResult.data);

          // Check if required fields are present
          const requiredFields = ['title', 'date', 'description'];
          const missingFields = requiredFields.filter(field => !matterResult.data[field]);

          if (missingFields.length > 0) {
               console.warn(`Blog post ${id} is missing required fields:`, missingFields);
          }

          // Combine the data with the id
          return {
               id,
               content: matterResult.content,
               title: matterResult.data.title || 'Untitled Post',
               date: matterResult.data.date || 'No date',
               description: matterResult.data.description || 'No description',
               tags: matterResult.data.tags || [],
               devto: matterResult.data.devto || '',
               medium: matterResult.data.medium || '',
          };
     } catch (error) {
          console.error(`Error parsing frontmatter for ${id}:`, error);
          throw error;
     }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
     console.log("Getting all blog posts from:", blogsDirectory);

     // Ensure the directory exists
     if (!fs.existsSync(blogsDirectory)) {
          console.error(`Blogs directory does not exist: ${blogsDirectory}`);
          return [];
     }

     const fileNames = fs.readdirSync(blogsDirectory);
     console.log("All files in blogs directory:", fileNames);

     // Filter out non-markdown files and README.md
     const markdownFiles = fileNames.filter(file =>
          file.endsWith('.md') && file !== 'README.md'
     );

     console.log("Markdown blog files found:", markdownFiles);

     if (markdownFiles.length === 0) {
          console.warn("No markdown blog files found in:", blogsDirectory);
          return [];
     }

     const allPostsData = markdownFiles.map(fileName => {
          // Remove ".md" from file name to get id
          const id = fileName.replace(/\.md$/, '');

          // Read markdown file as string
          const fullPath = path.join(blogsDirectory, fileName);

          try {
               const fileContents = fs.readFileSync(fullPath, 'utf8');

               // Use gray-matter to parse the post metadata section
               const matterResult = matter(fileContents);
               console.log(`Successfully parsed frontmatter for ${id}`);

               // Combine the data with the id
               return {
                    id,
                    content: matterResult.content,
                    title: matterResult.data.title || 'Untitled Post',
                    date: matterResult.data.date || 'No date',
                    description: matterResult.data.description || 'No description',
                    tags: matterResult.data.tags || [],
                    devto: matterResult.data.devto || '',
                    medium: matterResult.data.medium || '',
               };
          } catch (error) {
               console.error(`Error processing blog file ${fileName}:`, error);
               // Return a placeholder for error cases
               return {
                    id,
                    content: 'Error loading content',
                    title: `Error loading ${id}`,
                    date: 'Unknown',
                    description: 'This post could not be loaded due to an error',
                    tags: ['error'],
                    devto: '',
                    medium: '',
               };
          }
     });

     console.log(`Successfully processed ${allPostsData.length} blog posts`);

     // Sort posts by date
     return allPostsData.sort((a, b) => {
          if (a.date < b.date) {
               return 1;
          } else {
               return -1;
          }
     });
}
