export default {
    name: "nereast-restaurant",
    component: () =>
      import(
        /*webpackChunkName: "NereastRestaurant"*/ "@/modules/nearest-restaurant/layouts/NereastRestaurantsLayout.vue"
      ),
  };
  