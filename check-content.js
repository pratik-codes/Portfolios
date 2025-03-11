const fs = require('fs');
const path = require('path');

console.log('Current working directory:', process.cwd());

// Check if content directory exists
const contentDir = path.join(process.cwd(), 'content');
console.log('Checking if content directory exists:', contentDir);
if (fs.existsSync(contentDir)) {
  console.log('Content directory exists!');

  // List files in content directory
  const contentFiles = fs.readdirSync(contentDir);
  console.log('Files in content directory:', contentFiles);

  // Check if blogs directory exists
  const blogsDir = path.join(contentDir, 'blogs');
  console.log('Checking if blogs directory exists:', blogsDir);
  if (fs.existsSync(blogsDir)) {
    console.log('Blogs directory exists!');

    // List files in blogs directory
    const blogFiles = fs.readdirSync(blogsDir);
    console.log('Files in blogs directory:', blogFiles);

    // Check markdown files
    const markdownFiles = blogFiles.filter(file => file.endsWith('.md'));
    console.log('Markdown files in blogs directory:', markdownFiles);

    // Print content of each markdown file (first 200 chars)
    for (const file of markdownFiles) {
      if (file.endsWith('.md')) {
        try {
          const filePath = path.join(blogsDir, file);
          const stat = fs.statSync(filePath);
          console.log(`\nFile: ${file} (${stat.size} bytes)`);

          const content = fs.readFileSync(filePath, 'utf8');
          console.log('Preview (first 200 chars):');
          console.log(content.substring(0, 200) + '...');
        } catch (error) {
          console.error(`Error reading ${file}:`, error.message);
        }
      }
    }
  } else {
    console.error('Blogs directory does not exist!');
  }
} else {
  console.error('Content directory does not exist!');
}
