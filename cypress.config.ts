import { defineConfig } from "cypress";
console.log(".env", process.env.VITE_APP_ETHERSCAN_URL);
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:5173/",
    env: {
      ETHERSCAN_URL: 'https://etherscan.io/address/'
    }
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
