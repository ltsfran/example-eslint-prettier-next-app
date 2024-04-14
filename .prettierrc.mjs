/** @type {import("prettier").Config} */
export default {
  printWidth: 80,
  semi: false,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  jsxSingleQuote: false,
  quoteProps: 'consistent',
  endOfLine: 'lf',
  trailingComma: 'none',
  plugins: ['prettier-plugin-tailwindcss']
}
