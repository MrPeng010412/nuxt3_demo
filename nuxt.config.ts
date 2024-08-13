// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // 服务器端可以获取使用
    apiSecret: "服务器端:我是nuxt.config.ts配置文件下的的数据",
    // 客户端获取使用
    public: {
      apiBase: "客户端:我是nuxt.config.ts配置文件下的的数据",
    },
  },
  app: {
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "加速器",
      meta: [{ name: "description", content: "加速器" }],
    },
  },

  compatibilityDate: "2024-08-07"
});