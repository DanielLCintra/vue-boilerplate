import Vue from 'vue'
import localforage from 'localforage'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './registerServiceWorker'
import './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from './plugins/firebase'
import Toast from './components/Toast.vue'
import Loading from './components/Loading.vue'
import ConfirmDialog from './components/ConfirmDialog.vue'
import eventBus from './plugins/event-bus'

Vue.prototype.$db = firebase.DB
Vue.prototype.$auth = firebase.AUTH
Vue.prototype.$lf = localforage
Vue.config.productionTip = false

Vue.use(eventBus)

function registerGlobalComponents() {
  Vue.component('confirm-dialog', ConfirmDialog)
  Vue.component('loading', Loading)
  Vue.component('toast', Toast)
}

registerGlobalComponents()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
