/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three', '@react-three/drei'],
  images: {
    domains: ['landingfoliocom.imgix.net'],
  },
  // Remove experimental if not needed or supported
  // experimental: {
  //   metadataBase: new URL("https://landing-ambassy.vercel.app/"),
  // },
};

export default nextConfig;