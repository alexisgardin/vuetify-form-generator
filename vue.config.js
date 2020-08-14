module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "/vuetify-form-generator/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/styles/variables.scss";`
      }
    }
  }
};
