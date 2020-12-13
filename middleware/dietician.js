export default function (context) {
  if(!context.store.getters.isAuthenticated || !context.store.getters.isDietician || context.store.getters.loggedInUser.status!== 'dietician'){
    context.redirect("/dietician-login")
  }
}
