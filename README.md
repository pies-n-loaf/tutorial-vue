# Tutorial: Vue.js 3

[![Deploy to GH Pages](https://github.com/pies-n-loaf/tutorial-vue/actions/workflows/main.yml/badge.svg)](https://github.com/pies-n-loaf/tutorial-vue/actions/workflows/main.yml)

This project includes my implementation of [Tania Rascia's Vue tutorial](https://www.taniarascia.com/getting-started-with-vue/) and a color converter of my own imagining. The tutorial was a great introduction to Vue, thoughtfully walking me through each step, but it didn't give me a great grasp of the deeper concepts or a sense of _why_ you would use Vue over React (for example).

And, frankly, the "employee" subject matter wasn't cute enough for me to get excited about it.

So I started the [**Color Converter**](https://pies-n-loaf.github.io/tutorial-vue/)! This part of the project takes in either a hex code or RGB, then uses [The Color API](https://www.thecolorapi.com/) to convert the value into either RGB or hex as appropriate. You can also pin or unpin colors to a list. 

## Tools

In addition to [Vue.js](https://vuejs.org/), I used this project to learn more about:

* [Vue Router](https://router.vuejs.org/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/) (and I used the plugin for [Vue forms](https://tailwindcss-forms.vercel.app/))
* [Headless UI](https://headlessui.dev/), specifically [popovers](https://headlessui.dev/vue/popover)
* [CSS Shapes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Shapes) (for the repeated circles in the background)
* [Writing to the user's clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard)

I thought about experimenting with [editable SVG](https://v2.vuejs.org/v2/cookbook/editable-svg-icons.html) using [heroicons](https://heroicons.com/), but my motivation petered out before I could get to it. Maybe someday! 🐱‍👓

## Setup

I used `yarn` to manage dependencies and `vue create` to set up my project. I kept the generated source code as `example_src/` so I could reference it.

To install dependencies and setup your environment: 

```
yarn install
```

To serve the app with hot-reloading for development:

```
yarn dev
```

To compile and serve the app as if for production:

```
yarn build && yarn serve
```

## Notes

### Shortcuts

* `v-bind:employees` = `:employees`
* `v-on:input` = `@input`
* `v-slot`/`x` ([slots documentation](https://v3.vuejs.org/guide/component-slots.html#slot-content))

### Vue Router Bummer

I found out that GitHub pages doesn't support Single Page Apps (SPAs), which is a major bummer with using `vue-router`. Basically, it tries to look for a dedicated HTML file for each path, but all of my pages are served out from the `index.html`. Welp! 

This issue would prevent anyone from navigating to the [Employees](https://pies-n-loaf.github.io/tutorial-vue/employees) page with the URL alone - they would be **required** to click on the link within the app to get there. 

This was wholly unacceptable to me, so I used [Learn Vue's advice](https://learnvue.co/2020/09/how-to-deploy-your-vue-app-to-github-pages/#setting-up-your-project) to copy the index page to `404.html` in my deploy workflow. I then added a simple `NotFound` component for the router to display for any mistyped URL, and everything became perfectly splendid.

### Extended Learning

* [Mozilla's Vue Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started) - make a task app
* [Learn Vue's Tutorial](https://learnvue.co/2020/12/setting-up-your-first-vue3-project-vue-3-0-release/#getting-started) - search the Vue docs
* [Matthias Hager's Tutorial](https://matthiashager.com/complete-vuejs-application-tutorial) - make a budgeting app ([with LocalStorage](https://matthiashager.com/complete-vuejs-application-tutorial/localstorage-vuejs)!)
* [5 feature ideas](https://tutorialzine.com/2016/03/5-practical-examples-for-learning-vue-js)