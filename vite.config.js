import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/pizzaria_portfolio_site/' // nome exato do repositório Github,

})