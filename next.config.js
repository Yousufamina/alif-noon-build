/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'dist',
    headers  : async() => {
        return [
            {
                // matching all API routes
                source: "/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value : 'https://alifnoon.ae , https://www.alifnoon.ae' }, 
                    { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,DELETE,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    }
}

module.exports = nextConfig


