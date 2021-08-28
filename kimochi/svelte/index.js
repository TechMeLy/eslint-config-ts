module.exports = {
  extends: ['@techmely/eslint-config-ts', '@sveltejs'],
  settings: {
    'import/core-modules': ['svelte', 'svelte/internal', 'svelte/store', 'svelte/easing', 'estree'],
  },
};
