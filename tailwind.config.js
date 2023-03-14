const daisyui = require('daisyui');

module.exports = {
  content: ['./dist/*.{html,js}', './src/*.{html,js}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [daisyui],
};