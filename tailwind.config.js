/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-inset': 'inset 0px 2px 1px 0px rgb(255, 255, 255)',
      },
      fontFamily: {
        brockmann: ['Brockmann', 'sans-serif'],
        satoshi: ['"Satoshi"', 'sans-serif'],
        athauss: 'At Hauss Std TRIAL',
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
    },
  },
  plugins: [],
};
