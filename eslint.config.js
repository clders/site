export default [
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      curly: ['error', 'multi-line'],
      eqeqeq: ['error', 'always'],
      'no-duplicate-imports': 'error',
      'no-magic-numbers': ['error', { ignore: [0, 1] }],
      'consistent-return': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': 'warn',
      'no-shadow': 'error',
      'func-names': 'error',
      'prefer-arrow-callback': 'error',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
