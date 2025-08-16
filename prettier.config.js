/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.ts",
  tailwindFunctions: ["clsx", "cn", "cva", "tw"],
};
