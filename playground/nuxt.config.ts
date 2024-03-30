export default defineNuxtConfig({
  modules: ['../src/module'],
  "@jcsj/daisyui-nuxt": {
      daisyui: {
        // the module should be able to merge the default themes with the user's themes
        themes: [
          "cyberpunk",
        ],
      }
  },
  devtools: { enabled: true }
})
