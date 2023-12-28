<template>
    <div>
      <div ref="map" id="map" class="h-screen w-full relative"></div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { Loader } from "@googlemaps/js-api-loader";
  export default {
    setup(_, {emit}) {
      const map = ref(null);
      const marker = ref(null);
      const placesService = ref(null);
  
      const initMap = () => {
        const loader = new Loader({
          apiKey: process.env.VUE_APP_API_KEY,
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
     const  searchNearbyPlaces = () => {
      // Define el tipo de lugar y la ubicación para buscar lugares cercanos
      const position = marker.value.getPosition();

      const request = {
        location: { lat: position.lat(), lng: position.lng() },
        radius: '500', // Radio en metros
        type: ['restaurant'], // Puedes cambiar esto según tus necesidades
      };
      
      placesService.value = new google.maps.places.PlacesService(map.value);

      // Realiza la búsqueda de lugares cercanos
     placesService.value.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          for (let i = 0; i < results.length; i++) {
            // Puedes acceder a los detalles del lugar en results[i]
            console.log(results[i]);
          }
        }
      });
    }

    const exampleEvent = () => {
      const obj = { id: 1, name: "brayan"}
      emit("event-example", obj)
    }

      const getCoordinates = () => {
        const position = marker.value.getPosition();
        emit("get-coordinates", {
          lat: position.lat(),
          lng: position.lng(),
        });
        searchNearbyPlaces();
      };
      return { map, marker, initMap, getCoordinates, exampleEvent };
    },
  };
  </script>
  