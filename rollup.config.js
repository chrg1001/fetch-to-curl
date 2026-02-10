import minify from 'rollup-plugin-babel-minify';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'lib/bundle.cjs',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'lib/bundle.mjs',
      format: 'es',
    },
    {
      file: 'lib/bundle.umd.js',
      format: 'umd',
      name: 'fetchToCurl',
      exports: 'named',
    },
  ],
  plugins: [minify(), terser()],
};
