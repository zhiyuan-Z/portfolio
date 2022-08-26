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
      orange: '#FCB327',
      'light-blue': '#74ADDE',
    },
    
    fontFamily: {
      mont: "'Montserrat', san-serif",
      sans: "'Open Sans', san-serif",
    },
    extend: {
      fontSize: {
        xs: ['14px', {lineHeight: '24px', letterSpacing: '-0.03em'}],
      },
      blur: {
        '5xl': '200px',
      },
      'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
    },
  },
  plugins: [],
}
