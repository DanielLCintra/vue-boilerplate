import AuthContainer from './AuthContainer.vue'
import AuthSignIn from './AuthSignIn.vue'
import AuthSignUp from './AuthSignUp.vue'

const routes = {
  path: '/auth',
  component: AuthContainer,
  children: [
    {
      path: '/signin',
      name: 'auth.signin',
      component: AuthSignIn
    },
    {
      path: '/signup',
      name: 'auth.signup',
      component: AuthSignUp
    }
  ]
}

export default routes
