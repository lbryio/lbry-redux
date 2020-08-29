module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
  testMatch: ["<rootDir>/tests/**/*.test.js"],
  transform: {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/tests/config/jest-transformer.js",
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"]
};