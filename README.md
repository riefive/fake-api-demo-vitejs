# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

---

## Step of Intalling Tailwind CSS for Vitejs Vue

- https://tailwindcss.com/docs/guides/vite#vue
- https://tailwindcss.com/docs/installation/using-postcss
- https://daisyui.com/docs/install/
- https://stackblitz.com/edit/daisyui-vite/?file=package.json

### Step 1

```
$ npm create vite@latest starter-vitejs-tailwind -- --template vue
$ cd starter-vitejs-tailwind
```

### Step 2

```
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init
$ npm audit fix --force
```

### Step 3

```
# Edit postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

### Step 4

```
# Edit tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 5

```
# Create src/style.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 6

```
# Create or Edit src/components/HelloWorld.vue
<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</template>

# Run the application
$ npm run dev
```
