import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  AdminAdminheader: () => import('../..\\components\\admin\\Adminheader.vue' /* webpackChunkName: "components/admin-adminheader" */).then(c => wrapFunctional(c.default || c)),
  AdminAdminsidebar: () => import('../..\\components\\admin\\Adminsidebar.vue' /* webpackChunkName: "components/admin-adminsidebar" */).then(c => wrapFunctional(c.default || c)),
  DieticianDieticianheader: () => import('../..\\components\\dietician\\Dieticianheader.vue' /* webpackChunkName: "components/dietician-dieticianheader" */).then(c => wrapFunctional(c.default || c)),
  DieticianDieticiansidebar: () => import('../..\\components\\dietician\\Dieticiansidebar.vue' /* webpackChunkName: "components/dietician-dieticiansidebar" */).then(c => wrapFunctional(c.default || c)),
  IncludesDieticiansidebarprofile: () => import('../..\\components\\includes\\Dieticiansidebarprofile.vue' /* webpackChunkName: "components/includes-dieticiansidebarprofile" */).then(c => wrapFunctional(c.default || c)),
  IncludesFooter: () => import('../..\\components\\includes\\Footer.vue' /* webpackChunkName: "components/includes-footer" */).then(c => wrapFunctional(c.default || c)),
  IncludesHeader: () => import('../..\\components\\includes\\Header.vue' /* webpackChunkName: "components/includes-header" */).then(c => wrapFunctional(c.default || c)),
  IncludesSidebar: () => import('../..\\components\\includes\\Sidebar.vue' /* webpackChunkName: "components/includes-sidebar" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
