import firebase from 'firebase'

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

const DB = connection.database()
const AUTH = connection.auth()

export default function install(Vue, { router }) {
  AUTH.onAuthStateChanged((user) => {
    if (!user) {
      router.push({ name: 'auth.signin' })
    } else {
      router.push({ name: 'home.container' })
    }
  })

  Object.defineProperties(Vue.prototype, {
    $db: {
      get() {
        return DB
      }
    },
    $auth: {
      get() {
        return AUTH
      }
    }
  })
}
