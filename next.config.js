/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/works",
        destination: "/projects",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
