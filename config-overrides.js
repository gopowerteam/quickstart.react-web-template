const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const {
    override,
    fixBabelImports,
    addLessLoader,
    addWebpackAlias,
    addDecoratorsLegacy,
    overrideDevServer
} = require('customize-cra')


const proxyConfig = require('./proxy.config')

function setWebpackConfig() {
    return config => {
        // 生产模式配置
        if (process.env.NODE_ENV === 'production') {
            // 关闭sourceMap
            config.devtool = false;
            // 部署根路径
            config.output.publicPath = '/';
            // 添加代码优化支持
            config.optimization.splitChunks = {
                minSize: 2000,
                maxSize: 500000
            }
        }
        return config
    }
}

function devProxyServer(config) {
    return {
        ...config,
        host: '0.0.0.0',
        proxy: proxyConfig,
        disableHostCheck: true
    }
}

module.exports = {
    webpack: override(
        setWebpackConfig(),
        addDecoratorsLegacy(),
        addWebpackAlias({
            '~': path.resolve(__dirname, 'src'),
            '@': path.resolve(__dirname, 'src')
        }),
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true
        }),
        addLessLoader({
            lessOptions: {
                javascriptEnabled: true
            }
        })

    ),
    devServer: overrideDevServer(
        devProxyServer
    )
}
