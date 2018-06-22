module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    // 设置indent；此时会使用4个空格，作为缩进
    // "indent": [4, "space", { "SwitchCase": 1 }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
