import { defineConfig  } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env': JSON.stringify(import.meta.env) // Correct way to define Vite environment variables
  }
})
