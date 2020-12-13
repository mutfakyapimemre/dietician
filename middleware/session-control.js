export default function(context){
    if(process.client){
        context.store.dispatch("initLogin")
    } else {
        context.store.dispatch("initLogin", context.req)
    }
}
