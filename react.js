const { defineConfig } = require("eslint-define-config");
const prettierConfig = require("@jvbjs/prettier-config");

module.exports = defineConfig({
  extends: [
    require.resolve("./index.js"),
    "plugin:react/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  overrides: [],
  rules: {
    "react/react-in-jsx-scope": "off", // React17后不需要在jsx中主动引入react
    "prettier/prettier": [2, prettierConfig], // prettier
  },
});
