<script setup>
import {ref} from "vue";
const props = defineProps(['data'])

let clickNumber = ref(0)
const increment = ()=>{
clickNumber.value = 1;
}
</script>

<template>
  <div class="story__item" @click="$emit('onOpen',{status:true, storyId:data.id})" v-if="data.content">
    <div class="story__item--profile" @click="increment" :class="clickNumber == 1 ? 'seen' : ''" >
      <img class="story__item--profile-img" :src="_image(data.img)" />
    </div>
    <div class="story__item--title">
      <h3>{{data.title}}</h3>
    </div>
  </div>


</template>

<style scoped>

</style>