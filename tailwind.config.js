/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#55ACDC',
        'brand-white': '#FFFFFF',
        'brand-dark': '#1a202c',
        'brand-gray': '#4a5568',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'blue-glow': '0 4px 30px rgba(85, 172, 220, 0.4)',
      },
      animation: {
        'gradient-text': 'gradient-text 5s ease infinite',
      },
      keyframes: {
        'gradient-text': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};
