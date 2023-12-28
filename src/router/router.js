import { createRouter, createWebHashHistory } from "vue-router";
import NereastRestaurantRouter from '../modules/nearest-restaurant/router';
import MelpRestarantsRouter from '../modules/melp-restaurants/router'
const routes = [
    { path: '/', ...MelpRestarantsRouter },
   
    {path: '/nereast-restaurants', ...NereastRestaurantRouter}
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  export default router;