<script setup>
const props = defineProps(['txt','icon'])
</script>

<template>
  <div class="button">
    <button >{{ txt }}</button>
    <img v-if="icon" class="button__icon" :src="_image(icon)"/>
  </div>

</template>

<style scoped>

</style>