import { defineConfig } from "tsup"

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/**/*.{ts,tsx}"],
  format: ["esm"],
  sourcemap: true,
  target: "esnext",
  outDir: "dist",
  skipNodeModulesBundle: true,
  treeshake: "recommended",

  bundle: false,
  // esbuildOptions(options, context) {
  //   options.outbase = "./"
  // },
})
