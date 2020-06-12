import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'lib/graphviz.js',
  output: {
    sourcemap: true,
    format: 'umd',
    name: 'graphviz',
    exports: 'named',
    file: 'dist/index.min.js'
  },
  plugins: [
    commonjs(), terser()
  ]
};
