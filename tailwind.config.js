module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    fontFamily: {
      baloo: ['"Baloo Thambi 2"', 'cursive'],
      'noto-sans': ['"Noto Sans TC"', 'sans-serif'],
    },
    borderRadius: {
      large: '10px',
    },
    extend: {
      colors: {
        primary: '#ffd370',
        gray: {
          100: '#333333',
        },
        red: {
          100: '#D87355',
        },
      },
    },
  },
  plugins: [],
};
