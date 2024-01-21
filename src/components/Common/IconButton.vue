<script setup>
const props = defineProps(['img']);
</script>

<template>
  <div class="iconButton">
    <img :src="_image(img)" />
  </div>
</template>

<style scoped>

</style>