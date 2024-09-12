import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Para GitHub Pages na raiz do repositório
  plugins: [react()],
})
