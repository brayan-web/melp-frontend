<template>
  <div>
      <ul class="w-full">
   <li class="pb-3 sm:pb-4 px-5 border-t border-gray-500 border-b hover:bg-[#7267f035]">
      <div class="flex  space-x-4 rtl:space-x-reverse">
         <div class="flex-1 min-w-0 text-left">
            <p class="text-lg font-medium text-gray-300 truncate">
              {{ restaurant.name }}
            </p>
            <p class="text-md text-gray-500 truncate">
               {{ restaurant.vicinity  }}
            </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-gray-300 ">
       
          <p class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          class="-mt-0.5 h-5 w-5 text-yellow-400"
        >
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd"
          ></path>
        </svg>
        {{ restaurant.rating }}
      </p>
         </div>
      </div>
   </li>
      </ul>
  </div>
     
</template>

<script>
import { ref, watch, watchEffect } from "vue";

export default {
  props: {
    place: {
      type: Object,
    },
  },
  setup(props) {
    const places = ref(props.place);
    watchEffect(() => {
      places.value = props.place;
    }); 
    return {
      restaurant: places,
    };
  },
};
</script>
