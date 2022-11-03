import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      src: ['src/'],
      provider: 'c8',
      reporter: ['text'],
      all: true,
      exclude: [
        '**/*.test.ts',
        '**/*.interface.ts',
        '**/*.config.ts',
        '**/*.types.ts',
        '**/*.d.ts',
      ],
    },
  },
  esbuild: {},
})
