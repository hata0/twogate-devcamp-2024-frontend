/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    tsconfigPath: process.env.NODE_ENV === "test" ? "tsconfig.test.json" : "tsconfig.json",
  },
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: process.env.NEXT_PUBLIC_BACKEND_URL ?? "",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization, ngrok-skip-browser-warning",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
