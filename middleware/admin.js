export default function (context) {
  if(!context.store.getters.isAuthenticated || !context.store.getters.isAdmin || context.store.getters.loggedInUser.status!== 'admin'){
    context.redirect("/auth")
  }
}
