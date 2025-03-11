// This needs to be run with node --experimental-modules test-blog-utils.mjs
// or we can convert the ES modules to CommonJS for this test

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

console.log('Current working directory:', process.cwd());
console.log('Blogs directory:', blogsDirectory);

// Check if blogs directory exists
if (!fs.existsSync(blogsDirectory)) {
  console.error(`Blogs directory does not exist: ${blogsDirectory}`);
  process.exit(1);
}

// Equivalent to getAllBlogIds
function getAllBlogIds() {
  const fileNames = fs.readdirSync(blogsDirectory);
  console.log('Files in blogs directory:', fileNames);

  // Filter out non-markdown files and README.md
  const markdownFiles = fileNames.filter(file =>
    file.endsWith('.md') && file !== 'README.md'
  );

  console.log('Markdown files found:', markdownFiles);

  return markdownFiles.map(fileName => {
    return {
      id: fileName.replace(/\.md$/, '')
    };
  });
}

// Equivalent to getBlogData
function getBlogData(id) {
  const fullPath = path.join(blogsDirectory, `${id}.md`);
  console.log(`Reading blog file: ${id} at ${fullPath}`);

  if (!fs.existsSync(fullPath)) {
    console.error(`Blog file does not exist: ${fullPath}`);
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  try {
    const matterResult = matter(fileContents);
    console.log(`Frontmatter for ${id}:`, matterResult.data);

    // Combine the data with the id
    return {
      id,
      content: matterResult.content.slice(0, 100) + '...', // Just preview
      title: matterResult.data.title || 'Untitled Post',
      date: matterResult.data.date || 'No date',
      description: matterResult.data.description || 'No description',
      tags: matterResult.data.tags || [],
    };
  } catch (error) {
    console.error(`Error parsing frontmatter for ${id}:`, error);
    return null;
  }
}

// Equivalent to getAllBlogPosts
function getAllBlogPosts() {
  const ids = getAllBlogIds();
  console.log(`Found ${ids.length} blog IDs`);

  const posts = ids.map(({ id }) => getBlogData(id))
    .filter(post => post !== null);

  console.log(`Successfully loaded ${posts.length} posts`);

  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Run the test
console.log('\n--- Testing getAllBlogIds ---');
const ids = getAllBlogIds();
console.log(`Found ${ids.length} blog IDs:`, ids);

console.log('\n--- Testing getBlogData for each ID ---');
ids.forEach(({ id }) => {
  console.log(`\nTesting getBlogData for: ${id}`);
  const data = getBlogData(id);
  if (data) {
    console.log(`Success! Title: "${data.title}", Date: ${data.date}, Tags: [${data.tags.join(', ')}]`);
  } else {
    console.error(`Failed to get data for ${id}`);
  }
});

console.log('\n--- Testing getAllBlogPosts ---');
const allPosts = getAllBlogPosts();
console.log(`Got ${allPosts.length} blog posts, sorted by date:`);
allPosts.forEach((post, i) => {
  console.log(`${i+1}. ${post.title} (${post.date})`);
});
