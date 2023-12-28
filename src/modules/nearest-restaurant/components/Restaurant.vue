<template>
  <div>
    <div v-if="JSON.stringify(restaurant) === '{}'">
      <h1>No se encontraron resultados</h1>
    </div>
    <div v-else>
      <div
        class="h-auto border border-gray-600 text-left py-10 hover:bg-[#7267f09a]"
      >
        <h1 class="text-white">{{ restaurant.name }}</h1>
        <h1 class="text-white">{{ adress }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { Loader } from "@googlemaps/js-api-loader";

export default {
  props: {
    restaurant: {
      type: Object,
    },
  },
  setup(props) {
    const places = ref(props.restaurant);
    const address = ref(null);
    watch(() => {
      places.value = props.restaurant;
    });

    const getAddress = () => {
        const loader = new Loader({
          apiKey: "AIzaSyBZsp-0nujrptZmsbuOTkjqq8R-X4G8FQE",
        });
  
        loader.load().then(async () => {
          const { Map } = await google.maps.importLibrary("maps");
        const coordinates = {
        lat: places.geometry.location.lat,
        lng: places.geometry.location.lng,
      };
          const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: coordinates }, (results, status) => {
        if (status === 'OK' && results.length > 0) {
          address.value = results[0].formatted_address;
        } else {
          console.error('No se pudo obtener la dirección');
        }
      });
        });
    }
    getAddress();
    
    return {
      restaurant: places,
      address
    };
  },
};
</script>
