import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";

const pkg = require("./package.json");

export default {
  input: "src/MarqueeTextWidget.svelte",
  output: [
    { file: pkg.module, format: "en" },
    { file: pkg.main, format: "umd", name: "MarqueeTextWidget" },
  ],
  plugins: [
    svelte({
      onwarn: (warning, handler) => {
        const { code, frame } = warning;
        if (code === "css-unused-selector") return;

        handler(warning);
      },
    }),
    resolve(),
  ],
};
