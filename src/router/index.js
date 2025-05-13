import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import AboutUs from '@/components/AboutUs.vue';
import Projects from '@/components/Projects.vue';
import Skills from '@/components/Skills.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about-us', name: 'AboutUs', component: AboutUs },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/skills', name: 'Skills', component: Skills }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
