const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  // 继承其他配置
  extends: [
    require.resolve("./default.js"),
    "plugin:import/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:jsonc/recommended-with-jsonc",
    "plugin:markdown/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  // 指定插件
  plugins: ["@typescript-eslint", "unicorn"],
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".mjs", ".ts", ".d.ts", ".tsx"] },
    },
  },
  overrides: [
    {
      files: ["*.json", "*.json5", "*.jsonc"],
      parser: "jsonc-eslint-parser",
    },
    {
      files: ["*.ts", "*.vue"],
      rules: {
        "no-undef": "off",
      },
    },
    {
      files: ["**/__tests__/**"],
      rules: {
        "no-console": "off",
        "vue/one-component-per-file": "off",
      },
    },
    {
      files: ["package.json"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/sort-keys": [
          "error",
          {
            pathPattern: "^$",
            order: [
              "name",
              "version",
              "private",
              "packageManager",
              "description",
              "type",
              "keywords",
              "homepage",
              "bugs",
              "license",
              "author",
              "contributors",
              "funding",
              "files",
              "main",
              "module",
              "exports",
              "unpkg",
              "jsdelivr",
              "browser",
              "bin",
              "man",
              "directories",
              "repository",
              "publishConfig",
              "scripts",
              "peerDependencies",
              "peerDependenciesMeta",
              "optionalDependencies",
              "dependencies",
              "devDependencies",
              "engines",
              "config",
              "overrides",
              "pnpm",
              "husky",
              "lint-staged",
              "eslintConfig",
            ],
          },
          {
            pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
            order: { type: "asc" },
          },
        ],
      },
    },
    {
      files: ["*.d.ts"],
      rules: {
        "import/no-duplicates": "off",
      },
    },
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["**/*.md/*.js", "**/*.md/*.ts"],
      rules: {
        "no-console": "off",
        "import/no-unresolved": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
  // 制定规则
  rules: {
    // js/ts
    camelcase: ["error", { properties: "never" }],
    "no-console": ["warn", { allow: ["error"] }],
    "no-debugger": "warn",
    "no-constant-condition": ["error", { checkLoops: false }],
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    "no-return-await": "error",
    "no-var": "error",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-unused-expressions": [
      "error",
      { allowShortCircuit: true, allowTernary: true, enforceForJSX: true },
    ],
    "prefer-const": [
      "warn",
      { destructuring: "all", ignoreReadBeforeAssign: true },
    ],
    "prefer-arrow-callback": [
      "error",
      { allowNamedFunctions: false, allowUnboundThis: true },
    ],
    "object-shorthand": [
      "error",
      "always",
      { ignoreConstructors: false, avoidQuotes: true },
    ],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "no-redeclare": "off",

    // best-practice
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "no-alert": "warn",
    "no-case-declarations": "error",
    "no-multi-str": "error",
    "no-with": "error",
    "no-void": "error",
    "sort-imports": [
      "warn",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false,
      },
    ],

    // ts
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-redeclare": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        disallowTypeAnnotations: true,
        fixStyle: "separate-type-imports",
      },
    ],
    "@typescript-eslint/ban-ts-comment": ["off", { "ts-ignore": false }],

    // import
    "import/first": "error",
    "import/no-duplicates": "error",
    "import/order": [
      "error",
      {
        groups: [
          "type",
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
        ],
      },
    ],
    "import/no-unresolved": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/named": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",

    // eslint-plugin-eslint-comments
    "eslint-comments/disable-enable-pair": ["error", { allowWholeFile: true }],

    // unicorn
    "unicorn/custom-error-definition": "error",
    "unicorn/error-message": "error",
    "unicorn/escape-case": "error",
    "unicorn/import-index": "error",
    "unicorn/new-for-builtins": "error",
    "unicorn/no-array-method-this-argument": "error",
    "unicorn/no-array-push-push": "error",
    "unicorn/no-console-spaces": "error",
    "unicorn/no-for-loop": "error",
    "unicorn/no-hex-escape": "error",
    "unicorn/no-instanceof-array": "error",
    "unicorn/no-invalid-remove-event-listener": "error",
    "unicorn/no-new-array": "error",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-unsafe-regex": "off",
    "unicorn/number-literal-case": "error",
    "unicorn/prefer-array-find": "error",
    "unicorn/prefer-array-flat-map": "error",
    "unicorn/prefer-array-index-of": "error",
    "unicorn/prefer-array-some": "error",
    "unicorn/prefer-date-now": "error",
    "unicorn/prefer-dom-node-dataset": "error",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-keyboard-event-key": "error",
    "unicorn/prefer-math-trunc": "error",
    "unicorn/prefer-modern-dom-apis": "error",
    "unicorn/prefer-negative-index": "error",
    "unicorn/prefer-number-properties": "error",
    "unicorn/prefer-optional-catch-binding": "error",
    "unicorn/prefer-prototype-methods": "error",
    "unicorn/prefer-query-selector": "error",
    "unicorn/prefer-reflect-apply": "error",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-string-starts-ends-with": "error",
    "unicorn/prefer-string-trim-start-end": "error",
    "unicorn/prefer-type-error": "error",
    "unicorn/throw-new-error": "error",
  },
});
