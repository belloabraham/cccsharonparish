import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'pnpm exec nx run admin.mydailydigest.me:serve',
        production: 'pnpm exec nx run admin.mydailydigest.me:serve-static',
      },
      ciWebServerCommand:
        'pnpm exec nx run admin.mydailydigest.me:serve-static',
      ciBaseUrl: 'http://localhost:4300',
    }),
    baseUrl: 'http://localhost:4300',
  },
});
