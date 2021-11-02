module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        headings: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        large: '75px',
      },
    },
  },
  variants: {},
  plugins: [],
};
