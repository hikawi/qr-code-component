/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/components/**/*.{vue,js,ts,jsx,tsx}', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          300: '#d5e1ef',
          500: '#68778D',
          900: '#1f314f'
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif']
      },
      width: {
        72: '18rem'
      },
      height: {
        72: '18rem'
      }
    }
  },
  plugins: []
}
