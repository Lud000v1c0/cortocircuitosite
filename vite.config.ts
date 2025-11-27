import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // NOTA: Ho rimosso "base" perché su Vercel non serve (anzi crea problemi).
  // Se torni su GitHub Pages, dovrai rimetterlo.
})
