import {defineConfig} from "cypress";

export default defineConfig({
  video: false,
  watchForFileChanges: true, //파일 변경을 감지할때마다 테스트를 다시 수행
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
    videoUploadOnPasses: false,
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
