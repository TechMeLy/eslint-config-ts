module.exports = {
  extends: ['@techmely/eslint-config-ts', 'plugin:vue/vue3-recommended'],
  rules: {
    // Ignore specific value in vue 3 setup script
    'import/no-unresolved': ['off'],
    'import/extensions': ['off'],
    '@typescript-eslint/no-unused-vars': ['off'],
    'no-undef': ['off'],

    'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
  },
};
