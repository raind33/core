import { defineConfig } from 'rollup'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'

const libName = pkg.name
const extensions = ['.js', '.ts'];
export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: `dist/${libName}.cjs.js`,
      // commonjs格式
      format: 'cjs',
      // plugins: [
      //   getBabelOutputPlugin({
      //     confi
      //   })
      // ]
    },
    {
      file: `dist/${libName}.es.js`,
      // es module
      format: 'es',
    },
    {
      file: `dist/${libName}.umd.js`,
      // 通用格式可以用于node和browser等多个场景
      format: 'umd',
      // 外部引入的模块需要显式告知使用的三方模块的命名，结合下面的external使用
      // globals: {
      //   '@antv/g6': 'G6',
      // },
      // 注意如果是umd格式的bundle的话name属性是必须的，这时可以在script标签引入后window下会挂载该属性的变量来使用你的类库方法
      name: libName,
    },

  ],
  // 解释同globals配置，这个配置的意思是我简单处理把外部依赖不打包进bundle中，而是前置引入或者作为依赖安装使用
  // external: ['@antv/g6'],
  plugins: [
    typescript({
      sourceMap: false,
    }),
    babel({
      babelrc: false,
      babelHelpers: 'runtime',
      extensions,
      exclude: [/\/core-js\//]
    }),
    commonjs(),
    resolve(),
    
  ]
})