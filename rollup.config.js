import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'lib/graphviz.js',
  output: [
    {
      sourcemap: true,
      format: 'esm',
      file: 'dist/index.min.mjs',
      plugins: [
        terser()
      ]
    },
    {
      sourcemap: true,
      format: 'esm',
      file: 'dist/index.mjs'
    },
    {
      sourcemap: true,
      format: 'umd',
      name: 'graphvizBuilder',
      exports: 'named',
      file: 'dist/index.min.js',
      plugins: [
        terser()
      ]
    },
    {
      sourcemap: true,
      format: 'umd',
      name: 'graphvizBuilder',
      exports: 'named',
      file: 'dist/index.js'
    },
  ],
  plugins: [
    commonjs()
  ]
};
