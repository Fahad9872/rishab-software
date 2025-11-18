/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static HTML export
  trailingSlash: true, // folder-based URLs: /explore/ → explore/index.html
  images: { unoptimized: true },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
