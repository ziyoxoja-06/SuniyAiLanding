<script setup>
const route = useRoute()

const items = [
  [{
    label: 'UZ',
    value: 'uz',
    click: () => {
      getItem('uz')
    }
  },
  {
    label: 'RU',
    value: 'ru',
    click: () => {
      getItem('ru')
    }
  },
  {
    label: 'EN',
    value: 'en',
    click: () => {
      getItem('en')
    }
  }]
]
const { locale } = useI18n()
const open = ref(true)
function getItem(item) {
  localStorage.setItem("lang", item)
  locale.value = item
}

watch(()=>route.fullPath,() => {
  console.log('router');
  localStorage.getItem('lang') ? locale.value = localStorage.getItem('lang') : ""
})
defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <UDropdown :ui="{ width: 'w-16', item: { disabled: 'cursor-text select-text ', padding: 'px-2 py-2' } }"
    v-model:open="open" :items="items" :popper="{ placement: 'bottom-start' }">
    <slot />
    <template #item="item">
      <p class="h-full w-full">{{ item.item.label }}</p>
    </template>
  </UDropdown>
</template>
