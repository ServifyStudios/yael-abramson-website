/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#0D0118',
          900: '#1E0A35',
          800: '#3B1066',
          700: '#5C1D9E',
          600: '#7B2FBE',
          500: '#9B4FD8',
          400: '#B470F0',
          300: '#CB96F7',
          200: '#E0BFFC',
          100: '#F0DFFF',
          50: '#F9F3FF',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
