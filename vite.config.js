import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    VitePWA({ 
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,ogg}']
      },
      includeAssets: ['juego.svg','pwa-192x192.png', 'pwa-512x512.png'],
      manifest: {
        name: 'Demo Phaser',
        short_name: 'Demo Phaser',
        description: 'Un demo de Phaser',
        theme_color: '#112233',
        display: 'fullscreen',
        orientation: 'landscape',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})