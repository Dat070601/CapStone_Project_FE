import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: `https://cap-stone-project-3a0putqtz-dat070601.vercel.app`,
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  }
})
