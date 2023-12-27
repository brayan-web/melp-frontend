<template>
  <Header/>
  <div class="container mt-10 flex justify-between items-center mx-auto p-3">
    <div>
  <div class="z-10">
    <Listbox v-model="selectedPerson">
      <div class="relative mt-1">
        
        <ListboxButton
          class="relative w-full cursor-default rounded-lg bg-[#7367F0] py-3 px-10 text-left hover:shadow-[0_10px_20px_-0px_rgba(115,103,240,0.3)] sm:text-sm"
        >
          <span class="block truncate text-white">Order by Raiting</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.88" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke="#D0D2D6" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>

          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute z-10 mt-1  w-full  rounded-md bg-white py-1 text-base shadow-lg  focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="person in people"
              :key="person.name"
              :value="person"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-[#7267f07d] text-gray-900' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-10 pr-4',
                ]"
              >
                <span
                class="flex "
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ person.name }}
                  
                  <div class="flex items-center ml-2" v-for="item in person.value">
                <svg class="w-5 h-5 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                   <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
              </div>
                  
                  </span
                >
                
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600"
                >
                  <!-- <CheckIcon class="h-5 w-5" aria-hidden="true" /> -->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>

                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
    </div>

   



  

  <div class="z-10">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center items-center rounded-md bg-[#7367F0] px-10 py-3 text-sm font-medium text-white hover:shadow-[0_10px_20px_-0px_rgba(115,103,240,0.3)]"
        >
          Order By A Z
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.88" stroke="currentColor" class="w-6 h-6 -mr-1 ml-2">
            <path stroke-linecap="round" stroke-linejoin="round" stroke="#D0D2D6" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-[#7267f07d] text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
               
                A &#8594; Z
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-[#7267f07d]  text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
              
                Z &#8594; A
              </button>
            </MenuItem>
          </div>
        
        </MenuItems>
      </transition>
    </Menu>
  </div>
  </div>
  <Restaurants/>
</template>

<script>
import Header from './components/Header.vue';
import Restaurants from './components/Restaurants.vue';
import { ref } from 'vue';
import { Menu, MenuButton, MenuItem, MenuItems,  Listbox,ListboxLabel,ListboxButton,ListboxOptions,ListboxOption, } from '@headlessui/vue'
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
    Restaurants,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
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


