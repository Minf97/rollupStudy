import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "resolve";

export default {
    input: ["./src/index.js"],
    output: {
        file: "./dist/bundle.js",
        format: "umd",
        name: "experience",
    },
    plugins: [resolve(),commonjs(),babel()],
    external: [],
}