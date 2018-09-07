module.exports = {
  parser: 'babel-eslint',
  extends: 'pureprofile',
  env: { es6: true, browser: true },
  rules: {
    'max-params': 0 // this is in conflict with how Angular handles imports so disable
  }
};