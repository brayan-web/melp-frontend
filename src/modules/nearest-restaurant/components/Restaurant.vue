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
    return {
      restaurant: places,
      address
    };
  },
};
</script>
