import type { Config } from "tailwindcss"

import { eRenaTheme } from "./src/themes/erenaTheme.js"
import { foundations } from "./src/themes/foundations.js"
import { SidekickTheme } from "./src/themes/sidekickTheme.js"

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          colors: {
            foundations: {
              ...foundations.light,
            },
            brand: {
              ...eRenaTheme.Light,
            },
          },
        },
      },
      themes: [
        {
          name: "erena-dark",
          selectors: [".erena-dark", '[data-theme="erena-dark"]'],
          extend: {
            colors: {
              foundations: {
                ...foundations.dark,
              },
              brand: {
                ...eRenaTheme.Dark,
              },
            },
          },
        },
        {
          name: "sidekick-light",
          selectors: [".sidekick-light", '[data-theme="sidekick-light"]'],
          extend: {
            colors: {
              foundations: {
                ...foundations.light,
              },
              brand: {
                ...SidekickTheme.Light,
              },
            },
          },
        },
        {
          name: "sidekick-dark",
          selectors: [".sidekick-dark", '[data-theme="sidekick-dark"]'],
          extend: {
            colors: {
              foundations: {
                ...foundations.dark,
              },
              brand: {
                ...SidekickTheme.Dark,
              },
            },
          },
        },
      ],
    }),
    // ...
  ],
} satisfies Config
