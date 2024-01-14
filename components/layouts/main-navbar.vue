<script setup>
const sitebar = ref(true)
const responsive = ref(null)

function responsiveFn() {
    responsive.value = window.innerWidth
}
onMounted(()=>{
    responsiveFn()
    window.addEventListener('resize',()=>{
        responsiveFn()
    })
})
onBeforeUnmount(()=>{
    window.removeEventListener('resize',()=>{
        responsiveFn()
    })
})
</script>

<template>
    <div class="overflow-hidden fixed top-0 left-0 right-0 bg-grey-100 dark:bg-gray-900 z-50 transition-all duration-500"
    :class="responsive<740&&sitebar?'h-[70px] sm:h-[10vh] md:h-[10vh] xl:h-[10vh] pt-3 sm:pt-3 md:pt-0 xl:pt-0':'h-full sm:h-full md:h-[10vh] xl:h-[10vh] pt-3 sm:pt-3 md:pt-0 xl:pt-0'">
        <div class="container  mx-auto flex flex-col sm:flex-col md:flex-row xl:flex-row items-center h-full justify-between">
            <div class="w-full sm:w-full md:w-auto xl:w-auto flex justify-between">
              <NuxtLink to="/" class="flex items-center pl-2">
                <NuxtImg src="/logo.svg" width="100" />
            </NuxtLink>  
            <button
            @click="sitebar=!sitebar"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
            </div>
            
            <div class="w-full sm:w-full md:w-auto xl:w-auto  h-full sm:h-full md:h-auto xl:h-auto flex items-center  md:space-x-4 xl:space-x-4 flex-col sm:flex-col md:flex-row xl:flex-row">
                <NuxtLink to="/auth" class="py-4 sm:py-4 md:py-0 xl:py-0 my-1 sm:my-2 md:my-0 xl:my-0 flex justify-center transition-all rounded-md w-full sm:w-full md:w-auto xl:w-auto hover:dark:bg-gray-500 sm:hover:dark:bg-gray-500 md:hover:dark:bg-gray-900 xl:hover:dark:bg-gray-900">
                    Home 
                </NuxtLink>
                <NuxtLink to="/auth" class="py-4 sm:py-4 md:py-0 xl:py-0 my-1 sm:my-2 md:my-0 xl:my-0 flex justify-center transition-all rounded-md w-full sm:w-full md:w-auto xl:w-auto hover:dark:bg-gray-500 sm:hover:dark:bg-gray-500 md:hover:dark:bg-gray-900 xl:hover:dark:bg-gray-900">
                    About
                </NuxtLink>
                <NuxtLink to="/auth" class="py-4 sm:py-4 md:py-0 xl:py-0 my-1 sm:my-2 md:my-0 xl:my-0 flex justify-center transition-all rounded-md w-full sm:w-full md:w-auto xl:w-auto hover:dark:bg-gray-500 sm:hover:dark:bg-gray-500 md:hover:dark:bg-gray-900 xl:hover:dark:bg-gray-900">
                    Services
                </NuxtLink>
                <NuxtLink to="/auth" class="py-4 sm:py-4 md:py-0 xl:py-0 my-1 sm:my-2 md:my-0 xl:my-0 flex justify-center transition-all rounded-md w-full sm:w-full md:w-auto xl:w-auto hover:dark:bg-gray-500 sm:hover:dark:bg-gray-500 md:hover:dark:bg-gray-900 xl:hover:dark:bg-gray-900">
                    Prising
                </NuxtLink>
                <SharedAnimationBtn title="Buyurtma berish" />
                <SharedDropdown class="mt-3 sm:mt-3 md:mt-0 xl:mt-0 w-auto">
                    <NuxtImg src="/lang.svg" width="30" /> 
                    <span class="ml-2">Ru</span>
                </SharedDropdown>
            </div>
        </div>
    </div>
</template>