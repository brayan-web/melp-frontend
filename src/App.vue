<template>
  <Header/>
  <router-view/>
  <transition name="fade">
    <div id="pagetop" class="fixed bottom-[10px] cursor-pointer right-[20px] bg-orange-600 rounded-[50%]" v-show="showButton"  @click="scrollTop">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
           stroke="#ffffff"
           stroke-width="1" stroke-linecap="square" stroke-linejoin="arcs">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </div>
  </transition>
</template>

<script>
import Header from './components/Header.vue';
import useRestaurant from './modules/melp-restaurants/composables/useRestaurants.js'
import { onMounted, ref, onUnmounted } from 'vue';
export default {
  name: 'App',
  components: {
    Header,
  },

  setup(){
      const { getInfoRestaurants } =  useRestaurant();
      getInfoRestaurants();
      const showButton = ref(false)

      const handleScroll = () => {
        showButton.value = window.scrollY > 100
      }

      const scrollTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }

      onMounted(() => {
        window.addEventListener('scroll', handleScroll)
      })

      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
      })
      
   

      return {
        showButton,
        scrollTop
      }
  }

}
</script>

<style>

#pagetop{
  transition: all .2s ease-in;
}
</style>


