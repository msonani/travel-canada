import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub Pages repo sub-path so that
// built asset URLs (JS, CSS) resolve correctly on the server.
export default defineConfig({
  plugins: [react()],
  base: '/travel-canada/',
})
