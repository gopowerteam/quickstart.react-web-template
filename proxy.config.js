module.exports = {
    '/api': {
        target: 'http://119.3.17.129:8080/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    }
}
