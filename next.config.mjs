/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "pbs.twimg.com",
      "cdn.hashnode.com",
      "i.pcmag.com",
      "res.cloudinary.com",
      "media.licdn.com",
      "miro.medium.com",
    ],
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
