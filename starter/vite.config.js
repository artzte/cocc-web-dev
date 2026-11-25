import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// Automatically include every .html file in the project root for multi-page builds
const htmlInputs = Object.fromEntries(
  readdirSync(import.meta.dirname)
    .filter((file) => file.endsWith('.html'))
    .map((file) => [
      file.replace(/\.html$/, ''),
      resolve(import.meta.dirname, file),
    ]),
)

export default defineConfig({
  base: './',
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    rollupOptions: {
      input: htmlInputs,
    },
  },
})
