module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import 
                "@/scss/_variable.scss";
                `            }
        }
    }
}