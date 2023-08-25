/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['drive.google.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "*.googleusercontent.com",
                pathname: "**"
            }
        ]
    }
};

module.exports = nextConfig;
