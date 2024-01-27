<script setup>
import {ref} from "vue";
const props = defineProps(['data'])


</script>

<template>
  <div class="story__item" @click="$emit('onOpen',true)">
    <div class="story__item--profile">
      <img class="story__item--profile-img" :src="_image(data.img)" />
    </div>
    <div class="story__item--title">
      <h3>{{data.title}}</h3>
    </div>
  </div>


</template>
