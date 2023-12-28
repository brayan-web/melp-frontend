export default {
    name: "melp-restaurant",
    component: () =>
      import(
        /*webpackChunkName: "MelRestaurant"*/ "@/modules/melp-restaurants/layouts/RestaurantLayout.vue"
      ),
  };
  