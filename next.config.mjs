/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
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
