import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const projectRoot = path.dirname(fileURLToPath(new URL(import.meta.url)))

export default defineConfig({
  server: {
    fs: {
      allow: [projectRoot],
    },
  },
})
