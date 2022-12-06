import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
import About from '@/views/About/index.vue'
import NotFoundComponent from '@/views/Errors/NotFoundComponent.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/about', component: About, name: 'about' },
    { path: '/:pathMatch(.*)*', component: NotFoundComponent, name: 'not-found' }
  ]
})

export default router
