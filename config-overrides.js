const {
    override,
    fixBabelImports,
    addLessLoader,
    addWebpackAlias,
    addDecoratorsLegacy,
    overrideDevServer
} = require('customize-cra')

const path = require('path')
const proxyConfig = require('./proxy.config')
const { config } = require('process')

function setWebpackConfig() {
    // build时设置publicPath
    return config => {
        if (process.env.BROWSER !== 'none' && process.env.REACT_APP_BASEHREF) {
            config.output.publicPath = `${
                process.env.REACT_APP_BASEHREF || ''
                }/`
        }
        return config
    }
}

function devProxyServer(config){
    return {
        ...config,
        host: '0.0.0.0',
        proxy: proxyConfig,
        disableHostCheck: true
    }
}

module.exports = {
    webpack: override(
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
