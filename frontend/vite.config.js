import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

// Define your routes in a constant for cleaner code
const routes = [
    '/',
    '/company',
    '/leadership',
    '/facility-management',
    '/housekeeping',
    '/career',
    '/contact',
    '/bouncer',
    '/pso',
    '/trained-gunman',
    '/security-guards',
    '/data-entry-operators'
];

export default defineConfig({
    plugins: [
        react(),
        sitemap({
            hostname: 'https://www.tmsecurity.in',
            dynamicRoutes: routes,
            // We explicitly exclude the 404 and any leftover .aspx patterns
            exclude: ['/404', '/index.aspx', '/Services.aspx'],
            // Generates robots.txt automatically pointing to this sitemap
            generateRobotsTxt: true 
        }),
    ],
});