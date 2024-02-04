<script setup>
const props = defineProps(['img']);
</script>

<template>
  <router-link to="/" class="iconButton">
    <img :src="_image(img)" />
  </router-link>
</template>

<style scoped>

</style>