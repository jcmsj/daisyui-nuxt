import { defineNuxtModule, createResolver, addComponentsDir, installModule, addTemplate } from '@nuxt/kit'
import { join } from 'pathe'

// Module options TypeScript interface definition
export interface ModuleOptions {
  daisyui: {
    /**
     * @see https://daisyui.com/docs/themes/
     */
    themes: string[]
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@jcsj/daisyui-nuxt',
    configKey: '@jcsj/daisyui-nuxt'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    daisyui: {
      themes: [
        "night",
        "light",
      ],
    },
  },
  async setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`

    const twConfigTemplate = addTemplate({
      filename: 'daisyui-plugin.tw-config.cjs',
      write: true,
      getContents: () => `module.exports = { plugins: [require('daisyui')] }`
    })

    await installModule('@nuxtjs/tailwindcss', {
    // module configuration
      exposeConfig: true,
      configPath: [twConfigTemplate.dst, join(nuxt.options.srcDir, 'tailwind.config')],
      cssPath: 
      [
        resolver.resolve("./runtime/assets/tailwind.css"), 
        {injectPosition: "first"}
      ],
      viewer: false,
      config: {
        daisyui: options.daisyui,
        content: {
          files: [
            resolver.resolve('./runtime/components/**/*.{vue,mjs,ts}'),
            resolver.resolve('./runtime/*.{mjs,js,ts}')
          ]
        },
      }
    })
  }
})
