import Vue from 'vue'
import { rtdbPlugin } from 'vuefire'
import firebase from 'firebase'

Vue.use(rtdbPlugin)

const config = {
  apiKey: 'AIzaSyDfj-sew404dalq_bgjcbqhlnZi_iaFnRQ',
  authDomain: 'siga5-aba3b.firebaseapp.com',
  databaseURL: 'https://siga5-aba3b.firebaseio.com',
  projectId: 'siga5-aba3b',
  storageBucket: '',
  messagingSenderId: '393541182398',
  appId: '1:393541182398:web:452c42c0a0609032'
}

const connection = firebase.initializeApp(config)

export default { DB: connection.database(), AUTH: connection.auth() }
