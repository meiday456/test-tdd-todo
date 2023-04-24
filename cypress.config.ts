import {defineConfig} from "cypress";

export default defineConfig({
  video: false,
  env: {
    "cypress-react-selector": {
      root: "#__next",
    },
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    experimentalStudio: true,
    specPattern: "cypress/e2e/**/*.cy.{js,ts,jsx,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    setupNodeEvents() {},
    specPattern: "cypress/component/**/*.cy.{js,ts,jsx,tsx}",
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
