export { default as AdminHeader } from '../..\\components\\admin_includes\\AdminHeader.vue'
export { default as AdminSidebar } from '../..\\components\\admin_includes\\AdminSidebar.vue'
export { default as DieticianSidebar } from '../..\\components\\includes\\DieticianSidebar.vue'
export { default as Footer } from '../..\\components\\includes\\Footer.vue'
export { default as Header } from '../..\\components\\includes\\Header.vue'
export { default as Sidebar } from '../..\\components\\includes\\Sidebar.vue'
export { default as DieticianHeader } from '../..\\components\\dietician_includes\\DieticianHeader.vue'

export const LazyAdminHeader = import('../..\\components\\admin_includes\\AdminHeader.vue' /* webpackChunkName: "components/admin-header" */).then(c => c.default || c)
export const LazyAdminSidebar = import('../..\\components\\admin_includes\\AdminSidebar.vue' /* webpackChunkName: "components/admin-sidebar" */).then(c => c.default || c)
export const LazyDieticianSidebar = import('../..\\components\\includes\\DieticianSidebar.vue' /* webpackChunkName: "components/dietician-sidebar" */).then(c => c.default || c)
export const LazyFooter = import('../..\\components\\includes\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\includes\\Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazySidebar = import('../..\\components\\includes\\Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => c.default || c)
export const LazyDieticianHeader = import('../..\\components\\dietician_includes\\DieticianHeader.vue' /* webpackChunkName: "components/dietician-header" */).then(c => c.default || c)
