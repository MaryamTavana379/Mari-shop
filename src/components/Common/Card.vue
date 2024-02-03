<script setup>
const props = defineProps(['data']);
console.log(props.data)
</script>

<template>
  <div class="card">
    <router-link to="/product" class="card__container">
      <div class="card__container--img">
        <img :src="_image(data.img)" />
      </div>
      <div class="card__container--meta">
        <h3>{{data.title}}</h3>
        <h2>{{data.price}} تومان </h2>
      </div>
    </router-link>
  </div>

</template>

<style scoped>

</style>