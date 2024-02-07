<script setup>
const props = defineProps(['img', 'route']);
</script>

<template>
  <router-link :to="{name:route}" class="iconButton">
    <img :src="_image(img)" />
  </router-link>
</template>

<style scoped>

</style>