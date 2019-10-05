import Vue from 'vue'
import localforage from 'localforage'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './registerServiceWorker'
import 'vuetify/dist/vuetify.min.css'
import eventBus from './plugins/event-bus'
import vuetify from './plugins/vuetify'

Vue.prototype.$lf = localforage
Vue.config.productionTip = false

Vue.use(eventBus)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
