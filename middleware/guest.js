export default function (context) {
  if(!context.store.getters.isAuthenticated){
    context.redirect("/login?url="+decodeURIComponent(context.route.fullPath))
  }
}
