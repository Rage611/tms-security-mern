import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function lcpPreloadPlugin() {
    let heroHash = '';

    return {
        name: 'lcp-preload',
        generateBundle(_, bundle) {
            for (const [key] of Object.entries(bundle)) {
                if (key.match(/hero-1.*\.webp$/)) {
                    heroHash = key;
                    break;
                }
            }
        },
        transformIndexHtml(html) {
            if (!heroHash) return html;
            return html.replace(
                '<link rel="preload" as="image" href="/assets/hero-1.webp" fetchpriority="high" />',
                `<link rel="preload" as="image" href="/${heroHash}" fetchpriority="high" />`
            );
        }
    };
}

export default defineConfig({
    plugins: [
        react(),
        lcpPreloadPlugin(),
    ],
});