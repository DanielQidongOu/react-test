const jestConfig = {
  //   preset: "react-scripts",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/react"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testMatch: ["src/**/*.{js,jsx}"],
  // collectCoverageFrom: ["src/**/*.{js,jsx}"],
};

module.exports = jestConfig;
