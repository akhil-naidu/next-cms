module.exports = {
  extends: ['next', 'turbo', 'prettier', 'next/babel', 'next/core-web-vitals'],
  rules: {
    'no-console': 2,
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
  },
};
