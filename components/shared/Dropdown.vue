<script setup lang="ts">

const items = [
  [{
    label: 'Profile'
  }]
]

const open = ref(true)

</script>

<template>
  <UDropdown :ui="{ item: { disabled: 'cursor-text select-text' } }" v-model:open="open" :items="items" :popper="{ placement: 'bottom-start' }" >
    <slot />
  </UDropdown>
</template>

