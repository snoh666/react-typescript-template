/* eslint-disable import/no-anonymous-default-export */
export default [{
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-typescript',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'no-shadow': 'off',
    'react-redux/connect-prefer-named-arguments': 'off',
    'react-redux/prefer-separate-component-file': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'error',
    'import/extensions': 'off',
    'react/jsx-filename-extension': 'error',
  },
  env: {
    browser: true,
    es6: true,
  },
}];
