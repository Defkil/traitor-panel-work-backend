import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
    server: {
        port: 3000
    },
    plugins: [
        ...VitePluginNode({
            adapter: 'fastify',
            appPath: './src/main.ts',
            exportName: 'traitorPanelWorkBackend',
            tsCompiler: 'esbuild',
            swcOptions: {}
        })
    ],
    optimizeDeps: {
        exclude: [
            '@fastify/swagger',
        ],
    },
});