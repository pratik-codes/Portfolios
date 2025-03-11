import Link from 'next/link';
import Navbar from '../../components/navbar';
import { ArrowLeft } from 'lucide-react';

export default function BlogNotFound() {
     return (
          <div className="min-h-screen p-4 text-green-500 font-mono">
               <Navbar />
               <div className="max-w-4xl mx-auto mt-8">
                    <div className="flex items-center space-x-2 text-sm mb-8">
                         <span className="text-green-400">$</span>
                         <span className="animate-pulse">cat error.log</span>
                    </div>

                    <div className="border border-red-500/30 rounded-lg p-6 bg-black/20 backdrop-blur-sm">
                         <h1 className="text-2xl font-bold mb-4 text-red-400">Error 404: Blog Post Not Found</h1>
                         <p className="mb-4">The blog post you are looking for does not exist or has been moved.</p>

                         <div className="bg-black/40 rounded-md p-4 my-4 font-mono text-sm border border-red-500/20">
                              <div className="text-red-400">
                                   <span className="text-green-400">$</span> cat /blogs/not-found.md<br />
                                   <span className="text-red-400">cat: /blogs/not-found.md: No such file or directory</span>
                              </div>
                         </div>

                         <Link href="/blogs" className="mt-6 inline-flex items-center text-green-400 hover:text-green-300">
                              <ArrowLeft className="mr-2" size={16} />
                              Return to all blogs
                         </Link>
                    </div>

                    <div className="mt-8 text-sm">
                         $ Terminal v2.0.24 <span className="animate-pulse">█</span>
                    </div>
               </div>
          </div>
     );
}
