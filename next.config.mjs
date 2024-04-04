/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "placekitten.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
