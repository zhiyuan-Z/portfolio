/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      tablet: '768px',
      laptop: '992px',
      desktop: '1200px',
    },
    colors: {
      orange: {
        light: '#ffdcbd',
        DEFAULT: '#F9A647',
        dark: '#8a5100',
        darkest: '#2c1600',
      },
      brown: {
        light: '#feddbe',
        DEFAULT: '#725a42',
        dark: '#291805',
      },
      green: {
        light: '#dbe8b5',
        DEFAULT: '#57633a',
        dark: '#151f01',
      },
      blue: {
        light: '#d9e2ff',
        DEFAULT: '#2a5bb3',
        // DEFAULT: '#154599',
        dark: '#001944',
      },
      outline: {
        // light: '#e1e2ec',
        // DEFAULT: '#757780',
        // dark: '#44464f',
        light: '#d1d5db',
        DEFAULT: '#334155',
        dark: '#1e293b',
        darkest: '#0f172a'
      }
    },

    fontFamily: {
      heading: "'Plus Jakarta Sans', san-serif", //Monteserrat, Figtree, Plus Jakarta Sans
      body: "'Inter', Arial, san-serif",
    },
    extend: {
      fontSize: {
        xs: ['14px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
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
