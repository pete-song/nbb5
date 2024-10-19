/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/nbb5/" : "",
  basePath: isProd ? "/nbb5" : "",
  output: "export",
};

export default nextConfig;
