export { default as AdminAdminheader } from '../..\\components\\admin\\Adminheader.vue'
export { default as AdminAdminsidebar } from '../..\\components\\admin\\Adminsidebar.vue'
export { default as DieticianDieticianheader } from '../..\\components\\dietician\\Dieticianheader.vue'
export { default as DieticianDieticiansidebar } from '../..\\components\\dietician\\Dieticiansidebar.vue'
export { default as IncludesDieticiansidebarprofile } from '../..\\components\\includes\\Dieticiansidebarprofile.vue'
export { default as IncludesFooter } from '../..\\components\\includes\\Footer.vue'
export { default as IncludesHeader } from '../..\\components\\includes\\Header.vue'
export { default as IncludesSidebar } from '../..\\components\\includes\\Sidebar.vue'

export const LazyAdminAdminheader = import('../..\\components\\admin\\Adminheader.vue' /* webpackChunkName: "components/admin-adminheader" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminAdminsidebar = import('../..\\components\\admin\\Adminsidebar.vue' /* webpackChunkName: "components/admin-adminsidebar" */).then(c => wrapFunctional(c.default || c))
export const LazyDieticianDieticianheader = import('../..\\components\\dietician\\Dieticianheader.vue' /* webpackChunkName: "components/dietician-dieticianheader" */).then(c => wrapFunctional(c.default || c))
export const LazyDieticianDieticiansidebar = import('../..\\components\\dietician\\Dieticiansidebar.vue' /* webpackChunkName: "components/dietician-dieticiansidebar" */).then(c => wrapFunctional(c.default || c))
export const LazyIncludesDieticiansidebarprofile = import('../..\\components\\includes\\Dieticiansidebarprofile.vue' /* webpackChunkName: "components/includes-dieticiansidebarprofile" */).then(c => wrapFunctional(c.default || c))
export const LazyIncludesFooter = import('../..\\components\\includes\\Footer.vue' /* webpackChunkName: "components/includes-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyIncludesHeader = import('../..\\components\\includes\\Header.vue' /* webpackChunkName: "components/includes-header" */).then(c => wrapFunctional(c.default || c))
export const LazyIncludesSidebar = import('../..\\components\\includes\\Sidebar.vue' /* webpackChunkName: "components/includes-sidebar" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
export function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
