import type { GatsbyConfig } from "gatsby";
import path from "path";
require("dotenv").config({
  path: `.env`,
})
function initCanisterEnv() {
  let localCanisters: any, prodCanisters: any;
  try {
    localCanisters = require(path.resolve(
      ".dfx",
      "local",
      "canister_ids.json"
    ));
  } catch (error) {
    console.log("No local canister_ids.json found. Continuing production");
  }
  try {
    prodCanisters = require(path.resolve("canister_ids.json"));
  } catch (error) {
    console.log("No production canister_ids.json found. Continuing with local");
  }
  console.log("alive 1", process.env.DFX_NETWORK);
  const activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV
  const network =
    process.env.DFX_NETWORK ||
    (activeEnv === "production" ? "ic" : "local");

  const canisterConfig = network === "local" ? localCanisters : prodCanisters;
  console.log("alive 2", canisterConfig, network);
  return Object.entries(canisterConfig).reduce((prev: any, current: any) => {
    const [canisterName, canisterDetails] = current;
    prev[canisterName.toUpperCase() + "_CANISTER_ID"] =
      canisterDetails[network];
    console.log("alive 3");
    return prev;
  }, {});
}
const canister_ids: { [key: string]: string } = initCanisterEnv();
Object.entries(canister_ids).forEach(([key, value]) => {
  if (process.env === undefined) throw new Error("process.env is undefined");
  process.env = {
    ...process.env,
    [`GATSBY_${key}`]: value
  }
});


const config: GatsbyConfig = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  proxy: [
    {
      prefix: "/api",
      url: "http://127.0.0.1:4943",
    }
  ],
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-components",
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     "trackingId": ""
    //   }
    // },
    "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }]
};

export default config;
