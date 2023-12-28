<template>
  <Header/>
  <router-view/>
</template>

<script>
import Header from './components/Header.vue';
import useRestaurant from './modules/melp-restaurants/composables/useRestaurants.js'
export default {
  name: 'App',
  components: {
    Header,
  },

  setup(){
      const { getInfoRestaurants } =  useRestaurant();


      getInfoRestaurants();
  }

}
</script>


