module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(png)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
