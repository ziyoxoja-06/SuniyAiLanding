<script setup lang="ts">
const props = defineProps({
  title: {
    default: 'Click',
    type: String,
  },
  id:{
    default:'btn_left',
    type:String
  }
})
</script>
<template>
  <button :id="id">{{ props?.title }}</button>
</template>

<style scoped lang="scss">

#btn_left {
  padding: 5px 15px;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 2px solid #00abf0;
  border-radius: 8px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  overflow: hidden;
  transition: .5s;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background:#00abf0;
    animation: showRight 1s ease backwards;
    animation-delay: 2.5s;transition: 1s;
    z-index: -1;
  }

  &:hover::before {
    width: 100%;
    color: #fff;
  }
}

#btn_right {
  padding: 5px 15px;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 2px solid #00abf0;
  border-radius: 8px;
  color: #00abf0;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  overflow: hidden;
  transition: .5s;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    background:#00abf0;
    animation: showRight 1s ease backwards;
    animation-delay: 2.5s;transition: 1s;
    z-index: -1;
  }

  &:hover::before {
    width: 100%;
  }
  &:hover{
    color: #fff;
  }
}
#btn_full {
  padding: 5px 15px;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #00abf0;
  border: 2px solid #00abf0;
  border-radius: 8px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  overflow: hidden;
  transition: .5s;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #2e2f2f;
    animation: showRight 1s ease backwards;
    animation-delay: 2.5s;transition: 1s;
    z-index: -1;
  }

  &:hover::before {
        width: 100%;
    }
  &:hover{
    color: #00abf0;
  }
}
</style>