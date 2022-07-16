module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
