/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['drive.google.com']
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: 'drive.google.com'
        //     }
        // ]
    }
};

module.exports = nextConfig;
