const { defineConfig } = require("eslint-define-config");
const prettierConfig = require("@jvbjs/prettier-config");

module.exports = defineConfig({
  extends: [
    require.resolve("./index.js"),
    "plugin:vue/vue3-recommended",
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
  plugins: ["prettier"],
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".vue"],
        ecmaVersion: "latest",
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        "no-undef": "off",
      },
    },
  ],
  rules: {
    // vue
    "vue/no-v-html": "off",
    "vue/require-default-prop": "off",
    "vue/require-explicit-emits": "off",
    "vue/multi-word-component-names": "off",
    "vue/prefer-import-from-vue": "off",
    "vue/no-v-text-v-html-on-component": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],

    // prettier
    "prettier/prettier": [2, prettierConfig],
  },
});
