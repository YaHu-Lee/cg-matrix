const babel = require("@rollup/plugin-babel").babel
const nodeResolve = require("@rollup/plugin-node-resolve").nodeResolve

module.exports = {
    // 打包入口
    input: 'index.js',
    // 插件
    plugins: [
        nodeResolve(),
        babel({
            exclude: 'node_modules/**',
          })
    ],
    // 输出配置
    output: {
        file: 'dist/bundle.js',
        format: 'umd',
        name: 'bundle'
    }
}