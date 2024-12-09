const {
    defineConfig
} = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        port: process.env.VUE_APP_FRONTEND_PORT || 3030,
        host: '0.0.0.0'
    }
})
