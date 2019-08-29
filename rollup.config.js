import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'index.js',
  output: [
    {
      // Build for browsers
      name: 'reeverse',
      file: 'dist/reeverse.min.js',
      format: 'iife',
    },
    {
      // Build for ES module environments.
      name: 'reeverse',
      file: 'dist/reeverse.esm.js',
      format: 'es',
    },
    {
      // Build for Node.js and browsers.
      name: 'reeverse',
      file: 'dist/reeverse.umd.js',
      format: 'umd',
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    terser()
  ],
};
