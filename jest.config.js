/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  rootDir: "./",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue2-jest"
  },
  collectCoverage: true,
  coverageReporters: ["lcov", "text"],
  coverageDirectory: "./coverage/"
};

module.exports = config;
