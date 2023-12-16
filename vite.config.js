import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
/*export default defineConfig({
  plugins: [react()],
})*/

/*export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    outDir: "dist",
    base: '/',
    rollupOptions: {
      external: ["react", "react-router", "react-router-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});*/

export default defineConfig({
  plugins: [
    react(),
  ]
});