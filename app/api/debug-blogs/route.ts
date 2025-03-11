import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
     const debug = {
          cwd: process.cwd(),
          contentDirExists: false,
          blogsDir: '',
          fileList: [] as string[],
          error: null as string | null,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          mdFileContents: {} as Record<string, any>,
     };

     try {
          // Check if content directory exists
          const contentDir = path.join(process.cwd(), 'content');
          debug.contentDirExists = fs.existsSync(contentDir);

          // Check blogs directory
          const blogsDir = path.join(contentDir, 'blogs');
          debug.blogsDir = blogsDir;

          if (fs.existsSync(blogsDir)) {
               // List all files
               debug.fileList = fs.readdirSync(blogsDir);

               // Read content of each markdown file
               for (const file of debug.fileList) {
                    if (file.endsWith('.md') && file !== 'README.md') {
                         try {
                              const filePath = path.join(blogsDir, file);
                              const contents = fs.readFileSync(filePath, 'utf8');
                              debug.mdFileContents[file] = {
                                   size: contents.length,
                                   // Get first 500 characters to see if content is valid
                                   preview: contents.substring(0, 500),
                              };
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                         } catch (readError: any) {
                              debug.mdFileContents[file] = { error: readError.message };
                         }
                    }
               }
          } else {
               debug.error = "Blogs directory doesn't exist";
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
     } catch (error: any) {
          debug.error = error.message;
     }

     return NextResponse.json(debug);
}
