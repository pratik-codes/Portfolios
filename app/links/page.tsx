import { PortfolioData } from "@/app/lib/data";
import Navbar from "../components/navbar";

export default function LinksPage() {
  return (
    <div className="min-h-screen w-full bg-[rgb(0,14,0)] text-green-500 font-light">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 pb-12 pt-28">
        <div className="space-y-12">
          <div>
            <h1 className="text-2xl font-medium mb-2">Links</h1>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-medium">
                1. <a href="https://retweet.fun" target="_blank" rel="noopener noreferrer" className="underline decoration-green-500/50 decoration-1 underline-offset-[2.5px] hover:decoration-green-300 transition-colors hover:text-green-300">retweet.fun</a>
              </h3>
              <p className="leading-relaxed">Social token trading platform on Solana</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">
                2. <a href="https://x.com/pratikcodes_" target="_blank" rel="noopener noreferrer" className="underline decoration-green-500/50 decoration-1 underline-offset-[2.5px] hover:decoration-green-300 transition-colors hover:text-green-300">twitter</a>
              </h3>
              <p className="leading-relaxed">Follow me on X for updates and thoughts</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">
                3. <a href="https://github.com/pratik-codes" target="_blank" rel="noopener noreferrer" className="underline decoration-green-500/50 decoration-1 underline-offset-[2.5px] hover:decoration-green-300 transition-colors hover:text-green-300">github</a>
              </h3>
              <p className="leading-relaxed">Check out my open source work and projects</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">
                4. <a href={`mailto:${PortfolioData.contact.email}`} className="underline decoration-green-500/50 decoration-1 underline-offset-[2.5px] hover:decoration-green-300 transition-colors hover:text-green-300">email</a>
              </h3>
              <p className="leading-relaxed">Reach out for collaborations or opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
