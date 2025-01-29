const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '425px',
      md: '576px',
      tb: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1440px',
      '3xl': '2560px',
    },
    extend: {},
  },
  plugins: [],
};
