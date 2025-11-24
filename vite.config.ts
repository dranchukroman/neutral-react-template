/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@layouts': path.resolve(__dirname, 'src/components/layouts'),
            '@icons': path.resolve(__dirname, 'src/components/icons'),
            '@ui': path.resolve(__dirname, 'src/components/ui'),
            '@sections': path.resolve(__dirname, 'src/components/sections'),
            '@pages': path.resolve(__dirname, 'src/pages'),
        },
    },
    // opcjonalnie pod testy (na przyszłość)
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/tests/setup.ts',
    },
});
