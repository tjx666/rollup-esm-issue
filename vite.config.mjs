import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: 'index.js',
            output: {
                format: 'esm',
            },
        },
    },
});
