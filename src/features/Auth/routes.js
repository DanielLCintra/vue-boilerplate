import AuthContainer from './AuthContainer.vue'
import AuthSignIn from './AuthSignIn.vue'

const routes = {
  path: '/auth',
  component: AuthContainer,
  children: [
    {
      path: '',
      name: 'auth.signin',
      component: AuthSignIn
    }
  ]
}

export default routes
