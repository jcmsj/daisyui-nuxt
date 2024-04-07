
# daisyUI nuxt
* Never repeat yourself again in integrating daisyui in your nuxt project

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Nuxt module for daisyUI for doing amazing things.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/@jcsj/daisyui-nuxt?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- daisyUI integration

## Quick Setup

Install the module to your Nuxt application:

```bash
npx nuxi module add @jcsj/daisyui-nuxt @nuxtjs/tailwindcss
npm add daisyui
```

That's it! You can now use daisyUI nuxt in your Nuxt app ✨
### Why two commands? 
* It let's you use your daisyui & tailwindcss version w/o waiting for a new release of this.
* <details>
  <summary>Including those two here actually fails</summary>
    1. I discovered that Nuxt's installModule does not "add" @nuxtjs/tailwindcss
    2. `requiring` daisyui does not work outside of the playground
  </details>

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@jcsj/daisyui-nuxt/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@jcsj/daisyui-nuxt

[npm-downloads-src]: https://img.shields.io/npm/dm/@jcsj/daisyui-nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/@jcsj/daisyui-nuxt

[license-src]: https://img.shields.io/npm/l/@jcsj/daisyui-nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@jcsj/daisyui-nuxt

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
