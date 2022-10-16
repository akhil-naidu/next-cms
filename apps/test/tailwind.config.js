const tailwindConfig = require('config/tailwind.config.js');

module.exports = {
  ...tailwindConfig,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
};

// For some reason, adding `/ui/**/*.{js,ts,jsx,tsx}` is of no use
