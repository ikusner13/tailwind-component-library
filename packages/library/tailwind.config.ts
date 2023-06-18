import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        foundations: {
          base: {
            white: "#ffffff",
            black: "#000000",
          },
          neutral: {
            "25": "hsl(var(--efui-foundations-neutral-25))",
            "50": "hsl(var(--efui-foundations-neutral-50))",
            "100": "hsl(var(--efui-foundations-neutral-100))",
            "200": "hsl(var(--efui-foundations-neutral-200))",
            "300": "hsl(var(--efui-foundations-neutral-300))",
            "400": "hsl(var(--efui-foundations-neutral-400))",
            "500": "hsl(var(--efui-foundations-neutral-500))",
            "600": "hsl(var(--efui-foundations-neutral-600))",
            "700": "hsl(var(--efui-foundations-neutral-700))",
            "800": "hsl(var(--efui-foundations-neutral-800))",
            "900": "hsl(var(--efui-foundations-neutral-900))",
          },
          accessibility: {
            positive: {
              "25": "hsl(var(--efui-foundations-accessibility-positive-25))",
              "50": "hsl(var(--efui-foundations-accessibility-positive-50))",
              "500": "hsl(var(--efui-foundations-accessibility-positive-500))",
              "600": "hsl(var(--efui-foundations-accessibility-positive-600))",
              "700": "hsl(var(--efui-foundations-accessibility-positive-700))",
            },
            caution: {
              "25": "hsl(var(--efui-foundations-accessibility-caution-25))",
              "50": "hsl(var(--efui-foundations-accessibility-caution-50))",
              "500": "hsl(var(--efui-foundations-accessibility-caution-500))",
              "600": "hsl(var(--efui-foundations-accessibility-caution-600))",
              "700": "hsl(var(--efui-foundations-accessibility-caution-700))",
            },
            negative: {
              "25": "hsl(var(--efui-foundations-accessibility-negative-25))",
              "50": "hsl(var(--efui-foundations-accessibility-negative-50))",
              "500": "hsl(var(--efui-foundations-accessibility-negative-500))",
              "600": "hsl(var(--efui-foundations-accessibility-negative-600))",
              "700": "hsl(var(--efui-foundations-accessibility-negative-700))",
            },
          },
        },
        brand: {
          primary: {
            "50": "hsl(var(--efui-brand-primary-50))",
            "100": "hsl(var(--efui-brand-primary-100))",
            "200": "hsl(var(--efui-brand-primary-200))",
            "300": "hsl(var(--efui-brand-primary-300))",
            "400": "hsl(var(--efui-brand-primary-400))",
            "500": "hsl(var(--efui-brand-primary-500))",
            "600": "hsl(var(--efui-brand-primary-600))",
            "700": "hsl(var(--efui-brand-primary-700))",
            "800": "hsl(var(--efui-brand-primary-800))",
            "900": "hsl(var(--efui-brand-primary-900))",
            "950": "hsl(var(--efui-brand-primary-950))",
          },
        },
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config
