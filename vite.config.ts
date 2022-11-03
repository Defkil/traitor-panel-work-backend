import { defineConfig } from 'vite'
import { VitePluginNode } from 'vite-plugin-node'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'fastify',
      appPath: './src/main.ts',
      exportName: 'traitorPanelWorkBackend',
      tsCompiler: 'esbuild',
      swcOptions: {
        jsc: {
          parser: {
            syntax: 'typescript',
            decorators: true,
          },
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
          },
        },
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['@fastify/swagger'],
  },
  define: {
    'process.env.__VITE_RUNTIME__': true,
  },
})
