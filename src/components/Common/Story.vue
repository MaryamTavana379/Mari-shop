<script setup>
const props = defineProps(['data'])
console.log(props.data)



</script>

<template>
  <div class="story__item">
    <div class="story__item--profile">
      <img class="story__item--profile-img" :src="_image(data.img)" />
    </div>
    <div class="story__item--title">
      <h3>{{data.title}}</h3>
    </div>
  </div>

</template>
