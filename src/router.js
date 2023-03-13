import { createRouter, createWebHashHistory } from 'vue-router'
import AboutMe from './components/AboutMe'
import FileSort from './components/FileSort'

const _routes = [
    {
      path: '/',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/filesort',
      name: 'FileSort',
      component: FileSort
    }
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes: _routes
  })
  
  export default router
