/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    quotes: [2, 'single'],// 使用单引号 
    'spaced-comment': 'error',
    'key-spacing': 'error',
    'space-before-function-paren': 'error',
    'space-before-blocks': 'error',
    'vue/multi-word-component-names': 'off' // eslint不对这个进行校验了
  }  
} 
