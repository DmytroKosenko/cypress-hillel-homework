const { defineConfig } = require("cypress");
const { configurePlugin } = require("cypress-mongodb");
const {
  beforeRunHook,
  afterRunHook,
} = require("cypress-mochawesome-reporter/lib");
//const fs = require("fs-extra");

module.exports = defineConfig({
  env: {
    guruTestingUrl: "https://www.guru99.com",
    mongodb: {
      uri: "mongodb://127.0.0.1:27017",
      database: "test",
    },
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    experimentalStudio: true,
    viewportHeight: 1200,
    viewportWidth: 1400,
    defaultCommandTimeout: 4000,
    specPattern:
      "cypress/e2e/4-myCustomTests/custom_scenarios/guru_testing.cy.js", //query_mongo newborn
    // baseUrl: "https://www.cypress.io",
    // retries: {
    //   openMode: 2,
    //   runMode: 3,
    // },
    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      }); // config to show log message by using command cy.task

      // save url into json
      on("task", {
        saveUrl(url) {
          const filePath = "cypress/data/url.json";
          return fs
            .writeJson(filePath, { url })
            .then(() => {
              return null;
            })
            .catch((err) => {
              throw new Error(`Error saving URL: ${err.message}`);
            });
        },
      });

      //base url config
      const newUrl = "https://www.guru99.com"; //https://dou.ua http://localhost:3000 http://5.189.186.217
      //const newUrl = config.env.urlFromCli;
      config.baseUrl = newUrl;

      //for run browser in 'incognito' mode
      // on("before:browser:launch", (browser, launchOptions) => {
      //   console.log(launchOptions.args);
      //   if (browser.name === "chrome") {
      //     launchOptions.args.push("--incognito");
      //   }
      //   return launchOptions;
      // });

      configurePlugin(on);

      on("before:run", async (details) => {
        console.log("override before:run");
        await beforeRunHook(details);
      });

      on("after:run", async () => {
        console.log("override after:run");
        await afterRunHook();
      });

      return config;
    },
  },
});

//info for package.json
//npm run cy_run_chrome_headed  --spec cypress/e2e/Custom_scenarious/myTest1.cy.js $ENV_URL=https://www.guru99.com → to automaticly run tests from folder and using set up env variable
//don't know why =)
//in some cases it is (--env urlFromCli=$ENV_URL) added to ("cy_run_chrome_headed": "cypress run --headed -b chrome")
