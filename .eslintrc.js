module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    semi: 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
  },
}
