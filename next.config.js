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
                    { key: "Access-Control-Allow-Origin", value : '*' }, 
                    { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,DELETE,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    },
    middleware: [
        [
          nextCors({
            origin: ['(link unavailable)', '(link unavailable)'],
            methods: ['GET', 'POST', 'PUT'],
            headers: ['Content-Type', 'Authorization'],
            credentials: true,
            maxAge: 86400,
            preflightContinue: true,
            optionsSuccessStatus: 204,
          }),
        ],
      ],
}

module.exports = nextConfig


