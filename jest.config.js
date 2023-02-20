const config = {
  verbose: true,
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  // transform: {
  //   "^.+\\.jsx?$": "babel-jest", // added this line
  // },
};

module.exports = config;
