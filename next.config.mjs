/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    tsconfigPath: process.env.NODE_ENV === "test" ? "tsconfig.test.json" : "tsconfig.json",
  },
};

export default nextConfig;
