<template>
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-3">
      <div
        class="relative flex w-full flex-col rounded-xl bg-[#283046] bg-clip-border text-gray-300 shadow-lg"
      >
        <div
          class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40"
        >
          <img
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
            alt="ui/ux review check"
          />
          <div
            class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"
          ></div>
          <button
            class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span
              class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-3">
            <h5
              class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900"
            >
              {{ restaurant.name }}
            </h5>
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
         
        
          <div class="inline-flex flex-wrap items-center gap-3 group">
            <p class="flex">
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
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <span class="ml-2 text-md"
                > {{ restaurant.address.street  }}, {{ restaurant.address.city  }} {{ restaurant.address.state  }}</span
              >
            </p>

            <p class="flex">
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>

              <span class="ml-2 text-md">{{ restaurant.contact.phone }}</span>
            </p>
          </div>
          <div class="mt-5">
            <button
            @click="openModal(restaurant)"
              class="text-[#65FA9E] px-5 py-2.5 border-[#65FA9E] border hover:text-white hover:bg-[#408168] flex items-center rounded-lg"
            >
              See more

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
          </div>
          <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                More details
              </DialogTitle>
              <div class="mt-2">
                <p class="text-md text-gray-500 py-2">
                 Name: <span class="font-semibold">
                    {{ detailPlace.name }}
                 </span> 
                </p>

                <p class="text-md text-gray-500 py-2">
                 Site: <span class="font-semibold">
                    {{ detailPlace.contact.site }}
                 </span> 
                </p>

                
                <p class="text-md text-gray-500 py-2">
                 email: <span class="font-semibold">
                    {{ detailPlace.contact.email }}
                 </span> 
                </p>

                
                <p class="text-md text-gray-500 py-2">
                 Phone: <span class="font-semibold">
                    {{ detailPlace.contact.phone }}
                 </span> 
                </p>

                <p class="text-md text-gray-500 py-2">
                 Address: <span class="font-semibold">
                    {{ detailPlace.address.street  }}, {{ detailPlace.address.city  }} {{ detailPlace.address.state  }}
                 </span> 
                </p>
              </div>

              <div class="mt-5 flex justify-between items-center ">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Got it, thanks!
                </button>

                <div>
    <a href="#" class="flex items-center justify-center w-full px-4 py-2  space-x-3 text-sm text-center bg-blue-500 text-white transition-colors duration-200 transform border rounded-lg dark:text-gray-300 dark:border-gray-300 hover:bg-gray-600 dark:hover:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg>
        <span class="text-sm text-white dark:text-gray-200">Shared whit Facebook</span></a>
</div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
        </div>
      </div>
    </div>
 
</template>

<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import { ref } from 'vue'

export default {
    props:{
        restaurant:{
            type: Object
        }
    },
    components: {
 TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
    },
    data(){
        return {
        isOpen: false,
        detailPlace: {
            name: '',
            contact: {
                site: '',
                email: '',
                phone: ''
            },
            address: {
                street: '',
                city: '',
                state: '',
            }
        }

        }
    },
    methods: {

             closeModal() {
            this.isOpen = false
            
            },
             openModal(restaurant) {
            this.isOpen = true
            // const { name, contact, address } =  this.detailPlace
            // const { site, email, phone } = contact
            // const { street, city, state } = address
            this.detailPlace.name = restaurant.name;
            this.detailPlace.contact.site = restaurant.contact.site
            this.detailPlace.contact.email = restaurant.contact.email
            this.detailPlace.contact.phone = restaurant.contact.phone
            this.detailPlace.address.street = restaurant.address.street
            this.detailPlace.address.city = restaurant.address.city
            this.detailPlace.address.state = restaurant.address.state

            }
    }

}
</script>



