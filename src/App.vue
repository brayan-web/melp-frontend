<template>
  <Header/>
  <Restaurants/>
</template>

<script>
import Header from './components/Header.vue';
import Restaurants from './components/Restaurants.vue';

export default {
  name: 'App',
  components: {
    Header,
    Restaurants
  }
}
</script>


