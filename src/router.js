import Vue from 'vue'
import Router from 'vue-router'
import AuthRoutes from './features/Auth/routes'
import HomeRoutes from './features/Home/routes'

Vue.use(Router)

export default new Router({
  routes: [
    AuthRoutes,
    HomeRoutes
  ]
})
