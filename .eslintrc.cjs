/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      extends: 'love',
      rules: {
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': 'off'
      }
    }
  ]
}
