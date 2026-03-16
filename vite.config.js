import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['.vercel.app', '.ngrok-free.dev', '.ngrok-free.app', '.ngrok-free.app', '.ngrok-free.app']
  }
})
