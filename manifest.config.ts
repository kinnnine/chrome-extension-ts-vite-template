import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  manifest_version: 3,
  name: 'my-chrome-extension',
  description: 'My Chrome Extension',
  version: '1.0.0',
  action: {
    default_popup: 'index.html',
  },
  background: {
    service_worker: "src/background.ts",
    type: "module"
  },
  content_scripts: [{
    js: ['src/content.ts'],
    matches: ['https://example.com/*'],
  }]
})