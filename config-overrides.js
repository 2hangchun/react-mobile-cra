const { override, fixBabelImports, addPostcssPlugins, addWebpackAlias, addLessLoader } = require("customize-cra")

const path = require('path')
module.exports = override(
    // antd-mobile
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: { "@brand-primary": "black" },  //要修改的颜色可以使用英文或者16进制
        }
    }),
    addPostcssPlugins([
        require("postcss-px-to-viewport")({
            unitToConvert: 'px',
            viewportWidth: 750,
            unitPrecision: 5,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: undefined,
            include: undefined,
            landscape: false,
            landscapeUnit: 'vw',
            landscapeWidth: 568
        })
    ]),
    addWebpackAlias({
        '@': path.resolve(__dirname, "src"),
    }),


)