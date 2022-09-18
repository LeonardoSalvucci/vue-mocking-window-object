import { defineConfig, UserConfigExport } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

const config: UserConfigExport = 
{
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  }
}
export default defineConfig(config)
