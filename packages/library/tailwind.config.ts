import type { Config } from "tailwindcss"
import { createThemes } from "tw-colors"

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
    createThemes(
      {
        "erena-light": {
          brand: {
            ...eRenaTheme.Light,
          },
          foundations: {
            ...foundations.light,
          },
        },
        "erena-dark": {
          brand: {
            ...eRenaTheme.Dark,
          },
          foundations: {
            ...foundations.dark,
          },
        },
        "sidekick-light": {
          brand: {
            ...SidekickTheme.Light,
          },
          foundations: {
            ...foundations.light,
          },
        },
        "sidekick-dark": {
          brand: {
            ...SidekickTheme.Dark,
          },
          foundations: {
            ...foundations.dark,
          },
        },
      },
      {
        cssVariablePrefix: "efui-",
      }
    ),
  ],
} satisfies Config
