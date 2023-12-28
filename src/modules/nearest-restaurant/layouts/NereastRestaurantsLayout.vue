<template>
  <div class="flex w-[1380px] justify-center items-center mx-auto h-full">
    <div class="w-1/3">
      <div
        class="w-full list-box text-center overflow-hidden overflow-y-scroll h-screen"
      >
        <div class="mx-auto w-[90%] mt-10" v-show="alert.set">
          <Alert :alert="alert" />
        </div>
        <span class="text-gray-300">
          Please select a site on the map, a range and a classification</span
        >
        <div class="mx-auto w-[90%]">
          <label
            for="radius"
            class="text-left block mb-2 text-sm font-medium text-gray-300 dark:text-white"
            >Enter radius</label
          >
          <input
            v-model="radius"
            type="number"
            id="radius"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="radius"
            required
            @input="validatePositiveNumber"
          />
        </div>
        <div class="z-10 w-[90%] mx-auto mt-5">
          <label
            for="raiting"
            class="text-left block mb-2 text-sm font-medium text-gray-300 dark:text-white"
            >Select a raiting</label
          >

          <Listbox id="raiting" v-model="selectedRaiting">
            <div class="relative mt-1">
              <ListboxButton
                class="relative w-full cursor-default rounded-lg bg-[#7367F0] py-3 px-10 text-left hover:shadow-[0_10px_20px_-0px_rgba(115,103,240,0.3)] sm:text-sm"
              >
                <span class="block truncate text-white">{{
                  selectedRaiting.name
                }}</span>
                <span
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.88"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#D0D2D6"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </ListboxButton>

              <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions
                  class="absolute z-10 mt-1 w-full rounded-md bg-[#283046] py-1 text-base shadow-lg focus:outline-none sm:text-sm"
                >
                  <ListboxOption
                    v-slot="{ active, selected }"
                    v-for="rate in raiting"
                    :key="rate.name"
                    :value="rate"
                    as="template"
                  >
                    <li
                      :class="[
                        active
                          ? 'bg-[#7267f07d] text-gray-900'
                          : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-10 pr-4',
                      ]"
                    >
                      <span
                        class="flex"
                        :class="[
                          selected ? 'font-medium' : 'font-normal',
                          'block truncate',
                        ]"
                        >{{ rate.name }}

                        <div
                          class="flex items-center ml-2"
                          v-for="item in rate.value"
                        >
                          <svg
                            class="w-5 h-5 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path
                              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                            />
                          </svg>
                        </div>
                      </span>

                      <span
                        v-if="selected"
                        class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>

      <div>
        <button
          @click="fetchPlaces()"
          class="py-2 w-auto mb-5 mt-10 px-10 bg-amber-600 text-white uppercase font-medium"
        >
          search places
        </button>
      </div>
        
        <Restaurant v-for="(place, index) in places" :place="place" :key="index"/>
    </div>
    </div>
    <div class="w-2/3">
      <div  id="map" class="h-screen w-full relative"></div>
    </div>
  </div>
</template>

<script>
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import Alert from "../../../components/Alert.vue";
import Restaurant from '../components/Restaurant.vue'
import { ref, onMounted } from "vue";
import { Loader } from "@googlemaps/js-api-loader";
const raiting = [
  { name: "Order By Raiting", with: "", value: "" },
  { name: "5", with: "100", value: 5 },
  { name: "4", with: "80", value: 4 },
  { name: "3", with: "60", value: 3 },
  { name: "2", with: "40", value: 2 },
  { name: "1", with: "20", value: 1 },
];
export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    Alert,
    Restaurant
  },
  setup(_, { emit }) {
    const map = ref();
    const marker = ref(null);
    const placesService = ref(null);
    const radius = ref(null);
    const selectedRaiting = ref(raiting[0]);
    const positiveNumber = ref(0)
    const places = ref([])
    const alert = ref({
      message: "",
      type: "",
      set: false,
    });
   
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
        });
      });
    };
  
  
    onMounted(() => {
      initMap();
    });
    const getCoordinates = () => {
      const position = marker.value.getPosition();
      const location = {
         lat: position.lat(),
         lng: position.lng(),
      }
      return location;
    };
    const searchNearbyPlaces = (lat, lng) => {
      const request = {
        location: { lat: lat, lng: lng },
        radius: "500",
        type: ["restaurant"],
      };

      placesService.value = new google.maps.places.PlacesService(map.value);

      // Realiza la búsqueda de lugares cercanos
      placesService.value.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            places.value = results
        }
      });
    };
 

    const fetchPlaces = () => {
       const { lat, lng }  = getCoordinates();
       if (radius.value !== null && selectedRaiting.value.name !== "") {
           searchNearbyPlaces(lat, lng);
      } else {
        alert.value.message =
          "The fields are required, please make sure to fill them out.";
        alert.value.type = "danger";
        alert.value.set = true;

        setTimeout(() => {
          alert.value.set = false;
        }, 3000);
      }
    };
   const validatePositiveNumber = () => {
      // Validar y asegurarse de que el número sea positivo
      if (positiveNumber.value < 0) {
        // Si es negativo, establecerlo como cero o cualquier otro valor predeterminado
        positiveNumber.value = 0;
      }
    }
    return {
      map,
      marker,
      initMap,
      getCoordinates,
      raiting,
      alert,
      radius,
      selectedRaiting,
      fetchPlaces,
      places,
      positiveNumber,
      validatePositiveNumber
    };
  },
};
</script>


<style>

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

