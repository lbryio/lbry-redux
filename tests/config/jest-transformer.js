const config = {
  babelrc: false,
  presets: [
    [
      "@babel/env",
      {
        modules: false
      }
    ],
    "@babel/react"
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "@babel/plugin-transform-flow-strip-types",
    "transform-es2015-modules-commonjs"
  ]
};
module.exports = require("babel-jest").createTransformer(config);
