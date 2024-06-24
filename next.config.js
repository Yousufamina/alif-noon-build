/** @type {import('next').NextConfig} */
// const corsMiddleware = require('cors');
// import corsMiddleware from "@/cors";
const cors = require('cors');
const corsMiddleware = require('./cors');


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
    middleware: [corsMiddleware],
   
}

module.exports = nextConfig


