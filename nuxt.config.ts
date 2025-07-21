import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  app: {
    head: {
      script: [{ src: "https://telegram.org/js/telegram-web-app.js" }],
    },
  },
  typescript: {
    typeCheck: true,
  },
  alias: {
    "~": "./src",
  },
  css: ["./src/shared/css/main.css"],
  dir: {
    pages: "./src/pages",
    layouts: "./src/shared/layouts",
    plugins: "./src/shared/plugins",
  },

  components: {
    dirs: ["./src/components", "./src/shared/ui"],
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["tame-rabbits-raise.loca.lt"],
    },
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "shadcn-nuxt",
    "@formkit/auto-animate/nuxt",
  ],
  autoAnimate: {},
  runtimeConfig: {
    public: {
      PROD_URL: import.meta.env.PROD_URL || "http://localhost:4200/api",
    },
  },
});
