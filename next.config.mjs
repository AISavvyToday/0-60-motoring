/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/googleaed096beea148fc0.html",
        destination: "/google-verification/googleaed096beea148fc0.html",
      },
      {
        source: "/api/:path*",
        destination: "https://zero-60-motoring-backend.herokuapp.com/api/:path*", // Replace with your Heroku URL
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" }, // Or your Netlify URL (e.g., https://your-site.netlify.app)
          { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE,OPTIONS" },
        ],
      },
    ];
  },
};

export default nextConfig;