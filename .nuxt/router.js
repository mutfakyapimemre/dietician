import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _01e68cbe = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _801c42ca = () => interopDefault(import('..\\pages\\auth\\index.vue' /* webpackChunkName: "pages/auth/index" */))
const _12665cc4 = () => interopDefault(import('..\\pages\\calorie\\index.vue' /* webpackChunkName: "pages/calorie/index" */))
const _be664a86 = () => interopDefault(import('..\\pages\\criterias\\index.vue' /* webpackChunkName: "pages/criterias/index" */))
const _6fb708e6 = () => interopDefault(import('..\\pages\\dietician-login\\index.vue' /* webpackChunkName: "pages/dietician-login/index" */))
const _6fe57bdc = () => interopDefault(import('..\\pages\\dietician-panel\\index.vue' /* webpackChunkName: "pages/dietician-panel/index" */))
const _a42b9890 = () => interopDefault(import('..\\pages\\dieticians\\index.vue' /* webpackChunkName: "pages/dieticians/index" */))
const _458208a8 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _456acf2d = () => interopDefault(import('..\\pages\\panel\\index.vue' /* webpackChunkName: "pages/panel/index" */))
const _805b1eb0 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _3c330696 = () => interopDefault(import('..\\pages\\recipe-categories\\index.vue' /* webpackChunkName: "pages/recipe-categories/index" */))
const _8377afa8 = () => interopDefault(import('..\\pages\\recipes\\index.vue' /* webpackChunkName: "pages/recipes/index" */))
const _84253b72 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _837e302c = () => interopDefault(import('..\\pages\\dietician-panel\\consultants\\index.vue' /* webpackChunkName: "pages/dietician-panel/consultants/index" */))
const _72f0be7d = () => interopDefault(import('..\\pages\\dietician-panel\\recipes\\index.vue' /* webpackChunkName: "pages/dietician-panel/recipes/index" */))
const _67b43e00 = () => interopDefault(import('..\\pages\\panel\\blog-categories\\index.vue' /* webpackChunkName: "pages/panel/blog-categories/index" */))
const _09fc365a = () => interopDefault(import('..\\pages\\panel\\criterias\\index.vue' /* webpackChunkName: "pages/panel/criterias/index" */))
const _468fbd16 = () => interopDefault(import('..\\pages\\panel\\diseases\\index.vue' /* webpackChunkName: "pages/panel/diseases/index" */))
const _632029d3 = () => interopDefault(import('..\\pages\\panel\\doctors\\index.vue' /* webpackChunkName: "pages/panel/doctors/index" */))
const _5d3a8ad1 = () => interopDefault(import('..\\pages\\panel\\e-diet\\index.vue' /* webpackChunkName: "pages/panel/e-diet/index" */))
const _7a8f80c9 = () => interopDefault(import('..\\pages\\panel\\e-diet-foods\\index.vue' /* webpackChunkName: "pages/panel/e-diet-foods/index" */))
const _c02d1f94 = () => interopDefault(import('..\\pages\\panel\\exercise-categories\\index.vue' /* webpackChunkName: "pages/panel/exercise-categories/index" */))
const _ecf7cc68 = () => interopDefault(import('..\\pages\\panel\\exercises\\index.vue' /* webpackChunkName: "pages/panel/exercises/index" */))
const _3c17b95b = () => interopDefault(import('..\\pages\\panel\\nutrients\\index.vue' /* webpackChunkName: "pages/panel/nutrients/index" */))
const _08c0caa8 = () => interopDefault(import('..\\pages\\panel\\recipe-categories\\index.vue' /* webpackChunkName: "pages/panel/recipe-categories/index" */))
const _357e807c = () => interopDefault(import('..\\pages\\panel\\recipes\\index.vue' /* webpackChunkName: "pages/panel/recipes/index" */))
const _0c063bea = () => interopDefault(import('..\\pages\\panel\\settings\\index.vue' /* webpackChunkName: "pages/panel/settings/index" */))
const _cca672ea = () => interopDefault(import('..\\pages\\panel\\slides\\index.vue' /* webpackChunkName: "pages/panel/slides/index" */))
const _33b1e5bf = () => interopDefault(import('..\\pages\\panel\\users\\index.vue' /* webpackChunkName: "pages/panel/users/index" */))
const _38ab0a11 = () => interopDefault(import('..\\pages\\profile\\password-update.vue' /* webpackChunkName: "pages/profile/password-update" */))
const _56f3b61e = () => interopDefault(import('..\\pages\\profile\\social-media.vue' /* webpackChunkName: "pages/profile/social-media" */))
const _048a3a29 = () => interopDefault(import('..\\pages\\dietician-panel\\consultants\\add\\index.vue' /* webpackChunkName: "pages/dietician-panel/consultants/add/index" */))
const _0d288776 = () => interopDefault(import('..\\pages\\dietician-panel\\recipes\\add\\index.vue' /* webpackChunkName: "pages/dietician-panel/recipes/add/index" */))
const _11637ed3 = () => interopDefault(import('..\\pages\\panel\\blog-categories\\add\\index.vue' /* webpackChunkName: "pages/panel/blog-categories/add/index" */))
const _529fe6e0 = () => interopDefault(import('..\\pages\\panel\\criterias\\add\\index.vue' /* webpackChunkName: "pages/panel/criterias/add/index" */))
const _404dc07d = () => interopDefault(import('..\\pages\\panel\\diseases\\add\\index.vue' /* webpackChunkName: "pages/panel/diseases/add/index" */))
const _0ba4c1e0 = () => interopDefault(import('..\\pages\\panel\\doctors\\add\\index.vue' /* webpackChunkName: "pages/panel/doctors/add/index" */))
const _b3b956ac = () => interopDefault(import('..\\pages\\panel\\e-diet-foods\\add\\index.vue' /* webpackChunkName: "pages/panel/e-diet-foods/add/index" */))
const _571560bc = () => interopDefault(import('..\\pages\\panel\\e-diet\\add\\index.vue' /* webpackChunkName: "pages/panel/e-diet/add/index" */))
const _feb1fd46 = () => interopDefault(import('..\\pages\\panel\\exercise-categories\\add\\index.vue' /* webpackChunkName: "pages/panel/exercise-categories/add/index" */))
const _2b7634f2 = () => interopDefault(import('..\\pages\\panel\\exercises\\add\\index.vue' /* webpackChunkName: "pages/panel/exercises/add/index" */))
const _2221a758 = () => interopDefault(import('..\\pages\\panel\\nutrients\\add\\index.vue' /* webpackChunkName: "pages/panel/nutrients/add/index" */))
const _7b96f0a7 = () => interopDefault(import('..\\pages\\panel\\recipe-categories\\add\\index.vue' /* webpackChunkName: "pages/panel/recipe-categories/add/index" */))
const _9120ed5e = () => interopDefault(import('..\\pages\\panel\\recipes\\add\\index.vue' /* webpackChunkName: "pages/panel/recipes/add/index" */))
const _3e0d33ae = () => interopDefault(import('..\\pages\\panel\\settings\\add\\index.vue' /* webpackChunkName: "pages/panel/settings/add/index" */))
const _7a955828 = () => interopDefault(import('..\\pages\\panel\\slides\\add\\index.vue' /* webpackChunkName: "pages/panel/slides/add/index" */))
const _cab0cd18 = () => interopDefault(import('..\\pages\\panel\\users\\add\\index.vue' /* webpackChunkName: "pages/panel/users/add/index" */))
const _730afaa9 = () => interopDefault(import('..\\pages\\dietician-panel\\consultants\\update\\_id.vue' /* webpackChunkName: "pages/dietician-panel/consultants/update/_id" */))
const _7e3656fc = () => interopDefault(import('..\\pages\\dietician-panel\\recipes\\update\\_id.vue' /* webpackChunkName: "pages/dietician-panel/recipes/update/_id" */))
const _015a4b3f = () => interopDefault(import('..\\pages\\panel\\blog-categories\\update\\_id.vue' /* webpackChunkName: "pages/panel/blog-categories/update/_id" */))
const _30aa365c = () => interopDefault(import('..\\pages\\panel\\criterias\\update\\_id.vue' /* webpackChunkName: "pages/panel/criterias/update/_id" */))
const _a08f8256 = () => interopDefault(import('..\\pages\\panel\\diseases\\update\\_id.vue' /* webpackChunkName: "pages/panel/diseases/update/_id" */))
const _4f4169d2 = () => interopDefault(import('..\\pages\\panel\\doctors\\update\\_id.vue' /* webpackChunkName: "pages/panel/doctors/update/_id" */))
const _04953048 = () => interopDefault(import('..\\pages\\panel\\e-diet-foods\\update\\_id.vue' /* webpackChunkName: "pages/panel/e-diet-foods/update/_id" */))
const _befad760 = () => interopDefault(import('..\\pages\\panel\\e-diet\\update\\_id.vue' /* webpackChunkName: "pages/panel/e-diet/update/_id" */))
const _7a8719f5 = () => interopDefault(import('..\\pages\\panel\\exercise-categories\\update\\_id.vue' /* webpackChunkName: "pages/panel/exercise-categories/update/_id" */))
const _44a5bb0b = () => interopDefault(import('..\\pages\\panel\\exercises\\update\\_id.vue' /* webpackChunkName: "pages/panel/exercises/update/_id" */))
const _0861335a = () => interopDefault(import('..\\pages\\panel\\nutrients\\update\\_id.vue' /* webpackChunkName: "pages/panel/nutrients/update/_id" */))
const _44d5d82a = () => interopDefault(import('..\\pages\\panel\\recipe-categories\\update\\_id.vue' /* webpackChunkName: "pages/panel/recipe-categories/update/_id" */))
const _1ccf9081 = () => interopDefault(import('..\\pages\\panel\\recipes\\update\\_id.vue' /* webpackChunkName: "pages/panel/recipes/update/_id" */))
const _24814ea9 = () => interopDefault(import('..\\pages\\panel\\settings\\update\\_id.vue' /* webpackChunkName: "pages/panel/settings/update/_id" */))
const _8338c6ec = () => interopDefault(import('..\\pages\\panel\\slides\\update\\_id.vue' /* webpackChunkName: "pages/panel/slides/update/_id" */))
const _beccf684 = () => interopDefault(import('..\\pages\\panel\\users\\update\\_id.vue' /* webpackChunkName: "pages/panel/users/update/_id" */))
const _34145226 = () => interopDefault(import('..\\pages\\profile\\dietician-applyment\\_id.vue' /* webpackChunkName: "pages/profile/dietician-applyment/_id" */))
const _4aa67fa8 = () => interopDefault(import('..\\pages\\calorie\\_id.vue' /* webpackChunkName: "pages/calorie/_id" */))
const _66449304 = () => interopDefault(import('..\\pages\\recipe-categories\\_id.vue' /* webpackChunkName: "pages/recipe-categories/_id" */))
const _2a5374d8 = () => interopDefault(import('..\\pages\\recipes\\_id.vue' /* webpackChunkName: "pages/recipes/_id" */))
const _219e6783 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _01e68cbe,
    name: "about"
  }, {
    path: "/auth",
    component: _801c42ca,
    name: "auth"
  }, {
    path: "/calorie",
    component: _12665cc4,
    name: "calorie"
  }, {
    path: "/criterias",
    component: _be664a86,
    name: "criterias"
  }, {
    path: "/dietician-login",
    component: _6fb708e6,
    name: "dietician-login"
  }, {
    path: "/dietician-panel",
    component: _6fe57bdc,
    name: "dietician-panel"
  }, {
    path: "/dieticians",
    component: _a42b9890,
    name: "dieticians"
  }, {
    path: "/login",
    component: _458208a8,
    name: "login"
  }, {
    path: "/panel",
    component: _456acf2d,
    name: "panel"
  }, {
    path: "/profile",
    component: _805b1eb0,
    name: "profile"
  }, {
    path: "/recipe-categories",
    component: _3c330696,
    name: "recipe-categories"
  }, {
    path: "/recipes",
    component: _8377afa8,
    name: "recipes"
  }, {
    path: "/search",
    component: _84253b72,
    name: "search"
  }, {
    path: "/dietician-panel/consultants",
    component: _837e302c,
    name: "dietician-panel-consultants"
  }, {
    path: "/dietician-panel/recipes",
    component: _72f0be7d,
    name: "dietician-panel-recipes"
  }, {
    path: "/panel/blog-categories",
    component: _67b43e00,
    name: "panel-blog-categories"
  }, {
    path: "/panel/criterias",
    component: _09fc365a,
    name: "panel-criterias"
  }, {
    path: "/panel/diseases",
    component: _468fbd16,
    name: "panel-diseases"
  }, {
    path: "/panel/doctors",
    component: _632029d3,
    name: "panel-doctors"
  }, {
    path: "/panel/e-diet",
    component: _5d3a8ad1,
    name: "panel-e-diet"
  }, {
    path: "/panel/e-diet-foods",
    component: _7a8f80c9,
    name: "panel-e-diet-foods"
  }, {
    path: "/panel/exercise-categories",
    component: _c02d1f94,
    name: "panel-exercise-categories"
  }, {
    path: "/panel/exercises",
    component: _ecf7cc68,
    name: "panel-exercises"
  }, {
    path: "/panel/nutrients",
    component: _3c17b95b,
    name: "panel-nutrients"
  }, {
    path: "/panel/recipe-categories",
    component: _08c0caa8,
    name: "panel-recipe-categories"
  }, {
    path: "/panel/recipes",
    component: _357e807c,
    name: "panel-recipes"
  }, {
    path: "/panel/settings",
    component: _0c063bea,
    name: "panel-settings"
  }, {
    path: "/panel/slides",
    component: _cca672ea,
    name: "panel-slides"
  }, {
    path: "/panel/users",
    component: _33b1e5bf,
    name: "panel-users"
  }, {
    path: "/profile/password-update",
    component: _38ab0a11,
    name: "profile-password-update"
  }, {
    path: "/profile/social-media",
    component: _56f3b61e,
    name: "profile-social-media"
  }, {
    path: "/dietician-panel/consultants/add",
    component: _048a3a29,
    name: "dietician-panel-consultants-add"
  }, {
    path: "/dietician-panel/recipes/add",
    component: _0d288776,
    name: "dietician-panel-recipes-add"
  }, {
    path: "/panel/blog-categories/add",
    component: _11637ed3,
    name: "panel-blog-categories-add"
  }, {
    path: "/panel/criterias/add",
    component: _529fe6e0,
    name: "panel-criterias-add"
  }, {
    path: "/panel/diseases/add",
    component: _404dc07d,
    name: "panel-diseases-add"
  }, {
    path: "/panel/doctors/add",
    component: _0ba4c1e0,
    name: "panel-doctors-add"
  }, {
    path: "/panel/e-diet-foods/add",
    component: _b3b956ac,
    name: "panel-e-diet-foods-add"
  }, {
    path: "/panel/e-diet/add",
    component: _571560bc,
    name: "panel-e-diet-add"
  }, {
    path: "/panel/exercise-categories/add",
    component: _feb1fd46,
    name: "panel-exercise-categories-add"
  }, {
    path: "/panel/exercises/add",
    component: _2b7634f2,
    name: "panel-exercises-add"
  }, {
    path: "/panel/nutrients/add",
    component: _2221a758,
    name: "panel-nutrients-add"
  }, {
    path: "/panel/recipe-categories/add",
    component: _7b96f0a7,
    name: "panel-recipe-categories-add"
  }, {
    path: "/panel/recipes/add",
    component: _9120ed5e,
    name: "panel-recipes-add"
  }, {
    path: "/panel/settings/add",
    component: _3e0d33ae,
    name: "panel-settings-add"
  }, {
    path: "/panel/slides/add",
    component: _7a955828,
    name: "panel-slides-add"
  }, {
    path: "/panel/users/add",
    component: _cab0cd18,
    name: "panel-users-add"
  }, {
    path: "/dietician-panel/consultants/update/:id",
    component: _730afaa9,
    name: "dietician-panel-consultants-update-id"
  }, {
    path: "/dietician-panel/recipes/update/:id",
    component: _7e3656fc,
    name: "dietician-panel-recipes-update-id"
  }, {
    path: "/panel/blog-categories/update/:id",
    component: _015a4b3f,
    name: "panel-blog-categories-update-id"
  }, {
    path: "/panel/criterias/update/:id?",
    component: _30aa365c,
    name: "panel-criterias-update-id"
  }, {
    path: "/panel/diseases/update/:id?",
    component: _a08f8256,
    name: "panel-diseases-update-id"
  }, {
    path: "/panel/doctors/update/:id?",
    component: _4f4169d2,
    name: "panel-doctors-update-id"
  }, {
    path: "/panel/e-diet-foods/update/:id",
    component: _04953048,
    name: "panel-e-diet-foods-update-id"
  }, {
    path: "/panel/e-diet/update/:id",
    component: _befad760,
    name: "panel-e-diet-update-id"
  }, {
    path: "/panel/exercise-categories/update/:id",
    component: _7a8719f5,
    name: "panel-exercise-categories-update-id"
  }, {
    path: "/panel/exercises/update/:id?",
    component: _44a5bb0b,
    name: "panel-exercises-update-id"
  }, {
    path: "/panel/nutrients/update/:id?",
    component: _0861335a,
    name: "panel-nutrients-update-id"
  }, {
    path: "/panel/recipe-categories/update/:id",
    component: _44d5d82a,
    name: "panel-recipe-categories-update-id"
  }, {
    path: "/panel/recipes/update/:id?",
    component: _1ccf9081,
    name: "panel-recipes-update-id"
  }, {
    path: "/panel/settings/update/:id?",
    component: _24814ea9,
    name: "panel-settings-update-id"
  }, {
    path: "/panel/slides/update/:id?",
    component: _8338c6ec,
    name: "panel-slides-update-id"
  }, {
    path: "/panel/users/update/:id?",
    component: _beccf684,
    name: "panel-users-update-id"
  }, {
    path: "/profile/dietician-applyment/:id?",
    component: _34145226,
    name: "profile-dietician-applyment-id"
  }, {
    path: "/calorie/:id",
    component: _4aa67fa8,
    name: "calorie-id"
  }, {
    path: "/recipe-categories/:id?",
    component: _66449304,
    name: "recipe-categories-id"
  }, {
    path: "/recipes/:id",
    component: _2a5374d8,
    name: "recipes-id"
  }, {
    path: "/",
    component: _219e6783,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
