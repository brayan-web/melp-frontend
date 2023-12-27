<template>
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
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-[#283046] shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-[#7267f07d] text-white' : 'text-gray-400',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
               
                A &#8594; Z
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-[#7267f07d]  text-white' : 'text-gray-400',
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
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems,  Listbox,ListboxLabel,ListboxButton,ListboxOptions,ListboxOption, } from '@headlessui/vue'

export default{
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
    Places
  },
}


</script>