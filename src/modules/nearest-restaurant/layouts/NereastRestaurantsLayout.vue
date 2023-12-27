<template>
    <div class="flex w-full h-full">
        <div class="w-1/3">
            <RestaurantList :coordinates="coordinates"/>
        </div>
        <div class="w-2/3">
            <Map @get-coordinates="getCoordinates"/>
        </div>
    </div>
</template>



<script>
import { ref } from 'vue';
import RestaurantList from '../components/RestaurantList.vue';
import Map from '../components/Map.vue'
export default {
    components: {
        RestaurantList,
        Map
    },
    emit:['get-coordinates'],
    setup() {
    const coordinates = ref(null);
       
        
    const getCoordinates = (coords) => {
     coordinates.value = coords;
    };


    return {
        coordinates,
        getCoordinates
    }
 }
}

</script>