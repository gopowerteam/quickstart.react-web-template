const {
    override,
    fixBabelImports,
    addLessLoader,
    addWebpackAlias,
    addDecoratorsLegacy
} = require("customize-cra");

const path = require("path");

function setWebpackConfig() {
    // build时设置publicPath
    return config => {
        if (process.env.BROWSER !== "none" && process.env.REACT_APP_BASEHREF) {
            config.output.publicPath = `${process.env.REACT_APP_BASEHREF || ""}/`;
        }
        return config;
    };
}

module.exports = override(
    addDecoratorsLegacy(),
    addWebpackAlias({
        "~": path.resolve(__dirname, "src"),
        "@": path.resolve(__dirname, "src")
    }),
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true
    }),
    addLessLoader({
        lessOptions: {
            modifyVars: {
                'primary-color': '#DB0011',
                'link-color': '#00847F',
                'error-color': '#DB0011'
            },
            javascriptEnabled: true,
        },
    }),

    // setWebpackConfig(),
);