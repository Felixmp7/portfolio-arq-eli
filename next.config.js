/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: {
        'Access-Control-Allow-Origin': ['https://api.resend.com/emails']
    },
    experimental: {
        serverActions: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'earnionc.sirv.com',
                port: '',
                pathname: '/portfolio-eli/**'
            }
        ]
    }
};

module.exports = nextConfig;
