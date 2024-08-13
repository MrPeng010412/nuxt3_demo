export default defineNuxtRouteMiddleware((to, from) => {
  console.log('要去哪个页面:' + to.path)
  console.log('来自哪个页面:' + from.path)
})
