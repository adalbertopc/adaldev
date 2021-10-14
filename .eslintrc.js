module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next',
    'next/core-web-vitals', 
    'plugin:react/recommended',
    'google',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    "camelcase": "warn",
    "semi": "error",
    "eqeqeq": "warn",
    "no-else-return": "warn",
    'require-jsdoc': 0, 
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
};
