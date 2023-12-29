/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "2000",
        pathname: "/avatars/**"
      }
    ]
  }
};

module.exports = nextConfig;
