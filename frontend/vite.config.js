import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:9080',   // Backend server running on port 8080
  //       changeOrigin: true,                // Change the origin header to match the target
  //       secure: false,                     // If you're using HTTP and not HTTPS
  //       rewrite: (path) => path.replace(/^\/api/, ''),  // Optional: If your backend doesn't include /api in routes
  //     }
  //   }
  // },
  plugins: [react()],
});
