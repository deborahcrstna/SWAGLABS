const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implemente aqui os ouvintes de eventos do node
    },
    chromeWebSecurity: false
  },
  video: true,
  videosFolder: 'videos'
});


