import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../components/Home.vue';
import NereastRestaurantRouter from '../modules/nearest-restaurant/router'
const routes = [
    { path: '/', component: Home, name: 'home' },
   
    {path: '/nereast-restaurants', ...NereastRestaurantRouter}
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  export default router;