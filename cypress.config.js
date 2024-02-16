const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
     
    },
    chromeWebSecurity: false
  },
  video: true,
  videosFolder: 'videos'
});


