module.exports = {
  extends: [
    'airbnb-typescript',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
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
  },
  env: {
    browser: true,
    es6: true,
  },
};
