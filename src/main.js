import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './registerServiceWorker'
import firebase from './plugins/firebase'
import './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(firebase, { router })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
