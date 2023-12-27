<template>
    <div class="flex ">
        <div class="w-1/3"></div>
        <div class="w-2/3">
          <RecomendationsPlace/>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import RecomendationsPlace from './RecomendationsPlace.vue';
export default{
  components: {
    RecomendationsPlace
  },
    setup(){
        const fetchPlaces = async() => {
          try {
            const resp = await axios.get('/maps/api/place/nearbysearch/json',
            {
              params:{
                location: '19.69107912318623, -100.54913070627157',
                radius: 1000,
                key: 'AIzaSyBZsp-0nujrptZmsbuOTkjqq8R-X4G8FQE',
                type: ['restaurant']
              }  
            });
            console.log(resp.data.results)
          } catch (error) {
            console.error('Error al obtener lugares:', error);
          }
        }

        onMounted(() => {
            console.log("hola")
           fetchPlaces(); 
        })
    }
}  
    
    
</script>