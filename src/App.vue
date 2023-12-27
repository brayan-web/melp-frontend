<template>
  <Header/>
  <router-view/>
</template>

<script>
import Header from './components/Header.vue';

import { ref } from 'vue';
const people = [
  { name: '', with: '100', value: 5 },
  { name: '', with: '80', value:4 },
  { name: '', with: '60', value:3 },
  { name: '', with: '40', value:2 },
  { name: '', with: '20', value:1 },
  
]
export default {
  name: 'App',
  components: {
    Header,
  },

  setup() {
  
    const selectedPerson = ref(people[0])
   

    return{
      people,
      selectedPerson,
      
    }
  }
}
</script>


