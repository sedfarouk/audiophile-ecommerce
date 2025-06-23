/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        audiophile: {
          orange: {
            DEFAULT: '#D87D4A',
            light: '#FBAF85',
          },
          black: {
            DEFAULT: '#101010',
            pure: '#000000',
          },
          white: {
            DEFAULT: '#F1F1F1',
            light: '#FAFAFA',
            pure: '#FFFFFF',
          },
        },
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'h1': ['56px', { lineHeight: '58px', letterSpacing: '2px', fontWeight: '700' }],
        'h2': ['40px', { lineHeight: '44px', letterSpacing: '1.5px', fontWeight: '700' }],
        'h3': ['32px', { lineHeight: '36px', letterSpacing: '1.15px', fontWeight: '700' }],
        'h4': ['28px', { lineHeight: '38px', letterSpacing: '2px', fontWeight: '700' }],
        'h5': ['24px', { lineHeight: '33px', letterSpacing: '1.7px', fontWeight: '700' }],
        'h6': ['18px', { lineHeight: '24px', letterSpacing: '1.3px', fontWeight: '700' }],
        'overline': ['14px', { lineHeight: '19px', letterSpacing: '10px', fontWeight: '400' }],
        'subtitle': ['13px', { lineHeight: '25px', letterSpacing: '1px', fontWeight: '700' }],
        'body': ['15px', { lineHeight: '25px', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}

