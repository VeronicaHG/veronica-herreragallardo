module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
    "default",
    ["jest-html-reporter", {
      "pageTitle": "API Test Report",
      "outputPath": "api-test-report.html"
    }]
  ]
};
