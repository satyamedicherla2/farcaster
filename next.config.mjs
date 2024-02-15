/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: '/',
        destination: 'https://nes.tech/',
        permanent: false
      }
    ]
  }
};

export default nextConfig;
