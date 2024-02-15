const { resolve, dirname } = require("node:path");

const currentFilePath = __filename;
const currentDirPath = dirname(currentFilePath);

const project = resolve(currentDirPath, "tsconfig.json");

module.exports = {
  extends: "../../.eslintrc.js",
  parserOptions: {
    project,
  },
};
