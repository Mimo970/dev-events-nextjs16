// import posthog from "posthog-js"
//
// posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
//   api_host: "/ingest",
//   ui_host: "https://us.posthog.com",
//   defaults: '2025-05-24',
//   capture_exceptions: true, // This enables capturing exceptions using Error Tracking, set to false if you don't want this
//   debug: process.env.NODE_ENV === "development",
// });

// instrumentation-client.js


// import posthog from 'posthog-js'
//
// posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
//     api_host: '/ingest', // Use the proxy instead of direct host
//     ui_host: 'https://us.posthog.com', // Keep this as the actual PostHog domain
//     person_profiles: 'identified_only',
//     capture_pageview: false, // We'll manually capture
//     capture_pageleave: true
// });



// instrumentation-client.js
// import posthog from 'posthog-js'
//
// posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
//     api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
//     defaults: '2025-11-30'
// });


import posthog from 'posthog-js'

if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: '/ingest',
        ui_host: 'https://us.posthog.com',
        person_profiles: 'identified_only',
        capture_pageview: true, // CHANGE THIS TO TRUE
        capture_pageleave: true,
        loaded: (posthog) => {
            if (process.env.NODE_ENV === 'development') console.log('PostHog loaded!')
        }
    })
}