// import type { NextConfig } from "next";
//
// const nextConfig: NextConfig = {
//   /* config options here */
//   async rewrites() {
//     return [
//       {
//         source: "/ingest/static/:path*",
//         destination: "https://us-assets.i.posthog.com/static/:path*",
//       },
//       {
//         source: "/ingest/:path*",
//         destination: "https://us.i.posthog.com/:path*",
//       },
//     ];
//   },
//   // This is required to support PostHog trailing slash API requests
//   skipTrailingSlashRedirect: true,
// };
//
// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     async rewrites() {
//         return [
//             {
//                 source: '/ingest/static/:path*',
//                 destination: 'https://us-assets.i.posthog.com/static/:path*',
//             },
//             {
//                 source: '/ingest/:path*',
//                 destination: 'https://us.i.posthog.com/:path*',
//             },
//         ];
//     },
//     // This sets the CORS headers to allow PostHog
//     async headers() {
//         return [
//             {
//                 source: '/ingest/:path*',
//                 headers: [
//                     { key: 'Access-Control-Allow-Credentials', value: 'true' },
//                     { key: 'Access-Control-Allow-Origin', value: '*' },
//                     { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
//                     { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
//                 ],
//             },
//         ];
//     },
// };
//
// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true, // ADD THIS LINE
    },
    async rewrites() {
        return [
            {
                source: '/ingest/static/:path*',
                destination: 'https://us-assets.i.posthog.com/static/:path*',
            },
            {
                source: '/ingest/:path*',
                destination: 'https://us.i.posthog.com/:path*',
            },
        ];
    },
    async headers() {
        return [
            {
                source: '/ingest/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
                    { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
                ],
            },
        ];
    },
};

module.exports = nextConfig;