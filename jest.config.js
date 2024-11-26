module.exports = {
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^react-router-dom$": "<rootDir>/__mocks__/react-router-dom.js",
  },
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
