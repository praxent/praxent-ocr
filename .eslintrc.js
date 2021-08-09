module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    semi: 0,
    'no-console': 'error',
    curly: ['error', 'multi-line'],
    'no-unused-vars': 'error',
    'react-native/no-inline-styles': 'off',
  },
}
