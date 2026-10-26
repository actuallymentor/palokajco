import { defineConfig } from 'vite'

// GitHub Pages serves master:/docs, CNAME lives in public/ so it survives builds
export default defineConfig( {
    build: {
        outDir: `docs`,
        emptyOutDir: true,
    },
} )
