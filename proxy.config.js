module.exports = {
    '/api': {
        target: 'http://api.ym.xbt.cn/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/api'
        }
    }
}
