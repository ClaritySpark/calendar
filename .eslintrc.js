const { resolve, dirname } = require("node:path");

const currentFilePath = __filename;
const currentDirPath = dirname(currentFilePath);

const project = resolve(currentDirPath, "tsconfig.base.json");

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/react",
    "eslint-config-turbo",
  ].map(require.resolve),
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project,
    tsconfigRootDir: __dirname,
  },
  parser: "@typescript-eslint/parser",
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    es6: true,
  },
  ignorePatterns: ["node_modules/", "dist/"],
  // add rules configurations here
  rules: {
    "import/no-extraneous-dependencies": "off",
    "import/no-default-export": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "react/jsx-no-leaked-render": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/prefer-optional-chain": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "typeParameter",
        format: ["PascalCase"],
      },
      {
        selector: "interface",
        format: ["PascalCase"],
      },
    ],
    "no-alert": "off",
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
          kebabCase: true,
        },
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        labelAttributes: ["htmlFor"],
      },
    ],
  },
};
