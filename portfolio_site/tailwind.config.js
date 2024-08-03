/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-center': 'radial-gradient(ellipse, #000426, #000000)',
        'farthest-side-gradient': 'radial-gradient(ellipse at 100% 60%, #000426, #000000)'
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translate(-50%)' },
          '100%': {transform: 'translate(0)' },
        },
        slideInL: {
          '0%': { transform: 'translateX(100%)' },
          '100%': {transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
      },
      animation: {
        slideIn: 'slideIn 1.0s ease-out',
        slideInL: 'slideInL 1.0s ease-out',
        slideInSlower: 'slideIn 1.5s ease-out',
        fadeIn: 'fadeIn 3s ease-out',
      },
    },
  },
  plugins: [],
};
