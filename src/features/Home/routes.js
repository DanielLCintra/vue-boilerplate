import HomeContainer from './HomeContainer.vue'
import HomeList from './HomeList.vue'

const routes = {
  path: '',
  name: 'home.container',
  component: HomeContainer,
  children: [
    {
      path: '/home/:id',
      name: 'home.list',
      component: HomeList,
      props: route => ({
        id: route.params.id
      })
    }
  ]
}

export default routes
