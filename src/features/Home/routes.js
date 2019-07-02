import HomeContainer from './HomeContainer.vue'
import HomeList from './HomeList.vue'

const routes = {
  path: '',
  name: 'home.container',
  component: HomeContainer,
  children: [
    {
      path: '/home',
      name: 'home.list',
      component: HomeList
    }
  ]
}

export default routes
