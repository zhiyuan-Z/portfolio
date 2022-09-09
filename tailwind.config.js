/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      table: '768px',
      laptop: '992px',
      desktop: '1200px',
    },
    colors: {
      // not enough contrast
      // orange: '#FCB327',
      // 'light-blue': '#74ADDE',

      // looks okay
      // orange: '#F9A647',
      // 'light-blue': '#05348B',

      // yellow could use a little bit more contrast
      // orange: '#FDB638',
      // 'light-blue': '#006AD0',

      // nice, a little dark, orange is good
      // orange: '#DF8C54',
      // 'light-blue': '#154599',
      // 'light-orange': '#E5CAB9'

      // the blue is a little darker than the last one,
      // but the orange is a little brighter, Nice one
      orange: '#F9A647',
      // 'light-blue': '#05348B', //a little too dark
      'light-orange': '#EDCFAB',

      // blue is lighter than last one
      // orange: '#E18B2E',
      // 'light-blue': '#2a5bb3',
      // 'light-orange': '#EDCFAB'
      blue: {
        DEFAULT: '#2a5bb3',
        light: '#cde5ff',
        dark: '#001d32',
      }
    },
    
    fontFamily: {
      mont: "'Montserrat', san-serif",
      sans: "'Open Sans', san-serif",
    },
    extend: {
      fontSize: {
        xs: ['14px', {lineHeight: '24px', letterSpacing: '-0.03em'}],
      },
      fontWeight: {
        'light': 300,
        'medium': 500,
        'bold': 700,
      },
      blur: {
        '5xl': '200px',
      },
      'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
    },
  },
  plugins: [],
}
