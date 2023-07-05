import {defineConfig} from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import ENV_CONFIG from "./.env";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
  ],
  define: {
    'process.env.config': ENV_CONFIG,
  },
})
