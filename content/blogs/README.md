# Blog Posts

This directory contains markdown files for blog posts that will be displayed on the website.

## How to Add a New Blog Post

1. Create a new markdown file in this directory with a descriptive filename (e.g., `my-new-blog-post.md`).
2. Add frontmatter at the top of the file with the following information:

```markdown
---
title: "Your Blog Post Title"
date: "YYYY-MM-DD"
description: "A brief description of your blog post"
tags: ["tag1", "tag2", "tag3"]
---
```

3. Write your blog post content in markdown format below the frontmatter.
4. The blog post will automatically appear on the blogs page.

## Markdown Features

You can use all standard markdown features in your blog posts:

- **Bold text** with `**double asterisks**`
- *Italic text* with `*single asterisks*`
- Lists (ordered and unordered)
- [Links](https://example.com) with `[text](url)`
- Images with `![alt text](image-url)`
- Code blocks with triple backticks
- And more!

## Code Blocks

You can include syntax-highlighted code blocks by specifying the language:

```javascript
// This is a JavaScript code block
function hello() {
  console.log("Hello, world!");
}
```

```css
/* This is a CSS code block */
.container {
  display: flex;
  justify-content: center;
}
```

## Images

Images will be automatically styled to match the CRT theme of the website:

![Example Image](https://via.placeholder.com/800x400)
