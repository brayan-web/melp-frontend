import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../components/Home.vue';
import Places from '../components/Places.vue'
const routes = [
    { path: '/', component: Home, name: 'home' },
    {path: '/recomendations', component: Places, name: 'recomendations'}
  
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  export default router;