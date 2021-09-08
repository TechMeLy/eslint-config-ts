module.exports = {
  extends: ['@techmely/eslint-config-ts', 'plugin:vue/vue3-recommended'],
  rules: {
    'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
  },
};
