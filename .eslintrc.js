module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  // required to lint *.vue files
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'eol-last': 0,
    'semi': 0,
    'no-trailing-spaces': 0,
    'no-multiple-empty-lines': 0,
    'comma-dangle': 0,
    'space-before-function-paren': 0,
    'quotes': 0,
    'quote-props': 0,

  }
}
