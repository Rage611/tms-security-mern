import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

/**
 * Do NOT include '/' here — vite-plugin-sitemap adds it automatically.
 * Including it caused the duplicate homepage bug in the sitemap.
 */
const routes = [
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
  '/data-entry-operators',
];

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://tmssecurity.in',
      dynamicRoutes: routes,
      exclude: [
        '/404',
        '/index.aspx',
        '/Services.aspx',
        '/ContactUs.aspx',
        '/Clients.aspx',
      ],
      generateRobotsTxt: true,
      robots: [
        {
          userAgent: '*',
          allow: '/',
          disallow: [
            '/Bustle/',
            '/DateSheet/',
            '/SalarySheet/',
            '/UploadedFiles/',
          ],
        },
      ],
    }),
  ],
});