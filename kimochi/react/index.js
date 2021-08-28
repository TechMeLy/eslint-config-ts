module.exports = {
  extends: ['plugin:react/recommended', '@harry/eslint-config-ts'],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
  },
}
