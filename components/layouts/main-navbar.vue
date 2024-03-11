<script setup>
const { locale, t } = useI18n()
const sitebar = ref(true)
const responsive = ref(null)
function capitalizeFirstLetter(text) {
    return  `${text.charAt(0).toUpperCase()}${text.slice(1)}`
}

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

<template class="scroll-smooth">
    <div class="overflow-hidden bg-[#1E212C] fixed top-0 left-0 right-0 dark:bg-gray-900 z-50 transition-all duration-500"
    :class="responsive<800&&sitebar?'h-[70px] sm:h-[80px] md:h-[10vh] xl:h-[10vh] pt-3 sm:pt-3 md:pt-0 xl:pt-0 ':'h-full sm:h-full md:h-full lg:h-[10vh] xl:h-[10vh]  pt-3 sm:pt-3 md:pt-0 xl:pt-0'">
        <div class="container px-3 sm:px-10 md:px-10 xl:px-auto flex flex-col sm:flex-col md:flex-row xl:flex-row items-center h-full justify-between ">
            <div class="w-full sm:w-full md:w-auto xl:w-auto flex justify-between">
              <NuxtLink to="/" class="flex items-center">
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
                <NuxtLink  @click="sitebar=true" to="#home" class="py-4 sm:py-4 md:py-2 xl:py-0 my-1 mt-5 sm:my-2 sm:mt-5 md:my-2 xl:my-0 flex justify-center transition-all  duration-700 rounded-md w-full sm:w-full md:w-auto xl:w-auto hover:dark:bg-gray-500 sm:hover:dark:bg-gray-500 md:hover:dark:bg-gray-900 xl:hover:dark:bg-gray-900">
                    {{capitalizeFirstLetter(t("navbar.home"))}}
                </NuxtLink>
                <NuxtLink @click="sitebar=true" to="#about" class="py-4 sm:py-4 md:py-2 xl:py-0 my-1 sm:my-2 md:my-2 xl:my-0 flex justify-center transition-all  duration-700 rounded-md w-full sm:w-full md:w-auto xl:w-auto hover:dark:bg-gray-500 sm:hover:dark:bg-gray-500 md:hover:dark:bg-gray-900 xl:hover:dark:bg-gray-900">
                    {{capitalizeFirstLetter(t("navbar.about"))}}
                </NuxtLink>
                <NuxtLink @click="sitebar=true" to="#services" class="py-4 sm:py-4 md:py-2 xl:py-0 my-1 sm:my-2 md:my-2 xl:my-0 flex justify-center transition-all  duration-700 rounded-md w-full sm:w-full md:w-auto xl:w-auto hover:dark:bg-gray-500 sm:hover:dark:bg-gray-500 md:hover:dark:bg-gray-900 xl:hover:dark:bg-gray-900">
                    {{capitalizeFirstLetter(t("navbar.services"))}}
                </NuxtLink>
                <NuxtLink @click="sitebar=true" to="#partfoliyo" class="py-4 sm:py-4 md:py-2 xl:py-0 my-1 sm:my-2 md:my-2 xl:my-0 flex justify-center transition-all  duration-700 rounded-md w-full sm:w-full md:w-auto xl:w-auto hover:dark:bg-gray-500 sm:hover:dark:bg-gray-500 md:hover:dark:bg-gray-900 xl:hover:dark:bg-gray-900">
                    {{capitalizeFirstLetter(t("navbar.partfolio"))}}
                </NuxtLink>
                <BorderedBtn :title="capitalizeFirstLetter(t('navbar.ordering'))"/>
                <SharedDropdown class="mt-3 sm:mt-3 md:mt-0 xl:mt-0 w-auto">
                    <NuxtImg src="/lang.svg" width="30" /> 
                    <span class="ml-2">{{ locale.toUpperCase() }} </span>
                </SharedDropdown>
            </div>
        </div>
    </div>
</template>
<style>
html {
  scroll-behavior: smooth;
}
</style>