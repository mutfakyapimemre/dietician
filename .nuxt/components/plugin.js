import Vue from 'vue'

const components = {
  AdminHeader: () => import('../..\\components\\admin_includes\\AdminHeader.vue' /* webpackChunkName: "components/admin-header" */).then(c => c.default || c),
  AdminSidebar: () => import('../..\\components\\admin_includes\\AdminSidebar.vue' /* webpackChunkName: "components/admin-sidebar" */).then(c => c.default || c),
  DieticianHeader: () => import('../..\\components\\dietician_includes\\DieticianHeader.vue' /* webpackChunkName: "components/dietician-header" */).then(c => c.default || c),
  DieticianSidebar: () => import('../..\\components\\dietician_includes\\DieticianSidebar.vue' /* webpackChunkName: "components/dietician-sidebar" */).then(c => c.default || c),
  IncludesDieticianSidebarProfile: () => import('../..\\components\\includes\\DieticianSidebarProfile.vue' /* webpackChunkName: "components/ıncludes-dietician-sidebar-profile" */).then(c => c.default || c),
  IncludesFooter: () => import('../..\\components\\includes\\Footer.vue' /* webpackChunkName: "components/ıncludes-footer" */).then(c => c.default || c),
  IncludesHeader: () => import('../..\\components\\includes\\Header.vue' /* webpackChunkName: "components/ıncludes-header" */).then(c => c.default || c),
  IncludesSidebar: () => import('../..\\components\\includes\\Sidebar.vue' /* webpackChunkName: "components/ıncludes-sidebar" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
