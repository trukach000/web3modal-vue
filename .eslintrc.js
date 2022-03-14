module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  plugins: ['html', 'simple-import-sort'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
};
