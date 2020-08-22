// eslint-disable-next-line @typescript-eslint/no-var-requires
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath:
    process.env.NODE_ENV === "production" ? "/vuetify-form-generator/" : "/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/styles/variables.scss";`
      }
    }
  },

  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin({
        languages: ["javascript", "css", "html", "typescript"]
      })
    ]
  }
};
