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
  }
};
