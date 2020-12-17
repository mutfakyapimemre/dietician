export { default as Footer } from '../..\\components\\includes\\Footer.vue'
export { default as Header } from '../..\\components\\includes\\Header.vue'
export { default as DieticianHeader } from '../..\\components\\dietician_includes\\Dietician_Header.vue'
export { default as DieticianSidebar } from '../..\\components\\dietician_includes\\Dietician_Sidebar.vue'
export { default as AdminHeader } from '../..\\components\\admin_includes\\Admin_Header.vue'
export { default as AdminSidebar } from '../..\\components\\admin_includes\\Admin_Sidebar.vue'

export const LazyFooter = import('../..\\components\\includes\\Footer.vue' /* webpackChunkName: "components_includes/Footer" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\includes\\Header.vue' /* webpackChunkName: "components_includes/Header" */).then(c => c.default || c)
export const LazyDieticianHeader = import('../..\\components\\dietician_includes\\Dietician_Header.vue' /* webpackChunkName: "components_dietician_includes/Dietician_Header" */).then(c => c.default || c)
export const LazyDieticianSidebar = import('../..\\components\\dietician_includes\\Dietician_Sidebar.vue' /* webpackChunkName: "components_dietician_includes/Dietician_Sidebar" */).then(c => c.default || c)
export const LazyAdminHeader = import('../..\\components\\admin_includes\\Admin_Header.vue' /* webpackChunkName: "components_admin_includes/Admin_Header" */).then(c => c.default || c)
export const LazyAdminSidebar = import('../..\\components\\admin_includes\\Admin_Sidebar.vue' /* webpackChunkName: "components_admin_includes/Admin_Sidebar" */).then(c => c.default || c)
