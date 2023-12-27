<template>
  <div>
    <div ref="map" id="map" class="h-screen w-full relative">-</div>

  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { Loader } from "@googlemaps/js-api-loader";
export default {
  setup(_, {emit}) {
    const map = ref(null);
    const marker = ref(null);

    const initMap = () => {
      const loader = new Loader({
        apiKey: "AIzaSyBZsp-0nujrptZmsbuOTkjqq8R-X4G8FQE",
      });

      loader.load().then(async () => {
        const { Map } = await google.maps.importLibrary("maps");

        map.value = new Map(document.getElementById("map"), {
          center: { lat: 19.699079268437128, lng: -100.56955840932802 },
          zoom: 8,
        });

        marker.value = new google.maps.Marker({
          position: { lat: 19.699079268437128, lng: -100.56955840932802 },
          map: map.value,
          draggable: true,
        });

        marker.value.addListener("dragend", () => {
          const position = marker.value.getPosition();
          marker.value.setPosition(position);
          getCoordinates();
        });
      });
    };

    onMounted(() => {
      initMap();
    });
    const getCoordinates = () => {
      const position = marker.value.getPosition();
      emit("get-coordinates", {
        lat: position.lat(),
        lng: position.lng(),
      });
    };
    return { map, marker, initMap, getCoordinates };
  },
};
</script>
