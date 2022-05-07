module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    fontFamily: {
      baloo: ['"Baloo Thambi 2"', 'cursive'],
      'noto-sans': ['"Noto Sans TC"', 'sans-serif'],
    },
    borderRadius: {
      sm: '5px',
      lg: '10px',
    },
    extend: {
      colors: {
        primary: '#ffd370',
        gray: {
          100: '#333333',
          200: '#9F9A91',
          300: '#E5E5E5',
          400: '#EFEFEF',
        },
        red: {
          100: '#D87355',
        },
        yellow: {
          100: '#FFD370',
        },
      },
      backgroundImage: {
        index:
          'linear-gradient(172.7deg, #FFD370 5.12%, #FFD370 53.33%, #FFD370 53.44%, #FFFFFF 53.45%, #FFFFFF 94.32%)',
      },
      boxShadow: {
        index: '0px 0px 15px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
