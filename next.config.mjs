/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['d30v2pzvrfyzpo.cloudfront.net'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'd30v2pzvrfyzpo.cloudfront.net',
          port: ''
        }
      ]
    }
  }

export default nextConfig;
