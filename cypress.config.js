const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://ec2-3-69-9-45.eu-central-1.compute.amazonaws.com",
    screenshotOnRunFailure: false,
    video: false
  },
});
