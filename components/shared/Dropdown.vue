<script setup>


const items = [
  [{
    label: 'UZ',
    value:'uz'
  },
  {
    label: 'RU',
    value:'ru'
  },
  {
    label: 'EN',
    value:'en'
  }]
]
const {locale} = useI18n()
const open = ref(true)
function getItem(item) {
  locale.value = item.item.value
}
defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <UDropdown :ui="{width: 'w-16', item: { disabled: 'cursor-text select-text ', padding: 'px-2 py-2' } }" v-model:open="open" :items="items" :popper="{ placement: 'bottom-start' }" >
    <slot />
    <template #item="item" >
      <p @click="getItem(item)">{{ item.item.label }}</p>
    </template>
  </UDropdown>
</template>

