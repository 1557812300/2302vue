/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    quotes: [2, 'single'],// 使用单引号 
    'spaced-comment': 'error',
    'key-spacing': 'error',
    'space-before-function-paren': 'error',
    'space-before-blocks': 'error'
  }  
}
