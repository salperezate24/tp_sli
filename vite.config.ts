import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

// Rutas absolutas en <img src="..."> apuntan al repo hermano `thesis/` (mismo nivel que `tp_sli`).
// Sin esto, Vite puede bloquear el acceso y el navegador se queda cargando o “colgado”.
const projectRoot = path.dirname(fileURLToPath(new URL(import.meta.url)))
const thesisRoot = path.resolve(projectRoot, '..', 'thesis')

export default defineConfig({
  server: {
    fs: {
      allow: [projectRoot, thesisRoot],
    },
  },
})
