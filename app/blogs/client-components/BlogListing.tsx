import Link from 'next/link'

// Blog interface
interface BlogData {
  title: string;
  description: string;
  url: string;
  imageSrc: string;
  hastags: string[];
  isLocal?: boolean;
  date?: string;
}

interface BlogListingProps {
  initialBlogs: BlogData[]
  debugInfo: {
    markdownCount: number
    externalCount: number
    error: string | null
    markdownFiles: string[]
  }
}

export function BlogListing({ initialBlogs }: BlogListingProps) {
  return (
    <div className="max-w-2xl mx-auto px-6 pb-12 pt-28 font-light">
      <div className="space-y-12">
        <div>
          <h1 className="text-2xl font-medium mb-2">Writing</h1>
          <p className="mb-6">Here&apos;s a list of my writing:</p>
        </div>

        <div>
          {/* <p className="mb-6">Here&apos;s a list of my writing:</p> */}
          <ul className="space-y-2">
            {initialBlogs.map((blog, index) => (
              <li key={index}>
                • <Link
                  href={blog.url}
                  target={blog.isLocal ? "_self" : "_blank"}
                  className="underline decoration-green-500/50 decoration-1 underline-offset-[2.5px] hover:decoration-green-300 transition-colors hover:text-green-300"
                >
                  {blog.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
