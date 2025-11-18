/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      // Enables Server Side Rendering (SSR) support
      ssr: true,
      // Enables a readable class name for better debugging
      displayName: true,
    },
  },
};

export default nextConfig;
