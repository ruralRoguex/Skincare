import { defineConfig } from "vite"

export default defineConfig({
    build: {
        outDir: 'assets',
        emptyOutDir: false,
        minify: false,
        rollupOptions: {
            input: 'custom-tailwind.css',
            output: {
                dir: 'assets',
                assetFileNames: 'custom.css',
            }
        },
    }
})