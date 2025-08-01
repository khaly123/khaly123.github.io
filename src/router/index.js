import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Skills from '../pages/Skills.vue'
import Projects from '../pages/Projects.vue'
import Contact from '../pages/Contact.vue'
import Landing from '../pages/Landing.vue'

const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/skills', component: Skills },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
  { path: '/', component: Landing },
]

export default createRouter({
  history: createWebHistory(),
  routes
})